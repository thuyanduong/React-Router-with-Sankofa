import {useContext, useState} from 'react'
import Context from './Context/Context'

function RobotForm(){
    const [name, setName] = useState("")
    const [level, setLevel] = useState("")
    const [url, setUrl] = useState("")
    const [bio, setBio] = useState("")
    let {robots, setRobots} = useContext(Context)

    function onSubmit(e){
        e.preventDefault()
        let obj = {
            name,
            level,
            url,
            bio
        }

        fetch("http://localhost:3000/robots", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(res => res.json())
        .then(newRobot => {
            setRobots([...robots, newRobot])
            setName("")
            setLevel("")
            setUrl("")
            setBio("")
        })
    }

    return (
        <div>
            <h3>Add a Robot!</h3>
            <form className="ui form" onSubmit={onSubmit}>
                <div className="four fields" widths="equal">
                    <div className="field ui fluid">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="field ui fluid">
                        <label>Level</label>
                        <input type="text" name="level" placeholder="Level" value={level} onChange={(e) => setLevel(e.target.value)}/>
                    </div>
                    <div className="field ui fluid">
                        <label>Front Image URL</label>
                        <input type="text" name="url" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)}/>
                    </div>
                    <div className="field ui fluid">
                        <label>Bio</label>
                        <input type="text" name="bio" placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)}/>
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RobotForm
