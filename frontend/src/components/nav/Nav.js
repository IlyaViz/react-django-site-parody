import { useState } from 'react'
import Logo from "../logo/Logo"
import NavComponent from "../nav_component/NavComponent"
import BurgerMenu from '../burger_menu/BurgerMenu'
import LoginComponent from '../login_component/LoginComponent'
import SearchBar from '../search_bar/SearchBar'
import "./Nav.css"

const Nav = () => {
    const [showOtherComponents, setShowOtherComponents] = useState(true)

    const centerComponentNames = ['Главное', 'Моё']
    const centerComponentRedirectUrls = ['/', '/my']

    return (
        <nav>
            <div className="all_components">
                {showOtherComponents &&
                    <div className="left_components">
                        <Logo />
                    </div>
                }

                <div className="center_components">
                    {showOtherComponents &&
                        centerComponentNames.map((val, index) => {
                            return <NavComponent
                                key={index}
                                name={val}
                                redirect={centerComponentRedirectUrls[index]} />
                        })
                    }

                    <SearchBar showParentComponents={window.screen.width > 1200 ? null : setShowOtherComponents} />
                </div>
                {showOtherComponents &&
                    <div className="right_components">
                        <LoginComponent />
                    </div>
                }

                <BurgerMenu
                    componentNames={centerComponentNames}
                    componentRedirects={centerComponentRedirectUrls}
                />

            </div>
        </nav >

    )
}

export default Nav