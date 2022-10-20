import Header from './header/header'
import Homepage from './homepage/homepage'
import ContactUs from './contactus/contactus'
import Footer from './footer/footer'
import {useState} from 'react';

function App() {
  let [showContactUs, setShowContactUs] = useState(false);
  return (
    <>
      <Header setShowContactUs={setShowContactUs}/>
      {!showContactUs?<Homepage />:<ContactUs />}
      <Footer setShowContactUs={setShowContactUs}/>
    </>
  );
}

export default App;
