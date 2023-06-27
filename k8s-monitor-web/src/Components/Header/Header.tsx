import { Link } from "react-router-dom";
import './Header.scss'
import { ReactComponent as Logo } from '../../Assets/Images/logo-white.svg';
import SelectOption from "../SelectOption/SelectOption";
import { SlUser } from 'react-icons/sl'

function Header() {
    return (
        <header>
            <div className="content">
                <div className="left">
                    <div className="logo">
                        <Logo />
                    </div>
                    <div className="navBar">
                        <Link to="/home">Home</Link>
                        <Link to="/pods">Pods</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/ingress">Ingress</Link>
                        <Link to="/settings">Settings</Link>
                    </div>
                </div>
                <div className="right">
                    <div className="namespace">
                        <span>Namespace:</span>
                        <SelectOption>
                            <option>all</option>
                            <option>default</option>
                            <option>k8s-system</option>
                        </SelectOption>
                    </div>
                    <div className="account">
                        <SlUser></SlUser>
                        <span>Hello, user!</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;