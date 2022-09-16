class Productos{
    constructor(id,nombre,artista,precio,img,featured){
        this.id = id;
        this.nombre = nombre;
        this.artista = artista;
        this.precio = precio;
        this.img = img;
        this.featured = featured;
    }
}

const productos = [

    {
        "id": 0,
        "nombre": "AM",
        "artista": "Arctic Monkeys",
        "precio": 1500,
        "stock": 50,
        "img": "amam.jpg",
        "destacado": 0
    },
    {
        "id": 1,
        "nombre": "Favourite Worst Nightmare",
        "artista": "Arctic Monkeys",
        "precio": 1900,
        "stock": 50,
        "img": "amfwn.jpg",
        "destacado": 0
    },

    {
        "id": 2,
        "nombre": "Knebworth 1996",
        "artista": "Oasis",
        "precio": 2000,
        "stock": 50,
        "img": "oasisknebworth.jpg",
        "destacado": 0
    },
    {
        "id": 3,
        "nombre": "(What's The Story) Morning Glory?",
        "artista": "Oasis",
        "precio": 2500,
        "stock": 50,
        "img": "oasiswtsmg.jpg",
        "destacado": 1
    }
];