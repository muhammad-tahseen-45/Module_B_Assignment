import React from 'react';

function Blood_info() {
    return (
        <div className="container mx-auto mt-8">
            <div className="max-w-lg mx-auto bg-white p-8 border rounded-lg shadow-lg">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold mb-4">Why should you donate blood?</h1>
                    <p>Donating blood has benefits for your emotional and physical health such as:</p>
                    <ul className="list-disc pl-6">
                        <li>Maintains a healthy heart and liver</li>
                        <li>Stimulates blood cell production</li>
                        <li>Reduced risk of hemochromatosis</li>
                        <li>Make a difference in your community by helping others</li>
                    </ul>
                    <p>Additionally, Husaini Blood Bank also provides a free general checkup and a blood diagnostic report to each donor, ensuring health and safety for those you help, as well as yourself.</p>
                </div>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Registration</h2>
                    <p>Fill out the form which helps us assess your eligibility and donation history.</p>
                </div>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Blood Donation</h2>
                    <p>Blood donation will take about 8-10 minutes in a comfortable space to lie down.</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Refreshment</h2>
                    <p>After the donation has been completed, you will receive refreshments to bolster your energy.</p>
                </div>
            </div>
        </div>
    );
}

export default Blood_info;
