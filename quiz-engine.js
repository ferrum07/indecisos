// quiz-engine.js — v2 con mejoras estéticas

let cur = 0, ans = [];

// ── 3. COLORES POR TEMA para la barra de progreso ──
const TOPIC_COLORS = {
  'Sanidad':           '#E53935',
  'Economía':          '#1E88E5',
  'Vivienda':          '#8E24AA',
  'Educación':         '#43A047',
  'Inmigración':       '#FB8C00',
  'Medio Ambiente':    '#00ACC1',
  'Defensa':           '#546E7A',
  'Laboral':           '#F4511E',
  'Fiscalidad':        '#3949AB',
  'Impuestos':         '#3949AB',
  'Justicia':          '#6D4C41',
  'Energía':           '#FFB300',
  'Familia':           '#E91E63',
  'Derechos':          '#AB47BC',
  'Pensiones':         '#5C6BC0',
  'Estado':            '#78909C',
  'Memoria':           '#795548',
  'Territorio':        '#26A69A',
  'Animales':          '#66BB6A',
  'Empleo':            '#F4511E',
  'Transporte':        '#29B6F6',
  'Cultura':           '#EC407A',
  'Rural':             '#8D6E63',
  'Política':          '#78909C',
  'Exterior':          '#42A5F5',
  'Agua':              '#26C6DA',
  'Seguridad':         '#EF5350',
  'Europa':            '#1565C0',
  'Despoblación':      '#8D6E63',
  'Caza':              '#558B2F',
  'Descentralización': '#7B1FA2',
  'Infraestructuras':  '#0277BD',
  'Agricultura':       '#2E7D32',
  'Juventud':          '#E91E63',
  'Industria':         '#37474F',
  'Patrimonio':        '#A1887F',
  'Transparencia':     '#546E7A',
};

function getTopicColor(topic) {
  return TOPIC_COLORS[topic] || '#8A5A44';
}

function startQuiz() {
  ans = new Array(QUIZ_DATA.questions.length).fill(null);
  cur = 0;
  document.getElementById('hero-section').classList.add('hidden');
  document.getElementById('step-quiz').classList.remove('hidden');
  render();
}

function render() {
  const q     = QUIZ_DATA.questions[cur];
  const total = QUIZ_DATA.questions.length;
  const color = getTopicColor(q.topic);

  // Progreso con color dinámico por tema
  const pfill = document.getElementById('pfill');
  pfill.style.width           = `${((cur + 1) / total) * 100}%`;
  pfill.style.backgroundColor = color;
  document.getElementById('plabel').textContent = `${cur + 1} / ${total}`;

  // Chip de tema con color
  const chip = document.getElementById('tchip');
  chip.textContent       = q.topic;
  chip.style.background  = color + '1A';
  chip.style.color       = color;
  chip.style.borderColor = color + '40';

  // Texto con fade
  const qtext = document.getElementById('qtext');
  qtext.style.opacity   = '0';
  qtext.style.transform = 'translateY(6px)';
  setTimeout(() => {
    qtext.textContent      = q.text;
    qtext.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
    qtext.style.opacity    = '1';
    qtext.style.transform  = 'translateY(0)';
  }, 60);

  ['btn-agree', 'btn-against', 'btn-abstain'].forEach((id, i) => {
    document.getElementById(id).classList.toggle('selected', ans[cur] === i);
  });

  document.getElementById('bnext').disabled      = ans[cur] === null;
  document.getElementById('bprev').style.display = cur === 0 ? 'none' : '';
  document.getElementById('bnext').textContent   = cur === total - 1 ? 'Ver resultados →' : 'Siguiente →';
}

// ── 5. MICRO-ANIMACIÓN BOUNCE al seleccionar ──
function pick(i) {
  ans[cur] = i;
  const ids = ['btn-agree', 'btn-against', 'btn-abstain'];
  const btn = document.getElementById(ids[i]);
  btn.classList.remove('bounce');
  void btn.offsetWidth;
  btn.classList.add('bounce');
  render();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('bnext').addEventListener('click', () => {
    if (cur < QUIZ_DATA.questions.length - 1) { cur++; render(); }
    else showResults();
  });
  document.getElementById('bprev').addEventListener('click', () => {
    if (cur > 0) { cur--; render(); }
  });
});

function getScore(stance, answer) {
  if (answer === 2) return 1;
  if (answer === 0) return stance ===  1 ? 3 : stance === -1 ? 0 : 1;
  if (answer === 1) return stance === -1 ? 3 : stance ===  1 ? 0 : 1;
  return 1;
}

// ── 2 & 4. RESULTADOS: reveal escalonado + tarjeta ganador + compartir ──
function showResults() {
  document.getElementById('step-quiz').classList.add('hidden');
  document.getElementById('step-results').classList.remove('hidden');

  const { parties, colors, logos = {}, partyNames = {} } = QUIZ_DATA;
  const maxScore = QUIZ_DATA.questions.length * 3;
  const totals   = {};
  parties.forEach(p => totals[p] = 0);
  ans.forEach((a, qi) => {
    if (a === null) return;
    QUIZ_DATA.questions[qi].stance.forEach((stance, pi) => {
      totals[parties[pi]] += getScore(stance, a);
    });
  });

  const sorted   = [...parties].sort((a, b) => totals[b] - totals[a]);
  const winner   = sorted[0];
  const winPct   = Math.round((totals[winner] / maxScore) * 100);
  const winName  = partyNames[winner] || winner;
  const winColor = colors[winner];

  // Tarjeta ganador
  const snap    = document.getElementById('results-snapshot');
  const winCard = document.createElement('div');
  winCard.className = 'result-winner-card';
  winCard.style.setProperty('--winner-color', winColor);
  winCard.innerHTML = `
    <div class="result-winner-logo">
      ${logos[winner]
        ? `<img src="${logos[winner]}" alt="${winName}">`
        : `<span class="logo-initial" style="background:${winColor}">${winName[0]}</span>`}
    </div>
    <div class="result-winner-name" style="color:${winColor}">${winName}</div>
    <div class="result-winner-pct" style="color:${winColor}">${winPct}%</div>
    <div class="result-winner-msg">de afinidad con tus respuestas</div>`;

  const header = snap.querySelector('.results-header');
  header.insertAdjacentElement('afterend', winCard);

  // Lista con reveal escalonado
  const rlist = document.getElementById('rlist');
  rlist.innerHTML = '';
  sorted.forEach((p, idx) => {
    const pct  = Math.round((totals[p] / maxScore) * 100);
    const name = partyNames[p] || p;
    const div  = document.createElement('div');
    div.className = 'result-row' + (idx === 0 ? ' top' : '');
    if (idx === 0) div.style.borderColor = colors[p];
    div.innerHTML = `
      <div class="result-logo-big">
        ${logos[p]
          ? `<img src="${logos[p]}" alt="${name}">`
          : `<span class="logo-initial" style="background:${colors[p]}">${name[0]}</span>`}
      </div>
      <div class="result-info">
        <div class="result-name-row">
          <span class="r-name">${name}</span>
          ${idx === 0 ? '<span class="top-badge">Tu partido</span>' : ''}
        </div>
        <div class="result-bar-bg">
          <div class="result-bar-fill" style="width:0%;background:${colors[p]}" data-pct="${pct}"></div>
        </div>
      </div>
      <span class="result-pct" style="color:${colors[p]}">${pct}%</span>`;
    rlist.appendChild(div);

    setTimeout(() => {
      div.classList.add('visible');
      setTimeout(() => {
        div.querySelector('.result-bar-fill').style.width = pct + '%';
      }, 150);
    }, 120 + idx * 130);
  });

  // Botones de compartir
  const shareText   = `He hecho el test en indecisos.es y coincido un ${winPct}% con ${winName}. ¿Y tú? 🗳️`;
  const shareUrl    = 'https://indecisos.es';
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
  const twitterUrl  = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;

  const shareDiv = document.createElement('div');
  shareDiv.className = 'share-actions';
  shareDiv.innerHTML = `
    <a href="${whatsappUrl}" target="_blank" class="btn-share btn-share--whatsapp">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      WhatsApp
    </a>
    <a href="${twitterUrl}" target="_blank" class="btn-share btn-share--twitter">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      Twitter / X
    </a>
    <button class="btn-share btn-share--copy" onclick="copyResult('${shareText.replace(/'/g,"\\'")} ${shareUrl}', this)">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
      Copiar
    </button>`;

  snap.insertAdjacentElement('afterend', shareDiv);
}

function copyResult(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✓ ¡Copiado!';
    setTimeout(() => {
      btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Copiar`;
    }, 2000);
  });
}

function restartQuiz() {
  document.getElementById('step-results').classList.add('hidden');
  document.getElementById('hero-section').classList.remove('hidden');
  document.querySelector('.result-winner-card')?.remove();
  document.querySelector('.share-actions')?.remove();
  cur = 0; ans = [];
}

async function downloadImage() {
  const btn = document.getElementById('btn-download-img');
  btn.textContent = 'Generando…'; btn.disabled = true;
  try {
    const canvas = await html2canvas(document.getElementById('results-snapshot'), {
      scale: 2, useCORS: true, backgroundColor: '#F5F2EB'
    });
    const link = document.createElement('a');
    link.download = 'mi-resultado-indecisos.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch(e) { alert('No se pudo generar la imagen.'); }
  btn.textContent = '📷 Descargar imagen'; btn.disabled = false;
}

async function downloadPDF() {
  const btn = document.getElementById('btn-download-pdf');
  btn.textContent = 'Generando…'; btn.disabled = true;
  try {
    const canvas = await html2canvas(document.getElementById('results-snapshot'), {
      scale: 2, useCORS: true, backgroundColor: '#F5F2EB'
    });
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const imgW = 190, imgH = (canvas.height * imgW) / canvas.width;
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 10, 15, imgW, imgH);
    pdf.setFontSize(9); pdf.setTextColor(130, 120, 110);
    pdf.text('indecisos.es — Orientación de voto sin etiquetas', 105, imgH + 22, { align: 'center' });
    pdf.save('mi-resultado-indecisos.pdf');
  } catch(e) { alert('No se pudo generar el PDF.'); }
  btn.textContent = '📄 Descargar PDF'; btn.disabled = false;
}
