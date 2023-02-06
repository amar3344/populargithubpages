const RepositoryItem = props => {
  const {details} = props
  return (
    <div>
      <h2>{details.name}</h2>
    </div>
  )
}

export default RepositoryItem
