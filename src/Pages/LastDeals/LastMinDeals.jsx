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

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
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

export default function LastMinDeals(){
    
  const classes = useStyles();
  const [state, setState] = React.useState({
    country: '',
    name: 'hai',
  });
  const [hotel, setHotel] = React.useState([]);

  React.useEffect(() => {
    getData();
    document.title = "Last Minute Deals"
  }, [])

  const getData = () => {
    axios.get("http://localhost:3001/data/?_limit=29")
    .then((res) => {
        console.log(res.data);
        setHotel(res.data);
    })
}

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

    return (
        <div >
          <Navbar/>
            <div className={styles.imgDiv}>
              <br />
             <h1>Last Minute Deals</h1>
             <p>Book today and holiday tomorrow</p>
             <br />
             <div className={styles.date}>
              <h1><BiSearchAlt id={styles.icon}/> Find a place to stay</h1>
              <CitySearchBox/>
              <p>Enter a destination or property</p>
              <hr style={{width: "107%", marginLeft: -17, color: "white"}}/>
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
                    <h1 id={styles.h1}><span><IoEarthSharp style={{color: "rgb(29, 29, 253)"}}/></span> Select country</h1>
              
                    <FormControl className={classes.formControl}>
                        <NativeSelect
                        className={classes.selectEmpty}
                        value={state.country}
                        name="country"
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'country' }}
                        >
                        <option value="Show all">Show all</option>
                        <option value=" Australia">Australia</option>
                        <option value=" Austria">Austria</option>
                        <option value="China ">China</option>
                        <option value="Czech">Czech Republic</option>
                        <option value=" France">France</option>
                        <option value=" Germany">Germany</option>
                        <option value="India ">India</option>
                        <option value=" Indonesia">Indonesia</option>
                        <option value="Italy">Italy</option>
                        <option value="Japan">Japan</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Singapore">Singapore</option>
                        <option value="SKorea">South Korea</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Thailand">Thailand</option>
                        <option value="USA">United States of America</option>
                        <option value="Vietnam">Vietnam</option>
                        </NativeSelect>
                    </FormControl>
                </div>
                <br />
                <br />
                {hotel.map((data) => (

                  <div key={uuidv4()} className={styles.first}>
                      <div className={styles.dataMain}>
                                  
                      <p>Los Angeles, California <span style={{fontSize: 18, marginLeft: 5, color: "rgb(72, 72, 253)", fontWeight: 600}}>view all deals</span></p>
                                  
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
                          <button>Check Price</button>
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
                    <button>View all deals</button>
                  </div>
                  </div>
                  
                ))}
          
                

            </div>
            <div className={styles.dataDiv1}>
            <Footer />
            </div>
           
        </div>
    )
}
