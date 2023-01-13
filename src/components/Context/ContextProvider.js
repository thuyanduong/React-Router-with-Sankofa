import { useState } from "react";
import Context from "./Context";

export default function ContextProvider({children}){

  let [robots, setRobots] = useState([])
  let [searchText, setSearchText] = useState("")

  let value = {
    robots,
    setRobots,
    searchText,
    setSearchText
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}
