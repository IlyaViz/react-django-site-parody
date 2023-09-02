import { Link, useLocation } from 'react-router-dom'
import urlNameConverter from '../../utils/urlNameConverter'
import './NavComponent.css'

const NavComponent = (props) => {
    const { name, redirect } = props
    const location = useLocation()
    const selected = urlNameConverter(location) == name

    return (
        <div className={`nav-component ${selected ? 'nav-component--active' : ''}`}>
            <Link to={redirect} className="nav-component__link">
                {name}
            </Link>
        </div>
    )
}

export default NavComponent