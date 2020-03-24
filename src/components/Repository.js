import React from 'react'

import './repository.css'

import download from '../assets/download.png'

export default function Repository({ repositories }) {
  return (
    <article id="page-repositories">
      <header>
        <h1>Repositórios</h1>
      </header>
      <section>
        <ul>
          {repositories.map(repo => (
            <li key={repo.id}>
              <div className="repo-info">
                <a
                  target="_blank"
                  href={repo.html_url}
                  title="Abrir repositório"
                >{repo.name}</a>
                <span>{repo.language}</span>
              </div>
              <div className="repo-action">
                <a href={`${repo.html_url}/archive/master.zip`} title={`Download do projeto: ${repo.name}`}>
                  <img src={download} alt="Download" href="www.google.com" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}