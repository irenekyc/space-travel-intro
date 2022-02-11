import type { NextPage } from "next";
import Layout from "../components/layout";
import styles from "../styles/destination.module.scss";
import Tab from "../components/tab";
import { ACTIVE_STYLE_UNDERLINE } from "../constants/tabs";
import { useState } from "react";
import { DESTINATION_DATA } from "../constants/destination-data";
import { SpaceDataType } from "../typings/Destination";

const Destination: NextPage = () => {
  const [activeSlide, setActiveSlide] = useState<string>("MOON");

  return (
    <Layout>
      <main className={styles.destinationPage}>
        <div className={styles.destinationPage__content}>
          <h2>
            <span>01</span> Pick your destination
          </h2>

          <div className={styles.destinationPage__image__div}>
            <div className={styles.destinationPage__image__wrapper}>
              <img
                className={styles.destinationPage__image}
                src={DESTINATION_DATA[0].image.png}
                alt={DESTINATION_DATA[0].name}
              />
            </div>
          </div>

          <div className={styles.destinationPage__swiper__div}>
            <ul className={styles.destinationPage__swiper__controller}>
              {DESTINATION_DATA.map((space: SpaceDataType, index: number) => (
                <li key={space.name}>
                  <Tab
                    id={space.name}
                    label={space.name}
                    data-tab-index={index}
                    isActive={space.name === activeSlide}
                    activeStyles={ACTIVE_STYLE_UNDERLINE}
                    className={styles.destinationPage__swiper__navigation__tab}
                    onClick={() => setActiveSlide(space.name)}
                  />
                </li>
              ))}
            </ul>
            {/* Swiper Text */}
            <div className={styles.destinationPage__swiper__text}>
              <h1>Moon</h1>
              <p>
                The smallest of the four Galilean moons orbiting Jupiter, Europa
                is a winter lover’s dream. With an icy surface, it’s perfect for
                a bit of ice skating, curling, hockey, or simple relaxation in
                your snug wintery cabin.
              </p>
              <hr className={styles.divider} />
              <div className={styles.destinationPage__statistic}>
                <div className={styles.destinationPage__statisticDiv}>
                  <h2>AVG. DISTANCE</h2>
                  <h3>628 MIL. km</h3>
                </div>
                <div className={styles.destinationPage__statisticDiv}>
                  <h2>Est. travel time</h2>
                  <h3>9 months</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Destination;
