import type { NextPage } from "next";

import styles from "../styles/technology.module.scss";
import Image from "next/image";

import { useState } from "react";

import { TabContainer, TabContent, TabPane } from "react-bootstrap";

import classnames from "classnames";
import { TECHNOLOGY_DATA } from "../constants/technology-data";
import { TechnologyData } from "../typings/Technology";
import Head from "next/head";

const Technology: NextPage = () => {
  const [activeSlide, setActiveSlide] = useState<string>(TECHNOLOGY_DATA[0].id);

  const clickOnSlide = (eventKey: string | null) => setActiveSlide(eventKey!);

  return (
    <>
      <Head>
        <title>Technology 101 | Space Travel</title>
      </Head>
      <main className={styles.technologyPage}>
        <h1>
          <span>03</span> SPACE LAUNCH 101
        </h1>
        <div className={styles.technologyPage__content}>
          <TabContainer
            activeKey={activeSlide}
            defaultActiveKey={activeSlide}
            onSelect={clickOnSlide}
          >
            <TabContent className={styles.hideInLG}>
              {TECHNOLOGY_DATA.map((technology: TechnologyData) => (
                <TabPane
                  transition={true}
                  key={`technology-image-${technology.id}`}
                  eventKey={technology.id}
                >
                  <div className={styles.technologyPage__content__image__sm}>
                    <Image
                      src={technology.image.landscape.png}
                      alt={technology.name}
                      width={technology.image.landscape.width}
                      height={technology.image.landscape.height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </TabPane>
              ))}
            </TabContent>

            <ul className={styles.technologyPage__content__tabRow}>
              {TECHNOLOGY_DATA.map((technology: TechnologyData) => (
                <li key={technology.id}>
                  <button
                    className={styles.technologyPage__content__tabButton}
                    id={`technology-${technology.id}`}
                    onClick={() => setActiveSlide(technology.id)}
                  >
                    {technology.id}
                  </button>
                  <label
                    htmlFor={`technology-${technology.id}`}
                    className={classnames(
                      styles.technologyPage__content__tabLabel,
                      {
                        [styles.technologyPage__content__tabLabel__active]:
                          activeSlide === technology.id,
                      }
                    )}
                  >
                    {technology.id}
                  </label>
                </li>
              ))}
            </ul>
            <div className={styles.technologyPage__content__description}>
              <TabContent>
                {TECHNOLOGY_DATA.map((technology: TechnologyData) => (
                  <TabPane
                    transition={true}
                    eventKey={technology.id}
                    key={`technology-decription-${technology.id}`}
                  >
                    <h3>THE TERMINOLOGY…</h3>
                    <h2>{technology.name}</h2>
                    <p>{technology.description}</p>
                  </TabPane>
                ))}
              </TabContent>
            </div>
            <TabContent className={styles.showInLG}>
              {TECHNOLOGY_DATA.map((technology: TechnologyData) => (
                <TabPane
                  transition={true}
                  key={`technology-image-${technology.id}`}
                  eventKey={technology.id}
                >
                  <div className={styles.technologyPage__content__image__lg}>
                    <Image
                      src={technology.image.portrait.png}
                      alt={technology.name}
                      width={technology.image.portrait.width}
                      height={technology.image.portrait.height}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </TabPane>
              ))}
            </TabContent>
          </TabContainer>
        </div>
      </main>
    </>
  );
};

export default Technology;
