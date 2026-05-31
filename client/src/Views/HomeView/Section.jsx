import React from 'react'
import FeatureCard from '../../Components/Cards/FeaturedCard';
import Accordian from '../../Components/Accordian/Accordian';
import { useNavigate } from "react-router-dom";
import Ambulance from '../../assets/CardsImages/Ambulance.png'
import Construction from '../../assets/CardsImages/Construction.png'
import FarmTractor from '../../assets/CardsImages/FarmTractor.png'
//import HeavyVehicle from '../../assets/CardsImages/HeavyVehicle.png'
import LightWeight from '../../assets/CardsImages/LightWeight.png'
import MiniBus from '../../assets/CardsImages/MiniBus.png'
import FamilyTrip from '../../assets/CardsImages/FamilyTrip.png'
import HeavyLoad from '../../assets/CardsImages/HeavyLoad.png'


export default function Section() {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid grid-cols-12 gap-6 min-h-screen my-16 px-4">

        {/* LEFT SIDE - ACCORDION (4/12) */}
        <div className="col-span-12 lg:col-span-4 space-y-3">
          <Accordian />
        </div>

        {/* RIGHT SIDE - CARDS (8/12) */}
        <div className="col-span-12 lg:col-span-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            <FeatureCard
              image={FamilyTrip}
              title="Cars! Your Perfect Ride Awaits"
              info="For Family Trips: Spacious cars with ample luggage space for a comfortable journey."
              button="Explore"
              onClick={() => navigate('/rentalcars')}
            />

            <FeatureCard
              image={Ambulance}
              title="Emergency Ambulance Service!"
              info="For Medical Emergencies: Fast and reliable ambulance service available 24/7."
              button="Book Now"
              onClick={() => navigate('/emergency')}
            />

            <FeatureCard
              image={MiniBus}
              title="Mini Bus for Group Travel Made Easy!"
              info="Comfort & Convenience: Ideal for city tours, events, and long-distance travel."
              button="View More"
              onClick={() => navigate('/trip')}
            />

            <FeatureCard
              image={LightWeight}
              title="Light Commercial Vehicles!"
              info="Efficient and versatile, perfect for small businesses and urban deliveries."
              button="See Cars"
              onClick={() => navigate('/lightload')}
            />

            <FeatureCard
              image={HeavyLoad}
              title="Heavy Commercial Vehicles!"
              info="Built for heavy loads and long hauls, ensuring reliable transportation"
              button="Rent Now"
              onClick={() => navigate('/heavyload')}
            />

            <FeatureCard
              image={Construction}
              title="Constructions Vehicles!"
              info="Rugged and powerful, designed to handle tough jobs with ease. 🚜"
              button="Discover"
              onClick={() => navigate('/construction')}
            />

            <FeatureCard
              image={FarmTractor}
              title="Agriculture Vehicles!"
              info="Efficient and durable, optimizing farming operations for maximum productivity. 🌾"
              button="Discover"
              onClick={() => navigate('/agriculture')}
            />

          </div>
        </div>

      </div>
    </>
  )
}