import './App.css';
import Navbar from "./Elements/NavBar/navbar";
import MainSection from "./Elements/main_section/mainSection";
import WasteLog from "./Elements/WasteLog/wastelog";
import FounderVision from "./Elements/founder_vision/founder_vision";
import BlogSection from "./Elements/BlogSection/blogSection";
// import HeroSetion from "./Elements/HeroSection/heroSection";
// import SampleHero from './Elements/SampleHero/sampleHero';
// import ScrollHero from './Elements/Scroll/scroll';
import SampleHero1 from './Elements/SampleHero1/sampleHero1';
import DonationSection from './Elements/Donation/donation';
import MyFooter from './Elements/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainSection/>
      <WasteLog/>
      <FounderVision/>
      <BlogSection/>
      {/* <HeroSetion/> */}
      {/* <SampleHero/> */}
      {/* <ScrollHero/> */}
      <SampleHero1/>
      <DonationSection/>
      <MyFooter/>
    </div>
  );
}

export default App;
