import React from 'react';
import styles from "./LastDeals.module.css";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { BiSearchAlt } from "react-icons/bi";
import { TiInputChecked } from "react-icons/ti";
import { IoEarthSharp } from "react-icons/io5";
import Carousel from 'react-elastic-carousel';
import CardDeal from "../../Components/CardDeal/CardDeal";
import {Footer} from "../../Components/Footer/FooterDealsPage/FooterDeals";
import {Link} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Navbar } from "../../Components/NavbarLastDeals/NavbarLastDeals";
import { CitySearchBox } from '../../Components/CardHotelSearch/SearchBar/CitySearchBox';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(0),
      width: 310,
      padding: 5,
    },
    selectEmpty: {
      marginLeft: theme.spacing(3),
    },
  }));

  const currencies = [
    {
      value: 'Show All',
    },
    {
      value: 'United Kingdom',
    },
    {
      value: 'Sint Maarten',
    },
    {
      value: 'Spain',
    },
    {
      value: 'Italy',
    },
    {
      value: 'Greece',
    },
    {
      value: 'Morocco',
    },
    {
      value: 'Germany',
    },
    {
      value: 'Austria',
    },
    {
      value: 'Netherlands',
    },
    {
      value: 'Argentina',
    },
    {
      value: 'France',
    },
  ];
export default function LastMinDeals(){
    
  const classes = useStyles();
  const [nameData, setNameData] = React.useState([]);
  const [country, setCountry] = React.useState("Show all");
  const [cont, setCont] = React.useState("");
  const [hotel, setHotel] = React.useState([]);

  React.useEffect(() => {
    getData();
    document.title = "Last Minute Deals"
  }, [])

  const getData = () => {
    axios.get("https://abhi-app-test.herokuapp.com/data")
    .then((res) => {
        console.log(res.data);
        setHotel(res.data);
        setNameData(res.data);
    })
}

  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  const handleChange1 = () => {
    setCountry(cont);
  };

  React.useEffect(() => {
    setNameData(hotel.filter((item)=> item.address.countryName === country));
  }, [country])

  // console.log(country);
  console.log(cont);
  
    return (
        <div >
          {/* <Navbar/> */}
            <div className={styles.imgDiv}>
              <br />
             <h1>Last Minute Deals</h1>
             <p>Book today and holiday tomorrow</p>
             <br />
             <div className={styles.date}>
              <h1><BiSearchAlt id={styles.icon}/> Find a place to stay</h1>
              <form >
              <input type="text" value={cont} onChange={(e) => setCont(e.target.value)}/>
              </form>
              <p>Enter a destination or property</p>
              <hr style={{width: "107%", marginLeft: -17, color: "white"}}/>
              <button onClick={handleChange1}>Show Deals</button>
             </div>
             <br />
            </div>
            <div className={styles.dataDiv}>
                <br />
                <div className={styles.trust}>
                    <p className={styles.p1}> <TiInputChecked id={styles.icon1}/>Free cancellation <span style={{color:"#4e4e4e", fontSize: 12,fontWeight: 600}}>on most hotels</span></p>

                    <p><TiInputChecked id={styles.icon1}/>Pay now or later <span style={{color:"#4e4e4e", fontSize: 12,fontWeight: 600}}>on most rooms</span></p>

                    <p style={{color: "#003789"}}><TiInputChecked id={styles.icon2}/>Price Guarantee</p>
                </div>
                <br />
                <div className={styles.countryCont}>
                    <h1 id={styles.h1}><span><IoEarthSharp style={{color: "rgb(29, 29, 253)", marginBottom: -4}}/></span> Select country</h1>
              
                    <TextField
                      id="standard-select-currency-native"
                      select
                      value={country}
                      onChange={handleChange}
                      SelectProps={{
                      native: true,
                      }}
                    >
                      {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.value}
                        </option>
                      ))}
                    </TextField>

                </div>
                <br />
                <br />
                {nameData.map((data) => (

                  <div key={uuidv4()} className={styles.first}>
                      <div className={styles.dataMain}>
                                  
                      <p>{data.address.city}, {data.address.countryName}<Link to={`/hotel/${data.hotelId}`}><span style={{fontSize: 18, marginLeft: 15, color: "rgb(72, 72, 253)", fontWeight: 600}}>view all deals</span></Link></p>
                                  
                      <div className={styles.data}>
                        <div>
                        <img src={data.images[0].url} alt="" />
                        </div>             
                
                      <Carousel swipe={true} pagination={true} showArrows={false}>
                
                        {data.images.map((item) => (
                          <CardDeal key={uuidv4()} style={{margin: "auto"}}>
                          <img src={item.url} />
                          <h1>{data.name}</h1>
                          <p>{data.starRating}  stars</p>
                          <h2>Good  {data.rating}/10</h2>
                          <hr style={{backgroundColor: "#d32f2f",marginBottom: 4,marginTop: -16,border: "none",height: 1}}/>
                          <h1 style={{color: "#d32f2f",fontSize: 20}}>Save up to 15% </h1>
                          <p style={{fontSize: 14, fontWeight: 500,color: "#d32f2f", marginTop: "-5px"}}>Travel between Sun 31 May 2020 - Thu 30 December 2021</p>
                          <hr  style={{backgroundColor: "#d32f2f",marginTop: 6,border: "none",height: 1,marginBottom: 5}}/>
                          <button><Link to={`/hotel/${data.hotelId}`}><span style={{color: "blue", fontSize: 15}}>Check Price</span></Link></button>
                          </CardDeal>
                        ))}
                    
                      </Carousel>
                                      
                      </div>
                    </div>                                  

                    <div className={styles.priceCard}>
                    <h1>5-star <span style={{fontWeight: 400, color: "white"}}>average</span></h1>
                    <h2 style={{marginTop: "-15px"}}>$ {data.price5}</h2>
                    
                    <h1>4-star <span style={{fontWeight: 400, color: "white"}}>average</span></h1>
                    <h2 style={{marginTop: "-15px"}}>$ {data.price4}</h2>
                    
                    <h1>3-star <span style={{fontWeight: 400, color: "white"}}>average</span></h1>
                    <h2 style={{marginTop: "-15px"}}>$ {data.price3}</h2>
                    <br />
                    <button ><Link to={`/hotel/${data.hotelId}`}><span style={{color: "white", fontSize: 15}}>View all deals</span></Link></button>
                  </div>
                  </div>
                  
                ))}
          
                

            </div>
            <div className={styles.dataDiv1}>
            {/* <Footer /> */}
            </div>
           
        </div>
    )
}
