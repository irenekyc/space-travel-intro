import type { NextPage } from "next";

import styles from "../styles/crew.module.scss";
import Image from "next/image";

import { useState } from "react";

import { TabContainer, TabContent, TabPane } from "react-bootstrap";
import { CREW_DATA } from "../constants/crew-data";
import { CrewType } from "../typings/Crew";
import classnames from "classnames";
import Head from "next/head";

const Crew: NextPage = () => {
  const [activeSlide, setActiveSlide] = useState<string>(CREW_DATA[0].id);

  const clickOnSlide = (eventKey: string | null) => setActiveSlide(eventKey!);

  return (
    <>
      <Head>
        <title>Meet Your Crew | Space Travel</title>
      </Head>
      <main className={styles.crewPage}>
        <h1>
          <span>02</span> Meet Your Crew
        </h1>

        <div className={styles.crewPage__content}>
          <TabContainer
            defaultActiveKey={activeSlide}
            activeKey={activeSlide}
            onSelect={clickOnSlide}
          >
            <TabContent>
              {CREW_DATA.map((crew: CrewType) => (
                <TabPane key={crew.id} eventKey={crew.id} transition={true}>
                  <div className={styles.crewPage__content__image__wrapper}>
                    <Image
                      src={crew.image.png}
                      alt={crew.name}
                      height={crew.image.height}
                      width={crew.image.width}
                      objectFit="cover"
                    />
                  </div>
                </TabPane>
              ))}
            </TabContent>

            <div className={styles.crewPage__content__text}>
              <ul className={styles.crewPage__tabRow}>
                {CREW_DATA.map((crewData: CrewType) => (
                  <li key={crewData.id}>
                    <button
                      className={classnames(styles.crewPage__tab__button, {
                        [styles.crewPage__tab__button__active]:
                          activeSlide === crewData.id,
                      })}
                      id={`crew-tab-${crewData.id}`}
                      onClick={() => setActiveSlide(crewData.id)}
                    >
                      {crewData.name}
                    </button>
                    <label
                      className={classnames(styles.crewPage__tab__label, {
                        [styles.crewPage__tab__label__active]:
                          activeSlide === crewData.id,
                      })}
                      htmlFor={`crew-tab-${crewData.id}`}
                    />
                  </li>
                ))}
              </ul>

              <TabContent>
                {CREW_DATA.map((crew) => (
                  <TabPane eventKey={crew.id} key={crew.id}>
                    <div className={styles.crewPage__content__description}>
                      <h3>{crew.role}</h3>
                      <h2>{crew.name}</h2>
                      <p>{crew.description}</p>
                    </div>
                  </TabPane>
                ))}
              </TabContent>
            </div>
          </TabContainer>
        </div>
      </main>
    </>
  );
};

export default Crew;
