import style from "./App.module.css";
import Header from "./components/sections/header/Header";
import HeroSection from "./components/sections/hero/HeroSection";
import BenefitsSection from "./components/sections/benefits/BenefitsSection";
import GetStartedSection from "./components/sections/get_started/GetStartedSection";

export default function App() {
  return (
    <div className={style.container}>
      <Header />
      <HeroSection />
      <BenefitsSection />
      <GetStartedSection />
    </div>
  );
}
