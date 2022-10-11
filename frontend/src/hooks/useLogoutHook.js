const Logout = (e) =>{
    e.preventDefault();

    localStorage.clear();
    window.location.href = '/';
}

export default Logout;