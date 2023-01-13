import { useContext } from "react"
import Context from "./Context/Context"

function Filter(){
    
    let {searchText, setSearchText} = useContext(Context)

    return (
        <div className="ui search">
            <div className="ui icon input">
                <input className="prompt" placeholder="Search by Name..." value={searchText} onChange={((e) => setSearchText(e.target.value))}/>
                <i className="search icon" />
            </div>
        </div>
    )
}

export default Filter