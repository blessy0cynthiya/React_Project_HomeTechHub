import React from "react";
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import AboutHero from './AboutHero'
import aboutImg from 'assets/aboutImg.jpg'

const About = () => {
  return (
    <div className='h-screen'>
      <Header />
      <AboutHero />
      <div className=" text-gray-700 bg-white min-h-0 h-auto">
        <div className='w-9/12 text-center m-auto'>
            
<br></br>
            <h2 className='font-display text-2xl md:text-4xl m-12'>Appliance Marvels</h2>
          
            <div className='flex flex-col md:flex-row w-full 2xl:w-3/4 m-auto mb-20 font-body leading-loose space-y-6 md:space-y-0 md:space-x-12 justify-between'>
              <div className='w-full md:w-7/12'>
                <img src={aboutImg} alt='Multiple plants'/>
              </div>
              <div className='w-full md:w-5/12 flex flex-col space-y-5 m-auto text-left font-display text-sm md:text-base leading-loose'>
                <p >Innovative Technology: Stay ahead with appliances that boast the latest in smart technology and efficiency.
Sleek Design: We understand that aesthetics matter. Our appliances don't just perform; they make a statement.
Reliability: Built to last, our products undergo rigorous testing to ensure durability and reliability.
Customer-Centric Approach: Your satisfaction is our priority. Experience unmatched customer support and hassle-free service.
Join us on a journey where every switch, every click, and every moment is crafted with you in mind. Explore our range and let [Home Tech Hub] redefine the way you experience home living.

[Home Tech Hub] – Where Your Home's Story Begins!"</p>
                <p>Email us! <br></br>hometechhub@gmail.com</p>
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;