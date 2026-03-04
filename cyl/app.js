// cyl/app.js — Datos del test Castilla y León 2026
// Banco de 60 preguntas · se seleccionan 20 al azar por sesión
// stance order: [PP, PSOE, Vox, Sumar, UPL, PorAvila]

const QUIZ_DATA = {
  parties:    ['PP', 'PSOE', 'Vox', 'Sumar', 'UPL', 'PorAvila'],
  colors:     { PP: '#0056A2', PSOE: '#FF0000', Vox: '#63BE21', Sumar: '#E91E8C', UPL: '#8B0000', PorAvila: '#7B5EA7' },
  logos:      { PP: '../logos/pp.png', PSOE: '../logos/psoe.png', Vox: '../logos/vox.png', Sumar: '../logos/sumar.png', UPL: '../logos/upl.png', PorAvila: '../logos/poravila.png' },
  partyNames: { PP: 'PP', PSOE: 'PSOE', Vox: 'Vox', Sumar: 'Sumar/IU', UPL: 'UPL', PorAvila: 'Por Ávila' },

  // ============================================
  // BANCO DE 60 PREGUNTAS — CyL
  // stance: [PP, PSOE, Vox, Sumar, UPL, PorAvila]
  //  1 = A favor | -1 = En contra | 0 = Neutral
  // ============================================
  questions: [

    // ── DESPOBLACIÓN ──
    { topic: 'Despoblación', text: 'La Junta debe garantizar médico, farmacia y transporte en todos los municipios de CyL, aunque sea deficitario', stance: [0, 1, -1, 1, 1, 1] },
    { topic: 'Despoblación', text: 'Los municipios de menos de 500 habitantes deben recibir financiación preferente de la Junta independientemente de su partido gobernante', stance: [0, 1, 0, 1, 1, 1] },
    { topic: 'Despoblación', text: 'Debe crearse un bono de repoblación de hasta 10.000€ para familias que se instalen en municipios en riesgo de extinción', stance: [0, 1, 0, 1, 1, 1] },
    { topic: 'Despoblación', text: 'CyL debe establecer ventajas fiscales para autónomos y empresas que fijen su sede en municipios rurales', stance: [1, 1, 1, 1, 1, 1] },
    { topic: 'Despoblación', text: 'El cierre de oficinas bancarias en pueblos de CyL debe estar regulado para garantizar acceso al efectivo a mayores', stance: [0, 1, 0, 1, 1, 1] },

    // ── TERRITORIO / IDENTIDAD LEONESA ──
    { topic: 'Territorio', text: 'León y las provincias del antiguo Reino de León merecen mayor autonomía o una región propia diferenciada de Castilla', stance: [-1, -1, -1, 0, 1, 0] },
    { topic: 'Territorio', text: 'La comarca de El Bierzo debe tener un estatuto especial de autonomía dentro de CyL', stance: [-1, 0, -1, 0, 1, 0] },
    { topic: 'Territorio', text: 'El escudo y los símbolos de Castilla y León deben incorporar en igualdad los emblemas del Reino de León', stance: [-1, 0, -1, 0, 1, 1] },
    { topic: 'Territorio', text: 'Las provincias de CyL deben poder adherirse a otras comunidades autónomas si así lo deciden sus ciudadanos en referéndum', stance: [-1, -1, -1, 0, 1, 1] },
    { topic: 'Territorio', text: 'El modelo de comunidad uniprovincial debería estudiarse para las provincias leonesas', stance: [-1, -1, -1, 0, 1, 0] },

    // ── DESCENTRALIZACIÓN ──
    { topic: 'Descentralización', text: 'Las provincias de CyL deben tener más competencias propias y menos dependencia de la Junta en Valladolid', stance: [-1, 0, -1, 0, 1, 1] },
    { topic: 'Descentralización', text: 'Las diputaciones provinciales de CyL deben reforzarse como contrapeso a la centralización en Valladolid', stance: [-1, 0, 0, 0, 1, 1] },
    { topic: 'Descentralización', text: 'Los presupuestos de la Junta deben asignarse de forma equitativa entre todas las provincias, no concentrarse en las más pobladas', stance: [0, 1, 0, 1, 1, 1] },
    { topic: 'Descentralización', text: 'Los municipios de CyL deben poder recaudar y gestionar directamente una parte de los impuestos autonómicos', stance: [-1, 0, 0, 1, 1, 1] },

    // ── SANIDAD ──
    { topic: 'Sanidad', text: 'Las listas de espera en la sanidad pública de CyL son un fracaso de gestión que exige un plan de choque urgente', stance: [-1, 1, 0, 1, 1, 1] },
    { topic: 'Sanidad', text: 'El hospital de León debe equipararse en medios y especialidades al Clínico de Valladolid', stance: [-1, 1, 0, 1, 1, 0] },
    { topic: 'Sanidad', text: 'La Junta debe crear unidades específicas de salud mental en todas las áreas sanitarias de CyL', stance: [0, 1, 0, 1, 1, 1] },
    { topic: 'Sanidad', text: 'Los médicos rurales deben recibir incentivos económicos para quedarse en los pueblos de CyL', stance: [1, 1, 0, 1, 1, 1] },
    { topic: 'Sanidad', text: 'La gestión privada concertada de servicios sanitarios en CyL debe reducirse a favor de la gestión pública directa', stance: [-1, 1, -1, 1, 1, 0] },

    // ── ENERGÍA ──
    { topic: 'Energía', text: 'Los parques eólicos y solares en CyL deben dejar un canon directo a los municipios donde se instalan', stance: [0, 1, -1, 1, 1, 1] },
    { topic: 'Energía', text: 'CyL debe posicionarse como comunidad referente en energía renovable y atraer inversión verde', stance: [1, 1, 0, 1, 1, 1] },
    { topic: 'Energía', text: 'Las empresas energéticas que operen en CyL deben contratar preferentemente a trabajadores locales', stance: [0, 1, 0, 1, 1, 1] },
    { topic: 'Energía', text: 'La central nuclear de Almaraz, próxima a CyL, debe cerrar cuando termine su vida útil sin prórroga', stance: [0, 1, -1, 1, 1, 0] },
    { topic: 'Energía', text: 'CyL debe impulsar el autoconsumo energético en viviendas rurales mediante subvenciones directas', stance: [0, 1, 0, 1, 1, 1] },

    // ── AGUA ──
    { topic: 'Agua', text: 'Debe prohibirse cualquier trasvase o exportación de agua del Duero fuera de CyL', stance: [0, 0, 1, 1, 1, 1] },
    { topic: 'Agua', text: 'La gestión del agua en CyL debe ser 100% pública, sin participación de empresas privadas', stance: [-1, 1, -1, 1, 1, 0] },
    { topic: 'Agua', text: 'Los regadíos en CyL deben limitarse para proteger los acuíferos y el caudal de los ríos', stance: [-1, 0, -1, 1, 0, 0] },
    { topic: 'Agua', text: 'Debe modernizarse la infraestructura de abastecimiento de agua potable en los municipios rurales de CyL', stance: [1, 1, 0, 1, 1, 1] },

    // ── AGRICULTURA ──
    { topic: 'Agricultura', text: 'Los agricultores y ganaderos de CyL deben recibir precios mínimos garantizados por sus productos', stance: [0, 1, 1, 1, 1, 1] },
    { topic: 'Agricultura', text: 'La Junta debe crear una marca única de calidad para todos los productos agroalimentarios de CyL', stance: [1, 1, 1, 1, 1, 1] },
    { topic: 'Agricultura', text: 'La agricultura ecológica en CyL debe recibir el doble de ayudas que la convencional', stance: [0, 1, -1, 1, 0, 0] },
    { topic: 'Agricultura', text: 'Las grandes superficies comerciales deben estar obligadas a destinar un porcentaje de su surtido a productos de CyL', stance: [0, 1, 0, 1, 1, 1] },
    { topic: 'Agricultura', text: 'La ganadería extensiva tradicional de CyL debe protegerse frente a la macrogranjas industriales', stance: [0, 1, 0, 1, 1, 1] },

    // ── INFRAESTRUCTURAS ──
    { topic: 'Infraestructuras', text: 'El AVE y el ferrocarril deben llegar a todas las capitales de provincia de CyL con inversión del Gobierno central', stance: [1, 1, 0, 1, 1, 1] },
    { topic: 'Infraestructuras', text: 'La autovía entre León y Valladolid debe ampliarse y mejorarse con urgencia', stance: [1, 1, 0, 1, 1, 0] },
    { topic: 'Infraestructuras', text: 'El aeropuerto de Valladolid debe potenciarse con rutas internacionales subvencionadas', stance: [1, 0, 0, 0, 0, 0] },
    { topic: 'Infraestructuras', text: 'Debe crearse una red de transporte público interurbano que conecte todos los municipios de más de 200 habitantes', stance: [0, 1, 0, 1, 1, 1] },
    { topic: 'Infraestructuras', text: 'La fibra óptica debe llegar a todos los municipios de CyL en los próximos 4 años', stance: [1, 1, 1, 1, 1, 1] },

    // ── CAZA ──
    { topic: 'Caza', text: 'La caza mayor debe seguir siendo una actividad económica y cultural protegida en CyL', stance: [1, 0, 1, -1, 0, 1] },
    { topic: 'Caza', text: 'Los cotos de caza privados en CyL deben pagar tasas que reviertan en los municipios colindantes', stance: [0, 1, 0, 1, 1, 1] },
    { topic: 'Caza', text: 'El lobo ibérico debe tener la misma protección legal en CyL que en el resto de España', stance: [-1, 0, -1, 1, 0, 0] },
    { topic: 'Caza', text: 'Los daños del lobo a la ganadería deben ser indemnizados íntegramente por la Junta en menos de 30 días', stance: [1, 1, 1, 1, 1, 1] },

    // ── JUVENTUD ──
    { topic: 'Juventud', text: 'CyL debe crear ayudas directas para que los jóvenes no emigren: deducciones, becas y vivienda asequible', stance: [0, 1, 0, 1, 1, 1] },
    { topic: 'Juventud', text: 'Las universidades de CyL deben tener tasas más bajas que la media nacional para retener talento', stance: [0, 1, 0, 1, 1, 1] },
    { topic: 'Juventud', text: 'Debe crearse un programa de prácticas remuneradas en empresas de CyL exclusivo para jóvenes de la región', stance: [1, 1, 0, 1, 1, 1] },
    { topic: 'Juventud', text: 'Los jóvenes que estudien una FP o carrera relacionada con el sector primario en CyL deben recibir una beca especial', stance: [1, 1, 1, 1, 1, 1] },

    // ── EDUCACIÓN ──
    { topic: 'Educación', text: 'Deben mantenerse abiertas las escuelas rurales aunque tengan pocos alumnos, como servicio esencial del territorio', stance: [0, 1, 0, 1, 1, 1] },
    { topic: 'Educación', text: 'CyL debe tener su propio currículo educativo con contenidos específicos de historia y geografía regional', stance: [1, 0, 1, 0, 1, 1] },
    { topic: 'Educación', text: 'Las plazas de maestro rural en CyL deben tener incentivos económicos para evitar la alta rotación', stance: [0, 1, 0, 1, 1, 1] },
    { topic: 'Educación', text: 'La formación profesional agraria debe potenciarse con más centros y plazas en CyL', stance: [1, 1, 1, 1, 1, 1] },

    // ── INDUSTRIA ──
    { topic: 'Industria', text: 'CyL necesita una política industrial activa con inversión pública para crear empleo fuera del sector agrario', stance: [0, 1, 0, 1, 1, 1] },
    { topic: 'Industria', text: 'La Junta debe apoyar la reconversión de las zonas mineras de CyL con nuevas actividades económicas', stance: [0, 1, 0, 1, 1, 0] },
    { topic: 'Industria', text: 'CyL debe atraer fábricas del sector del automóvil eléctrico para aprovechar su tradición industrial', stance: [1, 1, 0, 1, 1, 1] },
    { topic: 'Industria', text: 'Las empresas que reciban ayudas de la Junta deben comprometerse a mantener su sede en CyL durante al menos 10 años', stance: [0, 1, 0, 1, 1, 1] },

    // ── PATRIMONIO / CULTURA ──
    { topic: 'Patrimonio', text: 'La Junta debe invertir más en patrimonio histórico y cultural como motor de turismo y desarrollo rural', stance: [1, 1, 0, 1, 1, 1] },
    { topic: 'Patrimonio', text: 'Los Caminos de Santiago que atraviesan CyL deben tener un plan de inversión propio con financiación autonómica', stance: [1, 1, 0, 1, 1, 1] },
    { topic: 'Patrimonio', text: 'Las fiestas declaradas de Interés Turístico de CyL deben recibir mayor financiación pública', stance: [1, 1, 0, 1, 1, 1] },

    // ── VIVIENDA ──
    { topic: 'Vivienda', text: 'La Junta debe habilitar vivienda asequible en pueblos para atraer nuevos vecinos de otras comunidades o países', stance: [0, 1, -1, 1, 1, 1] },
    { topic: 'Vivienda', text: 'Los edificios históricos vacíos en capitales de provincia de CyL deben rehabilitarse para vivienda social', stance: [0, 1, -1, 1, 1, 1] },
    { topic: 'Vivienda', text: 'Debe crearse un registro autonómico de viviendas vacías en CyL para facilitar su movilización al mercado del alquiler', stance: [0, 1, -1, 1, 1, 0] },

    // ── TRANSPARENCIA / POLÍTICA ──
    { topic: 'Transparencia', text: 'Debe crearse una comisión independiente que audite contratos y subvenciones de la Junta de CyL', stance: [-1, 1, 0, 1, 1, 1] },
    { topic: 'Transparencia', text: 'Los cargos de la Junta que sean condenados por corrupción deben ser inhabilitados de por vida', stance: [0, 1, 1, 1, 1, 1] },
    { topic: 'Transparencia', text: 'El Defensor del Pueblo de CyL debe ser elegido por mayoría cualificada del parlamento regional, no por el partido en el gobierno', stance: [-1, 1, 0, 1, 1, 1] },
  ]
};
