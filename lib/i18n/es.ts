import type { ProductSpec } from "@/types";

export const es = {
  meta: {
    title: "Bao | Marroquinería de taller, hecha a mano en Medellín",
    titleTemplate: "%s | Bao",
    description:
      "Carteras, cinturones y accesorios cortados y cosidos a mano en cuero curtido al vegetal. Punto de silla, latón macizo y lotes pequeños. Taller en Medellín, Colombia.",
    keywords: [
      "marroquinería artesanal",
      "cuero curtido al vegetal",
      "cosido a mano",
      "carteras de cuero",
      "cinturones de cuero",
      "Medellín",
    ],
  },

  nav: {
    pieces: "Piezas",
    workshop: "Taller",
    commission: "Encargo",
    write: "Escribir",
    home: "Inicio",
    homeAria: "Bao — inicio",
    primary: "Navegación principal",
    footer: "Navegación del pie",
    menu: "Menú",
    close: "Cerrar",
    skip: "Saltar al contenido",
    index: "Índice",
    language: "Idioma",
  },

  enquire: {
    cta: "Encargar",
    write: "Escribir",
    toastTitle: "Se hace por encargo",
    toastBody: "El patrón se ajusta antes de cortar. Cinco a quince días de banco.",
    toastDismiss: "Ahora no",
    modalTitle: "Encargar una pieza",
    modalLead:
      "Se confirma el cuero, el hilo, las medidas y la fecha por escrito. Después se corta.",
    modalWhatsApp: "WhatsApp",
    modalEmail: "Correo",
    modalInstagram: "Instagram",
    modalContact: "Instagram o una visita",
    modalVisit: "El taller recibe con cita. Escribí antes de ir.",
    product: "Hola, me interesa: {name}",
    general: "Hola, quisiera encargar una pieza a medida.",
    fallback: "Hola, vi su página y me interesa consultar.",
  },

  ui: {
    email: "Correo",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    workshop: "Taller",
    appointmentOnly: "Solo con cita previa",
    soldOut: "Agotado",
    madeToOrder: "Se hace por encargo",
    viewDetail: "Ver detalle",
    viewCatalog: "Ver el catálogo",
    viewPieces: "Ver las piezas",
    enterWorkshop: "Entrar al taller",
    viewWorkshop: "Ver el taller",
    moreNotes: "Más notas",
    read: "Leer",
    log: "Bitácora",
    also: "También",
    inventory: "Inventario",
    allPieces: "Todas las piezas",
    filter: "Filtrar por categoría",
    breadcrumb: "Migas de pan",
    catalog: "Catálogo",
    pieceNotFound: "Pieza no encontrada",
    noteNotFound: "Nota no encontrada",
    otherWays: "Instagram y una visita",
    writeWays: "Formas de escribir",
    marks: "Características de fabricación",
    footerLine: "Cortado, cosido y bruñido a mano",
    footerTag: "Objetos que envejecen bien.",
    footerVisit: "Se trabaja por encargo. Escribí antes de venir.",
    mobileNote: "Taller en Medellín.\nSe hace por encargo, en lotes pequeños.",
    emptyCategory: "Ahora mismo no hay nada de esto en el banco.",
    emptyCategoryLead:
      "Se puede hacer por encargo. También podés ver el resto del catálogo.",
    viewAllPieces: "Ver todas las piezas",
    seeWorkshop: "Ver el taller",
  },

  categories: {
    carteras: "Carteras",
    cinturones: "Cinturones",
    accesorios: "Accesorios",
    otros: "Otros",
  },

  spec: {
    leather: "Cuero",
    tanning: "Curtido",
    color: "Color",
    thread: "Hilo",
    hardware: "Herrajes",
    lining: "Forro",
    dimensions: "Medidas",
    weight: "Peso",
    madeIn: "Fabricación",
    leadTime: "Tiempo de producción",
    customization: "Personalización",
  } satisfies Record<keyof ProductSpec, string>,

  hero: {
    kicker: "Marroquinería de taller",
    lines: ["Hecho", "para", "quedarse"],
    body: "Cuero curtido al vegetal, cortado con cuchilla y cosido a punto de silla. No hay máquina de coser en este taller.",
    coord: "6°14′N · 75°34′O",
    place: "Medellín",
    spine: "Medellín · Taller",
  },

  banco: {
    label: "El banco",
    title: "Lo que hay cortado ahora",
    lead: "{n} piezas. Cada una se hace por encargo, sobre el mismo banco, con el mismo orden de trabajo.",
  },

  manifesto: {
    label: "El oficio",
    lines: [
      "Cortado a mano.",
      "Cosido punto por punto.",
      "Bruñido hasta que el canto brilla.",
    ],
    body: "No hay máquina de coser en este taller. Cada agujero se marca con un punzón y se cruza con dos agujas, uno detrás de otro. Una cartera son entre seis y nueve horas de banco. Es más lento, y es la única forma que conocemos de que una costura no se abra en veinte años.",
    signature: "Medellín, Colombia",
  },

  materials: {
    label: "La materia",
    title: ["Cuatro cosas", "entran por", "la puerta"],
    lead: "Nada más. No hay forros sintéticos, ni pegante que sustituya a una costura, ni herrajes chapados que se pelen en dos años.",
    spine: "Flor entera · Antioquia",
    items: [
      {
        name: "Cuero flor entera",
        origin: "Antioquia",
        note: "La capa exterior de la piel, con el grano intacto. No se lija ni se corrige: las cicatrices y las marcas de la res se quedan donde están.",
      },
      {
        name: "Curtido vegetal",
        origin: "Acacia y quebracho",
        note: "Cuarenta y cinco días en foso en lugar de dos en tambor. Es lento, es caro y es la razón de que el cuero oscurezca en vez de agrietarse.",
      },
      {
        name: "Hilo de lino encerado",
        origin: "0,45 y 0,55 mm",
        note: "Se rompe antes el cuero que la costura. Y si un punto cede, el punto de silla impide que se suelte la fila entera.",
      },
      {
        name: "Latón macizo",
        origin: "Fundido a mano",
        note: "Sin baño ni chapa. Se oscurece con los años y se puede volver a sacar brillo. Un herraje cromado, cuando se pela, ya no vuelve.",
      },
    ],
  },

  process: {
    label: "Cómo se hace",
    title: "Seis pasos, siempre el mismo orden",
    lead: "Entre el primero y el último pasan días, no horas. El cuero descansa entre paso y paso: si se fuerza, se marca.",
    captions: [
      "Corte — un solo pase por borde.",
      "Costura — dos agujas, un agujero cada vez.",
      "Bruñido — madera y fricción, sin barniz.",
    ],
  },

  craftSteps: [
    {
      step: "01",
      title: "Selección",
      body: "Se elige la zona de la piel según lo que vaya a aguantar. El lomo para lo que se tensa; la falda, para lo que se pliega.",
    },
    {
      step: "02",
      title: "Corte",
      body: "Cuchilla redonda y plantilla de cartón. Un solo pase por borde: el segundo pase se nota siempre en el canto.",
    },
    {
      step: "03",
      title: "Cantos",
      body: "Se rebaja el filo, se lija en tres granos y se humedece el borde antes de tocarlo con nada más.",
    },
    {
      step: "04",
      title: "Costura",
      body: "Punto de silla, dos agujas, hilo de lino encerado. Un agujero cada vez, marcado antes con el punzón.",
    },
    {
      step: "05",
      title: "Bruñido",
      body: "Madera y fricción hasta que el canto deja de absorber agua y empieza a devolver la luz.",
    },
    {
      step: "06",
      title: "Acabado",
      body: "Grasa animal, un día de reposo y una última revisión a contraluz, punto por punto.",
    },
  ],

  marks: ["Cosido a mano", "Flor entera", "Lotes pequeños"],

  patina: {
    label: "El tiempo",
    title: "El cuero cambia contigo",
    body: "Curtido al vegetal, sin pigmento que lo tape. Sale del taller claro y se va oscureciendo con la luz, la grasa de las manos y el roce de los días. Las tres piezas de abajo son el mismo monedero: recién hecho, al año y a los diez.",
    years: [
      { mark: "01", label: "Día uno", note: "Sale claro, casi crudo." },
      { mark: "02", label: "Año uno", note: "La miel empieza a aparecer." },
      { mark: "03", label: "Año diez", note: "Ámbar oscuro, el grano a la vista." },
    ],
  },

  workshopTeaser: {
    label: "El taller",
    title: "Herramientas más viejas que el taller",
    body: "Casi todas son de segunda mano. La cuchilla redonda llegó sin mango y corta mejor que cualquiera que se venda hoy. Se afilan cada mañana, antes de tocar el cuero.",
    caption: "Cada herramienta tiene su sitio. Siempre el mismo.",
  },

  enquiry: {
    label: "Encargo",
    title: "Se corta después de hablar",
    body: "El largo, las medidas, el color del hilo o el herraje se pueden cambiar. Contá para qué la vas a usar y se ajusta el patrón antes de tocar la piel.",
    note: "Entre 5 y 15 días de banco según la pieza. Se avisa la fecha antes de empezar.",
  },

  catalog: {
    title: "Piezas",
    heading: "Todas las piezas",
    description:
      "Carteras, cinturones y accesorios cortados y cosidos a mano en cuero curtido al vegetal. Cada pieza con su ficha: cuero, curtido, hilo, medidas y tiempo de banco.",
    lead: "Cada pieza sale del mismo banco y lleva su ficha: qué cuero es, cómo se curtió, con qué hilo está cosida y cuánto tarda en hacerse.",
  },

  product: {
    sheet: "Ficha",
    measurable: "Lo que se puede medir",
    measurableLead: "Si algo no encaja, se cambia antes de cortar.",
    workshopNote: "Nota de taller",
    howMade: "Cómo se hizo",
    fromCut: "Del corte al último punto",
    leadTime: "Esta pieza son {time} de banco, repartidos en estos seis pasos.",
    sixSteps: "Seis pasos, repartidos en varios días de banco.",
    otherMeasures: "¿La querés con otras medidas?",
    otherPieces: "Otras piezas",
    alsoOnBench: "También en el banco",
    captions: ["Selección y corte.", "Punto de silla.", "Bruñido y acabado."],
    viewAria: "Vista {n}",
  },

  workshop: {
    title: "El taller",
    heading: ["Notas", "del banco"],
    description:
      "Notas del banco: cómo se corta, se cose y se bruñe cada pieza en Medellín.",
    lead: "Cómo se trabaja aquí: el banco, las herramientas, el tiempo y lo que el cuero hace después de salir.",
    commissionLine: "Se puede encargar una pieza desde el mismo banco.",
  },

  contact: {
    title: "Encargo",
    heading: ["Encargo", "y escribir"],
    description:
      "Encargos a medida y formas de escribir al taller en Medellín, Colombia.",
    lead: "Casi todo se hace por encargo. La conversación empieza antes que la pieza: qué necesitás y para qué lo vas a usar.",
    commissionTitle: "Una pieza a medida",
    commissionLead:
      "Se confirma el cuero, el color del hilo, las medidas y la fecha de entrega por escrito. Solo entonces se marca el patrón sobre la piel.",
    piecesLead: "Diez cosas que se cortan aquí. Si no está en el banco, se hace a medida.",
    writeTitle: "WhatsApp, correo, Instagram, visita",
    closing: "Los encargos se cortan después de hablar, no antes.",
  },

  commissionPieces: {
    "cartera-clasica-natural": "Cartera clásica",
    "cinturon-vintage-marrón": "Cinturón de una pieza",
    "monedero-minimalista": "Monedero de tres pliegues",
    "riñonera-cuero": "Riñonera",
    "billetera-dos-cuerpos": "Billetera de dos cuerpos",
    portadocumentos: "Portadocumentos",
    tarjetero: "Tarjetero",
    "llavero-una-pieza": "Llavero de una pieza",
    "funda-navaja": "Funda de navaja",
    "correa-reloj": "Correa de reloj",
  },

  photoAlt: {
    heroWorkshop:
      "Taller de marroquinería con una piel extendida sobre el banco y luz entrando de lado por la ventana",
    hides:
      "Pilas de cuero curtido al vegetal apiladas en capas, vistas a ras del canto",
    tools:
      "Herramientas de marroquinería ordenadas en cuadrícula sobre madera oscura",
    cutting:
      "Cuchilla redonda cortando el cuero siguiendo el borde de una plantilla de cartón",
    stitching:
      "Manos cosiendo a punto de silla una pieza de cuero sujeta en el caballete",
    burnishing:
      "Bruñidor de madera puliendo el canto de una pieza gruesa de cuero",
    patina:
      "Tres monederos iguales alineados: uno nuevo, uno de un año y uno de diez, cada vez más oscuros",
  },

  notes: {
    "el-banco": {
      dateLabel: "Noviembre 2024",
      title: "El banco",
      excerpt:
        "Una mesa marcada por quien trabajó antes. La luz entra por un solo lado y decide a qué hora se cosen las piezas oscuras.",
      body: "Una mesa de madera maciza marcada por los cortes de quien trabajó antes. Las muescas no se lijan: sirven de referencia. La luz entra por un solo lado, de mañana, y es la que decide a qué hora se cosen las piezas oscuras.\n\nNo hay línea de producción ni máquina de coser. Hay una mesa marcada, herramientas que ya trabajaban antes de llegar aquí, y el orden de siempre: corte, descanso, costura, bruñido.",
    },
    "las-herramientas": {
      dateLabel: "Febrero 2025",
      title: "Las herramientas",
      excerpt:
        "Cuchilla redonda, punzones, bruñidor. Casi todas de segunda mano; algunas más viejas que el taller.",
      body: "Cuchilla redonda, punzones, sacabocados, bruñidor de madera y compás de puntas. Casi todas son de segunda mano y algunas más viejas que el taller. Se afilan cada mañana antes de empezar.\n\nLa cuchilla redonda llegó sin mango y corta mejor que cualquiera que se venda hoy. Cada herramienta tiene su sitio. Siempre el mismo.",
    },
    "el-tiempo": {
      dateLabel: "Junio 2025",
      title: "El tiempo",
      excerpt:
        "Nada sale el mismo día en que se empieza. Entre el corte y la costura el cuero descansa.",
      body: "Una pieza pasa por el banco varias veces antes de salir. Entre el corte y la costura el cuero descansa; entre el bruñido y el acabado, también. Nada sale el mismo día en que se empieza.\n\nForzar el orden se nota en el canto tres años después. Por eso hay que avisar la fecha antes de empezar: entre cinco y quince días de banco, según la pieza.",
    },
    "la-patina": {
      dateLabel: "Septiembre 2025",
      title: "La pátina",
      excerpt:
        "Sale claro y se oscurece con la luz, la grasa de las manos y el roce de los días.",
      body: "Curtido al vegetal, sin pigmento que lo tape. Sale del taller claro y se va oscureciendo con la luz, la grasa de las manos y el roce de los días.\n\nEl mismo monedero: día uno, casi crudo; al año, la miel empieza a aparecer; a los diez, ámbar oscuro y el grano a la vista. El cuero cambia con quien lo lleva.",
    },
  },

  products: {
    "cartera-clasica-natural": {
      name: "Cartera clásica natural",
      type: "Cartera estructurada",
      shortDescription: "La estructura la sostiene el cuero. No lleva armazón.",
      description:
        "Vacuno flor entera de 2,2 mm, curtido al vegetal. La forma la da el espesor del cuero, no un refuerzo interno. Cierre de latón macizo, costura a punto de silla, cantos bruñidos a mano.",
      note: "La estructura se sostiene sola. No lleva refuerzo interno: es el espesor del cuero el que mantiene la forma.",
      spec: {
        leather: "Vacuno flor entera, 2,2 mm",
        tanning: "Vegetal, 45 días en foso",
        color: "Coñac natural",
        thread: "Lino encerado 0,55 mm, punto de silla",
        hardware: "Latón macizo envejecido a mano",
        lining: "Sin forro. Carne de cuero lijada y sellada",
        madeIn: "Medellín, Colombia",
        leadTime: "12 a 15 días",
        customization: "Iniciales grabadas en seco, sin coste",
      },
      imageAlts: [
        "Cartera clásica en cuero coñac sobre un banco de madera, iluminada de lado",
        "Detalle de la costura a punto de silla y el canto bruñido de la cartera",
      ],
    },
    "cinturon-vintage-marrón": {
      name: "Cinturón vintage marrón",
      type: "Cinturón de una pieza",
      shortDescription: "Una sola tira del lomo. Se corta a tu talla.",
      description:
        "Cortado de una pieza del lomo — la zona más densa de la piel —, 3,8 mm. Hebilla de latón envejecido. El largo se decide antes de hacer el último agujero.",
      note: "Cortado de una sola tira del lomo, la zona más densa de la piel. Por eso no se estira con los años.",
      spec: {
        leather: "Vacuno flor entera del lomo, 3,8 mm",
        tanning: "Vegetal, curtido lento",
        color: "Marrón quemado",
        thread: "Lino encerado 0,45 mm en el pasador",
        hardware: "Hebilla de latón macizo, pátina natural",
        madeIn: "Medellín, Colombia",
        leadTime: "7 a 10 días",
        customization: "Se corta a tu talla exacta",
      },
      imageAlts: [
        "Cinturón de cuero marrón enrollado en espiral sobre madera oscura",
        "Detalle de la hebilla de latón envejecido y el pasador cosido a mano",
      ],
    },
    "monedero-minimalista": {
      name: "Monedero minimalista",
      type: "Monedero de tres pliegues",
      shortDescription: "Sale claro. El color lo pone el uso.",
      description:
        "Una sola pieza plegada, cuero sin teñir. Tres pliegues, costura visible, sin forro. En un año será miel; en cinco, ámbar oscuro.",
      note: "Sale del taller claro, casi crudo. El color lo pone el uso: en un año será miel, en cinco, ámbar oscuro.",
      spec: {
        leather: "Vacuno flor entera, 1,4 mm rebajado a 0,8 en los pliegues",
        tanning: "Vegetal, sin teñir",
        color: "Natural sin teñir",
        thread: "Lino encerado 0,45 mm, punto de silla",
        lining: "Sin forro. Una sola pieza plegada",
        madeIn: "Medellín, Colombia",
        leadTime: "5 a 8 días",
        customization: "Iniciales grabadas en seco, sin coste",
      },
      imageAlts: [
        "Monedero de cuero natural sin teñir sobre un papel de patrón envejecido",
        "Interior del monedero abierto, mostrando los compartimentos y la carne del cuero",
      ],
    },
    "riñonera-cuero": {
      name: "Riñonera de cuero",
      type: "Riñonera con correa ajustable",
      shortDescription: "Correa que se puede acortar. Pensada para quedarse.",
      description:
        "Vacuno de 1,8 mm, correa de 70 a 110 cm, cierre de latón macizo. Las costuras internas van rematadas; no hay forro que se despegue.",
      note: "La correa se puede acortar en casa con un punzón. Está pensada para que dure más que la moda que la trajo.",
      spec: {
        leather: "Vacuno flor entera, 1,8 mm",
        tanning: "Vegetal, teñido en tambor",
        color: "Terracota",
        thread: "Lino encerado 0,55 mm, punto de silla",
        hardware: "Hebilla y cierre de latón macizo",
        lining: "Sin forro. Costuras internas rematadas",
        madeIn: "Medellín, Colombia",
        leadTime: "10 a 14 días",
        customization: "Largo de correa a medida",
      },
      imageAlts: [
        "Riñonera de cuero terracota colgada de un gancho de hierro en una pared de estuco",
        "Detalle del cierre de latón y la solapa cosida a mano de la riñonera",
      ],
    },
  },
};

export type Dictionary = typeof es;
