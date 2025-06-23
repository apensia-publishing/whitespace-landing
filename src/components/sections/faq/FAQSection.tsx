import style from "./FAQSection.module.css";
import Accordion from "@/components/ui/accordion/Accordion";

export default function FAQSection() {
  const accordionData = [
    {
      title: "What are properties in Figma?",
      content:
        "There are bunch of properties that you can take advantage of in Figma. We strive for maintaining one of the most high quality Figma properties to your project.",
    },
    {
      title: "How Whitespace UI kit and design system can help me?",
      content:
        "The main feature of Whitespace UI is that it saves your time drastically, which will lead to lower cost. You no longer have to create a new UI kit from scratch before starting each project. Use Whitespace UI on an unlimited number of projects and save hundreds of hours and thousands of dollars.",
    },
    {
      title: "What is your return policy?",
      content:
        "If you request refund within 7 days, we will 100% refund. For 5 days, we will refund 50% only. If you request refund within no later than 2 days, we are regretful to say that we cannot refund.",
    },
    {
      title: "How can I contact customer support?",
      content:
        "You can contact either via our LinkedIn page or send an inquiry email below.",
    },
    {
      title: "What payment methods do you accept?",
      content:
        "We accept electronic payments such as credit or debit card and E-transfer.",
    },
  ];

  return (
    <section className={style.faq_container} id="faq">
      <div className={style.title_wrapper}>
        <h1 className={style.title}>Frequently Asked Questions</h1>
        <h2 className={style.sub_title}>
          If you have any additional questions, please get in touch with our
          friendly team
        </h2>
      </div>
      <div className={style.accordion_wrapper}>
        {accordionData.map((i, index) => (
          <Accordion
            key={index}
            title={i.title}
            content={i.content}
            currentIndex={index}
          />
        ))}
      </div>
    </section>
  );
}
