import './App.css';

import AboveTheFold from '../AboveTheFold/AboveTheFold';
import TailorHeader from '../TailorHeader/TailorHeader';
import ServicesSection from '../ServicesSection/ServicesSection';
import AboutUsSection from '../AboutUsSection/AboutUsSection';
import TailoringServicesSection from '../TailoringServicesSection/TailoringServicesSection';
import Video from '../Video/Video';
import TestimonialSection from '../TestimonialSection/TestimonialSection'
import FollowUsSection from '../FollowUsSection/FollowUsSection';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader'


function App() {
  return (
    <div className="App">
      <Loader />
      <TailorHeader />
      <AboveTheFold />
      <ServicesSection />
      <AboutUsSection />
      <TailoringServicesSection />
      <Video />
      <TestimonialSection />
      <FollowUsSection />
      <Footer />
    </div>
  );
}

export default App;
