export interface MenuItem {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    categoria: string; 
    imagem: string;
}

export const MENU_ITEMS: MenuItem[] = [
  // --- SUSHI ---
  {
    id: 1,
    nome: "Sushi Especial",
    preco: 45.90,
    descricao: "Combo com 16 peças variadas.",
    categoria: "Sushi",
    imagem: "https://i.pinimg.com/736x/82/8c/8f/828c8f06d7c8c66b67198aa7d71978ba.jpg"
  },
  {
    id: 2,
    nome: "Temaki de Salmão",
    preco: 28.90,
    descricao: "Temaki fresco com salmão e cream cheese.",
    categoria: "Sushi",
    imagem: "https://assets.unileversolutions.com/recipes-v2/215507.jpg?imwidth=2000"
  },
  {
    id: 3,
    nome: "Uramaki Califórnia",
    preco: 32.90,
    descricao: "Rolinho com kani, pepino e manga.",
    categoria: "Sushi",
    imagem: "https://tse2.mm.bing.net/th/id/OIP.hNl7LTOZavM08J-nmGC7qwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 4,
    nome: "Sashimi de Salmão",
    preco: 39.90,
    descricao: "10 fatias de salmão fresco.",
    categoria: "Sushi",
    imagem: "https://th.bing.com/th/id/R.bfee6aca3ac365985dc71f5cd2219a95?rik=1pm14Dx%2bkHv0tA&pid=ImgRaw&r=0"
  },
  {
    id: 5,
    nome: "Hot Roll",
    preco: 29.90,
    descricao: "Sushi empanado crocante com cream cheese.",
    categoria: "Sushi",
    imagem: "https://tse1.mm.bing.net/th/id/OIP._A8_W6AA7STz8cQL1k5nngHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
  },

  // --- FAST FOOD ---
  {
    id: 6,
    nome: "Hambúrguer Smash",
    preco: 29.90,
    descricao: "Carne smash, cheddar e pão brioche.",
    categoria: "Fast Food",
    imagem: "https://tse4.mm.bing.net/th/id/OIP.FToB3vlW5fujkGsP7MEr5QHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 7,
    nome: "Duplo Cheddar",
    preco: 34.90,
    descricao: "Dois hambúrgueres e cheddar cremoso.",
    categoria: "Fast Food",
    imagem: "https://tse4.mm.bing.net/th/id/OIP.g_h1Jzq--jHB-VT12o0ZyAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 8,
    nome: "Fritas com Cheddar e Bacon",
    preco: 18.90,
    descricao: "Batata crocante com cobertura especial.",
    categoria: "Fast Food",
    imagem: "https://tse2.mm.bing.net/th/id/OIP.Gb0X8W42IdcgEwS1ubEcRAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 9,
    nome: "Milkshake de Chocolate",
    preco: 16.90,
    descricao: "Milkshake cremoso com calda de chocolate.",
    categoria: "Fast Food",
    imagem: "https://th.bing.com/th/id/R.b9cbfb1347f9de5cbbe9682e2fe2f968?rik=aTB2gQlpnLKSAw&pid=ImgRaw&r=0"
  },
  {
    id: 10,
    nome: "Cachorro-Quente Tradicional",
    preco: 15.90,
    descricao: "Pão macio, salsicha, batata palha e molho.",
    categoria: "Fast Food",
    imagem: "https://th.bing.com/th/id/OIP.M5WdkRQpBwDdXOYSSTmclwHaGH?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  },

  // --- ITALIANA ---
  {
    id: 11,
    nome: "Pizza Margherita",
    preco: 39.90,
    descricao: "Molho artesanal, mussarela e manjericão.",
    categoria: "Italiana",
    imagem: "https://tse4.mm.bing.net/th/id/OIP.86Y1g1N1ds1WeREt8NLxEAHaFp?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 12,
    nome: "Pizza Quatro Queijos",
    preco: 49.90,
    descricao: "Mussarela, gorgonzola, parmesão e catupiry.",
    categoria: "Italiana",
    imagem: "https://tse1.mm.bing.net/th/id/OIP.8RJNWF8Yr1BtDPwTMO4MAwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 13,
    nome: "Lasanha à Bolonhesa",
    preco: 42.90,
    descricao: "Lasanha tradicional com molho bolonhesa.",
    categoria: "Italiana",
    imagem: "https://cdn.casaeculinaria.com/wp-content/uploads/2023/12/10120623/Lasanha-a-bolonhesa-com-carne-moida.webp"
  },
  {
    id: 14,
    nome: "Nhoque ao Sugo",
    preco: 32.50,
    descricao: "Nhoque artesanal com molho de tomate.",
    categoria: "Italiana",
    imagem: "https://tse1.mm.bing.net/th/id/OIP.ayMYC541c19O5D7b9IJW7AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 15,
    nome: "Spaghetti Carbonara",
    preco: 38.90,
    descricao: "Carbonara clássico com pancetta.",
    categoria: "Italiana",
    imagem: "https://tse2.mm.bing.net/th/id/OIP.2cyyfUTfpeS6PE31UjyGfwHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3"
  },

  // --- BRASILEIRA ---
  {
    id: 16,
    nome: "Feijoada Completa",
    preco: 49.90,
    descricao: "Acompanha arroz, farofa e torresmo.",
    categoria: "Brasileira",
    imagem: "https://th.bing.com/th/id/R.4b3d0a800f04f8fdf76295d7cb56f57f?rik=lKiaJikP6mAm5A&pid=ImgRaw&r=0"
  },
  {
    id: 17,
    nome: "Tropeiro Mineiro",
    preco: 34.90,
    descricao: "Feijão tropeiro, linguiça e ovo.",
    categoria: "Brasileira",
    imagem: "https://tse2.mm.bing.net/th/id/OIP._cNwqFe89yxUdeVTS1cIvAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 18,
    nome: "Parmegiana de Frango",
    preco: 41.90,
    descricao: "Frango empanado com molho e queijo.",
    categoria: "Brasileira",
    imagem: "https://i.pinimg.com/originals/cf/a1/bf/cfa1bfb721761c15ae342897524ccbd1.jpg"
  },
  {
    id: 19,
    nome: "Escondidinho de Carne Seca",
    preco: 33.90,
    descricao: "Carne seca desfiada com purê de mandioca.",
    categoria: "Brasileira",
    imagem: "https://th.bing.com/th/id/R.098553f7339a22d753003fd10b5066cb?rik=L09PzV%2ff7Pv5CQ&riu=http%3a%2f%2fculinaria.culturamix.com%2fblog%2fwp-content%2fgallery%2fescondidinho-de-carne-seca2%2fescondidinho-de-carne-seca-4.jpg&ehk=blcbtsJS%2bYvKZorc1MVwJf1H8C7A%2bNaBOSAE%2boz1FuY%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 20,
    nome: "Bife Acebolado",
    preco: 29.90,
    descricao: "Bife grelhado com cebola caramelizada.",
    categoria: "Brasileira",
    imagem: "https://tse1.explicit.bing.net/th/id/OIP.th_UDvphqugQ6NUVxwhlowHaE4?rs=1&pid=ImgDetMain&o=7&rm=3"
  },

  // --- SOBREMESAS ---
  {
    id: 21,
    nome: "Açaí na Tigela",
    preco: 18.00,
    descricao: "Açaí com banana, morango e granola.",
    categoria: "Sobremesas",
    imagem: "https://tse2.mm.bing.net/th/id/OIP.CdRYb_qzkYTuf4ugkXz8_QHaD4?w=1200&h=630&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 22,
    nome: "Brownie",
    preco: 17.90,
    descricao: "Brownie quente",
    categoria: "Sobremesas",
    imagem: "https://tse1.explicit.bing.net/th/id/OIP.QX-Lg8GlOhFjIvqiU8KOgwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 23,
    nome: "Pudim de Leite",
    preco: 12.90,
    descricao: "Pudim tradicional caramelizado.",
    categoria: "Sobremesas",
    imagem: "https://tse1.mm.bing.net/th/id/OIP.qdqqIfNWwoWdQu7csGEXnwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 24,
    nome: "Mousse de Maracujá",
    preco: 9.90,
    descricao: "Mousse leve e gelado.",
    categoria: "Sobremesas",
    imagem: "https://th.bing.com/th/id/OIP.LGa_grsZQ-PXPncnL2HBkQHaE7?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 25,
    nome: "Torta de Limão",
    preco: 14.90,
    descricao: "Torta cremosa com raspas de limão.",
    categoria: "Sobremesas",
    imagem: "https://tse4.mm.bing.net/th/id/OIP.cnpuWIBDk8ugVgWzPhFM2gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
  }
];
