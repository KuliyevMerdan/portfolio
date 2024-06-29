import './Navbar'
import { images } from '../../constants'
const Navbar = () => {
    return(
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.logo} alt="..." />
            </div>
            <ul className="app__navbar-links">
                {
                    ['home', 'about', 'contact', 'work', 'skills'].map((item) => {
                        return(
                            <li className="app__flex p-text" key={`link-${item}`}>
                                <div />
                                <a href={`#${item}`}>{item}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navbar;