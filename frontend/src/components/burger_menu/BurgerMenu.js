
import { useState } from 'react'
import NavComponent from '../nav_component/NavComponent'
import LoginComponent from '../login_component/LoginComponent'
import './BurgerMenu.css'

const BurgerMenu = (props) => {
    const [burgerOpened, setBurgerOpened] = useState(false)
    const { componentsInfo } = props

    return (
        <div className="burger-menu">
            {burgerOpened ?
                <div className="burger-icon burger-icon--opened" onClick={() => setBurgerOpened(!burgerOpened)}>
                    <span className='burger-icon__span' id='first-burger-span'></span>
                    <span className='burger-icon__span' id='second-burger-span'></span>
                </div>
                :
                <div className="burger-icon burger-icon--closed" onClick={() => setBurgerOpened(!burgerOpened)}>
                    <span className='burger-icon__span'></span>
                    <span className='burger-icon__span'></span>
                    <span className='burger-icon__span'></span>
                </div>
            }

            {burgerOpened &&
                <div className="burger-components">
                    <div className="burger-components__main">
                        {componentsInfo.map((componentInfo, index) => {
                            return <NavComponent
                                key={index}
                                name={componentInfo.name}
                                redirect={componentInfo.redirectUrl} />
                        })}
                    </div>

                    <div className='burger-components__login'>
                        <LoginComponent />
                    </div>

                </div>
            }
        </div>
    )

}

export default BurgerMenu