import { useEffect, useState } from 'react'

type Repository = {
  full_name: string;
  description: string;
}

function App() {

  const  [ repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/julioAz/repos')
    .then(response => response.json())
    .then(data => {
      setRepositories(data);
    })
  }, [])

  return (
    <div>
      <h2>Repositorios</h2>
      <ul>
        {repositories.map(repo => {
          return (
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App