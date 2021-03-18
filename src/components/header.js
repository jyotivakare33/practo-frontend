import logo from './logo.svg';

function header() {
    return (
        <div>
            <header className="content">
                <img src={logo} className="logo" alt="logo" />
                <a href="index.html" className="nav-links-first">
                    Home
                </a>
                <a href="index.html" className="nav-links" target="_blank">
                    Rating
                </a>
                <a href="index.html" className="nav-links" target="_blank">
                    Login
                </a>
            </header>
        </div>
    );
}

export default header;
