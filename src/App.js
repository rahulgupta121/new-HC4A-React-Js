import "./App.css";
//import { Route, Switch , Menu } from "react-router-dom";
// import Home from './Components/Home';
import Topbar from "./Components/Topbar";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import AboutUs from "./Components/AboutUs";
import SupportStudent from "./Components/SupportStudent";
import Donation from "./Components/Donation";
import Volunteer from "./Components/Volunteer";
import AwardSection from "./Components/AwardSection";
import UpComingEvent from "./Components/UpComingEvent";
import FooterSection from "./Components/FooterSection";
import Artical from "./Components/Artical";
//import ContactUs from "./Components/ContactUs";

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
      <Artical />
      <Volunteer />
      <AwardSection />
      <UpComingEvent />
      <FooterSection />

      {/* <Menu />
      <Switch>
        <Route exact path='/' component={ContactUs } />
      </Switch> */}
    </>
  );
}

export default App;