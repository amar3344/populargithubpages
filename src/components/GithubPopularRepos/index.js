import {useState, useEffect} from 'react'

import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const apiStatusInState = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const GithubPopularRepos = () => {
  const [getGitRepoList, setGitRepoList] = useState([])
  const [activeTabId, setActiveTabId] = useState(languageFiltersData[0].id)
  const [apiStatus, setApiStatus] = useState(apiStatusInState.initial)

  useEffect(() => {
    const getGithubRepos = async () => {
      const url = `https://apis.ccbp.in/popular-repos?language=${activeTabId}`

      const res = await fetch(url)
      const data = await res.json()
      if (res.ok === true) {
        setGitRepoList(data.popular_repos)
        setApiStatus(apiStatusInState.success)
        console.log(data.popular_repos)
      } else {
        setApiStatus(apiStatusInState.failure)
      }
    }
    getGithubRepos()
  }, [])

  const getGithubRepos = () => (
    <ul className="gitrepo-list-container">
      {getGitRepoList.map(item => (
        <RepositoryItem key={item.id} details={item} />
      ))}
    </ul>
  )

  return (
    <div className="react-app">
      <div className="github-app-container">
        <h3 className="heading">Popular</h3>
        <div>
          <button type="button" className="tab-buttons">
            All
          </button>
          <button type="button" className="tab-buttons">
            Javascript
          </button>
          <button type="button" className="tab-buttons">
            Ruby
          </button>
          <button type="button" className="tab-buttons">
            Java
          </button>
          <button type="button" className="tab-buttons">
            CSS
          </button>
        </div>
        {getGithubRepos()}
      </div>
    </div>
  )
}

export default GithubPopularRepos
