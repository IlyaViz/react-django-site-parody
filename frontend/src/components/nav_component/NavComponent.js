import { Link } from 'react-router-dom'
import urlNameConverter from '../../utils/UrlNameConverter'
import './NavComponent.css'

const NavComponent = (props) => {
    const { name, redirect } = props
    const selected = urlNameConverter() == name
    
    return (
        <div className="nav_component">
            <Link className={selected ? "selected_component" : ""} to={redirect}> {name} </Link>
        </div>
    )
}

export default NavComponent