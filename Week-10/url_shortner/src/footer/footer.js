import './footer.css'

function Footer({setShowContactUs}) {
    return <footer>
        <button id='contact-us-btn' onClick={() => setShowContactUs(true)}>Contact Us</button>
    </footer>
}

export default Footer;