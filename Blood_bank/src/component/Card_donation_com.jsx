import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { database } from '../config/firebase';
import { onValue, ref } from 'firebase/database';

function DonationCard() {
    const [donors, setDonors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const starCountRef = ref(database, 'donat_from_data/');
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    const arr = Object.values(data);
                    setDonors(arr);
                    console.log("yedss")
                }
            });
        };

        fetchData();
    }, []);

    return (
        <>
            {donors.map((donor, index) => (
                <div key={index} className="max-w-md mx-auto bg-white p-8 border rounded-lg shadow-lg mb-4">
                    <h2 className="text-2xl font-bold mb-4">Donor Information</h2>
                    <div className="mb-4">
                        <p><span className="font-bold">Name:</span> {donor.user_name}</p>
                    </div>
                    <div className="mb-4">
                        <p><span className="font-bold">Email:</span> {donor.user_email}</p>
                    </div>
                    <div className="mb-4">
                        <p><span className="font-bold">Phone:</span> {donor.user_number}</p>
                    </div>
                    <div className="mb-4">
                        <p><span className="font-bold">Address:</span> {donor.user_address}</p>
                    </div>
                    <div className="mb-4">
                        <p><span className="font-bold">Blood Group:</span> {donor.user_blood_group}</p>
                    </div>
                </div>
            ))}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 p-4 flex justify-between">
                <Link to="/">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Back to Home
                    </button>
                </Link>
                <Link to="/login">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Logout
                    </button>
                </Link>
            </div>
        </>
    );
}

export default DonationCard;
