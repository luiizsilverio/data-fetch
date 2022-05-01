import axios from 'axios';
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom';

type Repository = {
  full_name: string;
  description: string
}

export function Repos() {

  const { data: repos, isFetching, error } = useQuery<Repository[]>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/luiizsilverio/repos')
    return response.data
  }, {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 // quanto tempo manter esses dados em cache? 60 seg
  })

  return (
    <>
      <h1>Meus Repositórios</h1>
      {
        isFetching && <p><strong>Carregando...</strong></p>
      }

      <ul>
        {
          repos?.map(repo => {
            return (
              <li key={repo.full_name}>
                <Link to={`repos/${repo.full_name}`}>
                  {repo.full_name}
                </Link>
                <p>{repo.description}</p>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}
