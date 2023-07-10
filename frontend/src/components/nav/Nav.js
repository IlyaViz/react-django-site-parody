import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Logo from "../logo/Logo"
import NavComponent from "../nav_component/NavComponent"
import BurgerMenu from '../burger_menu/BurgerMenu'
import LoginComponent from '../login_component/LoginComponent'
import SearchBar from '../search_bar/SearchBar'
import "./Nav.css"

const Nav = () => {
    const location = useLocation()
    switch (location.pathname) {
        case "/":
            var pathNameEquivalent = "Главное"
            break;

        case "/my":
            var pathNameEquivalent = "Моё"
            break;

        default:
            var pathNameEquivalent = "Главное"
            break;
    }
    const [selectedComponent, setSelectedComponent] = useState(pathNameEquivalent)

    const centerComponentNames = ['Главное', 'Моё']
    const centerComponentRedirectUrls = ['/', '/my']

    return (
        <nav>
            <div className="all_components">
                <div className="left_components">
                    <Logo />
                </div>

                <div className="center_components">
                    {centerComponentNames.map((val, index) => {
                        return <NavComponent
                            key={index}
                            name={val}
                            redirect={centerComponentRedirectUrls[index]}
                            selected={val == selectedComponent}
                            onClick={() => setSelectedComponent(val)} />
                    })}
                    <SearchBar />
                </div>

                <div className="right_components">
                    <LoginComponent />
                </div>

                <BurgerMenu
                    componentNames={centerComponentNames}
                    componentRedirects={centerComponentRedirectUrls}
                />

            </div>
        </nav >

    )
}

export default Nav