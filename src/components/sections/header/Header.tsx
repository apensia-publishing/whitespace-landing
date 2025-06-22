import { useState, useEffect } from "react";
import style from "./Header.module.css";
import mainLogo from "../../../assets/images/main_logo.svg";
import close from "../../../assets/icons/close.svg";
import useMediaQuery from "../../../hooks/useMediaQuery";

type HamburgerButtonProps = {
  hamburgerOpen: boolean;
  setHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function HamburgerButton({
  hamburgerOpen,
  setHamburgerOpen,
}: HamburgerButtonProps): React.JSX.Element {
  return (
    <button
      className={style.hamburger_btn}
      onClick={() => setHamburgerOpen(true)}
    >
      <div className={`${style.line} ${hamburgerOpen ? style.open : ""}`} />
    </button>
  );
}

export default function Header(): React.JSX.Element {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const menuData = [
    { id: "home", text: "Home" },
    { id: "benefits", text: "Benefits" },
    { id: "faq", text: "FAQ" },
    { id: "news", text: "News" },
    { id: "contact", text: "Contact" },
  ];

  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  // console.log(hamburgerOpen);
  useEffect(() => {
    if (desktop) setHamburgerOpen(false);
  }, [desktop]);

  return (
    <header className={style.header}>
      <a href="/" className={style.logo_wrapper}>
        <img src={mainLogo} alt="Main logo" />
        <span className={style.logo_text}>Whitespace AI</span>
      </a>
      <div className={style.menu_container}>
        <HamburgerButton
          hamburgerOpen={hamburgerOpen}
          setHamburgerOpen={setHamburgerOpen}
        />
        <ul
          className={`${
            desktop ? style.menu_wrapper_desktop : style.menu_wrapper
          } ${hamburgerOpen ? style.open : style.close}`}
        >
          <button
            className={style.close_btn}
            onClick={() => setHamburgerOpen(false)}
          >
            <img src={close} alt="Close icon" />
          </button>
          {menuData.map((i) => (
            <li key={i.id}>
              <a href={`#${i.id}`}>{i.text}</a>
            </li>
          ))}
        </ul>
        <a href="/" className={style.start_now_btn}>
          Start Now
        </a>
      </div>
    </header>
  );
}
