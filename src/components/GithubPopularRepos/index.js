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
      const options = {
        method: 'GET',
      }
      const res = await fetch(url, options)
      const data = await res.json()
      if (res.ok === 200) {
        setGitRepoList(data.popular_repos)
        setApiStatus(apiStatusInState.success)
      } else {
        setApiStatus(apiStatusInState.failure)
      }
    }
    getGithubRepos()
  }, [])

  const getStatusApi=()=>

    (
         switch (apiStatus){
                case (apiStatusInState.inProgress):
                    return getApiInProgress()
                case (apiStatusInState.inProgress):
                    return getApiInProgress()
                case (apiStatusInState.inProgress):
                    return getApiInProgress()
                default :
                return null
            }

    )

  

  return (
    <div className="react-app">
      <div className="github-app-container">
        <h3>Popular</h3>
        <div>
          <button type="button">All</button>
          <button type="button">Javascript</button>
          <button type="button">Ruby</button>
          <button type="button">Java</button>
          <button type="button">CSS</button>
        </div>

        {getStatusApi()}
        {/* <ul>
          {getGitRepoList.map(item => (
            <RepositoryItem key={item.id} details={item} />
          ))}
        </ul> */}
      </div>
    </div>
  )
}

export default GithubPopularRepos
