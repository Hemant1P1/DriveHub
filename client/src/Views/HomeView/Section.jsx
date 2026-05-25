import React from 'react'
import FeatureCard from '../../Components/Cards/FeaturedCard';
import Accordian from '../../Components/Accordian/Accordian';
import { useNavigate } from "react-router-dom";

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
              image="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
              title="Cars! Your Perfect Ride Awaits"
              info="For Family Trips: Spacious cars with ample luggage space for a comfortable journey."
              button="Explore"
              onClick={() => navigate('/rentalcars')}
            />

            <FeatureCard
              image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
              title="Emergency Ambulance Service!"
              info="For Medical Emergencies: Fast and reliable ambulance service available 24/7."
              button="Book Now"
              onClick={() => navigate('/emergency')}
            />

            <FeatureCard
              image="https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
              title="Mini Bus for Group Travel Made Easy!"
              info="Comfort & Convenience: Ideal for city tours, events, and long-distance travel."
              button="View More"
              onClick={() => navigate('/trip')}
            />

            <FeatureCard
              image="https://images.unsplash.com/photo-1549924231-f129b911e442"
              title="Light Commercial Vehicles!"
              info="Efficient and versatile, perfect for small businesses and urban deliveries."
              button="See Cars"
              onClick={() => navigate('/lightload')}
            />

            <FeatureCard
              image="https://images.unsplash.com/photo-1502877338535-766e1452684a"
              title="Heavy Commercial Vehicles!"
              info="Built for heavy loads and long hauls, ensuring reliable transportation"
              button="Rent Now"
              onClick={() => navigate('/heavyload')}
            />

            <FeatureCard
              image="https://images.unsplash.com/photo-1485291571150-772bcfc10da5"
              title="Agriculture Vehicles!"
              info="Efficient and durable, optimizing farming operations for maximum productivity. 🌾"
              button="Discover"
              onClick={() => navigate('/agriculture')}
            />

            <FeatureCard
              image="https://images.unsplash.com/photo-1485291571150-772bcfc10da5"
              title="Constructions Vehicles!"
              info="Rugged and powerful, designed to handle tough jobs with ease. 🚜"
              button="Discover"
              onClick={() => navigate('/construction')}
            />

          </div>
        </div>

      </div>
    </>
  )
}