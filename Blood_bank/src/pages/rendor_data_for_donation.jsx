import React from 'react';
import DonationCard from '../component/Card_donation_com';
import { useSelector } from 'react-redux';

function Rendor_data_for_donation() {
    const hh = useSelector((state) => state.messeges.messeges_arry);
    console.log(hh)

    return (
       <>
       <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hh.map((data, index) => (
                    <DonationCard
                        key={index}
                        name={data.user_name}
                        email={data.user_email}
                        phone={data.user_number}
                        address={data.user_address}
                        bloodGroup={data.user_blood_group}
                    />
                ))}
            </div>
        </div>
        
        </>
     
    );
}

export default Rendor_data_for_donation;
