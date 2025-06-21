import style from "./BenefitsSection.module.css";
import mail from "../../../assets/icons/mail.svg";
import mobile from "../../../assets/icons/mobile.svg";
import check from "../../../assets/icons/check.svg";

export default function BenefitsSection() {
  const featureData = [
    {
      id: "project",
      icon: check,
      title: "Project Structure",
      text: "Check out our proven methods, guides, and exercises that help make work better, and people happier.",
    },
    {
      id: "responsive",
      icon: mobile,
      title: "Responsive",
      text: "This design system and UI kit is coming with full-responsive screens for tablet and mobile devices.",
    },
    {
      id: "messaging",
      icon: mail,
      title: "Messaging",
      text: "On mobile, customers can send text, or audio messages to agents, like using any messaging app",
    },
  ];
  const imageCarouselData = [
    "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg",
    "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg",
    "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg",
    "https://images.pexels.com/photos/265072/pexels-photo-265072.jpeg",
  ];

  return (
    <section className={style.benefits_container}>
      <div className={style.title_wrapper}>
        <span className={style.title_prefix}>Our Features</span>
        <h1 className={style.title}>Our key benefits</h1>
        <p className={style.title_exp}>
          Our services are designed to cater to your specific needs and goals
        </p>
      </div>
      <div className={style.contents_wrapper}>
        <ul className={style.features}>
          {featureData.map((i) => (
            <li key={i.id} className={style.feature_card}>
              <img src={i.icon} alt={`${i.id} icon`} width="40" />
              <h2>{i.title}</h2>
              <p>{i.text}</p>
            </li>
          ))}
        </ul>
        <div className={style.image_carousel}>
          {imageCarouselData.map((i, index) => (
            <div key={index} className={style.image}>
              <img src={i} alt={`Image carousel image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
