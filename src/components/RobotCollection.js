import { useContext, useEffect } from 'react'
import Context from './Context/Context'
import RobotCard from './RobotCard'

function RobotCollection(){

    let {robots, searchText, setRobots} = useContext(Context)

    useEffect(() => {
        fetch("http://localhost:3000/robots")
        .then(res => res.json())
        .then(data => {
            setRobots(data)
        })
    }, [])

    return (
        <div className="ui six cards">
            {
                robots.filter(robot => robot.name.includes(searchText)).map(robot => <RobotCard 
                                        key={robot.id}
                                        id={robot.id}
                                        name={robot.name}
                                        level={robot.level}
                                        url={robot.url}
                                    />)
            }
        </div>
    )
}

export default RobotCollection