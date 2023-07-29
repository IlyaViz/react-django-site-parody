import { Link, useLocation } from 'react-router-dom'
import urlNameConverter from '../../utils/UrlNameConverter'
import './NavComponent.css'

const NavComponent = (props) => {
    const { name, redirect } = props
    const location = useLocation()
    const selected = urlNameConverter(location) == name
    
    return (
        <div className="nav_component">
            <Link className={selected ? "active_component" : ""} to={redirect}> {name} </Link>
        </div>
    )
}

export default NavComponent