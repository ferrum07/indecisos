// ============================================
// indecisos.es — Test General Nacional
// 100 preguntas · 4 partidos (PSOE, Sumar, PP, Vox)
// En cada sesión se seleccionan 20 al azar
// ============================================

const QUIZ_DATA = {
    parties: ['psoe', 'sumar', 'pp', 'vox'],
    colors: {
        psoe: '#FF0000',
        sumar: '#E91E8C',
        pp: '#0056A2',
        vox: '#63BE21'
    },
    partyNames: {
        psoe: 'PSOE',
        sumar: 'Sumar',
        pp: 'PP',
        vox: 'Vox'
    },
    logos: {
        psoe: '../logos/psoe.png', sumar: '../logos/sumar.png', pp: '../logos/pp.png', vox: '../logos/vox.png'
    },

    // ============================================
    // BANCO DE 100 PREGUNTAS
    // stance: [psoe, sumar, pp, vox]
    //  1 = A favor | -1 = En contra | 0 = Neutral
    // ============================================
    questions: [

        // ── SANIDAD ──
        { topic: 'Sanidad', text: 'El Estado debe reforzar la sanidad pública y reducir la gestión privada concertada', stance: [1, 1, 0, -1] },
        { topic: 'Sanidad', text: 'Se debe ampliar la cartera de servicios de la sanidad pública para incluir salud mental', stance: [1, 1, 0, 0] },
        { topic: 'Sanidad', text: 'Los médicos que trabajen en el sistema público no deben poder ejercer simultáneamente en la privada', stance: [0, 1, -1, -1] },
        { topic: 'Sanidad', text: 'El copago farmacéutico para pensionistas debe eliminarse completamente', stance: [1, 1, -1, -1] },
        { topic: 'Sanidad', text: 'La sanidad debe transferirse íntegramente a las comunidades autónomas sin intervención estatal', stance: [-1, -1, 0, 1] },

        // ── VIVIENDA ──
        { topic: 'Vivienda', text: 'El Estado debe intervenir activamente y topar el precio de los alquileres', stance: [1, 1, -1, -1] },
        { topic: 'Vivienda', text: 'Se debe agilizar el desalojo de okupas a un plazo máximo de 48 horas', stance: [0, -1, 1, 1] },
        { topic: 'Vivienda', text: 'El Estado debe construir un parque público de vivienda en alquiler asequible', stance: [1, 1, 0, -1] },
        { topic: 'Vivienda', text: 'Las viviendas turísticas (Airbnb) deben regularse y limitarse en zonas tensionadas', stance: [1, 1, 0, -1] },
        { topic: 'Vivienda', text: 'Los grandes fondos de inversión no deben poder comprar vivienda residencial en España', stance: [1, 1, -1, -1] },
        { topic: 'Vivienda', text: 'Deben ampliarse las ayudas al alquiler para jóvenes menores de 35 años', stance: [1, 1, 0, 0] },

        // ── EDUCACIÓN ──
        { topic: 'Educación', text: 'La ley educativa vigente (LOMLOE) debe mantenerse en el sistema educativo', stance: [1, 1, -1, -1] },
        { topic: 'Educación', text: 'La educación concertada (financiada públicamente por privados) debe eliminarse progresivamente', stance: [0, 1, -1, -1] },
        { topic: 'Educación', text: 'La asignatura de Religión debe desaparecer del horario lectivo y del currículo oficial', stance: [0, 1, -1, -1] },
        { topic: 'Educación', text: 'El Estado debe asumir el coste de los libros de texto en toda la educación obligatoria', stance: [1, 1, 0, 0] },
        { topic: 'Educación', text: 'Deben crearse más plazas públicas de educación infantil de 0 a 3 años', stance: [1, 1, 0, 0] },
        { topic: 'Educación', text: 'Las becas universitarias deben cubrirse exclusivamente por méritos académicos, sin criterios económicos', stance: [-1, -1, 1, 1] },

        // ── ECONOMÍA ──
        { topic: 'Economía', text: 'Los planes de pensiones privados deben complementar el sistema público de pensiones', stance: [0, -1, 1, 1] },
        { topic: 'Economía', text: 'El Estado debe participar en el capital de empresas estratégicas como la energía o la banca', stance: [0, 1, -1, -1] },
        { topic: 'Economía', text: 'Se debe reducir el Impuesto de Sociedades para atraer inversión extranjera', stance: [-1, -1, 1, 1] },
        { topic: 'Economía', text: 'Se debe crear una renta básica universal para todos los ciudadanos españoles', stance: [0, 1, -1, -1] },
        { topic: 'Economía', text: 'El déficit público debe reducirse con recortes en gasto antes que con subidas de impuestos', stance: [-1, -1, 1, 1] },
        { topic: 'Economía', text: 'Las grandes empresas que trasladen beneficios a paraísos fiscales deben ser sancionadas con más dureza', stance: [1, 1, 0, 0] },

        // ── FISCALIDAD / IMPUESTOS ──
        { topic: 'Fiscalidad', text: 'Se debe mantener un impuesto extraordinario a las grandes fortunas y bancas', stance: [1, 1, -1, -1] },
        { topic: 'Fiscalidad', text: 'Se debe bonificar al 100% el Impuesto de Sucesiones y Donaciones en toda España', stance: [-1, -1, 1, 1] },
        { topic: 'Fiscalidad', text: 'Las rentas del capital deben tributar igual que las rentas del trabajo en el IRPF', stance: [1, 1, -1, -1] },
        { topic: 'Fiscalidad', text: 'Se deben bajar los impuestos a las rentas medias y compensarlo subiendo los de altas rentas', stance: [1, 1, -1, -1] },
        { topic: 'Fiscalidad', text: 'Las comunidades autónomas deben tener total autonomía para fijar sus propios impuestos', stance: [-1, -1, 0, 1] },

        // ── LABORAL / EMPLEO ──
        { topic: 'Laboral', text: 'El Salario Mínimo Interprofesional debe seguir subiendo por encima de la inflación', stance: [1, 1, -1, 0] },
        { topic: 'Laboral', text: 'Se debe reducir la jornada laboral a 37,5 horas semanales sin reducción de sueldo', stance: [1, 1, -1, -1] },
        { topic: 'Laboral', text: 'El contrato indefinido debe ser la única modalidad de contratación ordinaria', stance: [0, 1, -1, -1] },
        { topic: 'Laboral', text: 'Los sindicatos deben tener representación obligatoria en los consejos de administración de grandes empresas', stance: [0, 1, -1, -1] },
        { topic: 'Laboral', text: 'Se debe facilitar el despido para que las empresas contraten más fácilmente', stance: [-1, -1, 1, 1] },
        { topic: 'Laboral', text: 'Los autónomos deben cotizar en función de sus ingresos reales, no por una base mínima fija', stance: [1, 1, 0, 0] },

        // ── PENSIONES ──
        { topic: 'Pensiones', text: 'La edad de jubilación debe retrasarse para garantizar la sostenibilidad del sistema', stance: [0, -1, 1, 1] },
        { topic: 'Pensiones', text: 'Las pensiones deben revalorizarse automáticamente con el IPC cada año', stance: [1, 1, 0, 0] },
        { topic: 'Pensiones', text: 'El sistema de pensiones públicas debe ser la única opción, eliminando los fondos privados', stance: [-1, 1, -1, -1] },

        // ── MEDIO AMBIENTE ──
        { topic: 'Medio Ambiente', text: 'Se debe prohibir la venta de coches de combustión (gasolina/diésel) en 2035', stance: [1, 1, -1, -1] },
        { topic: 'Medio Ambiente', text: 'Las empresas deben rendir cuentas económicas por su huella de carbono', stance: [1, 1, 0, -1] },
        { topic: 'Medio Ambiente', text: 'La agricultura intensiva debe regularse más estrictamente para proteger acuíferos y suelos', stance: [1, 1, 0, -1] },
        { topic: 'Medio Ambiente', text: 'Se deben crear más parques nacionales y reservas naturales, aunque limite la actividad económica local', stance: [1, 1, -1, -1] },
        { topic: 'Medio Ambiente', text: 'España debe alcanzar el 100% de energía renovable antes de 2040', stance: [1, 1, -1, -1] },

        // ── ENERGÍA ──
        { topic: 'Energía', text: 'España debe prolongar la vida útil de las centrales nucleares existentes', stance: [-1, -1, 1, 1] },
        { topic: 'Energía', text: 'El gas natural debe mantenerse como fuente de energía de transición durante las próximas décadas', stance: [0, -1, 1, 1] },
        { topic: 'Energía', text: 'Debe limitarse legalmente el beneficio extraordinario de las eléctricas cuando sube el precio de la luz', stance: [1, 1, -1, -1] },
        { topic: 'Energía', text: 'Se debe invertir en almacenamiento energético (baterías) para hacer viables las renovables', stance: [1, 1, 1, 0] },

        // ── INMIGRACIÓN ──
        { topic: 'Inmigración', text: 'España debe flexibilizar la acogida de refugiados y solicitantes de asilo', stance: [1, 1, 0, -1] },
        { topic: 'Inmigración', text: 'Los inmigrantes irregulares deben ser expulsados de España de forma inmediata', stance: [-1, -1, 0, 1] },
        { topic: 'Inmigración', text: 'Los hijos de inmigrantes nacidos en España deben obtener la ciudadanía automáticamente', stance: [1, 1, 0, -1] },
        { topic: 'Inmigración', text: 'Se debe regular una vía legal de inmigración laboral para cubrir sectores con escasez de trabajadores', stance: [1, 1, 0, 0] },
        { topic: 'Inmigración', text: 'Los menores no acompañados (MENAs) deben recibir los mismos derechos que los menores españoles', stance: [1, 1, -1, -1] },

        // ── SEGURIDAD ──
        { topic: 'Seguridad', text: 'Se debe endurecer el Código Penal para los casos de multirreincidencia', stance: [0, -1, 1, 1] },
        { topic: 'Seguridad', text: 'La prisión permanente revisable debe mantenerse para crímenes especialmente graves', stance: [0, -1, 1, 1] },
        { topic: 'Seguridad', text: 'Las fuerzas de seguridad deben tener más recursos y personal para combatir el crimen organizado', stance: [1, 0, 1, 1] },
        { topic: 'Seguridad', text: 'Las penas alternativas a la prisión deben ampliarse para delitos no violentos', stance: [1, 1, -1, -1] },

        // ── JUSTICIA ──
        { topic: 'Justicia', text: 'El Consejo General del Poder Judicial debe ser elegido directamente por los jueces', stance: [-1, -1, 1, 1] },
        { topic: 'Justicia', text: 'El aforamiento de los políticos debe eliminarse para que sean juzgados como cualquier ciudadano', stance: [0, 1, 0, 1] },
        { topic: 'Justicia', text: 'La justicia restaurativa debe introducirse como alternativa al encarcelamiento en delitos menores', stance: [1, 1, -1, -1] },
        { topic: 'Justicia', text: 'Los juicios deben retransmitirse públicamente para garantizar la transparencia judicial', stance: [0, 1, -1, 0] },

        // ── IGUALDAD / DERECHOS ──
        { topic: 'Derechos', text: 'La ley del aborto vigente debe mantenerse sin restricciones adicionales', stance: [1, 1, -1, -1] },
        { topic: 'Derechos', text: 'Las cuotas de género en consejos de administración de grandes empresas son necesarias', stance: [1, 1, -1, -1] },
        { topic: 'Derechos', text: 'La autodeterminación de género sin necesidad de informe médico debe ser un derecho reconocido', stance: [1, 1, -1, -1] },
        { topic: 'Derechos', text: 'Los delitos de odio por razón de orientación sexual deben tener penas más severas', stance: [1, 1, 0, -1] },
        { topic: 'Derechos', text: 'Debe aprobarse una ley de eutanasia amplia que permita morir con dignidad', stance: [1, 1, -1, -1] },
        { topic: 'Derechos', text: 'Las personas sin hogar deben tener garantizados por ley alojamiento y atención básica', stance: [1, 1, 0, -1] },

        // ── MEMORIA ──
        { topic: 'Memoria', text: 'Se debe aplicar y dotar de presupuesto la Ley de Memoria Democrática', stance: [1, 1, -1, -1] },
        { topic: 'Memoria', text: 'Los símbolos franquistas deben retirarse de todos los espacios públicos en España', stance: [1, 1, -1, -1] },
        { topic: 'Memoria', text: 'El Estado debe indemnizar a las víctimas del franquismo y sus descendientes', stance: [1, 1, -1, -1] },

        // ── ESTADO / TERRITORIO ──
        { topic: 'Estado', text: 'Se deben recentralizar competencias como Sanidad y Educación al Estado Central', stance: [-1, -1, 0, 1] },
        { topic: 'Estado', text: 'Se debe celebrar un referéndum de independencia en Cataluña pactado con el Estado', stance: [0, 1, -1, -1] },
        { topic: 'Estado', text: 'El modelo de financiación autonómica debe reformarse para reducir las desigualdades entre regiones', stance: [1, 1, 0, 0] },
        { topic: 'Estado', text: 'Las lenguas cooficiales deben tener reconocimiento en el Senado y en la administración general del Estado', stance: [1, 1, -1, -1] },
        { topic: 'Estado', text: 'Se deben prohibir los indultos para delitos de sedición o rebelión', stance: [-1, -1, 1, 1] },

        // ── POLÍTICA ──
        { topic: 'Política', text: 'Se debe reducir drásticamente el número de diputados y el gasto político', stance: [-1, -1, 0, 1] },
        { topic: 'Política', text: 'La financiación pública de los partidos políticos debe eliminarse', stance: [-1, -1, 0, 1] },
        { topic: 'Política', text: 'Debe introducirse la democracia directa mediante referéndums vinculantes a iniciativa ciudadana', stance: [0, 1, -1, 0] },
        { topic: 'Política', text: 'Los cargos electos condenados por corrupción deben ser inhabilitados de por vida', stance: [1, 1, 1, 1] },
        { topic: 'Política', text: 'El sistema electoral debe reformarse para favorecer la representación proporcional estricta', stance: [1, 1, -1, 0] },

        // ── DEFENSA / EXTERIOR ──
        { topic: 'Defensa', text: 'España debe aumentar el gasto en defensa hasta alcanzar el 2% del PIB', stance: [0, -1, 1, 1] },
        { topic: 'Defensa', text: 'España debe salir de la OTAN mediante referéndum popular', stance: [-1, 1, -1, -1] },
        { topic: 'Exterior', text: 'España debe reconocer unilateralmente a Palestina como Estado', stance: [1, 1, -1, -1] },
        { topic: 'Exterior', text: 'España debe acoger a más ciudadanos ucranianos desplazados por la guerra', stance: [1, 1, 0, -1] },
        { topic: 'Exterior', text: 'España debe condicionar la venta de armas a terceros países a su historial de derechos humanos', stance: [1, 1, -1, -1] },

        // ── EUROPA ──
        { topic: 'Europa', text: 'Las decisiones de la Unión Europea deben primar siempre sobre la legislación nacional', stance: [1, 1, 1, -1] },
        { topic: 'Europa', text: 'La Unión Europea debe avanzar hacia una política fiscal y presupuestaria común', stance: [1, 1, 0, -1] },
        { topic: 'Europa', text: 'España debe apoyar la creación de un ejército europeo común', stance: [0, 0, 1, -1] },
        { topic: 'Europa', text: 'La libre circulación de personas en la UE debe mantenerse sin restricciones', stance: [1, 1, 0, -1] },

        // ── FAMILIA / NATALIDAD ──
        { topic: 'Familia', text: 'Se deben crear ayudas directas universales por hijo a cargo para fomentar la natalidad', stance: [0, 1, 1, 1] },
        { topic: 'Familia', text: 'El permiso de paternidad debe igualarse al de maternidad e intransferirse', stance: [1, 1, 0, -1] },
        { topic: 'Familia', text: 'La gestación subrogada debe regularse y permitirse con fines altruistas en España', stance: [0, -1, 1, -1] },
        { topic: 'Familia', text: 'Los matrimonios del mismo sexo deben tener los mismos derechos de adopción que los heterosexuales', stance: [1, 1, -1, -1] },

        // ── CULTURA / ANIMALES ──
        { topic: 'Cultura', text: 'El Estado debe ofrecer bonos culturales a los jóvenes al cumplir la mayoría de edad', stance: [1, 1, -1, -1] },
        { topic: 'Cultura', text: 'Las grandes plataformas digitales deben financiar la producción de contenido cultural español', stance: [1, 1, 0, -1] },
        { topic: 'Animales', text: 'La tauromaquia debe dejar de recibir subvenciones públicas', stance: [0, 1, -1, -1] },
        { topic: 'Animales', text: 'La caza mayor debe estar regulada y permitida como actividad legal en España', stance: [0, -1, 1, 1] },
        { topic: 'Animales', text: 'El bienestar animal debe estar garantizado por una ley específica con sanciones penales', stance: [1, 1, 0, -1] },

        // ── TRANSPORTE / INFRAESTRUCTURAS ──
        { topic: 'Transporte', text: 'Se debe fomentar el transporte público haciéndolo gratuito para rentas bajas', stance: [1, 1, 0, 0] },
        { topic: 'Infraestructuras', text: 'Se deben priorizar las conexiones ferroviarias de alta velocidad sobre las nuevas autopistas', stance: [1, 1, 0, -1] },
        { topic: 'Infraestructuras', text: 'El Estado debe invertir más en la red ferroviaria de cercanías de las ciudades medianas', stance: [1, 1, 0, 0] },

        // ── RURAL / AGRICULTURA ──
        { topic: 'Rural', text: 'Se deben dar ventajas fiscales agresivas a empresas que se instalen en la España vaciada', stance: [1, 1, 1, 1] },
        { topic: 'Agricultura', text: 'Las subvenciones agrarias europeas deben destinarse principalmente a pequeños agricultores', stance: [1, 1, 0, 0] },
        { topic: 'Agricultura', text: 'Los productos agrícolas importados deben cumplir los mismos estándares sanitarios que los europeos', stance: [1, 1, 1, 1] },
        { topic: 'Agricultura', text: 'La agricultura ecológica debe recibir más apoyo público que la agricultura convencional', stance: [1, 1, -1, -1] },

        // ── AGUA ──
        { topic: 'Agua', text: 'Se debe impulsar un Plan Hidrológico Nacional que incluya trasvases entre cuencas', stance: [0, -1, 1, 1] },
        { topic: 'Agua', text: 'El agua debe ser un bien público gestionado exclusivamente por entidades no privadas', stance: [1, 1, -1, -1] },
        { topic: 'Agua', text: 'Las comunidades de regantes deben pagar más por el uso del agua en zonas con escasez hídrica', stance: [0, 1, -1, -1] },

        // ── JUVENTUD / DESPOBLACIÓN ──
        { topic: 'Juventud', text: 'Se debe crear un subsidio universal para jóvenes de 18 a 23 años mientras estudian o buscan empleo', stance: [1, 1, -1, -1] },
        { topic: 'Juventud', text: 'La emancipación de los jóvenes debe incentivarse con exenciones fiscales en sus primeros 5 años laborales', stance: [0, 0, 1, 1] },
        { topic: 'Despoblación', text: 'Los municipios de menos de 1.000 habitantes deben recibir financiación estatal preferente', stance: [1, 1, 0, 0] },

        // ── TRANSPARENCIA / INDUSTRIA ──
        { topic: 'Transparencia', text: 'Los contratos públicos deben publicarse íntegramente en un portal de acceso libre y gratuito', stance: [1, 1, 1, 1] },
        { topic: 'Industria', text: 'España debe desarrollar una política industrial activa para evitar la desindustrialización', stance: [1, 1, 0, 0] },
        { topic: 'Industria', text: 'Las empresas que reciban ayudas públicas no deben poder despedir trabajadores durante los 5 años siguientes', stance: [1, 1, -1, -1] }
    ]
};
