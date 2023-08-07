import {Link} from 'react-router-dom'
import '../styles.css'


const NavBar = () => {
    return (
        <div className='navbar'>
        <Link to={"/newplayerform"}>{<h1>New Player Form</h1>}</Link>
        <Link to={'/'}>{<h1>All Players</h1>}</Link>
        </div>
    )
};

export default NavBar