/* =========================================================
   QUEENS — JavaScript principal
   ETIQUETAS: PRODUCTOS · BUSCADOR · CARRUSEL · FILTROS · CARRITO · MODAL
   ========================================================= */

// ===== CATÁLOGO REAL · 6 CATEGORÍAS · 60 PRODUCTOS =====
// Las imágenes se conservan dentro de sus carpetas originales en /assets.
// Para cambiar una foto, editá únicamente el campo `image` del producto.
const products = [
  {
    "id": 1,
    "name": "Set de Labiales Cremosos",
    "brand": "Queens Beauty",
    "category": "maquillaje",
    "price": 12990,
    "badge": "Destacado",
    "desc": "Set de Labiales Cremosos. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Maquillaje/01_Maquillaje.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 2,
    "name": "Paleta de Sombras Nude",
    "brand": "Queens Beauty",
    "category": "maquillaje",
    "price": 23990,
    "badge": "Nuevo",
    "desc": "Paleta de Sombras Nude. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Maquillaje/02_Maquillaje.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 3,
    "name": "Base de Maquillaje Líquida",
    "brand": "Queens Beauty",
    "category": "maquillaje",
    "price": 18990,
    "badge": "",
    "desc": "Base de Maquillaje Líquida. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Maquillaje/03_Maquillaje.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 4,
    "name": "Set de Brochas para Maquillaje",
    "brand": "Queens Beauty",
    "category": "maquillaje",
    "price": 24990,
    "badge": "",
    "desc": "Set de Brochas para Maquillaje. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Maquillaje/04_Maquillaje.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 5,
    "name": "Set de Maquillaje de Ojos",
    "brand": "Queens Beauty",
    "category": "maquillaje",
    "price": 13990,
    "badge": "Favorito",
    "desc": "Set de Maquillaje de Ojos. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Maquillaje/05_Maquillaje.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 6,
    "name": "Máscara de Pestañas",
    "brand": "Queens Beauty",
    "category": "maquillaje",
    "price": 11990,
    "badge": "",
    "desc": "Máscara de Pestañas. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Maquillaje/06_Maquillaje.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 7,
    "name": "Rubor Compacto Rosado",
    "brand": "Queens Beauty",
    "category": "maquillaje",
    "price": 15990,
    "badge": "",
    "desc": "Rubor Compacto Rosado. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Maquillaje/07_Maquillaje.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 8,
    "name": "Delineadores de Ojos Negros",
    "brand": "Queens Beauty",
    "category": "maquillaje",
    "price": 10990,
    "badge": "",
    "desc": "Delineadores de Ojos Negros. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Maquillaje/08_Maquillaje.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 9,
    "name": "Brillos Labiales",
    "brand": "Queens Beauty",
    "category": "maquillaje",
    "price": 12990,
    "badge": "",
    "desc": "Brillos Labiales. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Maquillaje/09_Maquillaje.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 10,
    "name": "Polvo Compacto Natural",
    "brand": "Queens Beauty",
    "category": "maquillaje",
    "price": 17990,
    "badge": "",
    "desc": "Polvo Compacto Natural. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Maquillaje/10_Maquillaje.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 11,
    "name": "Conjunto de Encaje Rojo",
    "brand": "Queens Lingerie",
    "category": "lenceria",
    "price": 26990,
    "badge": "Destacado",
    "desc": "Conjunto de Encaje Rojo. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Lenceria_Femenina/01_Lenceria_Femenina.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 12,
    "name": "Body de Encaje Negro",
    "brand": "Queens Lingerie",
    "category": "lenceria",
    "price": 28990,
    "badge": "Nuevo",
    "desc": "Body de Encaje Negro. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Lenceria_Femenina/02_Lenceria_Femenina.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 13,
    "name": "Conjunto Satinado Rosa",
    "brand": "Queens Lingerie",
    "category": "lenceria",
    "price": 23990,
    "badge": "",
    "desc": "Conjunto Satinado Rosa. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Lenceria_Femenina/03_Lenceria_Femenina.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 14,
    "name": "Conjunto de Encaje Azul",
    "brand": "Queens Lingerie",
    "category": "lenceria",
    "price": 23990,
    "badge": "",
    "desc": "Conjunto de Encaje Azul. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Lenceria_Femenina/04_Lenceria_Femenina.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 15,
    "name": "Panty de Encaje Negro",
    "brand": "Queens Lingerie",
    "category": "lenceria",
    "price": 18990,
    "badge": "Favorito",
    "desc": "Panty de Encaje Negro. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Lenceria_Femenina/05_Lenceria_Femenina.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 16,
    "name": "Conjunto de Encaje Violeta",
    "brand": "Queens Lingerie",
    "category": "lenceria",
    "price": 24990,
    "badge": "",
    "desc": "Conjunto de Encaje Violeta. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Lenceria_Femenina/06_Lenceria_Femenina.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 17,
    "name": "Conjunto de Encaje Blanco",
    "brand": "Queens Lingerie",
    "category": "lenceria",
    "price": 22990,
    "badge": "",
    "desc": "Conjunto de Encaje Blanco. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Lenceria_Femenina/07_Lenceria_Femenina.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 18,
    "name": "Baby Doll Rojo",
    "brand": "Queens Lingerie",
    "category": "lenceria",
    "price": 29990,
    "badge": "",
    "desc": "Baby Doll Rojo. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Lenceria_Femenina/08_Lenceria_Femenina.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 19,
    "name": "Bralette de Encaje Negro",
    "brand": "Queens Lingerie",
    "category": "lenceria",
    "price": 21990,
    "badge": "",
    "desc": "Bralette de Encaje Negro. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Lenceria_Femenina/09_Lenceria_Femenina.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 20,
    "name": "Bata Satinada Rosa",
    "brand": "Queens Lingerie",
    "category": "lenceria",
    "price": 24990,
    "badge": "",
    "desc": "Bata Satinada Rosa. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Lenceria_Femenina/10_Lenceria_Femenina.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 21,
    "name": "Shampoo y Acondicionador Reparador",
    "brand": "Queens Hair",
    "category": "cabello",
    "price": 14990,
    "badge": "Destacado",
    "desc": "Shampoo y Acondicionador Reparador. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Cuidado_del_Cabello/01_Cuidado_del_Cabello.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 22,
    "name": "Mascarilla Nutritiva",
    "brand": "Queens Hair",
    "category": "cabello",
    "price": 13990,
    "badge": "Nuevo",
    "desc": "Mascarilla Nutritiva. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Cuidado_del_Cabello/02_Cuidado_del_Cabello.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 23,
    "name": "Aceite Capilar",
    "brand": "Queens Hair",
    "category": "cabello",
    "price": 11990,
    "badge": "",
    "desc": "Aceite Capilar. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Cuidado_del_Cabello/03_Cuidado_del_Cabello.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 24,
    "name": "Shampoo y Acondicionador Hidratante",
    "brand": "Queens Hair",
    "category": "cabello",
    "price": 16990,
    "badge": "",
    "desc": "Shampoo y Acondicionador Hidratante. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Cuidado_del_Cabello/04_Cuidado_del_Cabello.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 25,
    "name": "Cepillo Desenredante",
    "brand": "Queens Hair",
    "category": "cabello",
    "price": 6990,
    "badge": "Favorito",
    "desc": "Cepillo Desenredante. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Cuidado_del_Cabello/05_Cuidado_del_Cabello.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 26,
    "name": "Planchita de Cabello",
    "brand": "Queens Hair",
    "category": "cabello",
    "price": 18990,
    "badge": "",
    "desc": "Planchita de Cabello. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Cuidado_del_Cabello/06_Cuidado_del_Cabello.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 27,
    "name": "Tratamiento Capilar Sin Enjuague",
    "brand": "Queens Hair",
    "category": "cabello",
    "price": 12990,
    "badge": "",
    "desc": "Tratamiento Capilar Sin Enjuague. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Cuidado_del_Cabello/07_Cuidado_del_Cabello.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 28,
    "name": "Sérums Capilares",
    "brand": "Queens Hair",
    "category": "cabello",
    "price": 15990,
    "badge": "",
    "desc": "Sérums Capilares. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Cuidado_del_Cabello/08_Cuidado_del_Cabello.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 29,
    "name": "Mascarilla Capilar Hidratante",
    "brand": "Queens Hair",
    "category": "cabello",
    "price": 14990,
    "badge": "",
    "desc": "Mascarilla Capilar Hidratante. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Cuidado_del_Cabello/09_Cuidado_del_Cabello.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 30,
    "name": "Shampoo Reparador",
    "brand": "Queens Hair",
    "category": "cabello",
    "price": 18990,
    "badge": "",
    "desc": "Shampoo Reparador. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Cuidado_del_Cabello/10_Cuidado_del_Cabello.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 31,
    "name": "Aros Argolla Dorados",
    "brand": "Queens Bijoux",
    "category": "alhajas",
    "price": 11990,
    "badge": "Destacado",
    "desc": "Aros Argolla Dorados. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Alhajas/01_Alhajas.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 32,
    "name": "Collar Corazón",
    "brand": "Queens Bijoux",
    "category": "alhajas",
    "price": 15990,
    "badge": "Nuevo",
    "desc": "Collar Corazón. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Alhajas/02_Alhajas.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 33,
    "name": "Pulsera con Dijes",
    "brand": "Queens Bijoux",
    "category": "alhajas",
    "price": 13990,
    "badge": "",
    "desc": "Pulsera con Dijes. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Alhajas/03_Alhajas.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 34,
    "name": "Aros Colgantes",
    "brand": "Queens Bijoux",
    "category": "alhajas",
    "price": 18990,
    "badge": "",
    "desc": "Aros Colgantes. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Alhajas/04_Alhajas.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 35,
    "name": "Anillo Corazón",
    "brand": "Queens Bijoux",
    "category": "alhajas",
    "price": 9990,
    "badge": "Favorito",
    "desc": "Anillo Corazón. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Alhajas/05_Alhajas.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 36,
    "name": "Reloj Dorado",
    "brand": "Queens Bijoux",
    "category": "alhajas",
    "price": 32990,
    "badge": "",
    "desc": "Reloj Dorado. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Alhajas/06_Alhajas.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 37,
    "name": "Aros con Perla",
    "brand": "Queens Bijoux",
    "category": "alhajas",
    "price": 14990,
    "badge": "",
    "desc": "Aros con Perla. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Alhajas/07_Alhajas.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 38,
    "name": "Collar de Capas",
    "brand": "Queens Bijoux",
    "category": "alhajas",
    "price": 17990,
    "badge": "",
    "desc": "Collar de Capas. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Alhajas/08_Alhajas.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 39,
    "name": "Pulsera Dorada",
    "brand": "Queens Bijoux",
    "category": "alhajas",
    "price": 19990,
    "badge": "",
    "desc": "Pulsera Dorada. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Alhajas/09_Alhajas.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 40,
    "name": "Set de Aros y Anillos",
    "brand": "Queens Bijoux",
    "category": "alhajas",
    "price": 16990,
    "badge": "",
    "desc": "Set de Aros y Anillos. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Alhajas/10_Alhajas.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 41,
    "name": "Blazer Rosa",
    "brand": "QueenStyle",
    "category": "ropa",
    "price": 49990,
    "badge": "Destacado",
    "desc": "Blazer Rosa. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Ropa_Femenina/01_Ropa_Femenina.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 42,
    "name": "Musculosa Blanca",
    "brand": "QueenStyle",
    "category": "ropa",
    "price": 25990,
    "badge": "Nuevo",
    "desc": "Musculosa Blanca. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Ropa_Femenina/02_Ropa_Femenina.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 43,
    "name": "Vestido Negro Ajustado",
    "brand": "QueenStyle",
    "category": "ropa",
    "price": 31990,
    "badge": "",
    "desc": "Vestido Negro Ajustado. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Ropa_Femenina/03_Ropa_Femenina.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 44,
    "name": "Sweater Beige",
    "brand": "QueenStyle",
    "category": "ropa",
    "price": 28990,
    "badge": "",
    "desc": "Sweater Beige. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Ropa_Femenina/04_Ropa_Femenina.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 45,
    "name": "Jean Azul Wide Leg",
    "brand": "QueenStyle",
    "category": "ropa",
    "price": 35990,
    "badge": "Favorito",
    "desc": "Jean Azul Wide Leg. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Ropa_Femenina/05_Ropa_Femenina.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 46,
    "name": "Vestido Floral",
    "brand": "QueenStyle",
    "category": "ropa",
    "price": 39990,
    "badge": "",
    "desc": "Vestido Floral. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Ropa_Femenina/06_Ropa_Femenina.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 47,
    "name": "Campera de Cuero Negra",
    "brand": "QueenStyle",
    "category": "ropa",
    "price": 45990,
    "badge": "",
    "desc": "Campera de Cuero Negra. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Ropa_Femenina/07_Ropa_Femenina.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 48,
    "name": "Sweater Rayado",
    "brand": "QueenStyle",
    "category": "ropa",
    "price": 28990,
    "badge": "",
    "desc": "Sweater Rayado. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Ropa_Femenina/08_Ropa_Femenina.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 49,
    "name": "Camisa Blanca",
    "brand": "QueenStyle",
    "category": "ropa",
    "price": 27990,
    "badge": "",
    "desc": "Camisa Blanca. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Ropa_Femenina/09_Ropa_Femenina.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 50,
    "name": "Pantalón Sastrero Negro",
    "brand": "QueenStyle",
    "category": "ropa",
    "price": 42990,
    "badge": "",
    "desc": "Pantalón Sastrero Negro. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Ropa_Femenina/10_Ropa_Femenina.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 51,
    "name": "Limpiador Facial Hidratante",
    "brand": "Queens Skin",
    "category": "skincare",
    "price": 12990,
    "badge": "Destacado",
    "desc": "Limpiador Facial Hidratante. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Cuidado_de_la_Piel/01_Cuidado_de_la_Piel.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 52,
    "name": "Sérum Facial",
    "brand": "Queens Skin",
    "category": "skincare",
    "price": 18990,
    "badge": "Nuevo",
    "desc": "Sérum Facial. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Cuidado_de_la_Piel/02_Cuidado_de_la_Piel.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 53,
    "name": "Crema Facial en Gel",
    "brand": "Queens Skin",
    "category": "skincare",
    "price": 16990,
    "badge": "",
    "desc": "Crema Facial en Gel. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Cuidado_de_la_Piel/03_Cuidado_de_la_Piel.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 54,
    "name": "Protector Solar SPF 50+",
    "brand": "Queens Skin",
    "category": "skincare",
    "price": 22990,
    "badge": "",
    "desc": "Protector Solar SPF 50+. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Cuidado_de_la_Piel/04_Cuidado_de_la_Piel.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 55,
    "name": "Mascarillas Faciales",
    "brand": "Queens Skin",
    "category": "skincare",
    "price": 9990,
    "badge": "Favorito",
    "desc": "Mascarillas Faciales. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Cuidado_de_la_Piel/05_Cuidado_de_la_Piel.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 56,
    "name": "Agua Micelar",
    "brand": "Queens Skin",
    "category": "skincare",
    "price": 11990,
    "badge": "",
    "desc": "Agua Micelar. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Cuidado_de_la_Piel/06_Cuidado_de_la_Piel.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 57,
    "name": "Crema Facial Hidratante",
    "brand": "Queens Skin",
    "category": "skincare",
    "price": 14990,
    "badge": "",
    "desc": "Crema Facial Hidratante. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Cuidado_de_la_Piel/07_Cuidado_de_la_Piel.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 58,
    "name": "Exfoliante Facial",
    "brand": "Queens Skin",
    "category": "skincare",
    "price": 9990,
    "badge": "",
    "desc": "Exfoliante Facial. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Cuidado_de_la_Piel/08_Cuidado_de_la_Piel.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 59,
    "name": "Contorno de Ojos",
    "brand": "Queens Skin",
    "category": "skincare",
    "price": 19990,
    "badge": "",
    "desc": "Contorno de Ojos. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Cuidado_de_la_Piel/09_Cuidado_de_la_Piel.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  },
  {
    "id": 60,
    "name": "Rodillo y Gua Sha Facial",
    "brand": "Queens Skin",
    "category": "skincare",
    "price": 15990,
    "badge": "",
    "desc": "Rodillo y Gua Sha Facial. Foto real del producto incluida en el catálogo Queens.",
    "image": "assets/Cuidado_de_la_Piel/10_Cuidado_de_la_Piel.jpg",
    "variants": [
      [
        "Único",
        ""
      ]
    ],
    "discount": false
  }
];

let cart = JSON.parse(localStorage.getItem('queens-cart-v2') || '[]');
let currentFilter = 'all';
let currentQuery = '';
let heroIndex = 0;
let heroTimer;

// ===== ARTE SVG AUTO-CONTENIDO (evita dependencias externas) =====
function svgArt(type, variant='#e6b0bb', compact=false){
  const v = (variant || '#e6b0bb').trim();
  const common = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" role="img" aria-label="Producto Queens"`;
  const stroke='#7c636d';
  if(type==='lipstick') return `<svg ${common}><rect x="0" y="0" width="300" height="300" rx="30" fill="#f8eff0"/><ellipse cx="150" cy="258" rx="72" ry="13" fill="#dfcfd2"/><rect x="111" y="130" width="78" height="110" rx="15" fill="#c999a5"/><rect x="120" y="78" width="60" height="68" rx="14" fill="#ddd0d2"/><path d="M120 92 C127 66 158 56 177 70 L180 106 L120 106 Z" fill="${v}"/><rect x="118" y="144" width="64" height="13" rx="6" fill="#b98492" opacity=".55"/><circle cx="142" cy="151" r="5" fill="#f8eff0" opacity=".55"/></svg>`;
  if(type==='skincare') return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f8eff0"/><ellipse cx="150" cy="260" rx="92" ry="13" fill="#ddcfd2"/><rect x="87" y="136" width="126" height="100" rx="25" fill="#f7f0e9" stroke="#dfd3d3"/><rect x="101" y="115" width="98" height="30" rx="10" fill="#c9afc9"/><rect x="108" y="155" width="84" height="26" rx="10" fill="${v}" opacity=".65"/><path d="M131 194 Q150 176 169 194" stroke="${stroke}" fill="none" stroke-width="3"/><circle cx="150" cy="202" r="19" fill="#fff" opacity=".65"/></svg>`;
  if(type==='dress') return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f6eef0"/><ellipse cx="150" cy="263" rx="72" ry="13" fill="#ddcfd1"/><path d="M113 69 C121 54 137 51 150 51 C163 51 179 54 187 69 L176 111 L198 235 Q150 259 102 235 L124 111 Z" fill="${v}"/><path d="M124 111 Q150 126 176 111" fill="none" stroke="#a37b87" stroke-width="4"/><path d="M126 79 C135 88 165 88 174 79" fill="none" stroke="#a37b87" stroke-width="3"/><circle cx="150" cy="150" r="4" fill="#fff" opacity=".65"/></svg>`;
  if(type==='lingerie') return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f9eff1"/><ellipse cx="150" cy="261" rx="82" ry="12" fill="#dfd1d4"/><path d="M86 110 Q108 71 140 102 Q150 112 160 102 Q192 71 214 110 L194 154 L106 154 Z" fill="${v}"/><path d="M106 154 L118 222 L139 203 L150 178 L161 203 L182 222 L194 154" fill="${v}"/><path d="M97 97 Q91 72 78 54 M203 97 Q209 72 222 54" stroke="#a17b86" fill="none" stroke-width="6" stroke-linecap="round"/><path d="M125 132 Q150 149 175 132" fill="none" stroke="#a17b86" stroke-width="2" opacity=".7"/></svg>`;
  if(type==='hair') return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f3edf6"/><ellipse cx="150" cy="258" rx="87" ry="13" fill="#d9cedc"/><rect x="63" y="118" width="52" height="111" rx="14" fill="#c3b0cf"/><rect x="124" y="93" width="52" height="136" rx="14" fill="${v}"/><rect x="185" y="129" width="52" height="100" rx="14" fill="#e8dce9"/><circle cx="89" cy="100" r="24" fill="#ad93bd"/><circle cx="150" cy="75" r="24" fill="#ad93bd"/><circle cx="211" cy="111" r="24" fill="#ad93bd"/></svg>`;
  if(type==='earrings') return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f8f3ee"/><ellipse cx="150" cy="262" rx="76" ry="11" fill="#ded4cc"/><path d="M110 77 C110 55 140 55 140 77 L140 119" stroke="#d8ad5f" fill="none" stroke-width="8"/><path d="M160 77 C160 55 190 55 190 77 L190 119" stroke="#d8ad5f" fill="none" stroke-width="8"/><path d="M121 151 l14 29 32 4-24 21 7 31-29-16-29 16 7-31-24-21 32-4z" fill="${v}" stroke="#b2874d" stroke-width="4" transform="translate(0,-20)"/><path d="M176 151 l14 29 32 4-24 21 7 31-29-16-29 16 7-31-24-21 32-4z" fill="${v}" stroke="#b2874d" stroke-width="4" transform="translate(0,-20)"/></svg>`;
  if(type==='palette') return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f8eff0"/><ellipse cx="150" cy="260" rx="85" ry="12" fill="#ddcfd1"/><rect x="62" y="70" width="176" height="155" rx="26" fill="#dfb9c1"/><rect x="76" y="84" width="148" height="112" rx="18" fill="#f6efee"/><circle cx="104" cy="115" r="13" fill="#d7a6b3"/><circle cx="150" cy="115" r="13" fill="#b88898"/><circle cx="196" cy="115" r="13" fill="#d5b3b9"/><circle cx="104" cy="160" r="13" fill="#af7c91"/><circle cx="150" cy="160" r="13" fill="${v}"/><circle cx="196" cy="160" r="13" fill="#e0c7bd"/></svg>`;
  if(type==='serum') return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f7eff2"/><ellipse cx="150" cy="263" rx="78" ry="11" fill="#ddd0d4"/><rect x="106" y="118" width="88" height="120" rx="22" fill="#efe4d6"/><rect x="111" y="98" width="78" height="27" rx="10" fill="${v}"/><rect x="132" y="63" width="36" height="42" rx="9" fill="#8e7180"/><path d="M128 152h44" stroke="#b0949d" stroke-width="4"/><path d="M132 171h36" stroke="#d2b0ba" stroke-width="4"/></svg>`;
  if(type==='cardigan') return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f8f1ee"/><ellipse cx="150" cy="260" rx="82" ry="11" fill="#ded2cf"/><path d="M102 85 Q120 60 150 76 Q180 60 198 85 L228 234 Q150 255 72 234 Z" fill="${v}"/><path d="M150 80V234 M121 108H179 M109 145H191 M100 183H200" stroke="#a07e87" stroke-width="3" opacity=".6"/></svg>`;
  if(type==='pajamas') return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f5f0ec"/><ellipse cx="150" cy="260" rx="86" ry="12" fill="#ddd3ce"/><path d="M112 80 L149 112 L188 80 L205 132 L185 149 L177 218 L123 218 L115 149 L95 132 Z" fill="${v}"/><path d="M111 81 Q125 65 140 78 L150 91 L160 78 Q175 65 189 81" fill="none" stroke="#b4959e" stroke-width="4"/><path d="M103 154 L84 240 M197 154 L216 240" stroke="#b4959e" stroke-width="12" stroke-linecap="round"/></svg>`;
  if(type==='brush') return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f3eef5"/><ellipse cx="150" cy="260" rx="90" ry="12" fill="#d8d0dc"/><rect x="133" y="73" width="34" height="152" rx="17" fill="#e5d0d7"/><rect x="115" y="44" width="70" height="44" rx="22" fill="#c6aec8"/><path d="M115 56 Q150 12 185 56" fill="#8e788f" opacity=".7"/></svg>`;
  if(type==='necklace') return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f8f3ee"/><ellipse cx="150" cy="260" rx="75" ry="10" fill="#ded4ca"/><path d="M76 82 Q150 188 224 82" fill="none" stroke="#d8ad5f" stroke-width="5"/><circle cx="150" cy="151" r="33" fill="#d8ad5f"/><text x="150" y="166" text-anchor="middle" font-size="33" font-family="serif" fill="#fff">Q</text></svg>`;
  return `<svg ${common}><rect width="300" height="300" rx="30" fill="#f6eeee"/><circle cx="150" cy="145" r="72" fill="${v}"/></svg>`;
}

function money(v){ return new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0}).format(v); }

// ===== FOTOS REALES =====
function productImage(p, compact=false){
  const sizeClass = compact ? ' compact' : '';
  return `<img class=\"catalog-photo${sizeClass}\" src=\"${p.image}\" alt=\"${p.name}\" loading=\"lazy\" decoding=\"async\" />`;
}

// ===== RENDER PRODUCTOS =====
function renderProducts(){
  const grid=document.getElementById('productGrid');
  const empty=document.getElementById('emptyState');
  const active=document.getElementById('activeFilter');
  let list=products.filter(p=>{
    const matchFilter = currentFilter==='all' || (currentFilter==='ofertas' ? p.discount || p.badge==='Nuevo' : p.category===currentFilter);
    const q=currentQuery.trim().toLowerCase();
    const matchQuery = !q || `${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(q);
    return matchFilter && matchQuery;
  });
  if(currentFilter!=='all'){
    const label=currentFilter==='ofertas'?'Ofertas':currentFilter[0].toUpperCase()+currentFilter.slice(1);
    active.textContent=`Mostrando: ${label}`; active.hidden=false;
  } else if(currentQuery){
    active.textContent=`Buscando: “${currentQuery}”`; active.hidden=false;
  } else active.hidden=true;
  grid.innerHTML=list.map(productCard).join('');
  empty.hidden=list.length>0;
  bindProductEvents();
}

function productCard(p){
  return `<article class="product-card" data-product-id="${p.id}">
    <div class="product-image">
      ${p.badge?`<span class="badge">${p.badge}</span>`:''}
      <button class="quick" data-detail="${p.id}" aria-label="Ver ${p.name}">♡</button>
      ${productImage(p)}
    </div>
    <div class="product-meta">
      <div><h3>${p.name}</h3><div class="brand-name">${p.brand}</div></div>
      <div class="price">${money(p.price)}</div>
      <div class="card-actions"><button class="add-btn" data-add="${p.id}">Agregar al carrito</button><button class="detail-btn" data-detail="${p.id}" aria-label="Ver detalle">+</button></div>
    </div>
  </article>`;
}

function bindProductEvents(){
  document.querySelectorAll('[data-add]').forEach(btn=>btn.addEventListener('click',()=>addToCart(Number(btn.dataset.add),0)));
  document.querySelectorAll('[data-detail]').forEach(btn=>btn.addEventListener('click',()=>openModal(Number(btn.dataset.detail),0)));
}

// ===== FILTROS Y BUSCADOR =====
function setFilter(filter){
  currentFilter=filter; document.querySelectorAll('.nav-link').forEach(b=>b.classList.toggle('active',b.dataset.filter===filter)); renderProducts();
}
document.getElementById('categoryNav').addEventListener('click',e=>{const b=e.target.closest('[data-filter]'); if(b) setFilter(b.dataset.filter);});
document.querySelectorAll('[data-filter-trigger]').forEach(b=>b.addEventListener('click',()=>{setFilter(b.dataset.filterTrigger); document.getElementById('productos').scrollIntoView({behavior:'smooth',block:'start'});}));
document.querySelector('[data-scroll-products]').addEventListener('click',()=>document.getElementById('productos').scrollIntoView({behavior:'smooth'}));
document.getElementById('clearFilters').addEventListener('click',()=>{currentQuery=''; document.getElementById('searchInput').value=''; setFilter('all');});
document.getElementById('searchBtn').addEventListener('click',()=>{currentQuery=document.getElementById('searchInput').value; renderProducts(); document.getElementById('productos').scrollIntoView({behavior:'smooth'});});
document.getElementById('searchInput').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('searchBtn').click();});

// ===== CARRUSEL HERO =====
function showHero(i){
  heroIndex=(i+3)%3; document.querySelectorAll('.hero-slide').forEach((s,n)=>s.classList.toggle('active',n===heroIndex)); document.querySelectorAll('.dot').forEach((d,n)=>d.classList.toggle('active',n===heroIndex));
}
function restartHero(){clearInterval(heroTimer); heroTimer=setInterval(()=>showHero(heroIndex+1),5500)}
document.querySelector('.hero-prev').addEventListener('click',()=>{showHero(heroIndex-1);restartHero()});
document.querySelector('.hero-next').addEventListener('click',()=>{showHero(heroIndex+1);restartHero()});
document.querySelectorAll('.dot').forEach(d=>d.addEventListener('click',()=>{showHero(Number(d.dataset.slide));restartHero()}));
restartHero();

// ===== CARRITO =====
function addToCart(id, variantIndex=0){
  const p=products.find(x=>x.id===id), variant=p.variants[variantIndex] || p.variants[0];
  const key=`${id}-${variant[0]}`;
  const existing=cart.find(i=>i.key===key);
  if(existing) existing.qty+=1; else cart.push({key,id,variant:variant[0],color:variant[1],qty:1});
  persistCart(); renderCart(); showToast(`${p.name} agregado al carrito`);
}
function changeQty(key,delta){const item=cart.find(i=>i.key===key); if(!item)return; item.qty+=delta; if(item.qty<=0)cart=cart.filter(i=>i.key!==key); persistCart();renderCart();}
function removeItem(key){cart=cart.filter(i=>i.key!==key);persistCart();renderCart();}
function persistCart(){localStorage.setItem('queens-cart-v2',JSON.stringify(cart));}
function cartCount(){return cart.reduce((n,i)=>n+i.qty,0)}
function renderCart(){
  const items=document.getElementById('cartItems'), empty=document.getElementById('cartEmpty');
  const count=cartCount(); document.getElementById('cartCount').textContent=count;document.getElementById('drawerCount').textContent=count;
  empty.hidden=count>0;
  items.innerHTML=cart.map(item=>{const p=products.find(x=>x.id===item.id); if(!p)return ''; return `<div class="cart-row"><div class="cart-thumb">${productImage(p,true)}</div><div class="cart-info"><h4>${p.name}</h4><p>${item.variant}</p><div class="qty"><button data-qty="${item.key}" data-delta="-1">−</button><strong>${item.qty}</strong><button data-qty="${item.key}" data-delta="1">+</button></div><button class="remove" data-remove="${item.key}">Eliminar</button></div><div class="cart-price">${money(p.price*item.qty)}</div></div>`}).join('');
  items.querySelectorAll('[data-qty]').forEach(b=>b.addEventListener('click',()=>changeQty(b.dataset.qty,Number(b.dataset.delta))));
  items.querySelectorAll('[data-remove]').forEach(b=>b.addEventListener('click',()=>removeItem(b.dataset.remove)));
  const total=cart.reduce((sum,i)=>{const p=products.find(x=>x.id===i.id);return sum+p.price*i.qty},0);document.getElementById('subtotal').textContent=money(total);
}
function openCart(){document.getElementById('cartDrawer').classList.add('open');document.getElementById('overlay').classList.add('open');document.body.style.overflow='hidden'}
function closeCart(){document.getElementById('cartDrawer').classList.remove('open');document.getElementById('overlay').classList.remove('open');document.body.style.overflow=''}
document.getElementById('cartBtn').addEventListener('click',openCart);document.getElementById('closeCart').addEventListener('click',closeCart);document.getElementById('overlay').addEventListener('click',closeCart);

document.getElementById('checkoutBtn').addEventListener('click',()=>showToast(cart.length?'Demo: conectá aquí tu checkout/mercado pago.':'Tu carrito está vacío.'));

// ===== MODAL DE PRODUCTO =====
function openModal(id,activeVariant=0){
  const p=products.find(x=>x.id===id); const modal=document.getElementById('productModal');
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
  function draw(idx){
    const v=p.variants[idx];
    document.getElementById('modalContent').innerHTML=`<div class="modal-grid"><div class="modal-art">${productImage(p)}</div><div class="modal-info"><p class="eyebrow">${p.brand}</p><h2>${p.name}</h2><p class="modal-desc">${p.desc}</p><div class="modal-price">${money(p.price)}</div>${p.variants.length>1?`<div class="choice-label">Variantes</div><div class="variant-row">${p.variants.map((x,i)=>`<button class="variant-btn ${i===idx?'active':''}" data-var="${i}">${x[0]}</button>`).join('')}</div>`:''}<button class="btn btn-dark full" id="modalAdd">Agregar al carrito</button></div></div>`;
    document.querySelectorAll('[data-var]').forEach(b=>b.addEventListener('click',()=>draw(Number(b.dataset.var)))); document.getElementById('modalAdd').addEventListener('click',()=>{addToCart(p.id,idx); closeModal();});
  }
  draw(activeVariant);
}
function closeModal(){const modal=document.getElementById('productModal');modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
document.getElementById('modalClose').addEventListener('click',closeModal);document.getElementById('productModal').addEventListener('click',e=>{if(e.target.id==='productModal')closeModal()});
window.addEventListener('keydown',e=>{if(e.key==='Escape'){closeCart();closeModal()}});

// ===== TOAST =====
let toastTimer;function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2200)}

// ===== INICIALIZACIÓN =====
renderProducts();renderCart();
