import './App.css';
// import Header from '../Header/Header';
// import SectionOneBody from '../SectionOneBody/SectionOneBody';
// import EmiratesLoveHeader from '../EmiratesLoveHeader/EmiratesLoveHeader';
import AboveTheFold from '../AboveTheFold/AboveTheFold';
import TailorHeader from '../TailorHeader/TailorHeader';
import ServicesSection from '../ServicesSection/ServicesSection';



function App() {
  return (
    <div className="App">
      <TailorHeader />
      {/* <EmiratesLoveHeader /> */}
      <AboveTheFold />
      {/* <SectionOneBody /> */}
      <ServicesSection />
    </div>
  );
}

export default App;
