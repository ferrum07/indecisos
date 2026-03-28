// andalucia/app.js — Datos del test Elecciones Andalucía 17 mayo 2026
// Banco de 60 preguntas · se seleccionan 20 al azar por sesión
// stance order: [PP, PSOE, Vox, PorAndalucia]
// PorAndalucia = coalición Sumar + IU en Andalucía

const QUIZ_DATA = {
  parties:    ['PP', 'PSOE', 'Vox', 'PorAndalucia'],
  colors:     { PP: '#0056A2', PSOE: '#FF0000', Vox: '#63BE21', PorAndalucia: '#E91E8C' },
  logos:      { PP: '../logos/pp.png', PSOE: '../logos/psoe.png', Vox: '../logos/vox.png', PorAndalucia: '../logos/sumar.png' },
  partyNames: { PP: 'PP', PSOE: 'PSOE', Vox: 'Vox', PorAndalucia: 'Por Andalucía' },

  // ============================================
  // BANCO DE 60 PREGUNTAS — ANDALUCÍA
  // stance: [PP, PSOE, Vox, PorAndalucia]
  //  1 = A favor | -1 = En contra | 0 = Neutral
  // ============================================
  questions: [

    // ── SANIDAD ──
    { topic: 'Sanidad', text: 'Las listas de espera del SAS (Servicio Andaluz de Salud) son inaceptables y requieren un plan de choque inmediato con más médicos y enfermeros', stance: [-1, 1, 0, 1] },
    { topic: 'Sanidad', text: 'La gestión privada de centros de salud en Andalucía debe reducirse y volver a ser 100% pública', stance: [-1, 1, -1, 1] },
    { topic: 'Sanidad', text: 'Debe crearse una red pública de unidades de salud mental en todos los distritos sanitarios de Andalucía', stance: [0, 1, 0, 1] },
    { topic: 'Sanidad', text: 'Los médicos rurales en Andalucía deben recibir incentivos económicos para fijar residencia en municipios pequeños', stance: [1, 1, 0, 1] },
    { topic: 'Sanidad', text: 'El Hospital de Valdecilla en Sevilla y otros hospitales con déficit crónico de personal deben ser una prioridad presupuestaria', stance: [0, 1, 0, 1] },
    { topic: 'Sanidad', text: 'La Junta debe crear más plazas MIR propias para retener médicos formados en universidades andaluzas', stance: [1, 1, 0, 1] },

    // ── EDUCACIÓN ──
    { topic: 'Educación', text: 'El modelo de educación bilingüe implantado en Andalucía debe mantenerse y ampliarse', stance: [1, -1, 1, -1] },
    { topic: 'Educación', text: 'Los colegios públicos rurales deben mantenerse abiertos aunque tengan pocos alumnos', stance: [0, 1, 0, 1] },
    { topic: 'Educación', text: 'La Junta debe aumentar la inversión en FP Dual para conectar mejor la educación con el mercado laboral andaluz', stance: [1, 1, 1, 1] },
    { topic: 'Educación', text: 'La educación concertada en Andalucía debe reducirse progresivamente a favor de más plazas públicas', stance: [-1, 0, -1, 1] },
    { topic: 'Educación', text: 'Las universidades andaluzas deben tener las tasas más bajas de España para retener talento', stance: [0, 1, 0, 1] },
    { topic: 'Educación', text: 'Deben crearse más plazas de educación infantil de 0 a 3 años en Andalucía con gestión pública directa', stance: [0, 1, 0, 1] },

    // ── ECONOMÍA / EMPLEO ──
    { topic: 'Economía', text: 'Andalucía necesita más inversión del Gobierno central para reducir su brecha económica con Madrid y Cataluña', stance: [0, 1, 0, 1] },
    { topic: 'Economía', text: 'La Junta debe crear un fondo de capital riesgo público para financiar startups y empresas innovadoras andaluzas', stance: [0, 1, -1, 1] },
    { topic: 'Economía', text: 'Deben eliminarse trabas burocráticas para facilitar la instalación de nuevas empresas en Andalucía', stance: [1, 0, 1, 0] },
    { topic: 'Empleo', text: 'El paro estructural de Andalucía requiere un plan específico de empleo industrial, no solo servicios y turismo', stance: [0, 1, 0, 1] },
    { topic: 'Empleo', text: 'Los Planes de Empleo de la Junta deben aumentar su presupuesto y ampliarse a más sectores productivos', stance: [-1, 1, -1, 1] },
    { topic: 'Empleo', text: 'Las empresas que se instalen en zonas con alto desempleo en Andalucía deben recibir bonificaciones fiscales durante 5 años', stance: [1, 1, 1, 0] },

    // ── AGRICULTURA ──
    { topic: 'Agricultura', text: 'Los agricultores andaluces deben recibir precios mínimos garantizados que cubran sus costes de producción', stance: [0, 1, 1, 1] },
    { topic: 'Agricultura', text: 'El sector del olivar andaluz debe tener protección especial frente a la competencia de aceites de baja calidad importados', stance: [1, 1, 1, 1] },
    { topic: 'Agricultura', text: 'La Junta debe regular y limitar las macroexplotaciones agroindustriales en zonas con escasez hídrica', stance: [-1, 0, -1, 1] },
    { topic: 'Agricultura', text: 'Los temporeros agrícolas en Andalucía deben tener garantizados alojamiento digno y contratos regulares', stance: [0, 1, -1, 1] },
    { topic: 'Agricultura', text: 'La agricultura ecológica andaluza debe recibir más apoyo institucional y ayudas directas', stance: [0, 1, 0, 1] },
    { topic: 'Agricultura', text: 'Las subvenciones de la PAC en Andalucía deben priorizarse hacia pequeños y medianos agricultores', stance: [0, 1, 0, 1] },

    // ── AGUA ──
    { topic: 'Agua', text: 'La Junta debe blindar el agua del Guadalquivir y oponerse a cualquier trasvase fuera de Andalucía', stance: [1, 1, 1, 1] },
    { topic: 'Agua', text: 'Deben limitarse los regadíos en zonas con acuíferos sobreexplotados como Doñana', stance: [-1, 0, -1, 1] },
    { topic: 'Agua', text: 'Hay que construir más desaladoras en el litoral andaluz para garantizar el abastecimiento urbano', stance: [1, 1, 0, 1] },
    { topic: 'Agua', text: 'El regadío agrícola en Andalucía debe modernizarse con tecnología de ahorro hídrico subvencionada por la Junta', stance: [1, 1, 1, 1] },

    // ── MEDIO AMBIENTE / DOÑANA ──
    { topic: 'Medio Ambiente', text: 'Doñana debe declararse zona de exclusión agrícola en su entorno para garantizar su supervivencia como Patrimonio Mundial', stance: [-1, 0, -1, 1] },
    { topic: 'Medio Ambiente', text: 'La Junta debe aprobar una ley de litoral que proteja las costas andaluzas de nuevas urbanizaciones', stance: [0, 1, -1, 1] },
    { topic: 'Medio Ambiente', text: 'Los parques naturales de Andalucía deben tener más guardas forestales y más presupuesto de conservación', stance: [0, 1, 0, 1] },
    { topic: 'Medio Ambiente', text: 'La minería en zonas protegidas de Andalucía debe prohibirse aunque genere empleo local', stance: [-1, 0, -1, 1] },

    // ── TURISMO ──
    { topic: 'Turismo', text: 'El turismo de masas en ciudades como Sevilla, Granada y Málaga debe regularse para proteger a los residentes', stance: [0, 1, -1, 1] },
    { topic: 'Turismo', text: 'Los apartamentos turísticos en Andalucía deben limitarse en barrios con escasez de vivienda asequible', stance: [0, 1, -1, 1] },
    { topic: 'Turismo', text: 'Andalucía debe diversificar su modelo turístico más allá de sol y playa, apostando por turismo cultural e interior', stance: [1, 1, 0, 1] },
    { topic: 'Turismo', text: 'La tasa turística en Andalucía debe aprobarse y destinarse a conservación del patrimonio local', stance: [-1, 1, -1, 1] },

    // ── VIVIENDA ──
    { topic: 'Vivienda', text: 'La Junta debe construir un parque público de vivienda en alquiler asequible en las grandes ciudades andaluzas', stance: [0, 1, -1, 1] },
    { topic: 'Vivienda', text: 'Deben ampliarse las ayudas al alquiler para jóvenes andaluces menores de 35 años', stance: [0, 1, 0, 1] },
    { topic: 'Vivienda', text: 'La Junta debe topar los alquileres en las zonas tensionadas de Málaga, Sevilla y Granada', stance: [-1, 1, -1, 1] },
    { topic: 'Vivienda', text: 'Los edificios vacíos de la SAREB (banco malo) en Andalucía deben destinarse a vivienda social', stance: [0, 1, -1, 1] },

    // ── INFRAESTRUCTURAS ──
    { topic: 'Infraestructuras', text: 'El tren de la Costa (Almería-Motril-Málaga) debe recuperarse como prioridad de infraestructuras en Andalucía', stance: [0, 1, 0, 1] },
    { topic: 'Infraestructuras', text: 'La conexión ferroviaria Sevilla-Huelva y Almería-Murcia debe mejorarse con urgencia', stance: [0, 1, 0, 1] },
    { topic: 'Infraestructuras', text: 'El Puerto de Algeciras debe potenciarse como hub logístico europeo con inversión pública', stance: [1, 1, 1, 1] },
    { topic: 'Infraestructuras', text: 'Andalucía debe exigir al Gobierno central más inversión en infraestructuras ferroviarias proporcional a su población', stance: [1, 1, 1, 1] },
    { topic: 'Infraestructuras', text: 'El Aeropuerto de Granada debe ampliarse para atraer más turismo internacional', stance: [1, 0, 1, 0] },

    // ── FINANCIACIÓN ──
    { topic: 'Financiación', text: 'Andalucía está infrafinanciada por el sistema actual y debe recibir más fondos del Estado por ser la comunidad más poblada', stance: [1, 1, 1, 1] },
    { topic: 'Financiación', text: 'Andalucía debe oponerse a cualquier concierto económico singular para Cataluña o el País Vasco que perjudique su financiación', stance: [1, 1, 1, 0] },
    { topic: 'Financiación', text: 'La Junta debe reducir el Impuesto de Sucesiones en Andalucía para equipararse a las comunidades con menor presión fiscal', stance: [1, -1, 1, -1] },
    { topic: 'Financiación', text: 'Andalucía debe reclamar la gestión directa de más tributos para financiar sus servicios sin depender de Madrid', stance: [0, 1, 0, 1] },

    // ── IDENTIDAD / AUTOGOBIERNO ──
    { topic: 'Autogobierno', text: 'La Junta debe ampliar sus competencias en materia de empleo, costas y puertos', stance: [1, 0, 1, 0] },
    { topic: 'Autogobierno', text: 'Andalucía debe reivindicar un modelo de financiación singular similar al vasco o navarro', stance: [-1, 0, -1, 1] },
    { topic: 'Autogobierno', text: 'El andalucismo como identidad política propia debe tener más presencia en las instituciones de la Junta', stance: [-1, 0, -1, 1] },

    // ── TRANSPARENCIA / POLÍTICA ──
    { topic: 'Transparencia', text: 'Debe crearse una fiscalía anticorrupción específica para Andalucía con plena independencia de la Junta', stance: [-1, 1, 0, 1] },
    { topic: 'Transparencia', text: 'Los contratos de la Junta de Andalucía deben publicarse íntegramente en un portal de acceso abierto', stance: [0, 1, 1, 1] },
    { topic: 'Transparencia', text: 'Los expresidentes de la Junta no deben poder trabajar en empresas reguladas por la Junta en los 5 años siguientes', stance: [0, 1, 0, 1] },
    { topic: 'Transparencia', text: 'El Parlamento andaluz debe crear una comisión permanente de control del gasto de la Junta', stance: [0, 1, 0, 1] },

    // ── IGUALDAD / DERECHOS ──
    { topic: 'Igualdad', text: 'Andalucía debe mantener y reforzar el Plan Estratégico de Igualdad de Género con presupuesto propio', stance: [0, 1, -1, 1] },
    { topic: 'Igualdad', text: 'La Junta debe crear más casas de acogida para víctimas de violencia de género en todos los municipios', stance: [0, 1, 0, 1] },
    { topic: 'Igualdad', text: 'Deben establecerse cuotas de paridad en las instituciones públicas andaluzas', stance: [0, 1, -1, 1] },
    { topic: 'Inmigración', text: 'Andalucía debe asumir un papel activo en la acogida de migrantes llegados a las costas españolas', stance: [-1, 1, -1, 1] },
    { topic: 'Inmigración', text: 'Los migrantes irregulares en Andalucía no deben recibir prestaciones sociales autonómicas', stance: [0, -1, 1, -1] },

    // ── ENERGÍA ──
    { topic: 'Energía', text: 'Andalucía debe liderar la transición energética española aprovechando su potencial solar y eólico', stance: [1, 1, 0, 1] },
    { topic: 'Energía', text: 'Los municipios donde se instalen parques solares o eólicos en Andalucía deben recibir un canon directo', stance: [0, 1, 0, 1] },
    { topic: 'Energía', text: 'La Junta debe promover el autoconsumo energético en viviendas y pymes andaluzas con subvenciones directas', stance: [0, 1, 0, 1] },
  ]
};
