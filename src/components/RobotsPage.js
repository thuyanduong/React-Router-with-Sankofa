import RobotForm from './RobotForm'
import Filter from './Filter'
import RobotCollection from './RobotCollection'

export default function RobotsPage(){
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
  )
}