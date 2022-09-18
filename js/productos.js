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
    },
    {
        "id":4,
        "nombre": "Abbey Road",
        "artista": "The Beatles",
        "precio": 4300,
        "img": "beatlesabbey.jpg",
    },
    {
        "id":5,
        "nombre": "Help!",
        "artista": "The Beatles",
        "precio": 2100,
        "img": "beatleshelp.jpg",
        "destacado" : 0
    },
    {
        "id":6,
        "nombre": "Harry's House",
        "artista": "Harry Styles",
        "precio": 2499,
        "img": "harryshh.jpg",
        "destacado" : 0
    },
    {
        "id":7,
        "nombre": "Happier Than Ever",
        "artista": "Billie Eilish",
        "precio": 3299,
        "img": "billyehte.jpg",
        "destacado" : 0
    },
    {
        "id":8,
        "nombre": "Nevermind",
        "artista": "Nirvana",
        "precio": 1999,
        "img": "nirvananevermind.jpg",
        "destacado" : 0
    },
    {
        "id":9,
        "nombre": "OK Computer",
        "artista": "Radiohead",
        "precio": 2700,
        "img": "radioheadokc.jpg",
        "destacado" : 0
    },
    {
        "id":10,
        "nombre": "Honestly, Nevermind",
        "artista": "Drake",
        "precio": 4599,
        "img": "drakehonev.jpg",
        "destacado" : 0
    },
    {
        "id":11,
        "nombre": "Some Girls",
        "artista": "The Rolling Stones",
        "precio": 2340,
        "img": "trssomegirls.jpg",
        "destacado" : 0
    },
    {
        "id":12,
        "nombre": "Sticky Fingers",
        "artista": "The Rolling Stones",
        "precio": 2650,
        "img": "trsstickyfingers.jpg",
        "destacado" : 0
    },
    {
        "id":13,
        "nombre": "There'd Better Be A Mirrorball",
        "artista": "Arctic Monkeys",
        "precio": 1300,
        "img": "mirrorball.jpg",
        "destacado" : 0
    },
    {
        "id": 14,
        "nombre": "Definitely Maybe",
        "artista": "Oasis",
        "precio": 3300,
        "img": "defomaybe.jpg",
        "destacado" : 1
    },
    {
        "id":15,
        "nombre": "Be Here Now",
        "artista": "Oasis",
        "precio": 4400,
        "img": "bhnow.jpg",
        "destacado" : 1
    },
    {
        "id":16,
        "nombre": "Un Verano Sin Ti",
        "artista": "Bad Bunny",
        "precio": 4590,
        "img": "veranosinti.jpg",
        "destacado" : 0
    },
    {
        "id":17,
        "nombre": "Operation: Doomsday",
        "artista": "MF DOOM",
        "precio": 1950,
        "img": "opdoom.jpg",
        "destacado" : 0
    },
    {
        "id":18,
        "nombre": "The New Abnormal",
        "artista": "The Strokes",
        "precio": 2130,
        "img": "thenewabnormal.jpg",
        "destacado" : 0
    },
    {
        "id":19,
        "nombre": "Appetite For Destruction",
        "artista": "Guns 'N' Roses",
        "precio": 5000,
        "img": "apetite.jpg",
        "destacado" : 0
    },
    {
        "id":20,
        "nombre": "Tranquility Base Hotel & Casino",
        "artista": "Arctic Monkeys",
        "precio": 4020,
        "img": "tranquility.jpg",
        "destacado" : 0
    },
];