import React from "react";
import "./Home.css";
import Product from "./Product";
import Footer from './Footer';

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
            id="12321341"
            title="New Apple Watch Series 6 (GPS, 44mm) - Blue Aluminium Case with Deep Navy Sport Band"
            price={540.0}
            rating={5}
            image="https://i.gadgets360cdn.com/products/wearables/large/1551968929_832_apple_watch-series-2-smartwatch.jpg"
          />
          <Product
            id="49538094"
            title="ASUS ROG Zephyrus G14, 14' FHD 120Hz, Ryzen 5 4600HS, GeForce GTX 1650Ti 4GB Graphics, 
              Gaming Laptop (8GB/1TB SSD/MS Office 2019/Windows 10/Eclipse Gray/Without Anime Matrix/1.6 Kg), GA401II-HE169TS"
            price={1161.4}
            rating={4}
            image="https://i.gadgets360cdn.com/products/large/asus-rog-zephyrus-g14-1400x800-1596707843.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="98354678"
            title="Microsoft Surface Pro 7 VDV-00015 12.3 inch Touchscreen 2-in-1 Laptop 
                  (10th Gen Intel Core i5/8GB/128GB SSD/Windows 10 Home/Intel Iris Plus Graphics), Platinum"
            price={1029.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/519JUh2%2BewL._SL1200_.jpg"
          />

          <Product
            id="83423578"
            title="New Apple MacBook Air (13-inch, 1.1GHz Quad-core 10th-Generation Intel Core i5 Processor, 8GB RAM, 512GB Storage) - Silver"
            price={1451.8}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81MkiDFq80L._SL1500_.jpg"
          />

          <Product
            id="83473291"
            title="Samsung Galaxy Note 20 Ultra 5G (Mystic Bronze, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={1385.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81afQk-7AjL._SL1500_.jpg"
          />
          
          <Product
            id="83473291"
            title="OnePlus Buds Z (White)"
            price={39.5}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51vwQzwM%2BZL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="MSI GeForce GTX 1660 Ti Ventus XS 6G OC GDDR6 Gaming Graphic Card"
            price={369.57}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61J3G4l2Y5L._SL1024_.jpg"
          />
          
          <Product
            id="90829332"
            title="New Apple iPhone 12 Pro Max (128GB) - Pacific Blue"
            price={1714.62}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Footer />
        </div>

      </div>

    </div>
  );
}

export default Home;
