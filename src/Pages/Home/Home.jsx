import React from "react";
import './CarouselAerro.css'
import { CardLG } from "../../Components/CardLG/CardLG";
import { CardSM } from "../../Components/CardSM/CardSM";
import { CovidAd } from "../../Components/CovidAd/CovidAd";
import { HRLine } from "../../Components/HorizontalLine/HRLine";
import { Navbar } from "../../Components/Navbar/Navbar";
import {TravelWithConfidence} from '../../Components/TravelWithConfidence/TravelWithConfidence'

import styles from "./Home.module.css";
import { Footer } from "../../Components/Footer/Footer";
import { CardWide } from "../../Components/CardWide/CardWide";
import Carousel from 'react-elastic-carousel'
import Slider from "react-slick";



const Home = () => {
const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
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
              <HRLine />
              <TravelWithConfidence />
              <HRLine />

              


                <h2 className={styles.home__cardSMHeading}>Start planning your next getaway</h2>
              <div className={styles.Home__CardWide}>
      <Carousel itemsToScroll={1} itemsToShow={3} pagination={false} showArrows={false} focusOnSelect={true} enableSwipe={ true}>
                  <CardWide>
                      <img
              src="https://a.cdn-hotels.com/cos/production/a5835985-70a9-4566-a678-c3a5d4b0162f/0.40/3a90bb7e-e63c-46b0-858b-14865ac13fc3.jpg"
              alt="Last Minute Deals"
            />
            <p>Last Minute Deals</p>
            <span>It's never too late to get great prices</span>
                  </CardWide>
                  <CardWide>
                      <img
              src="https://a.cdn-hotels.com/cos/production/a5835985-70a9-4566-a678-c3a5d4b0162f/0.40/51c49195-3b5e-4849-946c-4317bd1e9ce6.jpg"
              alt="Find the best deals"
            />
            <p>Find the best deals</p>
            <span>Get inspiration for your next trip!</span>
                    </CardWide>
                    <CardWide>
                      <img
              src="https://a.cdn-hotels.com/cos/production/a5835985-70a9-4566-a678-c3a5d4b0162f/0.40/9cfc4a71-2f89-4659-8e6b-6cdd40f0decd.jpg"
              alt="Get the app"
            />
            <p>Get the app</p>
            <span>Book on the go with our mobile app</span>
                      </CardWide>
                      <CardWide>
                      <img
              src="https://a.cdn-hotels.com/cos/production/a5835985-70a9-4566-a678-c3a5d4b0162f/0.40/3a90bb7e-e63c-46b0-858b-14865ac13fc3.jpg"
              alt="Last Minute Deals"
            />
            <p>Last Minute Deals</p>
            <span>It's never too late to get great prices</span>
                  </CardWide>
                  <CardWide>
                      <img
              src="https://a.cdn-hotels.com/cos/production/a5835985-70a9-4566-a678-c3a5d4b0162f/0.40/51c49195-3b5e-4849-946c-4317bd1e9ce6.jpg"
              alt="Find the best deals"
            />
            <p>Find the best deals</p>
            <span>Get inspiration for your next trip!</span>
                    </CardWide>
                    <CardWide>
                      <img
              src="https://a.cdn-hotels.com/cos/production/a5835985-70a9-4566-a678-c3a5d4b0162f/0.40/9cfc4a71-2f89-4659-8e6b-6cdd40f0decd.jpg"
              alt="Get the app"
            />
            <p>Get the app</p>
            <span>Book on the go with our mobile app</span>
                    </CardWide>
                  
</Carousel>
                  
                  
                  
              </div>






                



















              <HRLine />
        <h2 className={styles.home__cardSMHeading}>We do more than just hotels...</h2>
        <div className={styles.home__Card}>
          <CardSM>
            <img
              src="https://a.cdn-hotels.com/images/common/pages/lpa/homepage/propertytypes/resorts.jpg?impolicy=fcrop&w=188&h=106&q=high"
              alt="Resort"
            />
            <p>Resort</p>
          </CardSM>
          <CardSM>
            <img
              src="https://a.cdn-hotels.com/images/common/pages/lpa/homepage/propertytypes/apartments.jpg?impolicy=fcrop&w=188&h=106&q=high"
              alt="Apartments"
            />
            <p>Apartments</p>
          </CardSM>
          <CardSM>
            <img
              src="https://a.cdn-hotels.com/images/common/pages/lpa/homepage/propertytypes/hotels.jpg?impolicy=fcrop&w=188&h=106&q=high"
              alt="Hotels"
            />
            <p>Hotels</p>
          </CardSM>
          <CardSM>
            <img
              src="https://a.cdn-hotels.com/images/common/pages/lpa/homepage/propertytypes/guest_houses.jpg?impolicy=fcrop&w=188&h=106&q=high"
              alt="Guest houses"
            />
            <p>Guest houses</p>
          </CardSM>
          <CardSM>
            <img
              src="https://a.cdn-hotels.com/images/common/pages/lpa/homepage/propertytypes/hostels.jpg?impolicy=fcrop&w=188&h=106&q=high"
              alt="Hostels"
            />
            <p>Hostels</p>
          </CardSM>
          <CardSM>
            <img
              src="https://a.cdn-hotels.com/images/common/pages/lpa/homepage/propertytypes/ryokan.jpg?impolicy=fcrop&w=188&h=106&q=high"
              alt="Ryokans"
            />
            <p>Ryokans</p>
          </CardSM>
        </div>
              <HRLine />
              <Footer/>
      </div>
    </div>
  );
};

export { Home };
