                Tu primer componente

Desafío 1

```
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/lICfvbD.jpg"
      alt="Aklilu Lemma"
    />
  );
}


```

Desafío 2

```
export default function Profile() {
  return <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />


}

```

Desafío 3

```
function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Científicos increíbles</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}


```

Desafío 4

```

export default function Congratulations() {
  return (
    <h1>¡Buen trabajo!</h1>
  );
}


```

             Importar y exportar componentes


Desafío 1

App.js

import Gallery from './Gallery.js';
import { Profile } from './Profile.js';

export default function App() {
  return (
    <div>
      <Profile />
      <Gallery />
    </div>
  );
}


Gallery.js

import { Profile } from './Profile.js';


export default function Gallery() {
  return (
    <section>
      <h1>Científicos increíbles</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}


Profile.js

export function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}


        Escribir marcado con JSX


export default function Bio() {
  return (
    <div>
    <div class="intro">
      <h1>¡Bienvenido a mi sitio web!</h1>
    </div>
    <p className="summary">
      Puedes encontrar mis reflexiones aquí.
      <br><br>
      <b>¡Y <i>fotografías</i></b> de científicos!
    </p>
    <div/>
  );
}




      Javascript en JSX con llaves


const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>Tareas pendientes de {person.name}</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
      <li>Mejorar el videoteléfono</li>
      <li>Preparar clases de aeronáutica</li>
      <li>Trabajar en el motor de alcohol</li>
      </ul>
    </div>
  );
}



          Pasar props a un componente



Desafío 1


App.js


import { getImageUrl } from './utils.js';

function Profile({ person, imageSize = 70 }) {
  const imageSrc = getImageUrl(person)

  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={imageSrc}
        alt={person.name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profesión:</b> {person.profession}
        </li>
        <li>
          <b>Premios: {person.awards.length} </b>
          ({person.awards.join(', ')})
        </li>
        <li>
          <b>Descubrió: </b>
          {person.discovery}
        </li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      <Profile person={{
        imageId: 'szV5sdG',
        name: 'Maria Skłodowska-Curie',
        profession: 'física y química',
        discovery: 'polonio (elemento químico)',
        awards: [
          'Premio Nobel de Física',
          'Premio Nobel de Química',
          'Medalla Davy',
          'Medalla Matteucci'
        ],
      }} />
      <Profile person={{
        imageId: 'YfeOqp2',
        name: 'Katsuko Saruhashi',
        profession: 'geoquímico',
        discovery: 'un método para medir el dióxido de carbono en el agua de mar',
        awards: [
          'Premio Miyake de geoquímica',
          'Premio Tanaka'
        ],
      }} />
    </div>
  );
}

Utils.js


export function getImageUrl(imageId, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}


Desafío 2

App.js
import { getImageUrl } from './utils.js';

const ratio = window.devicePixelRatio;

function Avatar({ person, size }) {
  let thumbnailSize = 's';
  if (size * ratio > 90) {
    thumbnailSize = 'b';
  }
  return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <>
      <Avatar
        size={40}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
      <Avatar
        size={70}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
      <Avatar
        size={120}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
    </>
  );
}





Utils.js


export function getImageUrl(person, size) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}


Desafío 3

function Card({ children }) {
  return (
    <div className="card">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Card>
        <h1>Foto</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={100}
          height={100}
        />
      </Card>
      <Card>
        <h1>Información</h1>
        <p>Aklilu Lemma fue un destacado científico etíope que descubrió un tratamiento natural para la esquistosomiasis.</p>
      </Card>
    </div>
  );
}



Renderizado condicional


Desafío 1

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked? name + '✔' : name }           (No me dejaba usar el simbolito de la cruz roja que pedía el enunciado)
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Lista de equipaje de Sally Ride</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Traje de vuelo" 
        />
        <Item 
          isPacked={true} 
          name="Casco con dorado a la hoja" 
        />
        <Item 
          isPacked={false} 
          name="Fotografía de Tam" 
        />
      </ul>
    </section>
  );
}


Desafío 2


function Item({ name, importance }) {
  return (
   <li className="item">
      {name}
      {importance > 0 && ' '}
      {importance > 0 &&
          <i>(Importance: {importance})</i>
      }
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Lista de equipaje de Sally Ride</h1>
      <ul>
        <Item 
          importance={9} 
          name="Traje de vuelo" 
        />
        <Item 
          importance={0} 
          name="Casco con dorado a la hoja" 
        />
        <Item 
          importance={6} 
          name="Fotografía de Tam" 
        />
      </ul>
    </section>
  );
}


Desafío 3

function Drink({ name }) {
  let part, caffeine, age;
  if (name === 'té') {
    part = 'hoja';
    caffeine = '15–70 mg/taza';
    age = '4,000+ años';
  } else if (name === 'café') {
    part = 'grano';
    caffeine = '80–185 mg/taza';
    age = '1,000+ años';
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Parte de la planta</dt>
        <dd>{part}</dd>
        <dt>Contenido de cafeína</dt>
        <dd>{caffeine}</dd>
        <dt>Antigüedad</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="té" />
      <Drink name="café" />
    </div>
  );
}


