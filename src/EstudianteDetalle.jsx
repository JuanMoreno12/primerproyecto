import React from "react";

const estudiantes = [
    {
        "id" : 1,
        "nombre": "Lionel Andrés Messi Cuccittini",
        "edad" : 34,
        "imagenes":"https://pbs.twimg.com/media/E8dZrUvXoAE-mZQ.png" ,
        "dorsal":30,
        "posicion":"Delantero Centrocampista"
    },
    {"id" : 2,
        "nombre": "Neymar da Silva Santos Júnior",
        "edad" : 29,
        "imagenes":"https://1vs1-7f65.kxcdn.com/img/players/players/neymar-da-silva-santos-junior_9732_212-ub-800-mobile.png",
        "dorsal":10,
        "posicion":"Delantero"
    },
    {"id" : 3,
        "nombre": "Kylian Mbappé",
        "edad" : 22,
        "imagenes":"https://clipart.info/images/ccovers/1630349437kylian-mbappe-png-psg-one-zero.png",
        "dorsal":7,
        "posicion":"Delantero"
    },
    {"id" : 4,
        "nombre": "Marco Verratti",
        "edad" : 28,
        "imagenes":"https://1vs1-7f65.kxcdn.com/img/players/players/marco-verratti_17782_212-ub-800-mobile.png",
        "dorsal":6,
        "posicion":"Centrocampista​"
    },
    {"id" : 5,
        "nombre": "Georginio Gregion Emile Wijnaldum",
        "edad" : 30,
        "imagenes":"https://images.psg.media/media/27044/card_21-22_kimpembe.png?center=0.5,0.5&mode=crop&width=400&height=600&quality=75",
        "dorsal":18,
        "posicion":"Centrocampista"
    },
    {"id" : 6,
        "nombre": "Ander Herrera",
        "edad" : 32,
        "imagenes":"https://s.hs-data.com/bilder/spieler/gross/135452.jpg",
        "dorsal":21,
        "posicion":"Centrocampista"
    },
    {"id" : 7,
        "nombre": "Abdou-Lakhad Diallo",
        "edad" : 25,
        "imagenes":"https://s.hs-data.com/bilder/spieler/gross/265597.jpg",
        "dorsal":22,
        "posicion":"Defensa"
    },
    {"id" : 8,
        "nombre": "Presnel Kimpembe",
        "edad" : 26,
        "imagenes":"https://s.hs-data.com/bilder/spieler/gross/227373.jpg?fallback=png",
        "dorsal":3,
        "posicion":"Defensa"
    },
    {"id" : 9,
        "nombre": "Keylor Antonio Navas Gamboa",
        "edad" : 34,
        "imagenes":"https://1vs1-7f65.kxcdn.com/img/players/players/Keylor-Navas_18500_212-ub-800-mobile.png",
        "dorsal":1,
        "posicion":"Portero"
    },
    {"id" : 10,
        "nombre": "Idrissa Gana Gueye",
        "edad" : 31,
        "imagenes":"https://1vs1-7f65.kxcdn.com/img/players/players/idrissa-gana-gueye_7285_212-ub-800-mobile.png",
        "dorsal":27,
        "posicion":"Centrocampista"
    }
]

const EstudianteDetalle = ({match}) => {
    const estudiante = estudiantes.filter(c => c.id === parseInt(match.params.id))[0];

    return(
        <>
            {
                estudiante ? (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {estudiante.nombre}
                            </h5>
                            <p className="card-text">Edad: {estudiante.edad}.</p>
                            <img className="card-text" src= {estudiante.imagenes} border="1"  width="200" height="200" />

                            <p className="card-text">Dorsal: {estudiante.dorsal}.</p>
                            <p className="card-text">Posicion: {estudiante.posicion}.</p>
                        </div>
                    </div>
                ):
                <h1>El Id no esta registrado.</h1>
            }
            <a href={`/estudiantes`}>Ver todos</a>
        </>
    );
};

export default EstudianteDetalle;