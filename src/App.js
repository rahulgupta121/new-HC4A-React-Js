import './App.css';
// import Home from './Components/Home';
import Topbar from './Components/Topbar';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import AboutUs from './Components/AboutUs';
import SupportStudent from './Components/SupportStudent';
import Donation from './Components/Donation';
function App() {
  return (
   <>
   {/* <Home /> */}
   <Topbar />
   <Navbar />
   <Banner />
    <AboutUs />
    <SupportStudent />
    <Donation />
   </>
  );
}

export default App;
