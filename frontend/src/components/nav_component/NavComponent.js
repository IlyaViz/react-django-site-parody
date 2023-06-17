import './NavComponent.css'

export const NavComponent = (props) => {

    return(
        <div className="nav_component">
            {props.selected ? 
            <p href="" className='selected_component' onClick={props.onClick}> {props.name} </p>
            :
            <p href="" onClick={props.onClick}> {props.name} </p>
            }
        </div>
    )
}