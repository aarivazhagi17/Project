import React from 'react'
import Mobile from "../assets/Mobile.jpg"
import Mobilegroup from "../assets/Mobilegroup.png"
import Shivark from "../assets/Shivark.jpg"
import hp from "../assets/hp.jpg"
import Vivo from "../assets/Vivo.jpg"
import Realme from "../assets/Realme.jpg"
import Sony from "../assets/Sony.jpg"
import TCL from "../assets/TCL.jpg"
import "./Home.css"
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react'

//icons
function Home() {

  useEffect(() => {
    Aos.init({ duration: 1000})
  }, [])
  return (
    <div>
      <div className='focus'>
        <div>
          <h1>“Focus on key features and value to make the phone look worth buying.”</h1>
          <button className='button'>View More</button>
        </div>
        <a href={Mobile} target='_blank'>
          <img className='image' src={Mobile} alt="" />
        </a>
      </div>
      <div className='Mgroup'>
        <img className='imge' src={Mobilegroup} alt="" />
        <div>
          <h3> Customize with your product branding</h3>
          <h1> We offer great flexibility mobile widget and easy to customize</h1>
          <p>Our mobiel admin dashboards are easy to customize user interfaces along with your exact requirements</p>
          <button className='button'>Show</button>
        </div>
      </div>
      <div className='Verity'>
        <h2>Details</h2>
        <div className='cards3'>
          <div className='card3'>
            <img className='img3' src={Vivo} alt="" />
            <h3>
              <span>Vivo Y20 </span> <br /><br />
              <li> Display : 6.51-inch HD+ IPS display with 1600x720 resolution for clear visuals and vibrant colours. <br /><br /><br /> </li>

              <li> Design : 164.41 x 76.32 x 8.41 mm and weighs around 192 g, making it feel light and easy to hold for everyday use. <br /><br /><br /> </li>

              <li> Camera : 13Mp main lens, 2MP depth Sensor, 2MP macro Sensor, 8MP Front Selfie Camera. <br /> <br /><br /> </li>

              <li> Storage :64 GB built-in space — plenty for apps, photos, music, and videos for everyday use. <br /><br /><br /> </li>

              <li> Performance : Supports expandable storage up to ~256 GB via microSD card for photos, videos, and files <br /><br /><br /> </li>
            </h3>
          </div>
        </div>

        <div className='cards2'>
          <div className='card2'>
            <img className='img2' src={hp} alt="" />
            <h3>
              <span>HP </span> <br /> <br />
              <li> Display : 4″ to 16″ FHD (1920x1080) screens; some gaming models have higher refresh rates for smoother visuals <br /> <br /><br /> </li>

              <li> RAM: Usually 8 GB to 16 GB (some models upgradable). <br /> <br /> <br /> </li>

              <li> Victus & OMEN - Gaming series with higher performance GPUs and refresh-rate displays.. <br /><br /><br /> </li>

              <li> Pavilion x360 / Spectre - Premium 2-in-1 convertible laptops (touchscreen, flexible hinge). <br /> <br /> <br /> </li>

              <li> Graphics: Integrated graphics for everyday use or discrete GPUs (like NVIDIA RTX series) for gaming <br /> <br /> <br /> </li>
            </h3>
          </div>
        </div>

        <div className='cards1'>
          <div className='card1'>
            <img className='img1' src={Shivark} alt="" />
            <h3>
              <span className='text-primary'>Shivark </span> <br /> <br /><br />
              <li> Display: Analog (traditional hour/minute hands) — not digital.<br /> <br /> <br /> </li>

              <li> Movement: Usually quartz (battery powered) for standard timekeeping<br /> <br />  <br /> </li>

              <li> Strap Types: Stainless steel, silicone, or synthetic materials depending on model. <br /> <br /> <br /> </li>

              <li> Water Resistance: Many models do not offer real water resistance or are minimal (not for swimming). <br /> <br /> <br /> </li>

              <li> Warranty: Often ~6-12 months (varies by seller/product). <br /> <br /> <br /> </li>
            </h3>
          </div>
        </div>

        <div className='cards4'>
          <div className='card4'>
            <img className='img4' src={Realme} alt="" />
            <h3>
              <span>Realme </span> <br /> <br />
              <li> Headphones Jack : Without Jack<br /> <br /> </li>
              <li> Model Name : Air 6 <br /> <br /> </li>
              <li> Connectivity Technology : Wireless <br /> <br /> </li>
              <li> Material : Plastic <br /> <br /> </li>
              <li> Charging Time : 10 Minutes <br /> <br /> </li>
              <li> Control Method : Touch<br /> <br /> </li>
              <li> Bluetooth Version : 5.3 <br /> <br /> </li>
              <li> Earpiece Shape : Rounded Tips <br /> <br /> </li>
              <li> Generation : 6 <br /> <br /> </li>

            </h3>
          </div>
        </div>


        <div className='cards5'>
          <div className='card5'>
            <img className='img5' src={Sony} alt="" />
            <h3>
              <span>Sony Camera </span> <br /> <br />
              <li> DIGIC 8 Image Processor, 4K 24P Video With Crop, <br />
                Full HD 60P, Dual Pixel CMOS AF With 143 AF Zones,<br />
                6.5 fps Electronic Shutter, 2.36m-Dot OLED EVF, <br />
                3" 1.04m-Dot LCD Screen, Creative Assist Mode, <br />
                Silent Mode for Quiet Operation, Bluetooth with SD Card Slot. <br /><br /> </li>

              <li> Effective Pixels : 24.1 MP <br /> <br /> </li>

              <li> Sensor Type : CMOS <br /> <br /> </li>

              <li> WiFi Available <br /> <br /> </li>

              <li> 4k <br /> <br /> </li>

              <li> 2 Years Wattenty </li>
            </h3>
          </div>
        </div>

        <div className='cards6'>
          <div className='card6'>
            <img className='img6' src={TCL} alt="" />
            <h3>
              <span>TCL</span> <br /> <br />
              <li>HDR & Dolby Support: Many TCL TVs support HDR10, Dolby Vision for dynamic contrast and colors.</li> <br />
              <li>QLED Technology: Uses quantum dot nanocrystals to produce richer, more accurate colors than standard LED TVs</li> <br />
              <li>HDR & Dolby Support: Many TCL TVs support HDR10, Dolby Vision for dynamic contrast and colors.</li><br />
              <li>Budget & smaller screens (32"): ~₹11k - ₹15k</li> <br />
              <li>High-end QLED/Mini LED & larger screens: ₹60k + (can go well above ₹1 lakh for flagship variants).</li> <br />
              <li>Mid-range 43″ - 55″ 4K TVs: ~₹25k - ₹60k</li>
            </h3>
          </div>
        </div>

      </div>
      <div className='id'>
        <div>
          <p>Phone </p>
          <p>+91 8870032399</p>
        </div>
        <div>
          <p>E-mail</p>
          <p>aarivazhagi17@gmail.com</p>
        </div>
        <div>
          <p>Location</p>
          <p>Tenkasi</p>
        </div>
      </div>
    </div>
  )
}

export default Home
