let cad=`<h1>Turismo Codo a Codo</h1>
        <nav>
            <a href="index.html">
                <img src="./imagenes/equipaje.png" width="30" alt="equipaje">
            </a>
            <a href="index.html">Home</a>
            <a href="acercade.html">A cerca de</a>
            <a href="contacto.html">Contacto</a>

        </nav>`
document.getElementById("header").innerHTML=cad

 cad=`
    <nav>
            <a target="_blank" href="https://www.facebook.com"><img width="25px" src="./imagenes/facebook.png" alt="facebook"></a>
            <a target="_blank"  href="https://www.twitter.com"><img width="25px"  src="./imagenes/gorjeo.png" alt="Twitter"></a>
            <a target="_blank"  href="mailto:codoacod@gmail.com"><img  width="25px" src="./imagenes/email.png" alt="email"></a>
            <a href="https://wa.me/+5491136239960?text=Por%20favor%20envieme%20informacion"><img  width="25px"  src="./imagenes/whatsapp.png" alt=""></a>
        </nav>
    
        <p>Sitio web desarrollado en Practica de los viernes</p>
`
document.getElementById("footer").innerHTML=cad


turismo=[
    {ciudad:"Bariloche",
     url:"https://www.bariloche.com",
     imagen: "./imagenes/barilo.webp"
    },
    {ciudad:"Posadas",
    url:"https://turismoposadas.tur.ar/posadas/",
    imagen: "./imagenes/posadas.webp"
    },
    {
        ciudad:"Comodoro Rivadavia",
        url:"https://chubutpatagonia.gob.ar/destino/comodoro-rivadavia/",
        imagen: "./imagenes/comodoro.webp"
    },
    {
        ciudad:"Asuncion",
        url:"https://www.visitparaguay.travel/v1/circuito/8-asuncion-city-tour",
        imagen: "./imagenes/Asuncion.webp"
    },        {ciudad:"Bariloche",
    url:"https://www.bariloche.com",
    imagen: "./imagenes/barilo.webp"
   },
   {ciudad:"Posadas",
   url:"https://turismoposadas.tur.ar/posadas/",
   imagen: "./imagenes/posadas.webp"
   },
   {
       ciudad:"Comodoro Rivadavia",
       url:"https://chubutpatagonia.gob.ar/destino/comodoro-rivadavia/",
       imagen: "./imagenes/comodoro.webp"
   },
   {
       ciudad:"Asuncion",
       url:"https://www.visitparaguay.travel/v1/circuito/8-asuncion-city-tour",
       imagen: "./imagenes/Asuncion.webp"
   },     {ciudad:"Bariloche",
   url:"https://www.bariloche.com",
   imagen: "./imagenes/barilo.webp"
  },
  {ciudad:"Posadas",
  url:"https://turismoposadas.tur.ar/posadas/",
  imagen: "./imagenes/posadas.webp"
  },
  {
      ciudad:"Comodoro Rivadavia",
      url:"https://chubutpatagonia.gob.ar/destino/comodoro-rivadavia/",
      imagen: "./imagenes/comodoro.webp"
  },
  {
      ciudad:"Asuncion",
      url:"https://www.visitparaguay.travel/v1/circuito/8-asuncion-city-tour",
      imagen: "./imagenes/Asuncion.webp"
  },     {ciudad:"Bariloche",
  url:"https://www.bariloche.com",
  imagen: "./imagenes/barilo.webp"
 },
 {ciudad:"Posadas",
 url:"https://turismoposadas.tur.ar/posadas/",
 imagen: "./imagenes/posadas.webp"
 },
 {
     ciudad:"Comodoro Rivadavia",
     url:"https://chubutpatagonia.gob.ar/destino/comodoro-rivadavia/",
     imagen: "./imagenes/comodoro.webp"
 },
 {
     ciudad:"Asuncion",
     url:"https://www.visitparaguay.travel/v1/circuito/8-asuncion-city-tour",
     imagen: "./imagenes/Asuncion.webp"
 },     {ciudad:"Bariloche",
 url:"https://www.bariloche.com",
 imagen: "./imagenes/barilo.webp"
},
{ciudad:"Posadas",
url:"https://turismoposadas.tur.ar/posadas/",
imagen: "./imagenes/posadas.webp"
},
{
    ciudad:"Comodoro Rivadavia",
    url:"https://chubutpatagonia.gob.ar/destino/comodoro-rivadavia/",
    imagen: "./imagenes/comodoro.webp"
},
{
    ciudad:"Asuncion",
    url:"https://www.visitparaguay.travel/v1/circuito/8-asuncion-city-tour",
    imagen: "./imagenes/Asuncion.webp"
}
]

cad=""
for (i=0;i<turismo.length;i++){
    cad= cad+"<a href='"+turismo[i].url+"' > <img src='"+ turismo[i].imagen+"' alt='"+ turismo[i].ciudad+"' ></a>"
}
console.log(cad)
document.getElementById("galeria").innerHTML=cad