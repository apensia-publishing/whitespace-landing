import style from "./App.module.css";
import Header from "./components/sections/header/Header";

export default function App() {
  return (
    <div className={style.container}>
      <Header />
    </div>
  );
}
