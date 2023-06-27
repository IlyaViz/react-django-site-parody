import { Link } from 'react-router-dom'
import './NavComponent.css'

const NavComponent = (props) => {
    const { name, redirect, onClick, selected } = props

    return (
        <div className="nav_component">
            <Link className={selected ? "selected_component" : ""} to={redirect} onClick={onClick}> {name} </Link>
        </div>
    )
}

export default NavComponent