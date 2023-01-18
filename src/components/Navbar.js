import { Link } from "react-router-dom";

export default function Navbar(){
  return (
    <div>
      <div class="ui segment inverted menu">
        <Link to="/" class="item">
          Home
        </Link>
        <Link to="/robots" class="item">
          Robots
        </Link>
      </div>
    </div>
  )
}