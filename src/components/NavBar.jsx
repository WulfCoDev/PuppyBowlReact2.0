import {Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <>
        <Link to={"/newplayerform"}>{<h1>New Player Form</h1>}</Link>
        <Link to={'/'}>{<h1>All Players</h1>}</Link>
        </>
    )
};

export default NavBar