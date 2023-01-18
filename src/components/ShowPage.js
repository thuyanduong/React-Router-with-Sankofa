import { useNavigate, useParams } from "react-router-dom";
import {useEffect, useState } from 'react'
function ShowPage(){

  let navigate = useNavigate();

  let {robotId} = useParams();
  let [robot, setRobot] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3000/robots/${robotId}`)
    .then(res => res.json())
    .then(obj => {
      setRobot(obj)
    })
  }, [])

    return (
      robot && <div className="App ui container">
        <div class="ui centered card">
          <div class="ui image">
            <img src={robot.url} class="visible content"/>
          </div>
          <div class="content">
            <a class="header">{robot.name}</a>
            <div class="meta">
              <span class="date">{robot.bio}</span>
            </div>
          </div>
          <div class="extra content">
            <a>
              <i className="icon heartbeat red" />
              Level: {robot.level}
            </a>
          </div>
        </div>
        <button className="ui button" onClick={() => {navigate("/robots")}}>
            Back to Robot Collection
        </button>
      </div>
    )
}

export default ShowPage