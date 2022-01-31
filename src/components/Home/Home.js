import React from 'react'
import './Home.css'
import Product from './../Products/Product';


function Home() {
    return (
        <div className="home">
            <div className="home__container">
            <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
         <div className="home__row">
         <Product
            id="123123123123132"
            title="Toaster"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81Mr8di8BmL._AC_SL1500_.jpg"
            rating={3}
          />
              <Product
                    id="12321353"
                    title="Alpino Natural Peanut Butter Crunch 1 KG (Unsweetened / Gluten Free / Non-GMO / Vegan)"
                    image="https://m.media-amazon.com/images/I/71n6gXQn79L._AC_UL480_FMwebp_QL65_.jpg"
                    price={379}
                    rating={4}
                />
              <Product
                    id="10003"
                    title="Mi Earphone Basic with Ultra deep bass and mic (Black)"
                    price={399}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71mQ9oKDMLL._SX522_.jpg"
                />
              <Product
                    id="10005"
                    title="I Too Had a Love Story Paperback – 6 November 2013"
                    price={179}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51JdOfIHZ9L._SX324_BO1,204,203,200_.jpg"
                />
         </div>
         <div className="home__row">
         <Product
            id="1242342531"
            title="Samsung Watch"
            price={159.99}
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6360/6360444_sd.jpg"
            rating={1}
          />
             <Product
                    id="12321354"
                    title="OnePlus 8 Pro (Glacial Green 12GB RAM+256GB Storage)"
                    image="https://images-na.ssl-images-amazon.com/images/I/61n6Ovq6EdL._SL1500_.jpg"
                    price={59999.00}
                    rating={5}
                />
                
                <Product
                    id="12321355"
                    title="Sony WH-1000XM3 Industry Leading Wireless Noise Cancelling Headphones"
                    image="https://images-na.ssl-images-amazon.com/images/I/61D4Z3yKPAL._SL1500_.jpg"
                    price={24990.00}
                    rating={4}
                />
          < Product
           id="445930"
           title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
           price={98.99}
           rating={5}
           image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
         </div>
         <div className="home__row">
         <Product
                    id="10006"
                    title="Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black)"
                    price={63990}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81Nw2ifyBzL._SX569_.jpg"
                />
          <Product
                    id="10002"
                    title="Acer Aspire 3 A315-56 15.6-inch Laptop (Intel Core i5-1035G1/8GB/1TB HDD/Window 10, Home, 64Bit/Intel UHD Graphics), Black"
                    price={46990}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/810mRHoIxML._SX466_.jpg"
                />
                
         </div>
         <div className="home__row">
         <Product
                    id="12321356"
                    title="Furny Castilla L Shape Sofa Set -RHS 6 Seater Sofa (Cream-Brown)"
                    image="https://images-na.ssl-images-amazon.com/images/I/61leoBbyn2L._SL1100_.jpg"
                    price={24449.00}
                    rating={4}
                />
                <Product
            id="123123128"
            title="1080P Webcam with Microphone, Wansview USB 2.0 Desktop Laptop Computer Web Camera with Auto Light Correction, Plug and Play, for Windows Mac OS, for Video Streaming, Conference, Gaming, Online Classes"
            price={23.29}
            image="https://images-na.ssl-images-amazon.com/images/I/41QyeCl1kGL._AC_US160_.jpg"
            rating={3}
          />
         </div>
            </div>
        </div>
    )
}

export default Home;