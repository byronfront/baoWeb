import type { Dictionary } from "./es";

export const en: Dictionary = {
  meta: {
    title: "Bao | Workshop leather goods, made by hand in Medellín",
    titleTemplate: "%s | Bao",
    description:
      "Bags, belts and small goods cut and stitched by hand in vegetable-tanned leather. Saddle stitch, solid brass, small lots. Workshop in Medellín, Colombia.",
    keywords: [
      "workshop leather goods",
      "vegetable-tanned leather",
      "hand-stitched",
      "leather bags",
      "leather belts",
      "Medellín",
    ],
  },

  nav: {
    pieces: "Pieces",
    workshop: "Workshop",
    commission: "Commission",
    write: "Write",
    home: "Home",
    homeAria: "Bao — home",
    primary: "Main navigation",
    footer: "Footer navigation",
    menu: "Menu",
    close: "Close",
    skip: "Skip to content",
    index: "Index",
    language: "Language",
  },

  enquire: {
    cta: "Commission",
    write: "Write",
    toastTitle: "Made to order",
    toastBody: "The pattern is set before the hide is cut. Five to fifteen days on the bench.",
    toastDismiss: "Not now",
    modalTitle: "Commission a piece",
    modalLead:
      "Hide, thread, measurements and the date are confirmed in writing. Then it is cut.",
    modalWhatsApp: "WhatsApp",
    modalEmail: "Email",
    modalInstagram: "Instagram",
    modalContact: "Instagram or a visit",
    modalVisit: "The workshop receives by appointment. Write before you go.",
    product: "Hello — I am interested in: {name}",
    general: "Hello — I would like to commission a piece.",
    fallback: "Hello — I saw the workshop site and would like to ask about a piece.",
  },

  ui: {
    email: "Email",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    workshop: "Workshop",
    appointmentOnly: "By appointment only",
    soldOut: "Sold out",
    madeToOrder: "Made to order",
    viewDetail: "View details",
    viewCatalog: "See the catalog",
    viewPieces: "See the pieces",
    enterWorkshop: "Enter the workshop",
    viewWorkshop: "See the workshop",
    moreNotes: "More notes",
    read: "Read",
    log: "Bench notes",
    also: "Also",
    inventory: "Inventory",
    allPieces: "All pieces",
    filter: "Filter by category",
    breadcrumb: "Breadcrumb",
    catalog: "Catalog",
    pieceNotFound: "Piece not found",
    noteNotFound: "Note not found",
    otherWays: "Instagram and a visit",
    writeWays: "Ways to write",
    marks: "How it is made",
    footerLine: "Cut, stitched and burnished by hand",
    footerTag: "Objects that age well.",
    footerVisit: "Work is by commission. Write before you come.",
    mobileNote: "Workshop in Medellín.\nMade to order, in small lots.",
    emptyCategory: "Nothing of this kind is on the bench just now.",
    emptyCategoryLead:
      "It can be made to order. You can also see the rest of the catalog.",
    viewAllPieces: "See all pieces",
    seeWorkshop: "See the workshop",
  },

  categories: {
    carteras: "Bags",
    cinturones: "Belts",
    accesorios: "Small goods",
    otros: "Other",
  },

  spec: {
    leather: "Leather",
    tanning: "Tanning",
    color: "Colour",
    thread: "Thread",
    hardware: "Hardware",
    lining: "Lining",
    dimensions: "Measurements",
    weight: "Weight",
    madeIn: "Made in",
    leadTime: "Time on the bench",
    customization: "To measure",
  },

  hero: {
    kicker: "Workshop leather goods",
    lines: ["Made", "to", "stay"],
    body: "Vegetable-tanned hide, cut with a knife and sewn saddle-stitch. There is no sewing machine in this workshop.",
    coord: "6°14′N · 75°34′O",
    place: "Medellín",
    spine: "Medellín · Workshop",
  },

  banco: {
    label: "The bench",
    title: "What is cut now",
    lead: "{n} pieces. Each one is made to order, on the same bench, in the same order of work.",
  },

  manifesto: {
    label: "The craft",
    lines: [
      "Cut by hand.",
      "Stitched point by point.",
      "Burnished until the edge takes the light.",
    ],
    body: "There is no sewing machine in this workshop. Each hole is marked with an awl and crossed with two needles, one after the other. A bag is six to nine hours on the bench. It is slower, and it is the only way we know a seam will still hold in twenty years.",
    signature: "Medellín, Colombia",
  },

  materials: {
    label: "The hide",
    title: ["Four things", "come through", "the door"],
    lead: "Nothing else. No synthetic linings, no glue in place of a stitch, no plated hardware that flakes in two years.",
    spine: "Full grain · Antioquia",
    items: [
      {
        name: "Full-grain hide",
        origin: "Antioquia",
        note: "The outer face of the skin, grain left intact. It is not sanded or corrected: the scars and marks of the animal stay where they are.",
      },
      {
        name: "Vegetable tan",
        origin: "Acacia and quebracho",
        note: "Forty-five days in the pit instead of two in the drum. It is slow, it is costly, and it is why the leather darkens instead of cracking.",
      },
      {
        name: "Waxed linen thread",
        origin: "0.45 and 0.55 mm",
        note: "The hide will give before the seam does. And if one stitch fails, the saddle stitch keeps the rest of the row from running.",
      },
      {
        name: "Solid brass",
        origin: "Cast by hand",
        note: "No plating. It darkens with the years and can be brought back to a shine. Chromed hardware, once it flakes, is finished.",
      },
    ],
  },

  process: {
    label: "How it is made",
    title: "Six steps, always in the same order",
    lead: "Days pass between the first and the last, not hours. The hide rests between steps: if it is forced, it marks.",
    captions: [
      "Cutting — one pass along the edge.",
      "Stitching — two needles, one hole at a time.",
      "Burnishing — wood and friction, no varnish.",
    ],
  },

  craftSteps: [
    {
      step: "01",
      title: "Selection",
      body: "The part of the hide is chosen for what it will have to hold. The back for what is pulled taut; the belly for what must fold.",
    },
    {
      step: "02",
      title: "Cutting",
      body: "Round knife and a cardboard pattern. One pass along the edge: a second pass always shows on the finish.",
    },
    {
      step: "03",
      title: "Edges",
      body: "The arris is taken down, sanded through three grits, and the edge is dampened before anything else touches it.",
    },
    {
      step: "04",
      title: "Stitching",
      body: "Saddle stitch, two needles, waxed linen. One hole at a time, marked first with the awl.",
    },
    {
      step: "05",
      title: "Burnishing",
      body: "Wood and friction until the edge stops taking water and starts giving back the light.",
    },
    {
      step: "06",
      title: "Finish",
      body: "Animal fat, a day of rest, and a last check against the light, stitch by stitch.",
    },
  ],

  marks: ["Hand-stitched", "Full grain", "Small lots"],

  patina: {
    label: "Time",
    title: "The leather changes with you",
    body: "Vegetable-tanned, with no pigment to cover it. It leaves the workshop pale and darkens with light, the oil of the hands and the rub of the days. The three pieces below are the same purse: new, at one year, at ten.",
    years: [
      { mark: "01", label: "Day one", note: "It leaves pale, almost raw." },
      { mark: "02", label: "Year one", note: "The honey starts to show." },
      { mark: "03", label: "Year ten", note: "Dark amber, the grain in plain sight." },
    ],
  },

  workshopTeaser: {
    label: "The workshop",
    title: "Tools older than the workshop",
    body: "Almost all of them are second-hand. The round knife arrived without a handle and cuts better than anything sold today. They are sharpened every morning, before the hide is touched.",
    caption: "Each tool has its place. Always the same one.",
  },

  enquiry: {
    label: "Commission",
    title: "It is cut after we have spoken",
    body: "Length, measurements, the colour of the thread or the hardware can be changed. Say what you will use it for and the pattern is adjusted before the hide is marked.",
    note: "Five to fifteen days on the bench, according to the piece. The date is given before work starts.",
  },

  catalog: {
    title: "Pieces",
    heading: "All pieces",
    description:
      "Bags, belts and small goods cut and stitched by hand in vegetable-tanned leather. Each piece with its sheet: hide, tan, thread, measurements and time on the bench.",
    lead: "Each piece leaves the same bench and carries its sheet: which hide it is, how it was tanned, what thread it is sewn with and how long it takes to make.",
  },

  product: {
    sheet: "Sheet",
    measurable: "What can be measured",
    measurableLead: "If something does not fit, it is changed before the cut.",
    workshopNote: "Bench note",
    howMade: "How it was made",
    fromCut: "From the cut to the last stitch",
    leadTime: "This piece is {time} on the bench, spread across these six steps.",
    sixSteps: "Six steps, spread over several days on the bench.",
    otherMeasures: "Want it in other measurements?",
    otherPieces: "Other pieces",
    alsoOnBench: "Also on the bench",
    captions: ["Selection and cutting.", "Saddle stitch.", "Burnish and finish."],
    viewAria: "View {n}",
  },

  workshop: {
    title: "The workshop",
    heading: ["Notes", "from the bench"],
    description:
      "Notes from the bench: how each piece is cut, sewn and burnished in Medellín.",
    lead: "How the work is done here: the bench, the tools, time, and what the leather does after it leaves.",
    commissionLine: "A piece can be commissioned from the same bench.",
  },

  contact: {
    title: "Commission",
    heading: ["Commission", "and write"],
    description:
      "Pieces to measure and ways to write to the workshop in Medellín, Colombia.",
    lead: "Almost everything is made to order. The conversation starts before the piece: what you need and what you will use it for.",
    commissionTitle: "A piece to measure",
    commissionLead:
      "Hide, thread colour, measurements and the delivery date are confirmed in writing. Only then is the pattern marked on the skin.",
    piecesLead: "Ten things cut here. If it is not on the bench, it is made to order.",
    writeTitle: "WhatsApp, email, Instagram, a visit",
    closing: "Commissions are cut after we have spoken, not before.",
  },

  commissionPieces: {
    "cartera-clasica-natural": "Classic bag",
    "cinturon-vintage-marrón": "One-piece belt",
    "monedero-minimalista": "Three-fold purse",
    "riñonera-cuero": "Waist bag",
    "billetera-dos-cuerpos": "Two-pocket wallet",
    portadocumentos: "Document sleeve",
    tarjetero: "Card case",
    "llavero-una-pieza": "One-piece key fob",
    "funda-navaja": "Knife sheath",
    "correa-reloj": "Watch strap",
  },

  photoAlt: {
    heroWorkshop:
      "Leather workshop with a hide spread on the bench and light coming in sideways from the window",
    hides:
      "Stacks of vegetable-tanned leather in layers, seen level with the edge",
    tools:
      "Leather tools laid out in a grid on dark wood",
    cutting:
      "Round knife cutting leather along the edge of a cardboard pattern",
    stitching:
      "Hands saddle-stitching a piece of leather held in the stitching horse",
    burnishing:
      "Wooden slicker burnishing the edge of a thick piece of leather",
    patina:
      "Three identical purses in a line: new, one year old and ten, each darker than the last",
  },

  notes: {
    "el-banco": {
      dateLabel: "November 2024",
      title: "The bench",
      excerpt:
        "A table marked by whoever worked it before. Light comes in from one side and decides when the dark pieces are sewn.",
      body: "A solid wood table marked by the cuts of whoever worked it before. The nicks are not sanded out: they serve as reference. Light comes in from one side, in the morning, and it is what decides when the dark pieces are sewn.\n\nThere is no production line and no sewing machine. There is a marked table, tools that were already working before they arrived here, and the old order: cut, rest, stitch, burnish.",
    },
    "las-herramientas": {
      dateLabel: "February 2025",
      title: "The tools",
      excerpt:
        "Round knife, awls, slicker. Almost all second-hand; some older than the workshop.",
      body: "Round knife, awls, punches, a wooden slicker and a pair of dividers. Almost all of them are second-hand and some are older than the workshop. They are sharpened every morning before work starts.\n\nThe round knife arrived without a handle and cuts better than anything sold today. Each tool has its place. Always the same one.",
    },
    "el-tiempo": {
      dateLabel: "June 2025",
      title: "Time",
      excerpt:
        "Nothing leaves the same day it is started. Between the cut and the stitching the hide rests.",
      body: "A piece goes across the bench several times before it leaves. Between the cut and the stitching the hide rests; between the burnish and the finish, again. Nothing leaves the same day it is started.\n\nForcing the order shows on the edge three years later. That is why the date is given before work starts: five to fifteen days on the bench, according to the piece.",
    },
    "la-patina": {
      dateLabel: "September 2025",
      title: "Patina",
      excerpt:
        "It leaves pale and darkens with light, the oil of the hands and the rub of the days.",
      body: "Vegetable-tanned, with no pigment to cover it. It leaves the workshop pale and darkens with light, the oil of the hands and the rub of the days.\n\nThe same purse: day one, almost raw; at a year, the honey starts to show; at ten, dark amber and the grain in plain sight. The leather changes with whoever carries it.",
    },
  },

  products: {
    "cartera-clasica-natural": {
      name: "Classic natural bag",
      type: "Structured bag",
      shortDescription: "The hide holds the shape. There is no frame.",
      description:
        "Full-grain cowhide, 2.2 mm, vegetable-tanned. The thickness of the leather gives the form, not an internal frame. Solid brass closure, saddle stitch, edges burnished by hand.",
      note: "The structure stands on its own. There is no internal frame: it is the thickness of the hide that keeps the shape.",
      spec: {
        leather: "Full-grain cowhide, 2.2 mm",
        tanning: "Vegetable, 45 days in the pit",
        color: "Natural cognac",
        thread: "Waxed linen 0.55 mm, saddle stitch",
        hardware: "Solid brass, aged by hand",
        lining: "Unlined. Flesh side sanded and sealed",
        madeIn: "Medellín, Colombia",
        leadTime: "12 to 15 days",
        customization: "Blind-stamped initials, no charge",
      },
      imageAlts: [
        "Classic cognac leather bag on a wooden bench, lit from the side",
        "Detail of the saddle stitch and the burnished edge of the bag",
      ],
    },
    "cinturon-vintage-marrón": {
      name: "Vintage brown belt",
      type: "One-piece belt",
      shortDescription: "A single strip from the back. Cut to your size.",
      description:
        "Cut from one piece of the back — the densest part of the hide — 3.8 mm. Aged brass buckle. The length is decided before the last hole is made.",
      note: "Cut from a single strip of the back, the densest part of the hide. That is why it does not stretch with the years.",
      spec: {
        leather: "Full-grain cowhide from the back, 3.8 mm",
        tanning: "Vegetable, slow tan",
        color: "Burnt brown",
        thread: "Waxed linen 0.45 mm at the keeper",
        hardware: "Solid brass buckle, natural patina",
        madeIn: "Medellín, Colombia",
        leadTime: "7 to 10 days",
        customization: "Cut to your exact size",
      },
      imageAlts: [
        "Brown leather belt coiled on dark wood",
        "Detail of the aged brass buckle and the hand-stitched keeper",
      ],
    },
    "monedero-minimalista": {
      name: "Minimal purse",
      type: "Three-fold purse",
      shortDescription: "It leaves pale. Use puts the colour on.",
      description:
        "One folded piece, undyed hide. Three folds, the stitching left visible, no lining. In a year it will be honey; in five, dark amber.",
      note: "It leaves the workshop pale, almost raw. Use puts the colour on: in a year it will be honey, in five, dark amber.",
      spec: {
        leather: "Full-grain cowhide, 1.4 mm skived to 0.8 at the folds",
        tanning: "Vegetable, undyed",
        color: "Natural, undyed",
        thread: "Waxed linen 0.45 mm, saddle stitch",
        lining: "Unlined. A single folded piece",
        madeIn: "Medellín, Colombia",
        leadTime: "5 to 8 days",
        customization: "Blind-stamped initials, no charge",
      },
      imageAlts: [
        "Undyed natural leather purse on aged pattern paper",
        "Open purse, showing the pockets and the flesh side of the hide",
      ],
    },
    "riñonera-cuero": {
      name: "Leather waist bag",
      type: "Waist bag with an adjustable strap",
      shortDescription: "A strap that can be shortened. Made to stay.",
      description:
        "1.8 mm cowhide, strap from 70 to 110 cm, solid brass closure. The inside seams are finished; there is no lining to peel.",
      note: "The strap can be shortened at home with an awl. It is made to outlast the fashion that brought it.",
      spec: {
        leather: "Full-grain cowhide, 1.8 mm",
        tanning: "Vegetable, drum-dyed",
        color: "Terracotta",
        thread: "Waxed linen 0.55 mm, saddle stitch",
        hardware: "Solid brass buckle and closure",
        lining: "Unlined. Inside seams finished",
        madeIn: "Medellín, Colombia",
        leadTime: "10 to 14 days",
        customization: "Strap length to measure",
      },
      imageAlts: [
        "Terracotta leather waist bag hanging from an iron hook on a plaster wall",
        "Detail of the brass closure and the hand-stitched flap of the waist bag",
      ],
    },
  },
};
