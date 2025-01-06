import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/121506301?v=4',
      name: 'Vitor Moraes',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'} ,
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return,evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-12-24 16:30:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/121506301?v=4',
      name: 'Cristiano Ronaldo',
      role: 'Melhor da Historia'
    },
    content: [
      {type: 'paragraph', content: 'Chupa Messi👋'} ,
      {type: 'paragraph', content: 'Sou o jogador com mais gols da historia do futebol'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-12-26 16:30:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/121506301?v=4',
      name: 'Cristiano Ronaldo',
      role: 'Melhor da Historia'
    },
    content: [
      {type: 'paragraph', content: 'Chupa Messi👋'} ,
      {type: 'paragraph', content: 'Sou o jogador com mais gols da historia do futebol'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-12-28 15:30:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map(post => {
          return (
          <Post 
          key={post.id}
          author ={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
          />
        )
        })}
        </main>
      </div>
    </div>
  )
}

