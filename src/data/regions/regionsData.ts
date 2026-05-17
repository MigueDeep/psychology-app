import northImage1 from '../../assets/north/image-1.jpg';
import northImage2 from '../../assets/north/image-2.jpg';
import audio1 from '../../assets/north/audio-1.mp3';

export const regionsData = {
  norte: {
    block1: {
      videoSrc: "https://www.youtube.com/embed/GtYhCmpnTy0?si=dBbfeq4J9LCQYMNz",
      audioSrc: audio1,
      audioTitle: "Polka Norteña - Acordeón y Bajo Sexto",
      quotes: ["El trabajo todo lo vence", "Donde comienza la patria"],
      landscapes: [northImage1, northImage2]
    },
    block2: {
      culture: {
        traditions: ["Día de Muertos (variantes locales)", "Feria Nacional de San Marcos", "Cabalgatas"],
        clothing: "Vestimenta vaquera, camisa a cuadros, pantalón de mezclilla, sombrero, botas",
        music: "Norteña, banda sinaloense, corridos, polka",
        customs: "Reuniones familiares en torno a la carne asada, afición por el béisbol y jaripeos",
        images: ["", ""],
        videos: [""]
      },
      gastronomy: {
        dishes: ["Cabrito asado", "Machaca con huevo", "Burritos", "Aguachile", "Cortes de carne"],
        ingredients: ["Carne de res", "Trigo (tortillas de harina)", "Frijoles", "Chiltepín"],
        images: ["", ""],
        videos: ["", ""]
      },
      languages: {
        peoples: ["Tarahumaras (Rarámuris)", "Yaquis", "Mayos", "Seris"],
        languages: ["Tarahumara", "Yaqui", "Seri"],
        facts: ["Los Rarámuris son mundialmente famosos por su capacidad de correr distancias ultra largas en sandalias."],
        images: ["", ""],
        videos: []
      },
      economy: {
        text: "Fuerte industria manufacturera y maquiladora, agricultura de exportación, ganadería extensiva, minería y comercio transfronterizo.",
        images: ["", ""],
        videos: []
      }
    },
    block3: {
      gallery360: ["", ""],
      landscapes: ["", "", ""],
      crafts: ["", ""],
      miniVideos: {
        dances: ["", ""],
        festivals: ["", ""],
        music: ["", ""]
      }
    },
    block4: {
      questions: [
        {
          question: "¿Cuál es uno de los platillos más emblemáticos del norte?",
          options: ["Ceviche", "Cabrito", "Cochinita Pibil", "Mole"],
          correctAnswer: 1
        },
        {
          question: "¿Qué pueblo originario es famoso por sus corredores de larga distancia?",
          options: ["Mayas", "Zapotecos", "Tarahumaras", "Huicholes"],
          correctAnswer: 2
        },
        {
          question: "¿Qué actividad económica destaca en el norte de México?",
          options: ["Pesca intensiva", "Industria y ganadería", "Minería de jade", "Cultivo de café"],
          correctAnswer: 1
        },
        {
          question: "¿Qué maravilla natural ubicada en Chihuahua es más extensa y profunda que el Gran Cañón?",
          options: ["Barrancas del Cobre", "Cañón del Sumidero", "Huasteca Potosina", "Grutas de Cacahuamilpa"],
          correctAnswer: 0
        },
        {
          question: "¿Qué instrumentos son la base de la música norteña tradicional?",
          options: ["Trompeta y violín", "Marimba y güiro", "Guitarra y arpa", "Acordeón y bajo sexto"],
          correctAnswer: 3
        },
        {
          question: "¿Cómo se llama el famoso tren de pasajeros que recorre el norte de México?",
          options: ["El Maya", "El Tapatío", "El Chepe", "El Insurgente"],
          correctAnswer: 2
        }
      ]
    }
  },
  centro: {
    block1: {
      videoSrc: "",
      audioSrc: "",
      audioTitle: "Son de la Negra - Mariachi Tradicional",
      quotes: ["El ombligo de la luna", "La cuna del mariachi y el tequila", "Donde los hombres se convierten en dioses"],
      landscapes: ["", "", ""]
    },
    block2: {
      culture: {
        traditions: ["Día de Muertos en Mixquic y Pátzcuaro", "Grito de Independencia", "Danza de los Viejitos"],
        clothing: "Traje de Charro, vestido de China Poblana, indumentaria purépecha bordada",
        music: "Mariachi, Huapango arribeño, Son jalisciense, Pirekuas",
        customs: "Paseos en trajineras (Xochimilco), tianguis dominicales, ofrendas monumentales",
        images: ["", ""],
        videos: []
      },
      gastronomy: {
        dishes: ["Chiles en Nogada", "Pozole", "Tacos al Pastor", "Carnitas", "Barbacoa"],
        ingredients: ["Maíz", "Chile poblano", "Nopal", "Agave", "Frijol"],
        images: [],
        videos: []
      },
      languages: {
        peoples: ["Nahuas", "Purépechas", "Otomiés", "Mazahuas"],
        languages: ["Náhuatl", "Purépecha", "Otomí"],
        facts: ["El náhuatl era la lengua principal del Imperio Azteca y muchas palabras actuales como 'tomate' o 'chocolate' provienen de ella.", "La zona central concentra la mayor cantidad de sitios declarados Patrimonio de la Humanidad en el país."],
        images: [],
        videos: []
      },
      economy: {
        text: "Es el centro político y financiero del país. Destaca su industria automotriz, el sector tecnológico, los servicios, el comercio y la agricultura en el Bajío.",
        images: [],
        videos: []
      }
    },
    block3: {
      gallery360: [], landscapes: [], crafts: [],
      miniVideos: { dances: [], festivals: [], music: [] }
    },
    block4: {
      questions: [
        {
          question: "¿En qué estado se originó la música del Mariachi?",
          options: ["Veracruz", "Jalisco", "Michoacán", "Puebla"],
          correctAnswer: 1
        },
        {
          question: "¿Qué lengua indígena, hablada por los Aztecas, es la más presente en el centro de México?",
          options: ["Maya", "Zapoteco", "Náhuatl", "Otomí"],
          correctAnswer: 2
        },
        {
          question: "¿Qué flor es el símbolo indiscutible de los altares de Día de Muertos?",
          options: ["Rosa", "Girasol", "Nochebuena", "Cempasúchil"],
          correctAnswer: 3
        },
        {
          question: "¿Qué zona arqueológica del centro de México alberga las Pirámides del Sol y la Luna?",
          options: ["Chichén Itzá", "Teotihuacán", "Palenque", "Monte Albán"],
          correctAnswer: 1
        },
        {
          question: "¿Qué platillo típico poblano fue creado por monjas y lleva los colores de la bandera mexicana?",
          options: ["Chiles en Nogada", "Enchiladas Suizas", "Pozole Verde", "Tacos al Pastor"],
          correctAnswer: 0
        },
        {
          question: "¿Qué lago en Michoacán es mundialmente famoso por su tradicional celebración nocturna de Día de Muertos?",
          options: ["Lago de Chapala", "Laguna de Bacalar", "Lago de Pátzcuaro", "Laguna de Catemaco"],
          correctAnswer: 2
        }
      ]
    }
  },
  sur: {
    block1: {
      videoSrc: "",
      audioSrc: "",
      audioTitle: "Marimba Chiapaneca y Jarana Yucateca",
      quotes: ["Tierra de maravillas y selvas", "El corazón del Mundo Maya", "Donde nacen los colores"],
      landscapes: ["", "", ""]
    },
    block2: {
      culture: {
        traditions: ["La Guelaguetza", "Hanal Pixán (Día de Muertos Maya)", "Danza de los Parachicos", "Carnaval de Veracruz"],
        clothing: "Huipiles coloridos, guayaberas, traje de Tehuana, vestido de Jarocha",
        music: "Marimba, Son Jarocho, Trova yucateca, Jarana",
        customs: "Uso de hamacas, tequio (trabajo comunitario), festividades de los santos patronos (mayordomías)",
        images: [],
        videos: []
      },
      gastronomy: {
        dishes: ["Cochinita Pibil", "Tlayudas", "Mole negro", "Tamales oaxaqueños", "Sopa de lima"],
        ingredients: ["Achiote", "Cacao", "Chile habanero", "Plátano macho", "Hoja santa"],
        images: [],
        videos: []
      },
      languages: {
        peoples: ["Mayas", "Zapotecos", "Mixtecos", "Tzotziles", "Tzeltales"],
        languages: ["Maya peninsular", "Zapoteco", "Mixteco", "Tzotzil"],
        facts: ["Los Mayas desarrollaron el sistema de escritura precolombino más avanzado de toda América.", "Oaxaca es el estado con mayor diversidad lingüística del país, albergando a más de 16 grupos étnicos distintos."],
        images: [],
        videos: []
      },
      economy: {
        text: "Impulsada fuertemente por el turismo internacional y cultural (Riviera Maya, zonas arqueológicas), extracción petrolera, y una abundante producción agrícola de café, caña, mango y cacao.",
        images: [],
        videos: []
      }
    },
    block3: {
      gallery360: [], landscapes: [], crafts: [],
      miniVideos: { dances: [], festivals: [], music: [] }
    },
    block4: {
      questions: [
        {
          question: "¿Qué imponente civilización antigua se desarrolló en la Península de Yucatán?",
          options: ["Olmecas", "Aztecas", "Mayas", "Toltecas"],
          correctAnswer: 2
        },
        {
          question: "¿Cómo se llama la fiesta cultural más grande de Oaxaca que reúne a las ocho regiones del estado?",
          options: ["Feria de San Marcos", "La Guelaguetza", "Festival Cervantino", "Cumbre Tajín"],
          correctAnswer: 1
        },
        {
          question: "¿Qué icónico platillo yucateco se prepara horneando carne de cerdo marinada en achiote bajo la tierra?",
          options: ["Mole Negro", "Tlayuda", "Cochinita Pibil", "Aguachile"],
          correctAnswer: 2
        },
        {
          question: "¿Qué instrumento musical de madera es el más representativo del sureste mexicano, especialmente en Chiapas?",
          options: ["La Marimba", "El Guitarrón", "El Arpa jarocha", "La Teponaztli"],
          correctAnswer: 0
        },
        {
          question: "¿En qué estado del sur de México se encuentra el impresionante Cañón del Sumidero?",
          options: ["Oaxaca", "Guerrero", "Yucatán", "Chiapas"],
          correctAnswer: 3
        },
        {
          question: "¿Cómo se llama la prenda tradicional, ricamente bordada, que utilizan muchas mujeres indígenas del sur de México?",
          options: ["Rebozo", "Huipil", "Quechquémitl", "Sarape"],
          correctAnswer: 1
        }
      ]
    }
  }
}