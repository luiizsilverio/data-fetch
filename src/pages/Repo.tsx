import { useQueryClient } from "react-query"
import { useParams } from "react-router-dom"

export function Repo() {
  const params = useParams()
  const currentRepo = params['*'] as string
  const qry = useQueryClient()

  async function handleChange() {
    await qry.invalidateQueries(['repos'])
  }

  return (
    <>
      <h1>{currentRepo}</h1>
      <button onClick={handleChange}>Alterar Repositório</button>
    </>
  )
}