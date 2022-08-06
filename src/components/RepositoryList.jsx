export function RepositoryList() {
  const RepositoryName = 'unform2'
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href="">
            Acessar repositório
          </a>
        </li>

        <li>
          <strong>{RepositoryName}</strong>
          <p>Forms in React</p>

          <a href="">
            Acessar repositório
          </a>
        </li>

        <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href="">
            Acessar repositório
          </a>
        </li>
      </ul>
    </section>
  )
}