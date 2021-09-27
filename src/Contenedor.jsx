import React  from 'react';
import Estudiante from './Estudiante';

const estudiantes = [
    {
        "id" : 1,
        "nombre": "Lionel Andrés Messi Cuccittini",
        "edad" : 34,
        "imagenes":"https://pbs.twimg.com/media/E8dZrUvXoAE-mZQ.png" ,
        "dorsal":"1",
        "posicion":"2"
    },
    {"id" : 2,
        "nombre": "Neymar da Silva Santos Júnior",
        "edad" : 29,
"imagenes":"https://1vs1-7f65.kxcdn.com/img/players/players/neymar-da-silva-santos-junior_9732_212-ub-800-mobile.png",
    
"dorsal":"",
        "posicion":""
    },
    {"id" : 3,
        "nombre": "Kylian Mbappé",
        "edad" : 22,
        "imagenes":"https://clipart.info/images/ccovers/1630349437kylian-mbappe-png-psg-one-zero.png",
        "dorsal":"",
        "posicion":""
    },
    {"id" : 4,
        "nombre": "Marco Verratti",
        "edad" : 28,
        "imagenes":"https://1vs1-7f65.kxcdn.com/img/players/players/marco-verratti_17782_212-ub-800-mobile.png",
        "dorsal":"",
        "posicion":""
    },
    {"id" : 5,
        "nombre": "Georginio Gregion Emile Wijnaldum",
        "edad" : 30,
        "imagenes":"https://images.psg.media/media/27044/card_21-22_kimpembe.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
        "dorsal":"",
        "posicion":""
    },
    {"id" : 6,
        "nombre": "Ander Herrera",
        "edad" : 32,
        "imagenes":"https://s.hs-data.com/bilder/spieler/gross/135452.jpg",
        "dorsal":"",
        "posicion":""
    },
    {"id" : 7,
        "nombre": "Abdou-Lakhad Diallo",
        "edad" : 25,
        "imagenes":"https://s.hs-data.com/bilder/spieler/gross/265597.jpg",
        "dorsal":"",
        "posicion":""
    },
    {"id" : 8,
        "nombre": "Presnel Kimpembe",
        "edad" : 26,
        "imagenes":"https://s.hs-data.com/bilder/spieler/gross/227373.jpg?fallback=png",
        "dorsal":"",
        "posicion":""
    },
    {"id" : 9,
        "nombre": "Keylor Antonio Navas Gamboa",
        "edad" : 34,
        "imagenes":"https://1vs1-7f65.kxcdn.com/img/players/players/Keylor-Navas_18500_212-ub-800-mobile.png",
        "dorsal":"",
        "posicion":""
    },
    {"id" : 10,
        "nombre": "Idrissa Gana Gueye",
        "edad" : 31,
        "imagenes":"https://1vs1-7f65.kxcdn.com/img/players/players/idrissa-gana-gueye_7285_212-ub-800-mobile.png",
        "dorsal":"",
        "posicion":""
    }
]

const Contenedor = () => (
    <>
         {
            estudiantes.map ( c => <Estudiante nombre = { c.nombre } imagenes={c.imagenes} id = {c.id}/>)
         }
    </>
);

export default Contenedor;