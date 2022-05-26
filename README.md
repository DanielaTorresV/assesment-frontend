# Asessment frontend, Assesment I

Proyecto: Construir una aplicación web la cual consta de tres páginas:

- Home
- Product Detail
- About
- La aplicación debe tener un menú que le permita al usuario navegar entre estas páginas.

Requerimientos

- Usar Flexbox CSS.
- El proyecto debe tener configurado ESLint y el Prettier y que tus archivos no tengan problemas con estos.
- El código del proyecto debe estar en un repositorio público de tu autoría.
- Bonus: Implementar SASS con BEM.

Acerca de la Solución

- Para la solución del proyecto se usaron solo Hooks, en la lógica de programación para desactivar el Link,
  del botón Go to detail, se hizo dentro del componente Time con el operador ternario. Igual en la página de
  producto se uso operador ternario para un tiempo de espera en el momento de renderizar el objeto específico.

## IMÁGENES

## Home Page

<img src = "/src/assets/ParaREADME/Landing.PNG" alt="Home Page"/>

## About Page

<img src = "/src/assets/ParaREADME/About.PNG" alt="About Page"/>

## Detail Page

<img src = "/src/assets/ParaREADME/Detail.PNG" alt="Detail Page"/>

# Daniela María Torres Vélez

# Punto 2:

## Preguntas

- ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?  
  R/ Sprint planning: se planea el sprint y se crean las historias de usuario (entregables) para dicho sprint.
  Daily: Reuniones diarias de no más de 15 min para revisar los avances de las actividades del Sprint.
  Sprint review: Finalizando el sprint se realiza la entrega de las actividades ejecutadas.
  Sprint retrospective: Se realiza con el fin de revisar resultados e implementar las mejoras que apliquen.

- ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.  
  R/ Diagrama, que presenta visualmente como será la estructura y las funciones de una página web o aplicación.
  Adobe XD, Figma, Sketch.

- Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.  
  R /En js inicialmente se usaba var para declarar las variables, pero esta declaración permitía que la
  variable fuese global durante todo el programa por lo que nunca se podían nombrar 2 variables con el mismo
  nombre. Con el nuevo estándar ES6 se declaran las variables con let si son variables que pueden tener
  cambios en el programa o con const para las constantes, adicional estas 2 declaraciones tienen scope
  limitado si están entre llaves. Ejm: var num = 8; (va a ser global en el programa), let num = 8; (Tendrá el
  scope limitado pero puede variar su valor), const num = 8; (Tendrá el scope limitado y siempre tendrá el
  mismo valor)

- ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?  
  R/ git checkout -b "rama-1"

- Explicar la diferencia entre git merge y git rebase.  
  R/ El git merge, compara y combina los cambios realizados de un pull, el git rebase rebasa la rama master con
  todos los commits nuevos.

- ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?  
  R/ git pull me permite bajar los commits del repositorio remoto al remoto, mientras que el pull request es la
  solicitud para hacer el merge de un commit en un rama con la rama main o la dev.

- ¿Qué es el Virtual DOM?  
  R/ Document Object Model, es la representación en memoria del documento html.

- Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta. Imagen.
  (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).

R/.c-section{  
display: flex;  
flex-direction: column;  
justify-content: center;  
margin: 20px 45px;  
}

.c-services{  
width:100%;  
display: flex;  
flex-wrap: wrap;  
justify-content: center;  
margin: 0;  
padding: 0;  
}

.c-section\_\_title{  
width: 100%;  
padding-top: 20px;  
text-align: center;  
background-color: gray;

margin-bottom: 30px;  
}

span{  
padding-left: 384px;  
padding-right: 384px;  
padding-top: 10px;  
padding-bottom: 10px;  
background-color: black;  
color: white;  
}

.c-services\_\_item{  
width: 45%;  
background-color: #EBEDEF;  
padding: 15px 10px;  
margin: 10px;  
list-style:none  
}

h3{  
padding-left: 50px;  
}

<img src = "/src/assets/ParaREADME/CodePen.PNG" alt="CodePen result"/>
