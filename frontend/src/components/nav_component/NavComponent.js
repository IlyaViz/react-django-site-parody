import { Link } from 'react-router-dom'
import './NavComponent.css'

export const NavComponent = (props) => {

    return (
        <div className="nav_component">
            {props.selected ?
                <Link to={props.redirect} className='selected_component' onClick={props.onClick}> {props.name} </Link>
                :
                <Link to={props.redirect} onClick={props.onClick}> {props.name} </Link>
            }
        </div>
    )
}