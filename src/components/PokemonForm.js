import {useState} from 'react'

function PokemonForm(){
    const [name, setName] = useState("")
    const [hp, setHp] = useState("")
    const [frontUrl, setFrontUrl] = useState("")
    const [backUrl, setBakUrl] = useState("")
    
    return (
        <div>
            <h3>Add a Pokemon!</h3>
            <form className="ui form" onSubmit={() => {console.log("submitting form...")}}>
                <div className="four fields" widths="equal">
                    <div className="field ui fluid">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="field ui fluid">
                        <label>HP</label>
                        <input type="text" name="hp" placeholder="HP" />
                    </div>
                    <div className="field ui fluid">
                        <label>Front Image URL</label>
                        <input type="text" name="frontUrl" placeholder="url" />
                    </div>
                    <div className="field ui fluid">
                        <label>Back Image URL</label>
                        <input type="text" name="backUrl" placeholder="url" />
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PokemonForm
