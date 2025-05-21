// 1. Este Hook crea un id única en toda la aplicación para esa constante así no repetiremos
// la id en otra parte de nuestra aplicación.
// 2. Aclarar que se genera una id distinta cada vez que se renderiza el componente para
//  asegurar que si el componente está varias veces en la app cada uno tenga su id única
// 3. Este identificador va a ser igual en servidor y en cliente, es universal.
import { useId } from 'react'

export function App () {
  const userListId = useId()

  const users = [
    {
      name: 'Arturo',
      lastName: 'Alba',
      email: 'arturo.alba@example.com',
      age: 30,
      city: 'Madrid'
    },
    {
      name: 'María',
      lastName: 'López',
      email: 'maria.lopez@example.com',
      age: 25,
      city: 'Barcelona'
    },
    {
      name: 'Pedro',
      lastName: 'Gómez',
      email: 'pedro.gomez@example.com',
      age: 42,
      city: 'Valencia'
    },
    {
      name: 'Laura',
      lastName: 'Sánchez',
      email: 'laura.sanchez@example.com',
      age: 28,
      city: 'Sevilla'
    },
    {
      name: 'Javier',
      lastName: 'Ruiz',
      email: 'javier.ruiz@example.com',
      age: 35,
      city: 'Bilbao'
    },
    {
      name: 'Sofía',
      lastName: 'Díaz',
      email: 'sofia.diaz@example.com',
      age: 22,
      city: 'Málaga'
    },
    {
      name: 'Miguel',
      lastName: 'Fernández',
      email: 'miguel.fernandez@example.com',
      age: 48,
      city: 'Zaragoza'
    },
    {
      name: 'Ana',
      lastName: 'González',
      email: 'ana.gonzalez@example.com',
      age: 33,
      city: 'Granada'
    },
    {
      name: 'Roberto',
      lastName: 'Martín',
      email: 'roberto.martin@example.com',
      age: 29,
      city: 'Alicante'
    },
    {
      name: 'Paula',
      lastName: 'Jiménez',
      email: 'paula.jimenez@example.com',
      age: 31,
      city: 'Palma'
    }
  ]
  return (
    <ul id={userListId}>
      {users.map(user => {
        return (
          <li key={user.email}>
            <h3>{user.name} {user.lastName}</h3>
            <span>{user.email}</span>
          </li>
        )
      })}
    </ul>
  )
}
