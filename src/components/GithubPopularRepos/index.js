import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'

import RepositoryItem from '../RepositoryItem'
import LanguageFilterItem from '../LanguageFilterItem'
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
        // console.log(data.popular_repos)
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

  const getJavascriptGitRepos = async () => {
    const filteredLaguageJavaScript = languageFiltersData.filter(
      item => item.id === 'JAVASCRIPT',
    )
    const tabId = filteredLaguageJavaScript[0].id

    const url = `https://apis.ccbp.in/popular-repos?language=${tabId}`
    const res = await fetch(url)

    const data = await res.json()
    if (res.ok === true) {
      setGitRepoList(data.popular_repos)
      setApiStatus(apiStatusInState.success)
      // console.log(data.popular_repos)
    } else {
      setApiStatus(apiStatusInState.failure)
    }
  }

  const getRubyGitRepos = async () => {
    const filteredLaguageJavaScript = languageFiltersData.filter(
      item => item.id === 'RUBY',
    )
    const tabId = filteredLaguageJavaScript[0].id

    const url = `https://apis.ccbp.in/popular-repos?language=${tabId}`
    const res = await fetch(url)

    const data = await res.json()
    if (res.ok === true) {
      setGitRepoList(data.popular_repos)
      setApiStatus(apiStatusInState.success)
      // console.log(data.popular_repos)
    } else {
      setApiStatus(apiStatusInState.failure)
    }
  }

  const getJavaGitRepos = async () => {
    const filteredLaguageJavaScript = languageFiltersData.filter(
      item => item.id === 'JAVA',
    )
    const tabId = filteredLaguageJavaScript[0].id

    const url = `https://apis.ccbp.in/popular-repos?language=${tabId}`
    const res = await fetch(url)

    const data = await res.json()
    if (res.ok === true) {
      setGitRepoList(data.popular_repos)
      setApiStatus(apiStatusInState.success)
      // console.log(data.popular_repos)
    } else {
      setApiStatus(apiStatusInState.failure)
    }
  }

  const getCSSGitRepos = async () => {
    const filteredLaguageJavaScript = languageFiltersData.filter(
      item => item.id === 'CSS',
    )
    const tabId = filteredLaguageJavaScript[0].id

    const url = `https://apis.ccbp.in/popular-repos?language=${tabId}`
    const res = await fetch(url)

    const data = await res.json()
    if (res.ok === true) {
      setGitRepoList(data.popular_repos)
      setApiStatus(apiStatusInState.success)
      // console.log(data.popular_repos)
    } else {
      setApiStatus(apiStatusInState.failure)
    }
  }

  return (
    <div className="react-app">
      <div className="github-app-container">
        <h3 className="heading">Popular</h3>
        <div>
          <button type="button" className="tab-buttons">
            All
          </button>
          <button
            type="button"
            className="tab-buttons"
            onClick={getJavascriptGitRepos}
          >
            Javascript
          </button>
          <button
            type="button"
            className="tab-buttons"
            onClick={getRubyGitRepos}
          >
            Ruby
          </button>
          <button
            type="button"
            className="tab-buttons"
            onClick={getJavaGitRepos}
          >
            Java
          </button>
          <button
            type="button"
            className="tab-buttons"
            onClick={getCSSGitRepos}
          >
            CSS
          </button>
        </div>
        {apiStatus === 'INPROGRESS' ? (
          <div>
            <Loader type="ThreeDots" color="#0284c7" width={80} height={80} />
          </div>
        ) : (
          getGithubRepos()
        )}
      </div>
    </div>
  )
}

export default GithubPopularRepos
