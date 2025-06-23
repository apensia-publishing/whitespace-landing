import style from "./ClientSection.module.css";
import {
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
} from "./clients";

export default function ClientSection() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  return (
    <section className={style.client_section}>
      <div className={style.title_wrapper}>
        <h1>Our clients</h1>
      </div>
      <div className={style.client_wrapper}>
        {logos.map((logo, index) => (
          <div className={style.logo_wrapper}>
            <img src={logo} alt={`Logo ${index + 1} image`} />
          </div>
        ))}
      </div>
    </section>
  );
}
