import { useState } from "react";
import style from "./Header.module.css";
import mainLogo from "../../../assets/images/main_logo.svg";
import { Link } from "react-router";

function HamburgerButton(): React.JSX.Element {
  return (
    <button className={style.hamburger_btn}>
      <div className={style.line} />
    </button>
  );
}

export default function Header(): React.JSX.Element {
  const menuData = [
    { id: "home", text: "Home" },
    { id: "features", text: "Features" },
    { id: "news", text: "News" },
    { id: "contact", text: "Contact" },
  ];

  return (
    <header className={style.header}>
      <div className={style.logo_wrapper}>
        <img src={mainLogo} alt="Main logo" />
        <span className={style.logo_text}>Whitespace AI</span>
      </div>
      <div className={style.menu_container}>
        <HamburgerButton />
        <ul className={style.menu_wrapper}>
          {menuData.map((i) => (
            <li key={i.id}>
              <Link to={`/${i.id}`}>{i.text}</Link>
            </li>
          ))}
        </ul>
        <li className={style.start_now_btn}>
          <Link to="/">Start Now</Link>
        </li>
      </div>
    </header>
  );
}
