/* ============================================================
   DATOS DEL MENÚ — edita SOLO este archivo para actualizar la carta.
   No necesitas tocar HTML ni CSS.

   Cómo editar:
   - "nombre" del restaurante y "tagline" están al principio.
   - Cada categoría tiene un "id" (no lo cambies), un "titulo" y una
     lista de "platos".
   - Cada plato tiene: nombre, descripcion y precio (número, sin puntos).
   - Para AGREGAR un plato, copia un bloque { ... } y pégalo dentro
     del arreglo "platos" de la categoría que quieras.
   - Para BORRAR un plato, elimina su bloque completo { ... }.
   - Para AGREGAR una categoría nueva, copia un bloque de categoría
     completo (desde { id: hasta el cierre }) y agrégalo al arreglo
     final "menuData".
   ============================================================ */

const restaurantInfo = {
  nombre: "Sumac",
  tagline: "Alta cocina bajo el cielo más despejado del mundo",
  ubicacion: "Vallenar, Valle del Huasco, Atacama",
  horario: "Lun–sab · 13:00–23:30-Dom 13:00 · 23:30 ",
  moneda: "$",
};

const menuData = [
  {
    id: "comenzar",
    titulo: "Para Comenzar",
    platos: [
      {
        nombre: "Ceviche de pulpo al carbón",
        descripcion: "Pulpo braseado, leche de tigre de limón de Pica, camote morado, cancha tostada.",
        precio: 12500,
      },
      {
        nombre: "Tártaro de cabra del Huasco",
        descripcion: "Cabra criada en el valle, alcaparras de Pan de Azúcar, aceite de oliva de Alto del Carmen.",
        precio: 11000,
      },
      {
        nombre: "Empanada de queso de cabra y rica-rica",
        descripcion: "Masa hojaldrada, hierba rica-rica del desierto, miel de palma chilena.",
        precio: 7500,
      },
      {
        nombre: "Crema fría de zapallo y algarrobo",
        descripcion: "Zapallo camote, jarabe de algarrobina, crocante de semillas de zapallo.",
        precio: 8900,
      },
    ],
  },
  {
    id: "principales",
    titulo: "Del Mar y la Tierra",
    platos: [
      {
        nombre: "Corvina a la piedra volcánica",
        descripcion: "Corvina de Huasco, puré de papa chilota, salsa verde de rica-rica, ceniza de limón.",
        precio: 22500,
      },
      {
        nombre: "Cordero del valle a las brasas",
        descripcion: "Cordero cocido 12 horas, puré de habas, jugo reducido de vino carmenère.",
        precio: 24900,
      },
      {
        nombre: "Risotto de quínoa y hongos del norte",
        descripcion: "Quínoa real, hongos secos de altura, queso de cabra, aceite de oliva ahumado.",
        precio: 18500,
      },
      {
        nombre: "Pulpo entero a la parrilla",
        descripcion: "Pulpo de la costa de Huasco, chimichurri de rica-rica, papas nativas confitadas.",
        precio: 26900,
      },
    ],
  },
  {
    id: "postres",
    titulo: "Dulce Final",
    platos: [
      {
        nombre: "Papaya al pisco de Vallenar",
        descripcion: "Papaya confitada, almíbar de pisco añejo, helado de leche de oveja.",
        precio: 7900,
      },
      {
        nombre: "Torta de algarrobo y nuez",
        descripcion: "Bizcocho de algarrobina, nueces del valle, crema de queso mascarpone.",
        precio: 6900,
      },
      {
        nombre: "Sopaipilla de postre con chancaca",
        descripcion: "Sopaipilla tibia, chancaca especiada, helado de canela.",
        precio: 6500,
      },
    ],
  },
  {
    id: "bebidas",
    titulo: "Vinos y Cocteles",
    platos: [
      {
        nombre: "Copa Carmenère Valle del Huasco",
        descripcion: "Vino tinto de bodega local, notas a especias y frutos negros.",
        precio: 6500,
      },
      {
        nombre: "Pisco sour de rica-rica",
        descripcion: "Pisco chileno, limón de Pica, hierba rica-rica, clara de huevo.",
        precio: 7200,
      },
      {
        nombre: "Copa Syrah costero",
        descripcion: "Vino de altura, cuerpo medio, taninos suaves.",
        precio: 6800,
      },
      {
        nombre: "Agua de rica-rica y jengibre",
        descripcion: "Infusión fría de hierbas del desierto, jengibre, miel de palma.",
        precio: 3500,
      },
    ],
  },
];
