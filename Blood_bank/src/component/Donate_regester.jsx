    import React, { useEffect, useState } from 'react';
    import { database } from '../config/firebase';
    import { child, onValue, push, ref, set } from 'firebase/database';
    import { Adddata } from '../Reducer/MessgesSlice';
    import { useDispatch, useSelector } from 'react-redux';
    import { useNavigate } from 'react-router-dom';

    function Donate_register() {
        const navigate = useNavigate()
        const dispatch = useDispatch(); 
            const selector = useSelector(e=>e.messeges.messeges_arry)
        // useEffect(() => {
        //     const starCountRef = ref(database, 'donat_from_data/');
        //     onValue(starCountRef, (snapshot) => {
        //         const data = snapshot.val();
        //         if (data) {
        //             const arr = Object.values(data);
        //             dispatch(Adddata(arr)); 
        //         }
        //     });
        // }, []); 

        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [pnum, setPnum] = useState('');
        const [bloodGroup, setBloodGroup] = useState('');

        function Data_submit() {
            dispatch(Adddata({
                user_name: name,
                user_number: pnum,
                user_email: email,
                user_blood_group: bloodGroup
            }))
            const newPostKey = push(child(ref(database), 'post')).key;
            set(ref(database, `donat_from_data/${newPostKey}`), {
                user_name: name,
                user_number: pnum,
                user_email: email,
                user_blood_group: bloodGroup
            }).then(() => {
                console.log("data is uploaded");
            }).catch(error => {
                console.error('Error sending message: ', error);
            });
            navigate('/cards')
        }

        return (
            <>
                <div className="container mx-auto mt-8">
                    <div className="max-w-md mx-auto bg-white p-8 border rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Blood Donation Registration</h2>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                            <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="name" name="name" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" name="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="blood_group" className="block text-gray-700 font-bold mb-2">Blood Group</label>
                            <select onChange={(e) => setBloodGroup(e.target.value)} value={bloodGroup} id="blood_group" name="blood_group" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required>
                                <option value="" disabled>Select your blood group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
                            <input onChange={(e) => setPnum(e.target.value)} value={pnum} type="tel" id="phone" name="phone" placeholder="Enter your phone number" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
                            <textarea id="address" name="address" rows="3" placeholder="Enter your address" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required></textarea>
                        </div>
                        <button onClick={Data_submit} type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600">Register</button>
                    </div>
                </div>
            </>
        )
    }

    export default Donate_register;
