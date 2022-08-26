import './header.css'

function Header({setShowContactUs}) {
    return <header>
        <h1 onClick={() => setShowContactUs(false)}>Shortly</h1>
    </header>
}

export default Header;