const projects = [
  {
    title: "Energía Solar Canarias",
    description:
      "Diseño y desarrollo de una PWA para una empresa de energía solar encargado del backend, desarrollo en kotlin y en swift. Se priorizó la eficiencia energética, la sincronización offline y la escalabilidad del sistema.",
    image: "/assets/img/portafolio/esc.webp",
    gallery: [
      "/assets/img/portafolio/esc_1.webp",
      "/assets/img/portafolio/esc_2.webp",
      "/assets/img/portafolio/esc_3.webp",
    ],
    link: "https://play.google.com/store/apps/details?id=com.galaga.esc_android",
    year: 2024,
    type: "Aplicación móvil híbrida (PWA)",
    techStack: [
      "Kotlin",
      "Swift",
      "Node.js",
      "MongoDB",
      "Firebase",
      "TailwindCSS",
    ],
    responsibilities: [
      "Diseño completo de la arquitectura backend",
      "Integración con panel de administración",
      "Desarrollo de APIs REST",
      "Manejo de datos en tiempo real con Firebase",
    ],
    targetAudience: "Usuarios residenciales con instalaciones solares",
    client: "Energía Solar Canarias S.L.",
    goals: [
      "Monitorear en tiempo real el consumo y la producción solar",
      "Permitir soporte técnico mediante la app",
      "Simplificar la lectura de facturas",
    ],
    duration: "6 meses",
    role: "Full Stack Developer",
    highlights: [
      "App premiada como solución innovadora en sostenibilidad 2024",
      "Soporte multiplataforma con sincronización offline",
    ],
  },
  {
    title: "dosxdos",
    description:
      "Diseño y desarrollo de una PWA de gestión en conjunto con el CRM para una empresa de diseño de interiores de marcas premium. Integración completa con workflows administrativos.",
    image: "/assets/img/portafolio/dosxdos.webp",
    gallery: [
      "/assets/img/portafolio/dosxdos_1.webp",
      "/assets/img/portafolio/dosxdos_2.webp",
    ],
    link: "https://play.google.com/store/apps/details?id=com.dosxdos.dosxdos.app",
    year: 2023,
    type: "WebApp de gestión empresarial (CRM + PWA)",
    techStack: [
      "React",
      "TypeScript",
      "Zustand",
      "SCSS",
      "Firebase",
      "IndexedDB",
    ],
    responsibilities: [
      "Creación del sistema completo de gestión de órdenes de trabajo",
      "Sincronización offline con IndexedDB",
      "Módulo de avisos para montadores",
      "Carga y almacenamiento de fotos y firmas",
    ],
    targetAudience: "Equipo interno de montaje y administración",
    client: "DOS POR DOS GRUPO IMAGEN S.L.U.",
    goals: [
      "Optimizar la comunicación entre departamentos",
      "Reducir los errores en el montaje y seguimiento",
      "Garantizar funcionamiento 100% offline",
    ],
    duration: "8 meses",
    role: "Frontend Lead + Arquitectura",
    highlights: [
      "Diseño UI/UX alineado con identidad de marca premium",
      "Rendimiento optimizado con caché persistente y carga progresiva",
    ],
  },
  {
    title: "Activiza",
    description:
      "Desarrollo de una app para la gestión de entrenamientos en gimnasios. Pensada para coaches personales, permite personalizar rutinas y registrar avances físicos, integrando lógica de progresión personalizada y seguimiento gráfico.",
    image: "/assets/img/portafolio/activiza.gif",
    gallery: [
      "/assets/img/portafolio/activiza_1.webp",
      "/assets/img/portafolio/activiza_2.webp",
    ],
    link: "https://github.com/TFCUNIRFP-NDD/Frontend-activiza/blob/main/Activiza-proyect.pdf",
    year: 2023,
    type: "App nativa Android",
    techStack: ["Kotlin", "SQLite", "Material Design"],
    responsibilities: [
      "Diseño de interfaz orientada a usabilidad",
      "Programación de rutinas personalizadas",
      "Control de progreso de usuarios",
    ],
    targetAudience: "Usuarios de gimnasios y entrenadores personales",
    client: "Proyecto académico de UNIR",
    goals: [
      "Motivar a los usuarios a seguir sus entrenamientos",
      "Mejorar la organización de las sesiones por parte de los entrenadores",
    ],
    duration: "4 meses",
    role: "Mobile Developer",
    highlights: [
      "Interfaz limpia y minimalista",
      "Gestión de rutinas visual y rápida",
    ],
  },
  {
    title: "Games&Doc",
    description:
      "Blog técnico de videojuegos y cultura digital con sistema propio de publicación. Incluye zona de administración, control editorial básico, gestión de usuarios, y sección de reseñas con etiquetas dinámicas.",
    image: "/assets/img/portafolio/gamesdoc.gif",
    gallery: [
      "/assets/img/portafolio/gamesdoc_1.webp",
      "/assets/img/portafolio/gamesdoc_2.webp",
    ],
    link: "https://gamesanddoc.000webhostapp.com/body.php",
    year: 2022,
    type: "Blog estático con panel de administración",
    techStack: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    responsibilities: [
      "Desarrollo de CMS propio para publicar artículos",
      "Diseño responsive y estructura del blog",
      "Sistema de comentarios y categorías",
    ],
    targetAudience: "Jugadores y aficionados a la tecnología",
    client: "Proyecto personal",
    goals: [
      "Publicar noticias y reseñas de forma rápida",
      "Tener un espacio autogestionable sin plataformas externas",
    ],
    duration: "3 meses",
    role: "Desarrollador Fullstack",
    highlights: [
      "Más de 100 artículos publicados",
      "1000+ visitas al mes",
      "Panel de administración funcional con login seguro",
    ],
  },
  {
    title: "El juego del minotauro",
    description:
      "Desarrollo y creación de un videojuego en 2D para PC, inspirado en mitología clásica. Incluye sistema de niveles progresivos, enemigos dinámicos y lógica de laberinto. El proyecto se enfocó en el ciclo completo de desarrollo de videojuegos, desde diseño de niveles hasta compilación final ejecutable.",
    image: "/assets/img/portafolio/minotaur.gif",
    gallery: [
      "/assets/img/portafolio/minotaur_1.webp",
      "/assets/img/portafolio/minotaur_2.webp",
    ],
    link: "https://mega.nz/file/wRMTDAiR#J98TyCh2kVqxVzQXXVeglwl-qn2AhhvjibIhX0r1QDE",
    year: 2022,
    type: "Videojuego 2D para PC",
    techStack: ["Unity", "C#", "Photoshop"],
    responsibilities: [
      "Diseño de niveles y mecánicas de juego",
      "Programación del movimiento, enemigos y lógica de victoria",
      "Diseño de UI y assets gráficos básicos",
    ],
    targetAudience: "Jugadores casuales, estudiantes de videojuegos",
    client: "Proyecto formativo independiente",
    goals: [
      "Explorar el ciclo completo de desarrollo de videojuegos",
      "Publicar un juego funcional en formato ejecutable",
    ],
    duration: "3 meses",
    role: "Game Developer",
    highlights: [
      "Primer juego publicado de forma independiente",
      "Jugabilidad fluida y dificultad progresiva",
    ],
  },
  {
    title: "Piedra, Papel, Tijeras, lagarto, Spock",
    description:
      "Desarrollo de un juego en JavaScript de piedra, papel, tijeras, lagarto y Spock con animaciones ligeras y lógica personalizada. El objetivo principal fue aprender estructuras condicionales complejas y manipulación del DOM en tiempo real.",
    image: "/assets/img/portafolio/piedra-papel-tijeras.gif",
    gallery: [
      "/assets/img/portafolio/pptls_1.webp",
      "/assets/img/portafolio/pptls_2.webp",
    ],
    link: "https://github.com/GDAM-PSP/AE1-Juego-piedra-papel-o-tijeras",
    year: 2021,
    type: "Juego de navegador",
    techStack: ["HTML", "CSS", "JavaScript"],
    responsibilities: [
      "Diseño de lógica del juego y validaciones",
      "Interfaz animada y responsive",
    ],
    targetAudience: "Jugadores casuales y fines educativos",
    client: "Ejercicio académico",
    goals: [
      "Aprender lógica condicional y manipulación del DOM",
      "Desarrollar un juego simple pero divertido",
    ],
    duration: "1 mes",
    role: "Frontend Developer",
    highlights: [
      "Código reutilizable para otros juegos de lógica",
      "Utilizado como ejemplo didáctico en clase",
    ],
  },
];

export default projects;
