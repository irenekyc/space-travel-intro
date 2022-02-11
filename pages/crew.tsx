import type { NextPage } from "next";

import styles from "../styles/crew.module.scss";
import Image from "next/image";

import { useState } from "react";

import { SpaceDataType } from "../typings/Destination";
import { TabContainer, TabContent, TabPane } from "react-bootstrap";

const Crew: NextPage = () => {
  const [activeSlide, setActiveSlide] = useState<string>();

  const clickOnSlide = (eventKey: string | null) => setActiveSlide(eventKey!);

  return (
    <main className={styles.crewPage}>
      <h1>
        <span>01</span> Meet Your Crew
      </h1>
      <div className={styles.crewPage__content}>
        <div className={styles.crewPage__content__image}>
          <Image
            src="/images/crew/image-douglas-hurley.png"
            alt="Douglas"
            height={700}
            width={514}
            objectFit="contain"
          />
        </div>
        <div className={styles.crewPage__content__text}>
          <ul className={styles.crewPage__tabRow}>
            <li>
              <button className={styles.crewPage__tab__button} id="crew-1">
                Douglas
              </button>
              <label className={styles.crewPage__tab__label} htmlFor="crew-1" />
            </li>
            <li>
              <button className={styles.crewPage__tab__button} id="crew-2">
                Douglas
              </button>
              <label className={styles.crewPage__tab__label} htmlFor="crew-2" />
            </li>
            <li>
              <button className={styles.crewPage__tab__button} id="crew-3">
                Douglas
              </button>
              <label className={styles.crewPage__tab__label} htmlFor="crew-3" />
            </li>
            <li>
              <button className={styles.crewPage__tab__button} id="crew-4">
                Douglas
              </button>
              <label className={styles.crewPage__tab__label} htmlFor="crew-4" />
            </li>
          </ul>
          <div className={styles.crewPage__content__description}>
            <h3>Commander</h3>
            <h2>Douglas Hurley</h2>
            <p>
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Crew;
