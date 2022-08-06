import { useEffect, useState } from "react"
import "../styles/repositories.scss"

import { RepositoryItem } from "./RepositoryItem"

export function RepositoryList() {

  const [repositories, setRepositories] = useState([])

  const repository =  {
    name: "unform",
    description: "Forms in React",
    link: "https://api.github.com/users/g-santosmartins/repos"
  }

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
    .then(response => response.json() )
    .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository, index) => {
          return <RepositoryItem key={index} repository={repository}/>
        })}
      
      </ul>
    </section>
  )
}