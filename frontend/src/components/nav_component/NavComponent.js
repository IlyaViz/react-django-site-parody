import { Link } from 'react-router-dom'
import './NavComponent.css'

const NavComponent = (props) => {
    const { name, redirect, onClick, selected } = props

    return (
        <div className="nav_component">
            {selected ?
                <Link to={redirect} className='selected_component' onClick={onClick}> {name} </Link>
                :
                <Link to={redirect} onClick={onClick}> {name} </Link>
            }
        </div>
    )
}

export default NavComponent