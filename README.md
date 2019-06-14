Hola, esta es mi solución a la prueba técnica que me han pedido. 

Para verlo en local, sólo hay que clonarse este repositorio y correr 'npm start' en la terminal y se abrirá en [http://localhost:3000](http://localhost:3000)

También está subido al servidor de GitHub Pages.

## Requisitos funcionales:

  [x] App desarrollada en React.js 
  [x] Implementación de un servicio REST que retorna los JSON necesarios: He "mockeado" una API con Postman de manera manual, es decir, añadí los datos JSON de manera manual con los requisitos que pedían (título de la película, imagen, rating, actores, directores y sinopsis) y la URL generada por Postman la usé para hacer la petición de tipo GET. Este ha sido un reto ya que sólo había trabajado con alguna API que me proporcionaban para trabajar, estoy muy contenta de haber aprendido esto y de saber todo lo que se puede hacer con ello.
  [x] Componentes reutilizables: Los componentes llevan una estructura de carpeta en laque están incluidos tanto el componente .js como el archivo .scss con sus respectivos estilos. Se reutiliza el componente 'header', tanto en la Home como en el Detalle; el componente 'Movie', siendo cada elemento del listado y el componente 'MovieDetail' siendo el mismo pero con diferente información, de acuerdo a lo que llega por props.
  [x] Estilos aparte y evitar el “style=”.

## Requisitos no funcionales:

[x] Listado de películas con sólo la imagen, título y rating.
[x] Diseño libre, no hace falta que sea vistoso: Dí prioridad al desarrollo de la funcionalidad y lo nuevo que tuve que aprender para desarrollarlo, por lo que el diseño es muy sencillo.
[NO] Paginación es opcional: No desarrollé paginación ya que necesitaba más data y, al ser opcional, lo dejé para lo último pero no me dió tiempo. Queda pendiente.


## Opciones no requeridas desarrolladas:
[x] CSS usando preprocesadores (SASS, LESS): He instalado 'npm node sass' y cada componente tiene su archivo .scss
[x] Implementación de la solución con un backend funcional (no es necesario que tenga lógica, puede ser un servicio REST dummy que retorne los JSON necesarios): como he dicho antes, desarrollé un mock de una API manualmente mediante Postman y responde correctamente a la petición por fetch.
[x] Clean code/clean architecture: Cada componente está dentro de una carpeta con su archivo de estilos. Intenté que estuviese bien indentado, sin comentarios y sin console.log(). Estan los componentes header, home (primera route que contiene el MovieList), list (con el archivo del listado que se pinta tras la petición fetch), movie (quien tiene la tarjeta de cada película del listado con su contenido), movieDetail (la otra route donde aparece el detalle de cada película con más información) y services (que contiene el archivo con la variable para el fetch y la url de la API).
[x] Buenas prácticas.
[x] Versión Progressive Web App (PWA): este ha sido otro reto al desarrollar esta prueba, ya que no conocía el término, por lo que me documenté y pasé la extensión 'Lighthouse' y pude aprender la importancia de que una app sea PWA y aprendí a usar el service worker y, luego de eso, el reporte de LightHouse se ha aprobado en su mayoría (no en su totalidad,quedan detalles en cada apartado) bien. 

![report](https://raw.githubusercontent.com/ArianeJDB/pruebawoom/master/path/to/report.png)
![pwareport1](https://raw.githubusercontent.com/ArianeJDB/pruebawoom/master/path/to/pwareport1.png)
![pwareport12](https://raw.githubusercontent.com/ArianeJDB/pruebawoom/master/path/to/pwareport2.png)

## Opciones no requeridas no desarrolladas:
[x] Uso de Bootstrap, Material design, Foundation, other: No estoy familiarizada con el uso de Bootstrap ni otra librería, por lo que preferí usar los estilos por SASS de manera manual, ya que me siento más cómoda. De haber tenido más tiempo, lo hubiese intentado ya que me documenté y hay una librería de bootsrap para React, que se llama reactrap y me llama la atención.


Muchas gracias, espero que les guste

Ari