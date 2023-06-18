import { Link } from 'react-router-dom'
import { Logo } from "../logo/Logo"
import { NavComponent } from "../nav_component/NavComponent"
import { useState } from 'react'
import "./Nav.css"

export const Nav = () => {
    
    let [state, setState] = useState({
        selected_nav_component:'Главное'
    })

    let centerComponentNames = ['Главное', 'Каталог', 'Моё']
    let rightComponentNames = ['Войти']

    const changeSelectedNavComponent = (name) => {
        setState({selected_nav_component:name})
    }

    return(
        <nav>
            <div className="all_components">
                <div className="left_components">
                    <Logo/>
                </div>

                <div className="center_components">
                    {centerComponentNames.map((val, index) => {
                        if(val === state.selected_nav_component){
                            return <NavComponent key={index} name={val} selected/>
                        } else {
                            return <NavComponent key={index} name={val} onClick={() => changeSelectedNavComponent(val)}/>
                        }
                    })}
                </div>

                <div className="right_components">
                    {rightComponentNames.map((val, index) => {
                        return <NavComponent key={index} name={val} redirect='/login'/>
                    })}
                </div>
            </div>
        </nav>
        
    )
}