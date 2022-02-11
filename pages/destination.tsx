import type { NextPage } from "next";
import Layout from "../components/layout";
import styles from "../styles/destination.module.scss";
import Tab from "../components/tab";
import { ACTIVE_STYLE_UNDERLINE } from "../constants/tabs";
import { useState } from "react";
import { DESTINATION_DATA } from "../constants/destination-data";
import { SpaceDataType } from "../typings/Destination";
import { TabContainer, TabContent, TabPane } from "react-bootstrap";
import Fade from "react-bootstrap";

const Destination: NextPage = () => {
  const [activeSlide, setActiveSlide] = useState<string>("MOON");

  const clickOnSlide = (eventKey: string | null) => setActiveSlide(eventKey!);

  return (
    <Layout>
      <main className={styles.destinationPage}>
        <h1>
          <span>01</span> Pick your destination
        </h1>
        <div className={styles.destinationPage__content}>
          <div className={styles.destinationPage__content__image}>
            <TabContainer
              activeKey={`${activeSlide}`}
              defaultActiveKey={`${activeSlide}`}
              onSelect={clickOnSlide}
            >
              <TabContent>
                {DESTINATION_DATA.map((data: SpaceDataType) => (
                  <TabPane
                    eventKey={`${data.name}`}
                    transition={true}
                    key={data.name}
                  >
                    <div className={styles.destinationPage__image__div}>
                      <img
                        className={styles.destinationPage__image}
                        src={data.image.png}
                        alt={data.name}
                      />
                    </div>
                  </TabPane>
                ))}
              </TabContent>
            </TabContainer>
          </div>
          <div className={styles.destinationPage__content__text}>
            <ul className={styles.destinationPage__content__tabRow}>
              {DESTINATION_DATA.map((space: SpaceDataType, index: number) => (
                <li key={space.name}>
                  <Tab
                    id={space.name}
                    label={space.name}
                    data-tab-index={index}
                    isActive={space.name === activeSlide}
                    activeStyles={ACTIVE_STYLE_UNDERLINE}
                    className={styles.destinationPage__content__tab}
                    onClick={() => setActiveSlide(space.name)}
                  />
                </li>
              ))}
            </ul>

            <TabContainer
              activeKey={`${activeSlide}`}
              defaultActiveKey={`${activeSlide}`}
              onSelect={clickOnSlide}
            >
              <TabContent>
                {DESTINATION_DATA.map((data: SpaceDataType) => (
                  <TabPane
                    eventKey={`${data.name}`}
                    transition={true}
                    key={data.name}
                  >
                    <div
                      className={styles.destinationPage__content__description}
                    >
                      <h2>{data.name}</h2>
                      <p>{data.description}</p>
                      <hr className={styles.divider} />
                      <div className={styles.destinationPage__statistic}>
                        {data.statistics.map((stat) => (
                          <div
                            className={styles.destinationPage__statisticDiv}
                            key={stat.label}
                          >
                            <h3>{stat.label}</h3>
                            <h4>{stat.value}</h4>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabPane>
                ))}
              </TabContent>
            </TabContainer>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Destination;
