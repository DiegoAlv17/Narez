export interface NavItem {
  label: string;
  href: string;
}

export interface ProcessStep {
  n: string;
  title: string;
  desc: string;
}

export const landingData = {
  hero: {
    title: "Potencia tu negocio con Soluciones Digitales",
    highlight: "a medida",
    description: "En Narez transformamos tus ideas en realidad. Desde landing pages de alto impacto hasta CRMs, ERPs y automatizaciones con Inteligencia artificial.",
    primaryCta: "Agenda tu consulta",
    secondaryCta: "Ver servicios"
  },
  features: [
    {
      title: "Landing Pages & Webs",
      description: "Presencia digital que convierte. Sitios web rápidos, responsivos y optimizados para SEO.",
      icon: "web"
    },
    {
      title: "Sistemas CRM y ERP",
      description: "Gestiona tu empresa desde un solo lugar con sistemas dedicados que se adaptan a tus procesos.",
      icon: "system"
    },
    {
      title: "Sistemas a Medida",
      description: "Desarrollo de software específico para cualquier tipo de rubro o necesidad particular.",
      icon: "custom"
    },
    {
      title: "Integración con IA",
      description: "Automatización y soluciones inteligentes para multiplicar la productividad de tu equipo.",
      icon: "ai"
    }
  ],
  cta: {
    title: "¿Listo para escalar tu negocio?",
    description: "Contáctanos hoy mismo y descubre cómo la tecnología puede transformar tus resultados.",
    buttonText: "Inicia tu proyecto ahora"
  },
  socialProof: {
    title: "Confían en la tecnología Narez",
    // placeholder for logos/clients
  },
  navItems: [
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Beneficios", href: "#beneficios" }
  ] as NavItem[],
  processSteps: [
    {
      n: "01",
      title: "Descubrimiento",
      desc: "Analizamos tu negocio, retos actuales y objetivos. Definimos KPIs claros y un roadmap accionable.",
    },
    {
      n: "02",
      title: "Diseño & Arquitectura",
      desc: "Prototipamos la experiencia y diseñamos la arquitectura técnica pensando en escalabilidad y mantenibilidad.",
    },
    {
      n: "03",
      title: "Desarrollo iterativo",
      desc: "Construimos por sprints, mostrando avances semanales. Tú validas, nosotros iteramos.",
    },
    {
      n: "04",
      title: "Lanzamiento & Evolución",
      desc: "Desplegamos con monitoreo activo y acompañamos el crecimiento con mejoras continuas.",
    },
  ] as ProcessStep[],
};
