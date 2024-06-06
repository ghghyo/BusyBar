import React, { FormEvent, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import {db} from '@/components/containers/utils/firebase';

const Form = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const createdat = new Date();
    const formattedCreatedAt = createdat.toLocaleString('en-US', {
        weekday: 'long', // "Monday"
        year: 'numeric', // "2023"
        month: 'long', // "April"
        day: 'numeric', // "13"
        hour: '2-digit', // "12 AM"
        minute: '2-digit', // "00"
        second: '2-digit' // "00"
    });

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await addDoc(collection(db, 'BusyBar'), {
                name: fullName,
                email: email,
                phone: phone,
                createdAt: formattedCreatedAt,
            });
            setIsSubmitted(true);
            console.log('done')
        } catch (err) {
            console.error('Error saving data:', err);
        }
    };

    return (
        <><div className="container d-flex justify-content-center mt-5">
            <div className="col-12 col-lg-6 col-xxl-6 ">
                <h2 className="mb-3">How It Works:</h2>
                <ol>
                    <li className="mb-3"><span className="grd">Sign up:</span> Enter your email address below to join the waitlist. It only takes a few seconds!</li>
                    <li className="mb-3"><span className="grd">Spread the word:</span> Share the excitement with your friends and invite them to join the waitlist too. The more, the merrier!</li>
                    <li className="mb-3"><span className="grd">Stay tuned:</span> Keep an eye on your inbox for updates and exclusive sneak peeks as we gear up for the app launch. The countdown to an epic nightlife adventure begins now!</li>
                </ol>
            </div>
        </div><section className="section contact-main reduced-margin-top">
                <div className="container d-flex justify-content-center">
                    <div className="col-12 col-lg-6 col-xxl-6 ">
                    {isSubmitted ? (
              <p className="text-xl text-center font-bold">Thank you for joining our waitlist! We will be in touch with you soon to invite you to test our app.</p> 
            ) : (
                        <div
                            className="contact-main__form"

                        >
                            <form method="POST" onSubmit={handleSubmit}>
                                <div
                                    className="group-input"

                                >
                                    <input
                                        type="text"
                                        name="contact-name"
                                        id="contactName"
                                        placeholder="Enter full name"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        required />
                                </div>
                                <div
                                    className="group-input"

                                >
                                    <input
                                        type="email"
                                        name="contact-email"
                                        id="contactEmail"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required />
                                </div>
                                <div
                                    className="group-input"

                                >
                                    <input
                                        type="phone"
                                        name="contact-phone"
                                        id="contactPhone"
                                        placeholder="Enter your phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required />
                                </div>
                                
                                    <div className="form-cta d-flex justify-content-center">
                                        <button type="submit" className="btn btn--nonary">
                                            Become a Beta Tester
                                            <i className="fa-solid fa-paper-plane"></i>
                                        </button>
                                    </div>
                                    
                            </form>
                        </div>
            )}
                    </div>
                </div>
            </section></>
    );
};

export default Form;
