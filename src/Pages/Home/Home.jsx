import React from "react";
import { CardLG } from "../../Components/CardLG/CardLG";
import { CardSM } from "../../Components/CardSM/CardSM";
import { CovidAd } from "../../Components/CovidAd/CovidAd";
import { HRLine } from "../../Components/HorizontalLine/HRLine";
import { Navbar } from "../../Components/Navbar/Navbar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <CovidAd />
      <HRLine />
      <Navbar />
      <div className={styles.home__backgroundImage}>
        <img src="./images/backgroundImg.png" alt="" />
        <div className={styles.searchCard}>
          <p>Where to?</p>
        </div>
      </div>
      <div className={styles.home__body}>
        <HRLine />
        <h2 className={styles.home__cardSMHeading}>Find a place nearby</h2>
        <div className={styles.home__Card}>
          <CardSM>
            <img
              src="https://mediaim.expedia.com/destination/1/b29d96f82af39a8a799e486a4f5be226.jpg?impolicy=fcrop&w=179&h=101&q=high"
              alt="Puri"
            />
            <p>Puri</p>
          </CardSM>
          <CardSM>
            <img
              src="https://mediaim.expedia.com/destination/1/c257fcbc17ed634a0d15e844e824ff20.jpg?impolicy=fcrop&w=179&h=101&q=high"
              alt="Digha"
            />
            <p>Digha</p>
          </CardSM>
          <CardSM>
            <img
              src="https://mediaim.expedia.com/destination/2/544561a0a91441758e9298b6f4780403.jpg?impolicy=fcrop&w=179&h=101&q=high"
              alt="Mandarmani"
            />
            <p>Mandarmani</p>
          </CardSM>
          <CardSM>
            <img
              src="https://mediaim.expedia.com/destination/2/e815ba3e0bff243e98c395cbc78bb54c.jpg?impolicy=fcrop&w=179&h=101&q=high"
              alt="Jamshedpur"
            />
            <p>Jamshedpur</p>
          </CardSM>
          <CardSM>
            <img
              src="https://mediaim.expedia.com/destination/2/4e67ad5d17b8c80498918a8fbb61ae3a.jpg?impolicy=fcrop&w=179&h=101&q=high"
              alt="Konark"
            />
            <p>Konark</p>
          </CardSM>
          <CardSM>
            <img
              src="https://mediaim.expedia.com/destination/1/4b303e8d0b3aefb192c3d9290a16b347.jpg?impolicy=fcrop&w=179&h=101&q=high"
              alt="Gopalpur"
            />
            <p>Gopalpur</p>
          </CardSM>
        </div>
        <HRLine />

                   <h2 className={styles.home__cardLGHeading}>A snapshot of the world’s most picture-perfect properties</h2>
                   <p className={styles.home__cardLGSubline}>Check out some of our favourite unique stays</p>
              <div className={styles.home__cardLg}>
          <CardLG>
            <img
              src="https://a.cdn-hotels.com/images/common/pages/hpa/modules/uniquepropertiesmodul/treehousevillas.jpg"
              alt="Gopalpur"
            />
            <p>Tree House Villas</p>
            <span>Thailand</span>
          </CardLG>
          <CardLG>
            <img
              src="https://a.cdn-hotels.com/images/common/pages/hpa/modules/uniquepropertiesmodul/explorepatagonia.jpg"
              alt="Gopalpur"
            />
            <p>explora Patagonia</p>
            <span>Chile</span>
          </CardLG>
          <CardLG>
            <img
              src="https://a.cdn-hotels.com/images/common/pages/hpa/modules/uniquepropertiesmodul/grandmiramarallluxurysuitesandresidences.jpg"
              alt="Gopalpur"
            />
            <p>Grand Miramar</p>
            <span>Mexico</span>
          </CardLG>
          <CardLG>
            <img
              src="https://a.cdn-hotels.com/images/common/pages/hpa/modules/uniquepropertiesmodul/kakslauttanenarcticresort.jpg"
              alt="Gopalpur"
            />
            <p>Kakslauttanen Arctic Resort</p>
            <span>Finland</span>
                  </CardLG>
                  <CardLG>
            <img
              src="https://a.cdn-hotels.com/images/common/pages/hpa/modules/uniquepropertiesmodul/treehousevillas.jpg"
              alt="Gopalpur"
            />
            <p>Tree House Villas</p>
            <span>Thailand</span>
          </CardLG>
          <CardLG>
            <img
              src="https://a.cdn-hotels.com/images/common/pages/hpa/modules/uniquepropertiesmodul/explorepatagonia.jpg"
              alt="Gopalpur"
            />
            <p>explora Patagonia</p>
            <span>Chile</span>
          </CardLG>
          <CardLG>
            <img
              src="https://a.cdn-hotels.com/images/common/pages/hpa/modules/uniquepropertiesmodul/grandmiramarallluxurysuitesandresidences.jpg"
              alt="Gopalpur"
            />
            <p>Grand Miramar</p>
            <span>Mexico</span>
          </CardLG>
          <CardLG>
            <img
              src="https://a.cdn-hotels.com/images/common/pages/hpa/modules/uniquepropertiesmodul/kakslauttanenarcticresort.jpg"
              alt="Gopalpur"
            />
            <p>Kakslauttanen Arctic Resort</p>
            <span>Finland</span>
          </CardLG>
        </div>
      </div>
    </div>
  );
};

export { Home };
