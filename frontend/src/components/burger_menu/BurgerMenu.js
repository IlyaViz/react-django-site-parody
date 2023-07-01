
import { useState } from 'react'
import NavComponent from '../nav_component/NavComponent'
import LoginComponent from '../login_component/LoginComponent'
import './BurgerMenu.css'

const BurgerMenu = (props) => {
    const [burgerOpened, setBurgerOpened] = useState(false)
    const { componentNames } = props

    return (
        <div className="burger_menu">
            {burgerOpened ?
                <div className="burger_icon_opened" onClick={() => setBurgerOpened(!burgerOpened)}>
                    <span id='first_burger_span' />
                    <span id='second_burger_span' />
                </div>
                :
                <div className="burger_icon_closed" onClick={() => setBurgerOpened(!burgerOpened)}>
                    <span />
                    <span />
                    <span />
                </div>
            }

            {burgerOpened &&
                <div className="burger_components">
                    <div className="main_burger_elements">
                        {componentNames.map((name, index) => {
                            return <NavComponent
                                key={index}
                                name={name} />
                        })}
                    </div>

                    <div className='login_burger_component'>
                        <LoginComponent />
                    </div>

                </div>
            }
        </div>
    )

}

export default BurgerMenu