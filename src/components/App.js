import RobotForm from './RobotForm'
import Filter from './Filter'
import RobotCollection from './RobotCollection'

function App() {
  return (
    <div className="App ui container">
      <h1>Robodex</h1>
      <br />
      <RobotForm />
      <br />
      <Filter />
      <br />
      <RobotCollection />
    </div>
  );
}

export default App;
