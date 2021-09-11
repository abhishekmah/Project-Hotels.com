import React from "react";
import "./Props.css";
import "./Props2.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import {Link} from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HRLine } from "../../Components/HorizontalLine/HRLine";
// import GoogleMap from '../../Map//GoogleMap';

export default function Propts() {

  let { hotelId } = useParams();
  let id = hotelId
  console.log(id)

  let temp = { images: [], address: { line1: "" } };
  const [hotel, setHotel] = useState(temp);

  useEffect(() => {
    let data = [];
    axios.get("https://abhi-app-test.herokuapp.com/data").then((res) => {
       
      data = res.data[0]
      
      for(var i = 0; i < res.data.length; i++) {
        if (res.data[i].hotelId === id) {
          data = res.data[i];
        }
      }
      setHotel(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="body">
      <HRLine />
      <div className="section1">
        <div className="hotelBrief">
          <div className="hotelName">
            <h1>{hotel.name}</h1>
            <button id="star">
              <span>5-star</span>
            </button>
          </div>
          <p>
            All-inclusive hotel with indoor pool, near Torres del Paine National
            Park{" "}
          </p>
          <ul>
            <li>
              <span className="wifi">Free WiFi in lobby and free parking</span>
            </li>
            <li>
              <span className="purple">Collect stamps</span>
            </li>
            <li>
              <span className="purple">Price Gaurantee</span>
            </li>
          </ul>
        </div>
        <div className="price">
          <div>
            <h1>Rs.{hotel.price5}</h1>
            <a href="/">per night</a> <br />
            <span>*including taxes & fees</span>
            <h4>
              <Link to="/payment" ><button className="book">
                RESERVE ROOM
              </button></Link>
            </h4>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="section2">
        <div id="carousel">
          <Carousel>
            {hotel.images.map((e) => {
              return (
                <div key = {uuidv4()}>
                  <img src={e.url} alt="" />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="location">
          <div className="map">
            <img
              src="https://i0.wp.com/cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1"
              alt=""
            />
            <span className="addressMap">
              Location: {hotel.address.line1}, {hotel.address.city},{" "}
              {hotel.address.countryName}
            </span>
          </div>

          <hr />
          <div className="review">
            <div>
              <section className="_3Ddcd6">
                <div className="_2DxHMR gulKMN">
                  <div className="_3eVx_d">
                    <span className="reviewRating">
                      9.2<span className="is-visually-hidden">.</span>
                    </span>
                    <span className="_3OCzLl">
                      <span className="_3nZdfb">
                        Superb<span className="is-visually-hidden">.</span>
                      </span>
                      <span className="_1VEuhR">
                        <span className="_3zLN_v Y_8VbY b3TRQj">
                          <span
                            role="button"
                            className="k3LKyj"
                            aria-expanded="false"
                            tabIndex="0"
                          >
                            <span>7 verified Hotels.com guest reviews</span>
                          </span>
                          <span
                            className="_23w5Ct _2mMB8-"
                            aria-live="polite"
                            role="tooltip"
                            data-content="tooltip"
                            aria-hidden="true"
                          >
                            <span>
                              All of our reviews have come from real guests who
                              have stayed at the property.
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
                <ul className="_3YvFHN _2z8StZ">
                  <li className="_1BIjNY">
                    <q className="oZl9tt">
                      The hotel is in the middle of the park, and all the
                      activities are within short distance.…
                    </q>
                    <p className="_3Uw-k7">Dec 4, 2019</p>
                  </li>
                  <li className="_1BIjNY">
                    <q className="oZl9tt">Amazing customer service</q>
                    <p className="_3Uw-k7">Dec 2, 2019</p>
                  </li>
                </ul>
                See all 7 reviews
                <button className="_1HtKl_" aria-label="See all 7 reviews"></button>
              </section>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="section3">
        <div className="largeMap">
          {/* <GoogleMap id="largeMap" {...hotel.location} ></GoogleMap> */}
        </div>
      </div>
      <div className="section4">
        <div>
          <button className="-MPqJ5">
            <span className="is-visually-hidden">map</span>
            <div className="_1FepWS">
            <Link to="/hotels/map">
              <span class="_1Ac6YH _2NVtuq _1DW1ZH ZCedaV">
                <img
                  class="_3vohxN _2kg-Bh"
                  src="https://foodbank.bc.ca/wp-content/uploads/2016/04/Google-Map-of-Locations.png"
                  alt=""
                />
              </span>
              </Link>
              <div className="FebmkO">
                <span className="_2cLakF _2fSdu2 iXrmyZ">See on map</span>
              </div>
            </div>
          </button>
          <div>
            <div className="_1nD7qa">
              <span className="_2wKxGq _1clhIX">
                <span className="OB1XAq _12WQjR"></span>
                <span>
                  Torres del Paine National Park, Torres Del Paine, Magallanes,
                  Chile
                </span>
              </span>
            </div>
            <div>
              <ul className="_2MGGAn">
                <li>In a national park</li>
                <li>Torres del Paine National Park - 1 min walk</li>
                <li>Salto Chico Falls - 7 min walk</li>
              </ul>
              <div>
                <button
                  className="uolsaJ WxdyDo"
                  aria-label="See what’s around"
                  type="button"
                >
                  See what’s around
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="_1TsxAZ">
        <div className="_3pPyAT">
          <ul className="_3TYstR _2RH2yJ">
            <li className="_1aUzLh _2Y71AG">
              <div>
                <span>Free WiFi</span>
              </div>
            </li>
            <li className="_3Ca02T _2Y71AG">
              <div>
                <span>Free parking</span>
              </div>
            </li>
            <li className="_1ADbJ7 _2Y71AG">
              <div>
                <span>Pool</span>
              </div>
            </li>
            <li className="_26-GzK _2Y71AG">
              <div>
                <span>Airport transfer</span>
              </div>
            </li>
            <li className="_1Cu6Ik _2Y71AG">
              <div>
                <span>Bathtub</span>
              </div>
            </li>
            <li className="_1JJ6EZ _2Y71AG">
              <div>
                <span>Non-smoking</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2>Property highlights</h2>
          <div className="_2cVsY2">
            <div>
              <h3>Main amenities</h3>
              <ul className="FWXvlZ _2WrGNz">
                <li>
                  <span>50 smoke-free guestrooms</span>
                </li>
                <li>
                  <span>Daily housekeeping</span>
                </li>
                <li>
                  <span>Restaurant and bar/lounge</span>
                </li>
                <li>
                  <span>Indoor pool and 4 spa tubs</span>
                </li>
                <li>
                  <span>Free airport shuttle</span>
                </li>
                <li>
                  <span>Sauna</span>
                </li>
              </ul>
            </div>
            <div>
              <h3>What’s around</h3>
              <ul className="_2sHYiJ">
                <li>In a national park</li>
                <li>Torres del Paine National Park - 1 min walk</li>
                <li>Salto Chico Falls - 7 min walk</li>
                <li>Salto Grande - 5.2 mi / 8.4 km</li>
                <li>Mirador Glacier Grey - 15.9 mi / 25.6 km</li>
              </ul>
            </div>
          </div>
        </div>
        <button
          className="uolsaJ WxdyDo"
          aria-label="More about the property"
          type="button"
        >
          More about the property
        </button>
      </section>
      <section className="_3z5qvw">
        <article className="B8D2gM _2LNCnO _3aQ08V">
          <div className="_1AFqk8">
            <span className="OB1XAq _3R5yXF"></span>
            <div>
              <h3>Book this property and collect stamps after your stay</h3>
              <p>Remember, collect 10 stamps, get 1 reward* night</p>
            </div>
          </div>
        </article>
      </section>
      <section id="roomsAndRates2" className="y1QuoW">
        <div id="rooms-and-rates-anchor" className="_13glsj"></div>
        <h2>Enter dates for
           2 guests</h2>
        <div className="_1LiSgk">
          <div className="_2Wfd8_">
            <div className="_2EhnXP">
              <div className="_3UQ05N">
                <div role="button" className="LwYNXV">
                  <div className="hgrBWO _1Fluq4 _2LFlH_">
                    <div>
                      <button
                        className="_1yFrqc _1ZtnNu"
                        data-modal-allow-propagation="true"
                        type="button"
                      >
                        <span className="OB1XAq _2agSNy"></span>
                        <span>
                          <span className="_2qpRyR">Check-in</span>
                          <span>Select date</span>
                        </span>
                      </button>
                      <div className="mi2XYn _1ZtnNu">Name
                        <div className="foiCNH">
                          <span className="OB1XAq _2agSNy"></span>
                          <span>
                            <label className="_2qpRyR">
                              Check-in
                            </label>
                            <input
                              type="date"
                              className="_2lKLdN"
                              name="q-check-in"
                              id="q-check-in10"
                              required=""
                              min="2021-08-26"
                              max="2023-01-04"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        className="_1yFrqc _1RdfF-"
                        data-modal-allow-propagation="true"
                        type="button"
                      >
                        <span className="OB1XAq _2agSNy"></span>
                        <span>
                          <span className="_2qpRyR">Check-out</span>
                          <span>Select date</span>
                        </span>
                      </button>
                      <div className="mi2XYn _1RdfF-">
                        <div className="_2lAZHW">
                          <span className="OB1XAq _2agSNy"></span>
                          <span>
                            <label className="_2qpRy">
                              Check-out
                            </label>
                            <input
                              type="date"
                              className="_2lKLdN"
                              name="q-check-out"
                              id="q-check-out11"
                              required=""
                              min="2021-08-27"
                              max="2023-01-04"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="_3UQ05N">
                <div role="button" className="LwYNXV">
                  <div>
                    <button
                      className="_1yFrqc"
                      data-modal-allow-propagation="true"
                      type="button"
                      data-stid="sqm-occupancy"
                    >
                      <span className="OB1XAq _2agSNy"></span>
                      <span className="_1kUm1r">
                        <span className="rIhyt1">Guests</span>
                        <span>1 room, 2 guests</span>
                      </span>
                    </button>
                    <div className="mi2XYn">
                      <span className="OB1XAq _2agSNy"></span>
                      <div>
                        <legend id="inputfield-12">Guests</legend>
                        <div>
                          <div className="_2uJBvA">
                            <input
                              type="number"
                              name="q-room-0-adults"
                              min="1"
                              max="20"
                              required=""
                              aria-labelledby="inputfield-12"
                            />
                          </div>
                        </div>
                        <input type="hidden" name="q-rooms" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="mK9qzN">
          <li className="_3YwVGq">Room, 1 King Bed (CORDILLERA PAINE)</li>
          <li className="_3YwVGq">Room, 2 Twin Beds (CORDILLERA PAINE)</li>
          <li className="_3YwVGq">Room, 1 King Bed (SALTO CHICO)</li>
          <li className="_3YwVGq">Room, 2 Twin Beds (SALTO CHICO)</li>
          <li className="_3YwVGq">Suite (EXPLORADORES)</li>
        </ul>
      </section>
      <section id="location3">
        <h2>Location</h2>
        <div className="_42tM0g">
          <button className="-MPqJ5">
            <span className="is-visually-hidden">map</span>
            <div className="_1FepWS">
              <span className="_1Ac6YH _2NVtuq _1DW1ZH ZCedaV">
                <img
                  className=""
                  data-src="https://maps-api-ssl.google.com/maps/api/staticmap?center=-51.116134,-72.990977&amp;zoom=13&amp;size=423x160&amp;sensor=false&amp;channel=hotels.com-web.desktop.property.description&amp;scale=2&amp;key=AIzaSyDaDqDNrxWrxcURixO2l6TbtV68X0Klf4U&amp;signature=VgKJsQAzMwJsNZFtP7GaNva3oqE="
                  alt="MapImage"
                />
              </span>
              <div className="FebmkO">
                <span className="_2cLakF _2fSdu2 iXrmyZ">See on map</span>
              </div>
            </div>
          </button>
          <div>
            <div className="_1nD7qa">
              <span className="_2wKxGq _1clhIX">
                <span className="OB1XAq _12WQjR"></span>
                <span>
                  Torres del Paine National Park, Torres Del Paine, Magallanes,
                  Chile
                </span>
              </span>
            </div>
            <div>
              <ul className="_2MGGAn">
                <li>In a national park</li>
                <li>Torres del Paine National Park - 1 min walk</li>
                <li>Salto Chico Falls - 7 min walk</li>
              </ul>
              <div>
                <button
                  className="uolsaJ WxdyDo"
                  aria-label="See what’s around"
                  type="button"
                >
                  See what’s around
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="_32CS7h">
        <section className="_1O0SKi">
          <section className="_1_22qw _1qrfJD">
            <h2>What’s around</h2>
            <div className="_2Ut1Ms">
              <h3>Landmarks</h3>
              <ul>
                <li>In a national park</li>
                <li>Torres del Paine National Park - 1 min walk</li>
                <li>Salto Chico Falls - 7 min walk</li>
                <li>Salto Grande - 5.2 mi / 8.4 km</li>
                <li>Mirador Glacier Grey - 15.9 mi / 25.6 km</li>
              </ul>
              <h3>Getting around</h3>
              <div>
                <ul className="shuttle">
                  <li>Free airport shuttle</li>
                </ul>
              </div>
              <div></div>
            </div>
          </section>
        </section>
        <section id="info5" className="_1O0SKi">
          <section className="_1_22qw">
            <h2>At a glance</h2>
            <div className="_2Ut1Ms">
              <h3>Hotel size</h3>
              <ul>
                <li>This hotel has 50 rooms</li>
                <li>This hotel is arranged over 3 floors</li>
              </ul>
              <h3>Arriving/leaving</h3>
              <ul>
                <li>Check-in time 3 PM-midnight</li>
                <li>Check-out time is noon</li>
              </ul>
              <h3>Restrictions related to your trip</h3>
              <ul>
                <li>
                  COVID-19 alert: Travel requirements are changing rapidly,
                  including need for
                   pre-travel COVID-19 testing and quarantine
                  on arrival.
                </li>
              </ul>
              <h3>Special check-in instructions</h3>
              <div>Front desk staff will greet guests on arrival.</div>
              <h3>Required at check-in</h3>
              <ul>
                <li>
                  Credit card, debit card, or cash deposit required for

                  incidental charges
                </li>
                <li>Government-issued photo ID may be required</li>
                <li>Minimum check-in age is 18</li>
              </ul>
              <h3>Children</h3>
              <ul>
                <li>No cribs (infant beds)</li>
              </ul>
              <h3>Pets</h3>
              <ul>
                <li>No pets or service animals allowed</li>
              </ul>
              <h3>Internet</h3>
              <ul>
                <li>Free WiFi in public areas</li>
              </ul>
              <h3>Transfers</h3>
              <ul>
                <li>
                  <em>Free</em> airport shuttle from 9:30 AM to 3:00 PM*
                </li>
              </ul>
              <h3>Parking</h3>
              <ul>
                <li>
                  <em>Free</em> onsite self parking
                </li>
                <li>Onsite parking includes off-street options</li>
              </ul>
              <h3>Payment types at the property</h3>
              <p className="_4vW6Fo">
                <span className="_210Pb9">
                  <span className="_1Ac6YH _3k-GW1 _3p6NKl">
                    <noscript>
                      <img
                        src="https://a.cdn-hotels.com/kesstatic/6e2f30d741a2b57a4d5d.svg"
                        alt="American Expres"
                        s
                      />
                    </noscript>
                    <img
                      className=""
                      data-src="https://a.cdn-hotels.com/kesstatic/6e2f30d741a2b57a4d5d.svg"
                      alt="American Express"
                    />
                  </span>
                </span>
                <span className="_210Pb9">
                  <span className="_1Ac6YH _3k-GW1 _3p6NKl">
                    <noscript>
                      <img
                        src="https://a.cdn-hotels.com/kesstatic/690e8b8d97b94e2693e5.svg"
                        alt="Diners Club"
                      />
                    </noscript>
                    <img
                      className=""
                      data-src="https://a.cdn-hotels.com/kesstatic/690e8b8d97b94e2693e5.svg"
                      alt="Diners Club"
                    />
                  </span>
                </span>
                <span className="_210Pb9">
                  <span className="_1Ac6YH _3k-GW1 _3p6NKl">
                    <img
                      className=""
                      data-src="https://a.cdn-hotels.com/kesstatic/1a416c5af60752088fc5.svg"
                      alt="Mastercard"
                    />
                  </span>
                </span>
                <span className="_210Pb9">
                  <span className="_1Ac6YH _3k-GW1 _3p6NKl">
                    <img
                      className=""
                      data-src="https://a.cdn-hotels.com/kesstatic/10e20a219421383f4860.svg"
                      alt="Visa"
                    />
                  </span>
                </span>
              </p>
              <h3>Other in formation</h3>
              <ul>
                <li>Smoke-free property</li>
              </ul>
              <div></div>
            </div>
            <a
              href="#small-print"
              className="Jv3a4G _3TBG1O _2P9cpl"
              rel="noopener noreferrer"
            >
              *See small print for
               additional details or extra charges
            </a>
          </section>
        </section>
        <section className="_1O0SKi">
          <section className="_1_22qw">
            <h2>In the hotel</h2>
            <div className="_2Ut1Ms">
              <h3>Food and drink</h3>
              <ul>
                <li>Free buffet breakfast</li>
                <li>Restaurant</li>
                <li>Bar/lounge</li>
                <li>Room service</li>
                <li>Barbecue grills</li>
              </ul>
              <h3>Things to do</h3>
              <ul>
                <li>Indoor pool</li>
                <li>Spa services on site</li>
                <li>Spa treatment room(s)</li>
                <li>Horse riding/rental on site</li>
                <li>Number of spa tubs - 4</li>
                <li>Sauna</li>
              </ul>
              <h3>Working away</h3>
              <ul>
                <li>Meeting rooms</li>
                <li>Computer station</li>
              </ul>
              <h3>Services</h3>
              <ul>
                <li>24-hour front desk</li>
                <li>Tours/ticket assistance</li>
                <li>Dry cleaning/laundry service</li>
                <li>Laundry facilities</li>
                <li>Luggage storage</li>
                <li>Multilingual staff</li>
              </ul>
              <h3>Facilities</h3>
              <ul>
                <li>Number of buildings/towers - 2</li>
                <li>Garden</li>
              </ul>
              <h3>Languages Spoken</h3>
              <ul>
                <li>English</li>
                <li>Spanish</li>
              </ul>
              <div></div>
            </div>
          </section>
        </section>
        <section className="_1O0SKi">
          <section className="_1_22qw">
            <h2>In the room</h2>
            <div className="_2Ut1Ms">
              <h3>Home comforts</h3>
              <ul>
                <li>In-room climate control (air conditioning)</li>
                <li>Bathrobes</li>
              </ul>
              <h3>Sleep well</h3>
              <ul>
                <li>Hypo-allergenic bedding available</li>
                <li>Blackout drapes/curtains</li>
              </ul>
              <h3>Freshen up</h3>
              <ul>
                <li>Private bathroom</li>
                <li>Jetted bathtub</li>
                <li>Rainfall showerhead</li>
                <li>Hair dryer</li>
              </ul>
              <h3>Stay connected</h3>
              <ul>
                <li>Phone</li>
              </ul>
              <h3>Food and drink</h3>
              <ul>
                <li>Free bottled water</li>
              </ul>
              <h3>More</h3>
              <ul>
                <li>Daily housekeeping</li>
                <li>In-room safe</li>
              </ul>
              <div></div>
            </div>
          </section>
        </section>
        <section className="_1O0SKi">
          <section className="_1_22qw">
            <h2>Special features</h2>
            <div className="_2Ut1Ms _2AtLn6">
              <h3>All inclusive</h3>
              <div>
                This hotel is all-inclusive. Onsite food and beverages are
                included in the room price (some restrictions may apply).
              </div>
              <h3>Spa</h3>
              <div>
                Guests can pamper themselves by indulging in the onsite spa
                services. There are massage/treatment rooms available. Services
                include massages.
              </div>
              <div></div>
            </div>
          </section>
        </section>
        <section className="_1O0SKi">
          <section className="_1_22qw _3vsObg">
            <h2>Small print</h2>
            <div className="_2Ut1Ms _2AtLn6">
              <h3>Also known as</h3>
              <ul>
                <li>Explora</li>
                <li>
                  explora Patagonia - All Inclusive All-inclusive property
                </li>
                <li>explora Patagonia - All Inclusive Torres Del Paine</li>
                <li>explora Patagonia All Inclusive</li>
                <li>Explora Patagonia</li>
                <li>Explora Patagonia Inclusive</li>
                <li>explora Patagonia All Inclusive All-inclusive property</li>
                <li>explora Patagonia Hotel</li>
                <li>explora Patagonia All Inclusive</li>
                <li>explora Patagonia Torres Del Paine</li>
                <li>explora Patagonia Hotel Torres Del Paine</li>
                <li>Explora Patagonia Hotel</li>
                <li>Explora Patagonia Hotel Torres Del Paine</li>
                <li>Explora Patagonia Torres Del Paine</li>
                <li>explora Patagonia All Inclusive Torres Del Paine</li>
                <li>explora Patagonia All Inclusive</li>
              </ul>
              <h3>Policies</h3>
              <div>
                <p>This property does not have elevators.</p>
              </div>
              <div>
                <p>
                  For
                   transfers, guests must contact the property be for
                  e arrival
                  at the number on the booking confirmation.
                </p>
                <p>
                  This property accepts credit cards and debit cards. Cash is
                  not accepted. 
                </p>
              </div>
              <h3>Mandatory fees</h3>
              <div>
                You’ll be asked to pay the following charges at check-in or
                check-out:
              </div>
              <div>
                <ul>
                  <li>
                    The national sales tax (19%) may be charged upon check-out
                    to residents of Chile regardless of length of stay, and to
                    non-residents staying in the country for
                     60 consecutive days
                    or more. To qualify for
                     a tax exemption, travelers must pay
                    for
                     their stay in for
                    eign currency (not in Chilean pesos)
                    and present a valid passport along with the migration card
                    they received upon arrival in the country at check-in.
                    Furthermore, the tax may apply per room when the room is
                    shared by a taxable and a nontaxable guest.
                  </li>
                </ul>
              </div>
              <div></div>
            </div>
            <p>
              We have included all charges provided to us by this property.
              However, charges can vary, for
               example, based on length of stay or
              the unit you book.
            </p>
          </section>
        </section>
      </section>
      
    </div>
  );
}
