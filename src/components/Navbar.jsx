const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Lama App</span>
            <ul className="list">
                <li className="listItem">
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dcat&psig=AOvVaw2OqYIpL9wpPY-2cbgtgx_r&ust=1693942133437000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLDSyKrYkYEDFQAAAAAdAAAAABAE" alt="" className="avatar" />
                </li>
                <li className="listItem">John Doe</li>
                <li className="listItem">Log Out</li>
            </ul>
        </div>  
    );
};

export default Navbar;