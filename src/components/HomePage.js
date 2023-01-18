function HomePage(){
  return (
    <div>
    <div className="ui massive message">
      <div className="ui container">
        <h1 className="ui huge header">Hello, world!</h1>
        <p>
          This is a template for a robot or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.
        </p>
        <button className="ui large primary button">Learn more</button>
      </div>
    </div>
    <div className="ui container">
      <div className="ui three column stackable grid">
        <div className="column">
          <h1 className="ui header">Caston</h1>
          <img src="https://robohash.org/caston"/>
          <div className="ui small basic button">View details</div>
        </div>
        <div className="column">
          <h1 className="ui header">Ana</h1>
          <img src="https://robohash.org/ana"/>
          <div className="ui small basic button">View details</div>
        </div>
        <div className="column">
          <h1 className="ui header">Jowel</h1>
          <img src="https://robohash.org/jowel"/>
          <div className="ui small basic button">View details</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomePage