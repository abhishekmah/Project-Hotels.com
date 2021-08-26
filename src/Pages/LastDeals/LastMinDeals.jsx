import React from 'react'
import styles from "./LastDeals.module.css"
import { BiSearchAlt } from "react-icons/bi";
import { TiInputChecked } from "react-icons/ti";
import { IoEarthSharp } from "react-icons/io5";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import Carousel from 'react-elastic-carousel'
import CardDeal from "../../Components/CardDeal/CardDeal"

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Navbar } from "../../Components/NavbarLastDeals/NavbarLastDeals"


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
              <input type="text" />
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

                    <p style={{color: "#003789"}}><TiInputChecked id={styles.icon1}/>Price Guarantee</p>
                </div>
                <br />
                <div className={styles.countryCont}>
                    <h1 ><IoEarthSharp id={styles.icon3}/> Select country</h1>

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

                <div className={styles.dataMain}>

                  <p>Los Angeles, California <span style={{fontSize: 18, marginLeft: 5, color: "rgb(72, 72, 253)", fontWeight: 600}}>view all deals</span></p>

                  <div className={styles.data}>
                  <img src="https://a.cdn-hotels.com/gdcs/production49/d345/be182590-b7a1-11e6-9c00-0242ac110047.jpg" alt="" />

                  <Carousel >

                    <CardDeal>
                    <img src="https://exp.cdn-hotels.com/hotels/1000000/30000/25200/25151/65529629_b.jpg" alt="" />
                    <h1>Kawada Hotel</h1>
                    <p>3 Stars</p>
                    <h2>Good  7.4/10</h2>
                    <button>Check Price</button>
                    </CardDeal>

                    <CardDeal>
                    <img src="https://exp.cdn-hotels.com/hotels/1000000/20000/12300/12287/7ebe71bf_b.jpg" alt="" />
                    <h1>Kawada Hotel</h1>
                    <p>3 Stars</p>
                    <h2>Good  7.4/10</h2>
                    <button>Check Price</button>
                    </CardDeal>

                    <CardDeal>
                    <img src="https://exp.cdn-hotels.com/hotels/2000000/1580000/1579000/1578972/7d590d32_b.jpg" alt="" />
                    <h1>Kawada Hotel</h1>
                    <p>3 Stars</p>
                    <h2>Good  7.4/10</h2>
                    <button>Check Price</button>
                    </CardDeal>
                    
                  </Carousel>

                  {/* <div style={{color: "blue",cursor: "pointer"}}>
                      <RiArrowRightSLine style={{width: 50,height: 40,position: "relative", top: "47%"}}/>
                  </div> */}
                  </div>
                  
                </div>
                 <div className={styles.priceCard}>
                    <h1>5-star <span style={{fontWeight: 400}}>average</span></h1>
                    <br />
                    <h1>4-star <span style={{fontWeight: 400}}>average</span></h1>
                    <br />
                    <h1>3-star <span style={{fontWeight: 400}}>average</span></h1>
                    <br />
                    <button>View all deals</button>
                  </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            </div>
        </div>
    )
}
