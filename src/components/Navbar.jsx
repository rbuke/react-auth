import { Link } from "react-router-dom";

const Navbar = ({user}) => {
    return (
        <div className="navbar">
            <span className="logo"> 
                <Link className="link" to ="/">Pleroma App</Link>
            </span>{
                user ? (
        
                    <ul className="list">
                        <li className="listItem">
                            <img src="../img/github.png" alt="" className="avatar" />
                        </li>
                        <li className="listItem">John Doe</li>
                        <li className="listItem">Log Out</li>
                    </ul>
            ) : (<Link className="link" to="login">Login</Link>)
        }
        </div>  
    );
};

export default Navbar;