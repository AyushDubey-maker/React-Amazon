import React from 'react'
import banner from './amazon-banner.jpeg'
import cricket from './cricket-kit.jpg'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
           <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" ></img>
           <div className="home_row">
           <Product
           id="1"
           title="Prime Video"
           price={1200}
           rating={4}
           image={banner}
           />
             <Product
           id="2"
           title="Prime Watches"
           price={2200}
           rating={5}
           image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
           />
           </div>
           <div className="home_row">
             <Product
           id="3"
           title="Prime Alexa"
           price={2200}
           rating={5}
           image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
           />
             <Product
           id="4"
           title="Prime Cricket-Kit Bag"
           price={2500}
           rating={2}
           image={cricket}
           />
             <Product
           id="5"
           title="Prime Laptop"
           price={2500}
           rating={4}
           image="https://images-na.ssl-images-amazon.com/images/I/61Dw5Z8LzJL._SY450_.jpg" 
           />
             </div>
             <div className="home_row">
             <Product
           id="6"
           title="Samsung Q90/Q90T QLED"
           price={2500}
           rating={4}
           image="https://images-na.ssl-images-amazon.com/images/I/71GYLokH21L._SX679_.jpg"
           />
               </div>
             
            
        </div>
    )
}

export default Home
