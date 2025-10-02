import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero  from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import headphone from "./assets/hero/headphone.png";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import Products from './components/Products/Products';
import Blogs from './components/Blogs/Blogs';
import Partners from "./components/Patners/Partners.jsx"
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Feb to 28 Feb",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winner Sale",
  title4: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  bgColor: "#f42c37",
}

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "12 Feb to 28 Feb",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winner Sale",
  title4: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  bgColor: "#2dcc6f",
};

const App = ()=> {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopUp = ()=>{
    setOrderPopup(!orderPopup);
  };

  React.useEffect(()=>{
    AOS.init(
      {
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      }
    )
    AOS.refresh();
  }, [])

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handleOrderPopUp={handleOrderPopUp}/>
      <Hero handleOrderPopUp={handleOrderPopUp}/> 
      <Category/>
      <Category2/>
      <Services/>
      <Banner data = {BannerData}/>
      <Products/>
      <Banner data = {BannerData2}/>
      <Blogs/>
      <Partners/>
      <Footer/>
      <Popup orderPopup={orderPopup}
      handleOrderPopUp={handleOrderPopUp}/>
    </div>
  )
}

export default App