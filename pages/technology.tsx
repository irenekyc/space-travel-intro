import type { NextPage } from "next";

import styles from "../styles/technology.module.scss";
import Image from "next/image";

import { useState } from "react";

import { TabContainer, TabContent, TabPane } from "react-bootstrap";

import classnames from "classnames";

const Technology: NextPage = () => {
  const [activeSlide, setActiveSlide] = useState<string>("");

  const clickOnSlide = (eventKey: string | null) => setActiveSlide(eventKey!);

  return (
    <main className={styles.technologyPage}>
      <h1>
        <span>03</span> SPACE LAUNCH 101
      </h1>
      <div className={styles.technologyPage__content}>
        <div className={styles.technologyPage__content__image__sm}>
          <Image
            src="/images/technology/image-launch-vehicle-landscape.jpg"
            alt=""
            width={375}
            height={170}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <ul className={styles.technologyPage__content__tabRow}>
          {["1", "2", "3"].map((tab: string) => (
            <li key={tab}>
              <button
                className={styles.technologyPage__content__tabButton}
                id={`technology-${tab}`}
              >
                {tab}
              </button>
              <label
                htmlFor={`technology-${tab}`}
                className={classnames(
                  styles.technologyPage__content__tabLabel,
                  {
                    [styles.technologyPage__content__tabLabel__active]:
                      tab === "1",
                  }
                )}
              >
                {tab}
              </label>
            </li>
          ))}
        </ul>
        <div className={styles.technologyPage__content__description}>
          <h3>THE TERMINOLOGY…</h3>
          <h2>LAUNCH VEHICLE</h2>
          <p>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
        <div className={styles.technologyPage__content__image__lg}>
          <Image
            src="/images/technology/image-launch-vehicle-portrait.jpg"
            alt=""
            width={515}
            height={527}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </main>
  );
};

export default Technology;
