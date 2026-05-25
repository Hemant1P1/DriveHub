import React from 'react'

export default function Accordian() {
    return (
        <>


            {/* Heading */}
            <div>
                <h1 className="text-3xl font-bold">
                    Why Choose DriveHub?
                </h1>

                <p className="text-gray-500 mt-2">
                    DriveHub provides reliable, affordable, and premium vehicle
                    rental services with 24/7 customer support across multiple
                    categories.
                </p>
            </div>

            {/* Accordion Container */}
            <div className="space-y-3 sticky top-20">

                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="drivehub-accordion" defaultChecked />
                    <div className="collapse-title text-lg font-semibold py-5">
                        How can I book a car on DriveHub?
                    </div>
                    <div className="collapse-content text-sm leading-7">
                        Select your preferred car, choose pickup and return dates,
                        complete the booking form, and confirm your reservation
                        instantly through our secure booking system.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="drivehub-accordion" />
                    <div className="collapse-title text-lg font-semibold py-5">
                        What documents are required?
                    </div>
                    <div className="collapse-content text-sm leading-7">
                        Users must provide a valid driving license, Aadhaar card,
                        PAN card (optional), and a verified mobile number during
                        booking verification.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="drivehub-accordion" />
                    <div className="collapse-title text-lg font-semibold py-5">
                        Are luxury cars available?
                    </div>
                    <div className="collapse-content text-sm leading-7">
                        Yes, DriveHub offers luxury sedans, SUVs, sports cars,
                        premium family vehicles, and business-class transportation
                        services.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="drivehub-accordion" />
                    <div className="collapse-title text-lg font-semibold py-5">
                        Is emergency support available?
                    </div>
                    <div className="collapse-content text-sm leading-7">
                        Our emergency support team works 24/7 to provide roadside
                        assistance, rescue vehicles, and urgent transport solutions.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="drivehub-accordion" />
                    <div className="collapse-title text-lg font-semibold py-5">
                        Can I cancel my booking?
                    </div>
                    <div className="collapse-content text-sm leading-7">
                        Yes, bookings can be cancelled before pickup time according
                        to the cancellation policy mentioned during checkout.
                    </div>
                </div>

            </div>

        </>
    )
}
