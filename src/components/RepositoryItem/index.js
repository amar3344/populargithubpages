import './index.css'

const RepositoryItem = props => {
  const {details} = props
  return (
    <li className="each-list-item">
      <button type="button">
        <img
          src={details.avatar_url}
          alt={details.name}
          width={100}
          height={100}
        />
        <p className="name-text">{details.name}</p>
        <div className="stars-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
          />
          <p>{details.stars_count} stars</p>
        </div>
        <div className="stars-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
          />
          <p>{details.forks_count} forks</p>
        </div>
        <div className="stars-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
          />
          <p>{details.issues_count} open issues</p>
        </div>
      </button>
    </li>
  )
}

export default RepositoryItem
