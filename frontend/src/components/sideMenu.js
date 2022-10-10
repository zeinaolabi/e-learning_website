import {Link} from 'react-router-dom';

const SideMenu = () => {

    const submit = (e) =>{
        e.preventDefault();
        console.log("hyi");

        localStorage.clear();
        window.location.href = '/';
    }

  return (
    <nav className="side_menu">
        <div className="side_menu_container">
            <div className='options'>
                <Link to="/" className="side_menu_title"><h1>E-learning</h1></Link>
                <Link to="/" className="side_menu_button"><button className="transparent_button">Instructors</button></Link>
                <Link to="/" className="side_menu_button"><button className="transparent_button">Students</button></Link>
                <Link to="/" className="side_menu_button"><button className="transparent_button">Courses</button></Link>
            </div>

            <div className='logout'>
                <button className='transparent_button' onClick={submit}>Logout</button>
            </div>
        </div>
    </nav>
  );
};

export default SideMenu;