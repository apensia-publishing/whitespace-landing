import style from "./HeroSection.module.css";
import heroImg from "../../../assets/images/hero.png";

export default function HeroSection(): React.JSX.Element {
  return (
    <section id="hero" className={style.section_container}>
      <div className={style.left}>
        <div className={style.text_wrapper}>
          <h1 className={style.hero_title}>
            Everything you need to scale a{" "}
            <span className={style.highlight_txt}>global team</span>
          </h1>
          <p className={style.hero_txt}>
            Check out our proven methods, guides, and exercises that help works
            better and people happier.
          </p>
        </div>
      </div>
      <div className={style.right}>
        <img src={heroImg} alt="Hero section background image" />
      </div>
    </section>
  );
}
