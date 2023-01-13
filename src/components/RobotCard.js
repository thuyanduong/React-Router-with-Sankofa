import { useState } from "react"

function RobotCard(props){

    let [showImage, setShowImage] = useState(true)

    function toggleImage(){
        setShowImage(!showImage)
    }

    return (
        <div className="ui card">
            <div>
            <button className="ui mini button" onClick={toggleImage}>{showImage ? "Hide" : "Show"}</button>
            <div className="image">
                {showImage ? <img style={{width:100, height: 100}} alt="oh no!" src={props.url}/> : null}
            </div>
            <div className="content">
                <div className="header">{props.name}</div>
            </div>
            <div className="extra content">
                <span>
                <i className="icon heartbeat red" />
                    {props.level}
                </span>
            </div>
            </div>
        </div>
    )
}

export default RobotCard
