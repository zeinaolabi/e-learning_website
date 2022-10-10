import {Link} from 'react-router-dom';

const SideMenu = ({ text, color }) => {
  return (
    <nav className="side_menu">
        <div className="side_menu_container">
            <Link to="/" className="side_menu_title"><h1>E-learning</h1></Link>
            <Link to="/" className="side_menu_button"><button className="transparent_button">Instructors</button></Link>
            <Link to="/" className="side_menu_button"><button className="transparent_button">Students</button></Link>
            <Link to="/" className="side_menu_button"><button className="transparent_button">Courses</button></Link>
        </div>
    </nav>
  );
};

export default SideMenu;