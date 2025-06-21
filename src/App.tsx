import style from "./App.module.css";
import Header from "./components/sections/header/Header";
import HeroSection from "./components/sections/hero/HeroSection";

export default function App() {
  return (
    <div className={style.container}>
      <Header />
      <HeroSection />
    </div>
  );
}
