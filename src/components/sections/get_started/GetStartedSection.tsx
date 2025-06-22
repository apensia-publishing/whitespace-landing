import style from "./GetStartedSection.module.css";
import check from "../../../assets/icons/check.svg";

export default function GetStartedSection() {
  const perksData = [
    { id: "unlimited", text: "Unlimited pages" },
    { id: "easy-access", text: "Easy access" },
    { id: "free-trial", text: "14-days free trial" },
  ];

  return (
    <section id="faq" className={style.get_started_section}>
      <div className={style.title_wrapper}>
        <h1 className={style.title}>Streamline your workflow with SaaS</h1>
        <h2 className={style.sub_title}>
          Stay up to date with the most relevant information
        </h2>
      </div>
      <div className={style.contents_wrapper}>
        <ul className={style.perks}>
          {perksData.map((i) => (
            <li key={i.id} className={style.perk_item}>
              <img src={check} alt="Check icon" />
              {i.text}
            </li>
          ))}
        </ul>
        <div className={style.btn_wrapper}></div>
      </div>
    </section>
  );
}
