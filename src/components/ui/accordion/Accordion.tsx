import style from "./Accordion.module.css";
import { useState } from "react";
import plus from "../../../assets/icons/plus.svg";
import minus from "../../../assets/icons/minus.svg";

type AccordionProps = {
  title: string;
  content: string;
  currentIndex: number;
};

export default function Accordion({
  title,
  content,
  currentIndex,
}: AccordionProps & React.HTMLAttributes<HTMLDivElement>) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
  console.log(accordionOpen);

  //   const handleSetAccordionOpen = () => setAccordionOpen(currentIndex);
  const handleAccordionOpen = () => setAccordionOpen(true);
  const handleAccordionClose = () => setAccordionOpen(false);

  return (
    <div className={style.accordion_card}>
      <div className={style.preview}>
        <h2 className={style.title}>{title}</h2>
        {accordionOpen ? (
          <button onClick={handleAccordionClose}>
            <img src={minus} alt="Accordion close button" />
          </button>
        ) : (
          <button onClick={handleAccordionOpen}>
            <img src={plus} alt="Accordion plus button" />
          </button>
        )}
      </div>
      <div className={style.content_wrapper}>
        <p className={style.content}>{content}</p>
      </div>
    </div>
  );
}
