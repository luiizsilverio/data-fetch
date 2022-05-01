import { useState } from 'react'
import { useFetch } from './hooks/useFetch';

type Repository = {
  full_name: string;
  description: string
}

function App() {
  const { data: repos, isLoading } = useFetch<Repository[]>(
    'https://api.github.com/users/luiizsilverio/repos'
  )

  return (
    <>
      {
        isLoading && <p><strong>Carregando...</strong></p>
      }
      <ul>
        {
          repos?.map(repo => {
            return (
              <li key={repo.full_name}>
                <strong>{repo.full_name}</strong>
                <p>{repo.description}</p>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default App
