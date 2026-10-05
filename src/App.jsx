import { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import WelcomeScreen from "./components/WelcomeScreen";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import WhyUs from "./components/WhyUs";
import Safety from "./components/Safety";
import ExploreCity from "./components/ExploreCity";
import Fleet from "./components/Fleet";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="app">
      {showWelcome ? (
        <WelcomeScreen
          onComplete={() => setShowWelcome(false)}
        />
      ) : (
        <>
          <Navbar />

          <main
            id="home"
            style={{
              paddingTop: "82px",
            }}
          >
            <Hero />
            <About />
            <Services />
            <HowItWorks />
            <WhyUs />
            <WhyUs />
            <Safety />
            <ExploreCity />
            <Fleet />
            <Pricing />
            <Contact />
            <Footer />
          </main>
        </>
      )}
    </div>
  );
}

export default App;