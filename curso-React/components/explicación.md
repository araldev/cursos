# ¿Qué es un Componente en React?

En React, un componente es la unidad fundamental de construcción de la interfaz de usuario. Piensa en ellos como **piezas de LEGO** individuales que, al unirse, forman una aplicación completa. Cada componente es una función o una clase de JavaScript que **recibe "props"** (propiedades, que son como argumentos) y devuelve elementos de React que describen lo que debe aparecer en la pantalla.

La idea principal es la **reutilización y la modularidad**. En lugar de tener una única pieza de código gigante para toda tu aplicación, la divides en componentes pequeños y manejables, cada uno con una responsabilidad específica.

# Estructura de Carpetas para Componentes

Una buena organización es clave para la escalabilidad y el mantenimiento de proyectos React. Aunque no hay una regla estricta, estas son las estructuras más comunes y recomendadas:

- **Opción 1: Por Tipo de Componente (Común en proyectos pequeños/medianos)**
  En esta estructura, agrupas los componentes por su tipo general (ej. átomos, moléculas, organismos si usas Atomic Design, o simplemente si son genéricos o de página).

**Ventajas:** Fácil de entender al inicio, los componentes reutilizables están centralizados.  
**Desventajas:** Puede ser difícil de navegar en proyectos grandes si tienes muchos componentes en la misma carpeta.

src/  
├── components/ # Componentes reutilizables a nivel de aplicación (átomos/moléculas)  
│ ├── Button/  
│ │ ├── Button.jsx  
│ │ └── Button.module.css  
│ ├── Card/  
│ │ ├── Card.jsx  
│ │ └── Card.module.css  
│ └── Header/  
│ ├── Header.jsx  
│ └── Header.module.css  
├── pages/ # Componentes que representan páginas/vistas enteras (organismos/plantillas)  
│ ├── HomePage.jsx  
│ ├── AboutPage.jsx  
│ └── ProductDetailPage.jsx  
├── App.jsx # Componente principal  
├── index.jsx # Punto de entrada de la aplicación  
└── ...otros_archivos

- **Opción 2: Por Característica / Dominio (Recomendado para proyectos medianos/grandes)**
  Esta estructura organiza los componentes basados en la funcionalidad o característica a la que pertenecen. Es más escalable porque, si necesitas trabajar en una característica, todos sus archivos están juntos.

  **Ventajas:** Alta cohesión, fácil de encontrar código relacionado, ideal para equipos grandes y funcionalidades modulares.  
  **Desventajas:** Puede parecer excesivo para proyectos muy pequeños.

src/  
├── features/ # Agrupa componentes, hooks, etc. por característica  
│ ├── Auth/  
│ │ ├── components/  
│ │ │ ├── LoginForm.jsx  
│ │ │ └── RegisterForm.jsx  
│ │ │
│ │ ├── hooks/  
│ │ │ └── useAuth.js  
│ │ └── AuthPage.jsx # Componente de página para autenticación  
│ ├── Products/  
│ │ ├── components/  
│ │ │ ├── ProductCard.jsx  
│ │ │ └── ProductList.jsx  
│ │ ├── hooks/  
│ │ │ └── useProducts.js  
│ │ └── ProductsPage.jsx # Componente de página para productos  
│ ├── ShoppingCart/  
│ │ ├── components/  
│ │ │ ├── CartItem.jsx  
│ │ │ └── ShoppingCartSummary.jsx  
│ │ └── ShoppingCartPage.jsx  
├── shared/ # Componentes verdaderamente genéricos y reutilizables en TODA la app (ej. Button, Modal)  
│ ├── Button.jsx  
│ └── Modal.jsx  
├── App.jsx  
├── index.jsx  
└── ...otros_archivos

# Nomenclatura de Archivos y Componentes

La consistencia es clave para la legibilidad.

1. **Nombres de Componentes:**

- Usa **PascalCase** (primera letra de cada palabra en mayúscula) para los nombres de los componentes.
  - **Correcto:** `MyComponent`, `UserProfile`, `ShoppingCart`
  - **Incorrecto:** `myComponent`, `user-profile`
- El nombre del componente debe ser **descriptivo** de su propósito.

2. **Nombres de Archivos:**

- El nombre del archivo debe coincidir con el nombre del componente principal que exporta.
- Usa la extensión `.jsx` para archivos que contienen JSX (la sintaxis de React), o `.js` si no contienen JSX (aunque `.jsx `es más explícito y comúnmente usado para componentes).
  - `Button.jsx`
  - `UserProfile.jsx`
- Para carpetas que contienen un único componente, es común que el archivo principal se llame `index.jsx` o `[ComponentName].jsx`. Personalmente, prefiero `[ComponentName].jsx` porque es más claro cuando importas.

# Sintaxis Básica de un Componente Funcional

Hoy en día, los componentes funcionales son la forma más común y recomendada de escribir componentes React, usando Hooks para añadir estado y lógica.

```js
// 1. Importaciones necesarias (React es automático en versiones recientes, pero es buena práctica)
import React from "react";
import "./MyComponent.css"; // Si tienes estilos específicos

// 2. Definición del componente como una función flecha (o función normal)
//    Recibe 'props' como argumento.
export function MyComponent(props) {
  // 3. Lógica del componente (Hooks, variables, funciones auxiliares)
  //    Puedes desestructurar las props para mayor legibilidad
  const { title, description } = props;

  // Un ejemplo básico de estado (requiere importar useState)
  // import { useState } from 'react';
  // const [count, setCount] = useState(0);

  const handleClick = () => {
    alert(`Clic en ${title}`);
  };

  // 4. Retorna el JSX (JavaScript XML), que es como HTML pero dentro de JavaScript.
  //    Solo se puede retornar UN elemento raíz. Si necesitas más, envuélvelos en un div
  //    o un Fragment (<>...</>).
  return (
    <div className="my-component-container">
      {/* 5. Interpolación de JavaScript usando llaves {} */}
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={handleClick}>Haz clic</button>
      {/* 6. Puedes renderizar condicionalmente */}
      {props.showExtraInfo && (
        <p className="extra-info">Información adicional.</p>
      )}
    </div>
  );
}

// 7. Si lo exportas por defecto, la importación cambia (pero no es necesario con 'export function')
// export default MyComponent;
```

# Puntos Clave de Sintaxis y Patrones

- **JSX**:

  - Permite escribir HTML-like syntax directamente en tu código JavaScript.
  - Las clases CSS se definen con `className` (no `class`).
  - Los estilos en línea se escriben como objetos JavaScript: `style={{ color: 'red', fontSize: '16px' }}`.
  - Los atributos HTML con guiones (como `tabindex`) se convierten a camelCase (`tabIndex`).

- **Props**:

  - Son de solo lectura. Un componente nunca debe modificar las props que recibe.
  - Se usan para pasar datos y funciones de un componente padre a un componente hijo.
  - Puedes usar la desestructuración de objetos para acceder a las props fácilmente: `function MyComponent({ title, children }) { ... }`.

- **Estado (con `useState`)**:

  - Permite que los componentes "recuerden" datos que pueden cambiar con el tiempo.
  - Cuando el estado cambia, el componente se re-renderiza.
  - `const [valor, setValor] = useState(valorInicial)`;

- **Ciclo de Vida / Efectos (con `useEffect`)**:

  - Permite ejecutar código después de cada renderizado, o solo cuando ciertas dependencias cambian.
  - Ideal para llamadas a APIs, manipulación del DOM, suscripciones, etc.
  - `useEffect(() => { /_ código _/ }, [dependencias])`;

- **Listas**:

  - Cuando renderizas una lista de elementos (ej. `<ul><li>...</li></ul>`), cada elemento hijo directo dentro de un `map` debe tener una prop `key` única y estable. Esta `key` ayuda a React a identificar qué elementos han cambiado, añadido o eliminado.
  - Evita usar el índice del array como `key` si la lista puede cambiar de orden, añadirse/eliminarse elementos. Prefiere una ID única de los datos (`user.id`, `product.sku`).

# Ejemplo Completo con tu lista de usuarios

Aquí está tu ejemplo de `App` ligeramente modificado para seguir estas pautas, usando un componente hijo `UserCard` para demostrar modularidad:

```js
import React from "react"; // Buena práctica aunque no estrictamente necesario en React 17+ con JSX transform
// import { useId } from 'react'; // Puedes descomentar si lo necesitas para un ID de la lista ul

// --- Componente Reutilizable: UserCard ---
// Cada usuario se renderiza con este componente, haciendo el código más limpio.
function UserCard({ name, lastName, email, age, city }) {
  // Los props son desestructurados directamente en la firma de la función para mayor legibilidad
  return (
    <li className="user-card-item">
      {" "}
      {/* Usar className para estilos */}
      <h3>
        {name} {lastName}
      </h3>
      <p>
        Email: <span>{email}</span>
      </p>
      <p>Edad: {age}</p>
      <p>Ciudad: {city}</p>
    </li>
  );
}

// --- Componente Principal: App ---
export function App() {
  // const userListId = useId(); // Descomentar si necesitas una ID única para el <ul>

  const users = [
    {
      name: "Arturo",
      lastName: "Alba",
      email: "arturo.alba@example.com",
      age: 30,
      city: "Madrid",
    },
    {
      name: "María",
      lastName: "López",
      email: "maria.lopez@example.com",
      age: 25,
      city: "Barcelona",
    },
    {
      name: "Pedro",
      lastName: "Gómez",
      email: "pedro.gomez@example.com",
      age: 42,
      city: "Valencia",
    },
    {
      name: "Laura",
      lastName: "Sánchez",
      email: "laura.sanchez@example.com",
      age: 28,
      city: "Sevilla",
    },
    {
      name: "Javier",
      lastName: "Ruiz",
      email: "javier.ruiz@example.com",
      age: 35,
      city: "Bilbao",
    },
    {
      name: "Sofía",
      lastName: "Díaz",
      email: "sofia.diaz@example.com",
      age: 22,
      city: "Málaga",
    },
    {
      name: "Miguel",
      lastName: "Fernández",
      email: "miguel.fernandez@example.com",
      age: 48,
      city: "Zaragoza",
    },
    {
      name: "Ana",
      lastName: "González",
      email: "ana.gonzalez@example.com",
      age: 33,
      city: "Granada",
    },
    {
      name: "Roberto",
      lastName: "Martín",
      email: "roberto.martin@example.com",
      age: 29,
      city: "Alicante",
    },
    {
      name: "Paula",
      lastName: "Jiménez",
      email: "paula.jimenez@example.com",
      age: 31,
      city: "Palma",
    },
  ];

  return (
    <div className="app-container">
      <h1>Lista de Usuarios</h1>
      {/* Si usaras useId, sería id={userListId} */}
      <ul className="users-list">
        {users.map((user) => (
          // Usar user.email como key es una buena práctica si es único.
          // Si tuvieran un 'id' numérico, sería mejor usar ese.
          <UserCard
            key={user.email}
            name={user.name}
            lastName={user.lastName}
            email={user.email}
            age={user.age}
            city={user.city}
          />
        ))}
      </ul>
    </div>
  );
}
```
