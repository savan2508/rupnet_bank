import styles, { layout } from "../style.js";
import { Button } from "./Button.jsx";
import { card } from "../assets/index.js";

export const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[400px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          corporis delectus dolorum eaque eligendi eum facilis, ipsa, libero
          magnam, minima molestias nisi nulla obcaecati quasi quo recusandae
          repudiandae tempore vitae.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt={"card"} className={"w-[100%] h-[100%]"} />
      </div>
    </section>
  );
};
