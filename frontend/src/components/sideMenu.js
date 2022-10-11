import {Link} from 'react-router-dom';
import Logout from '../hooks/useLogoutHook';

const SideMenu = () => {

  return (
    <nav className="side_menu">
        <div className="side_menu_container">
            <div className='options'>
                <Link to="/" className="side_menu_title"><h1>E-learning</h1></Link>
                <Link to="/" className="side_menu_button"><button className="transparent_button">Instructors</button></Link>
                <Link to="/students_page" className="side_menu_button"><button className="transparent_button">Students</button></Link>
                <Link to="/courses_page" className="side_menu_button"><button className="transparent_button">Courses</button></Link>
            </div>

            <div className='logout'>
                <button className='transparent_button' onClick={Logout}>Logout</button>
            </div>
        </div>
    </nav>
  );
};

export default SideMenu;