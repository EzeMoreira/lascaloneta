let ul = document.querySelector("ul");

let jugadores = [
  {
    id: 1,
    name: "Emiliano Martínez",
    "fecha-nacimiento": "02-09-1992",
    edad: 30,
    "equipo-actual": "Aston Villa",
    posicion: "Arquero",
    dorsal: 23,
    debut: 2021,
    "stats-fisico": { peso: 88, altura: 1.95 },
  },
  {
    id: 2,
    name: "Gerónimo Rulli",
    "fecha-nacimiento": "20-05-1992",
    edad: 30,
    "equipo-actual": "Villareal CF",
    posicion: "Arquero",
    dorsal: 12,
    debut: 2018,
    "stats-fisico": { peso: 80, altura: 1.89 },
  },
  {
    id: 3,
    name: "Franco Armani",
    "fecha-nacimiento": "16-10-1986",
    edad: 36,
    "equipo-actual": "River Plate",
    posicion: "Arquero",
    dorsal: 1,
    debut: 2018,
    "stats-fisico": { peso: 85, altura: 1.89 },
  },
  {
    id: 4,
    name: "Cristian Romero",
    "fecha-nacimiento": "27-04-1998",
    edad: 24,
    "equipo-actual": "Tottenham",
    posicion: "Defensor",
    dorsal: 13,
    debut: 2021,
    "stats-fisico": { peso: 79, altura: 1.85 },
  },
  {
    id: 5,
    name: "Juan Foyth",
    "fecha-nacimiento": "12-01-1998",
    edad: 24,
    "equipo-actual": "Villareal CF",
    posicion: "Defensor",
    dorsal: 2,
    debut: 2018,
    "stats-fisico": { peso: 74, altura: 1.88 },
  },
  {
    id: 6,
    name: "Nicolás Tagliafico",
    "fecha-nacimiento": "31-08-1992",
    edad: 30,
    "equipo-actual": "Olympique de Lyon",
    posicion: "Defensor",
    dorsal: 3,
    debut: 2017,
    "stats-fisico": { peso: 65, altura: 1.72 },
  },
  {
    id: 7,
    name: "Gonzalo Montiel",
    "fecha-nacimiento": "01-01-1997",
    edad: 25,
    "equipo-actual": "Sevilla F.C",
    posicion: "Defensor",
    dorsal: 4,
    debut: 2019,
    "stats-fisico": { peso: 72, altura: 1.7 },
  },
  {
    id: 8,
    name: "Germán Pezzella",
    "fecha-nacimiento": "27-06-1991",
    edad: 31,
    "equipo-actual": "Real Betis Balompié",
    posicion: "Defensor",
    dorsal: 6,
    debut: 2017,
    "stats-fisico": { peso: 82, altura: 1.86 },
  },
  {
    id: 9,
    name: "Marcos Acuña",
    "fecha-nacimiento": "28-10-1991",
    edad: 31,
    "equipo-actual": "Sevilla F.C",
    posicion: "Defensor",
    dorsal: 8,
    debut: 2016,
    "stats-fisico": { peso: 72, altura: 1.72 },
  },
  {
    id: 10,
    name: "Nicolás Otamendi",
    "fecha-nacimiento": "12-02-1988",
    edad: 34,
    "equipo-actual": "S.L Benfica",
    posicion: "Defensor",
    dorsal: 19,
    debut: 2009,
    "stats-fisico": { peso: 81, altura: 1.83 },
  },
  {
    id: 11,
    name: "Lisandro Martínez",
    "fecha-nacimiento": "18-01-1998",
    edad: 24,
    "equipo-actual": "Manchester United",
    posicion: "Defensor",
    dorsal: 25,
    debut: 2020,
    "stats-fisico": { peso: 75, altura: 1.73 },
  },
  {
    id: 12,
    name: "Nahuel Molina",
    "fecha-nacimiento": "06-04-1998",
    edad: 24,
    "equipo-actual": "Atlético Madrid",
    posicion: "Defensor",
    dorsal: 26,
    debut: 2021,
    "stats-fisico": { peso: 70, altura: 1.75 },
  },
  {
    id: 13,
    name: "Leandro Paredes",
    "fecha-nacimiento": "29-06-1994",
    edad: 28,
    "equipo-actual": "Juventus",
    posicion: "Mediocampista",
    dorsal: 5,
    debut: 2017,
    "stats-fisico": { peso: 75, altura: 1.8 },
  },
  {
    id: 14,
    name: "Rodrigo De Paul",
    "fecha-nacimiento": "24-05-1994",
    edad: 28,
    "equipo-actual": "Atlético Madrid",
    posicion: "Mediocampista",
    dorsal: 7,
    debut: 2018,
    "stats-fisico": { peso: 70, altura: 1.8 },
  },
  {
    id: 15,
    name: "Exequiel Palacios",
    "fecha-nacimiento": "05-10-1998",
    edad: 24,
    "equipo-actual": "Bayer 04 Leverkusen",
    posicion: "Mediocampista",
    dorsal: 14,
    debut: 2018,
    "stats-fisico": { peso: 76, altura: 1.77 },
  },
  {
    id: 16,
    name: "Enzo Fernández",
    "fecha-nacimiento": "17-01-2001",
    edad: 21,
    "equipo-actual": "S.L Benfica",
    posicion: "Mediocampista",
    dorsal: 24,
    debut: 2022,
    "stats-fisico": { peso: 77, altura: 1.78 },
  },
  {
    id: 17,
    name: "Guido Rodríguez",
    "fecha-nacimiento": "12-04-1994",
    edad: 28,
    "equipo-actual": "Real Betis Balompié",
    posicion: "Mediocampista",
    dorsal: 18,
    debut: 2017,
    "stats-fisico": { peso: 80, altura: 1.87 },
  },
  {
    id: 18,
    name: "Alexis Mac Allister",
    "fecha-nacimiento": "24-12-1998",
    edad: 23,
    "equipo-actual": "Brighton & Hove Albion",
    posicion: "Mediocampista",
    dorsal: 20,
    debut: 2019,
    "stats-fisico": { peso: 72, altura: 1.72 },
  },
  {
    id: 19,
    name: "Alejandro Gómez",
    "fecha-nacimiento": "15-02-1988",
    edad: 34,
    "equipo-actual": "Sevilla F.C",
    posicion: "Mediocampista",
    dorsal: 17,
    debut: 2017,
    "stats-fisico": { peso: 68, altura: 1.67 },
  },
  {
    id: 20,
    name: "Lionel Messi",
    "fecha-nacimiento": "24-06-1987",
    edad: 35,
    "equipo-actual": "PSG",
    posicion: "Delantero",
    dorsal: 10,
    debut: 2005,
    "stats-fisico": { peso: 72, altura: 1.7 },
  },
  {
    id: 21,
    name: "Julian Álvarez",
    "fecha-nacimiento": "31-01-2000",
    edad: 22,
    "equipo-actual": "Manchester City",
    posicion: "Delantero",
    dorsal: 9,
    debut: 2021,
    "stats-fisico": { peso: 71, altura: 1.7 },
  },
  {
    id: 22,
    name: "Joaquín Correa",
    "fecha-nacimiento": "13-08-1994",
    edad: 28,
    "equipo-actual": "Inter de Milán",
    posicion: "Delantero",
    dorsal: 16,
    debut: 2017,
    "stats-fisico": { peso: 77, altura: 1.88 },
  },
  {
    id: 23,
    name: "Ángel Di María",
    "fecha-nacimiento": "14-02-1988",
    edad: 34,
    "equipo-actual": "Juventus",
    posicion: "Delantero",
    dorsal: 11,
    debut: 2008,
    "stats-fisico": { peso: 75, altura: 1.8 },
  },
  {
    id: 24,
    name: "Nicolás González",
    "fecha-nacimiento": "06-04-1998",
    edad: 24,
    "equipo-actual": "ACF Fiorentina",
    posicion: "Delantero",
    dorsal: 15,
    debut: 2019,
    "stats-fisico": { peso: 72, altura: 1.8 },
  },
  {
    id: 25,
    name: "Paulo Dybala",
    "fecha-nacimiento": "15-11-1993",
    edad: 29,
    "equipo-actual": "A.S Roma",
    posicion: "Delantero",
    dorsal: 21,
    debut: 2015,
    "stats-fisico": { peso: 75, altura: 1.77 },
  },
  {
    id: 26,
    name: "Lautaro Martínez",
    "fecha-nacimiento": "22-08-1997",
    edad: 25,
    "equipo-actual": "Inter de Milán",
    posicion: "Delantero",
    dorsal: 22,
    debut: 2018,
    "stats-fisico": { peso: 72, altura: 1.74 },
  },
];

let jugadoresRenderizados = [...jugadores]; // esta linea lo que hace es convertir un array otro array pero sin mutarlo

        // SELECT
let posiciones = new Set();

jugadores.forEach((jugador) => posiciones.add(jugador.posicion));

let posicionesArray = [...posiciones];

let select = document.querySelector("#posicion");
let optionsSelect = posicionesArray.map(
  (option) =>`<option> ${option}</option>`);  // con esta linea estoy transformando las posiciones de jugadores en opciones//

  let allOptions = ["<option>Todas</option>", ...optionsSelect]; 

select.innerHTML = allOptions.join().replaceAll(",", ""); 

select.addEventListener("change", (event) => {
  if (event.target.value === "Todas") {
    jugadoresRenderizados = [...jugadores];  
  } else {
    jugadoresRenderizados = [...jugadores].filter(
    (jugador) => jugador.posicion === event.target.value
);
}

}); 

let elements = jugadoresRenderizados.map(
  (element) => `<li>
<img src="./appjavascriptmundial ${element.dorsal}" alt"jugadores" "width="400px" />
jugador: ${element.name}</br>Camiseta: ${element.dorsal}</br>Equipo: ${element["equipo-actual"]}</br></br>
</li>`);
ul.innerHTML = elements.join().replaceAll(",", "");
//Esto es un evento de lista, en caso de encontrarnos en la opcion arquero y cambiarlo a delantero
// deberia salir una alerta, esto mas que nada para comprobar que funcione, cuando realicemos un cambio de 
// posicion si salta la alerta entonces funciona. 
// Otra manera de hacerlo en lugar de alert seria console.log(event.target.value) "con esto obtenemos el valor
// de la funcion que queremos filtrar" con value le damos valor.
// al cambio de tarjeta que hacemos es decir de las posiciones y esto aparece en la consola.

// para generar un li por cada jugador que contenga un nombre x ej, es decir jugadores y su nombre,
// desde un array de base generamos un array nuevo caracteristicas distintas con la misma cantidad de elementos
//para eso utilizamos .map, entre parentesis de map ponemos un parametro
//dentro de jugador colocamos la variable y el valor que queremos agregar, estamos creando un array

        // LISTA 

// let elements = jugadoresRenderizados.map((element) => 
// con esta primera linea en la consola colocamos elements y nos arroja un array con 26 elementos.
// `<li>
// <img src="img/${element.dorsal}.jpg" alt"jugadores" "width="400px" />
// jugador: ${element.name}</br>Camiseta: ${element.dorsal}</br>Equipo: ${element["equipo-actual"]}</br></br>
// </li>`);


// ahora para transformar todo esto en un string hacemos lo siguiente
// ul.innerHTML = elements.join().replaceAll(",", ""); 
// lo de replaceAll solamente es para sacar las comas que nos aparece en consola
// Los li que acabamos de crear van dentro del ul entonces, agregamos ul.innerHTML

//         Ahora para obtener el numero de cada jugador realizamos lo siguiente

// let element = jugadores.map(
//     (element) => 
// `<li>jugador: ${element.name}</br>Camiseta: ${element.dorsal}</li>`);

          // Para colocarle el numero de cada jugador agregando el element dorsal
 
// let element = jugadores.map(
//     (element) => 
// `<li>jugador: ${element.name}</br>Camiseta: ${element.dorsal}</li>`);
// Todo esto se va agregando en la misma linea de codigo donde iniciamos en este caso linea 297 (esta arriba)

//           Para colocar el equipo actual 
// Ahora si queremos agregar el equipo actual por ej esto esta entre "" como si fuera un String, debemos
//     sobre la linea que ya colocamos name y dorsal agregamos el equipo actual llamando element pero dentro
//     de estas {} colocar entre [] el nombre de la variable en este caso equipo

            // Para colocar imagen o imagenes utilizamos lo mismo img src

    // Ahora si queremos filtrar por posicion de cada jugador, tenemos que tener en cuenta que hay 
    // mas de 1 arquero, mas de 1 defensor y asi sucesivamente, entonces utilizamos foreach por jugador
      // esto va conectado con el new set, para convertir el set en array utilizamos let posicionArray y 
      // las posiciones que ya tenemos definidas
      // Tanto new set como posiciones array lo utilizamos para filtrar por posicion

            // Ahora para filtrar por posicion primero capturamos el select de html "let select"
            // ahora dentro del select realizamos let optionsSelect cuando ya tenemos los 4 elementos arquero,
            // defensa, mediocampo y delantero que son los que tenemos en las posicionesArray

