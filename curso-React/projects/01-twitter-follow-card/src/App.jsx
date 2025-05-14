// import { useState } from "react"
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo Hernandez',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hernandez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomás',
    isFollowing: false
  }
]

export function App () {
  // Si un componente padre cambia de estado se propaga a sus hijos y se vuelven a renderizar aunque ellos no cambien.
  // const [name, setName] = useState('midudev')

  // Como en el hijo usamos isFollowing como estado inicial no cambia el hijo porque solo usa su valor al iniciar.
  // const [isFollowing, setIsFollowing] = useState(false);

  return (
    <section className='App'>
      {
        // Para añadir una lista de elementos en React hay que añadir una Key(identificador único)
        users.map(({ userName, name, isFollowing }) => {
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }

      {/* <TwitterFollowCard userName={name} initialIsFollowing={isFollowing}> */}
      {/* Migel Ángel Durán */} {/* <--------- A esto se le llama children, puede ser cualquier cosa(componentes, elementos, texto, etc). */}
      {/* </TwitterFollowCard> */}

      {/* <TwitterFollowCard userName="pheralb" initialIsFollowing={isFollowing}>
                Pablo Hernandez
          </TwitterFollowCard> */}

      {/* <button onClick={() => setName('pedromichel')}>
                Cambiar nombre
          </button> */}

      {/* Como en el hijo usamos isFollowing como estado inicial no cambia el hijo porque solo usa su valor al iniciar */}
      {/* <button onClick={() => setIsFollowing(!isFollowing)}>
                Cambiar estado de App
          </button> */}
    </section>
  )
}
