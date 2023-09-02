import { useState } from 'react'
import Logo from "../logo/Logo"
import NavComponent from "../nav_component/NavComponent"
import BurgerMenu from '../burger_menu/BurgerMenu'
import LoginComponent from '../login_component/LoginComponent'
import SearchBar from '../search_bar/SearchBar'
import "./Nav.css"

const Nav = () => {
    const [showOtherComponents, setShowOtherComponents] = useState(true)

    const centerComponentsInfo = [
        {
            name: "Главное",
            redirectUrl: "/"
        },
        {
            name: "Моё",
            redirectUrl: "/my"
        }
    ]

    return (
        <nav className="nav">
            <div className="nav__all-components">
                {showOtherComponents &&
                    <div className="nav__left-components">
                        <Logo />
                    </div>
                }

                <div className="nav__center-components">
                    {showOtherComponents &&
                        centerComponentsInfo.map((componentInfo, index) => {
                            return <NavComponent
                                key={index}
                                name={componentInfo.name}
                                redirect={componentInfo.redirectUrl} />
                        })
                    }

                    <SearchBar showParentComponents={window.screen.width > 1200 ? null : setShowOtherComponents} />
                </div>
                {showOtherComponents &&
                    <div className="nav__right-components">
                        <LoginComponent />
                    </div>
                }

                <BurgerMenu
                    componentsInfo={centerComponentsInfo}
                />

            </div>
        </nav >

    )
}

export default Nav