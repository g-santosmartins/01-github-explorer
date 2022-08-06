import { RepositoryItem } from "./RepositoryItem"


import "../styles/repositories.scss"
export function RepositoryList() {
  const repository =  {
    name: "unform",
    description: "Forms in React",
    link: "https://github.com/g-santosmartins"
  }
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  )
}