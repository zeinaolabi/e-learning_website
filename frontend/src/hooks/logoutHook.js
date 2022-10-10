const Logout = (e) =>{
    e.preventDefault();
    console.log("hyi");

    localStorage.clear();
    window.location.href = '/';
}

export default Logout;