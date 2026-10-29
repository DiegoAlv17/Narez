export interface Service {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  accent: string;
  description: string;
  audience: string;
  outcomes: string[];
  deliverables: { title: string; description: string }[];
  steps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: 'landing',
    name: 'Landing Pages & Webs',
    eyebrow: 'Tu siguiente cliente empieza aquí',
    headline: 'Dale a tu negocio',
    accent: 'un lugar para convertir.',
    description: 'Una página que explica lo que haces, transmite confianza y facilita que te contacten. Diseñada para tu marca y para las personas que llegan desde tus anuncios, redes o Google.',
    audience: 'Para profesionales, emprendimientos y empresas que quieren presentar sus servicios y recibir consultas en un solo lugar.',
    outcomes: ['Una propuesta clara', 'Diseño para móvil y escritorio', 'Contacto a un clic'],
    deliverables: [
      { title: 'Diseño con tu identidad', description: 'Organizamos tu propuesta, beneficios y llamados a la acción en una landing que se sienta parte de tu marca.' },
      { title: 'Lista para cualquier pantalla', description: 'Adaptamos la experiencia a celulares, tablets y computadoras, con navegación clara y contenido fácil de leer.' },
      { title: 'Un camino hacia la consulta', description: 'Integramos el acceso a WhatsApp y tus canales de contacto para que el visitante pueda dar el siguiente paso.' },
      { title: 'Base técnica bien construida', description: 'Cuidamos la velocidad, estructura de títulos, metadatos y enlaces para facilitar la lectura y la indexación del sitio.' },
    ],
    steps: [
      { title: 'Conocemos tu negocio', description: 'Definimos qué vendes, a quién te diriges y qué acción quieres que realice el visitante.' },
      { title: 'Diseñamos tu página', description: 'Acordamos la estructura y la dirección visual antes de avanzar con el desarrollo.' },
      { title: 'Construimos y revisamos', description: 'Probamos el diseño responsive, los enlaces y el contacto contigo antes de publicar.' },
    ],
    faqs: [
      { question: '¿Qué cubre el precio desde S/ 710?', answer: 'Es el precio promocional de partida para una landing de alcance base: presentación de tu negocio, servicios o beneficios, acceso a contacto y un dominio .pe o .com.pe incluido en el precio. Confirmamos contigo las secciones y entregables antes de comenzar. Funciones adicionales se cotizan según su complejidad.' },
      { question: '¿El dominio y el hosting están incluidos?', answer: 'La oferta incluye un dominio .pe o .com.pe en el precio. Los requisitos de hosting y sus posibles costos se detallan en la propuesta. Si ya cuentas con dominio o hosting, evaluamos cómo aprovecharlos.' },
      { question: '¿También desarrollan sitios con varias páginas?', answer: 'Sí. Si necesitas un sitio corporativo, catálogo u otras páginas, evaluamos la estructura y te presentamos una propuesta de acuerdo con el alcance.' },
      { question: '¿Qué necesitan para empezar?', answer: 'Tu logo o referencias de marca, información sobre tu negocio, servicios y datos de contacto. Si todavía estás ordenando tus contenidos, lo revisamos en la conversación inicial.' },
    ],
  },
  {
    slug: 'crm-erp',
    name: 'Sistemas CRM y ERP',
    eyebrow: 'Menos dispersión. Más control.',
    headline: 'Tu operación,',
    accent: 'en un mismo lugar.',
    description: 'Conecta clientes, ventas y procesos internos con un sistema que acompañe la forma en que trabaja tu empresa. Empieza por lo que hoy necesitas y construye una base para crecer.',
    audience: 'Para equipos que gestionan su información entre hojas de cálculo, mensajes y herramientas que no se conectan.',
    outcomes: ['Seguimiento comercial', 'Información centralizada', 'Procesos conectados'],
    deliverables: [
      { title: 'Clientes y oportunidades', description: 'Organiza contactos, etapas comerciales y tareas de seguimiento para que cada oportunidad tenga un siguiente paso.' },
      { title: 'Módulos para tu operación', description: 'Evaluamos ventas, inventario, compras u otros flujos y definimos cuáles conviene integrar en tu sistema.' },
      { title: 'Roles y responsabilidades', description: 'Diseñamos accesos según el trabajo de cada persona para mantener claridad sobre quién puede ver y gestionar la información.' },
      { title: 'Reportes que orientan', description: 'Definimos indicadores y vistas para consultar el estado del negocio sin reunir datos manualmente en cada ocasión.' },
    ],
    steps: [
      { title: 'Mapeamos tus procesos', description: 'Revisamos tu operación, herramientas actuales y los puntos donde se pierde información o tiempo.' },
      { title: 'Priorizamos los módulos', description: 'Acordamos qué resolver primero, qué integrar y cómo organizar el crecimiento por etapas.' },
      { title: 'Implementamos contigo', description: 'Construimos, validamos los flujos con tu equipo y preparamos la puesta en marcha.' },
    ],
    faqs: [
      { question: '¿Cuánto cuesta un CRM o ERP?', answer: 'Contáctanos para evaluar una oferta. El precio depende de los módulos, usuarios, integraciones y procesos que necesita tu negocio. Te presentamos una propuesta con alcance definido.' },
      { question: '¿Pueden integrar mis herramientas actuales?', answer: 'Evaluamos las herramientas y sus posibilidades de integración antes de comprometer un alcance. También revisamos la calidad y estructura de los datos que ya tienes.' },
      { question: '¿Tengo que implementar todo de una vez?', answer: 'No. Podemos plantear una primera etapa con los procesos prioritarios y dejar el resto organizado en una hoja de ruta.' },
    ],
  },
  {
    slug: 'software-a-medida',
    name: 'Sistemas a Medida',
    eyebrow: 'Tu proceso marca el camino',
    headline: 'Software que entiende',
    accent: 'cómo trabajas.',
    description: 'Transforma una necesidad específica en una herramienta propia: portales, plataformas y sistemas que resuelven el trabajo de tu equipo sin forzarlo a encajar en una solución genérica.',
    audience: 'Para empresas con procesos particulares, ideas de productos digitales o tareas que sus herramientas actuales no resuelven.',
    outcomes: ['Flujos diseñados contigo', 'Desarrollo por etapas', 'Integraciones útiles'],
    deliverables: [
      { title: 'Una solución definida', description: 'Traducimos el problema en flujos, funcionalidades y prioridades para construir con un objetivo claro.' },
      { title: 'Interfaces para las personas', description: 'Diseñamos pantallas y recorridos alrededor de las tareas reales de tus usuarios y tu equipo.' },
      { title: 'Tecnología conectada', description: 'Evaluamos conexiones con APIs, sistemas internos y servicios externos según los requisitos del proyecto.' },
      { title: 'Una base para evolucionar', description: 'Organizamos el desarrollo y la documentación para facilitar ajustes y nuevas funcionalidades a futuro.' },
    ],
    steps: [
      { title: 'Delimitamos el problema', description: 'Identificamos usuarios, tareas, restricciones y el resultado que debe entregar la solución.' },
      { title: 'Validamos el enfoque', description: 'Revisamos estructura, prototipos y alcance para confirmar que estamos construyendo lo que necesitas.' },
      { title: 'Entregamos por etapas', description: 'Desarrollamos y revisamos avances contigo hasta preparar una versión lista para su uso.' },
    ],
    faqs: [
      { question: '¿Cómo se define el precio?', answer: 'Contáctanos para evaluar una oferta. Analizamos funcionalidades, complejidad, integraciones y etapas para cotizar una solución con entregables concretos.' },
      { question: '¿Pueden empezar con una versión inicial?', answer: 'Sí. Podemos definir un MVP que permita validar el flujo principal y ordenar las siguientes mejoras de acuerdo con lo aprendido.' },
      { question: '¿El acompañamiento continúa después de lanzar?', answer: 'Podemos acordar mantenimiento y evolución del sistema. El alcance del soporte y sus condiciones se establecen en la propuesta.' },
    ],
  },
  {
    slug: 'inteligencia-artificial',
    name: 'Integración con IA',
    eyebrow: 'Inteligencia aplicada al trabajo real',
    headline: 'Menos tareas repetidas.',
    accent: 'Más tiempo para avanzar.',
    description: 'Integra inteligencia artificial donde aporte valor: atención de consultas, clasificación de información, asistencia a tu equipo y automatización de tareas con criterios claros.',
    audience: 'Para equipos que quieren aprovechar la IA con un caso de uso concreto, conectado a su operación y con supervisión humana.',
    outcomes: ['Asistentes especializados', 'Automatización de tareas', 'Control humano'],
    deliverables: [
      { title: 'Casos de uso con sentido', description: 'Identificamos tareas donde la IA puede ayudar y definimos cómo evaluar la utilidad de la solución.' },
      { title: 'Asistentes con contexto', description: 'Diseñamos experiencias de consulta apoyadas en la información y necesidades de tu negocio.' },
      { title: 'Flujos conectados', description: 'Evaluamos cómo enlazar la solución con tus canales y herramientas para reducir pasos manuales.' },
      { title: 'Límites y validación', description: 'Definimos reglas, revisiones y derivación a una persona para gestionar respuestas y situaciones que requieren criterio humano.' },
    ],
    steps: [
      { title: 'Elegimos el caso de uso', description: 'Revisamos el trabajo actual, la información disponible y los objetivos de la automatización.' },
      { title: 'Probamos con ejemplos reales', description: 'Validamos el enfoque con casos representativos y criterios de calidad acordados contigo.' },
      { title: 'Integramos y ajustamos', description: 'Conectamos el flujo, revisamos su funcionamiento y afinamos las reglas para el uso del equipo.' },
    ],
    faqs: [
      { question: '¿Cuánto cuesta integrar IA?', answer: 'Contáctanos para evaluar una oferta. El alcance depende del caso de uso, los datos, los canales y las integraciones. Los posibles costos de proveedores y consumo se detallan por separado en la propuesta.' },
      { question: '¿La IA puede equivocarse?', answer: 'Sí. Por eso definimos límites, evaluaciones y puntos de supervisión humana según el uso. La solución debe contemplar cómo revisar y escalar casos importantes.' },
      { question: '¿Necesito tener un sistema propio?', answer: 'No necesariamente. Revisamos tus herramientas y procesos para evaluar si conviene integrar una solución existente o desarrollar una conexión específica.' },
    ],
  },
];
