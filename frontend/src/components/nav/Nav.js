import { useState } from 'react'
import Logo from "../logo/Logo"
import NavComponent from "../nav_component/NavComponent"
import BurgerMenu from '../burger_menu/BurgerMenu'
import "./Nav.css"

const Nav = () => {

    let [state, setState] = useState({
        selected_nav_component: 'Главное'
    })

    let centerComponentNames = ['Главное', 'Каталог', 'Моё']

    return (
        <nav>
            <div className="all_components">
                <div className="left_components">
                    <Logo />
                </div>

                <div className="center_components">
                    {centerComponentNames.map((val, index) => {
                        if (val === state.selected_nav_component) {
                            return <NavComponent
                                key={index}
                                name={val}
                                selected />
                        } else {
                            return <NavComponent
                                key={index}
                                name={val}
                                onClick={() => setState({ selected_nav_component: val })} />
                        }
                    })}
                </div>

                <div className="right_components">
                    <NavComponent
                        name="Войти"
                        redirect='/login' />
                </div>

                <BurgerMenu
                    componentNames={centerComponentNames}
                />

            </div>
        </nav >

    )
}

export default Nav