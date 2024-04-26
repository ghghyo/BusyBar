const Form = () => {
    return (
        
        <><div className="container d-flex justify-content-center">
            <div className="col-12 col-lg-6 col-xxl-6 ">
                <h2 className="mb-2">How It Works:</h2>
                <ol >
                <li className="mb-2"><span className="grd">Sign up:</span> Enter your email address below to join the waitlist. It only takes a few seconds!</li>
                <li className="mb-2"><span className="grd">Spread the word:</span> Share the excitement with your friends and invite them to join the waitlist too. The more, the merrier!</li>
                <li><span className="grd">Stay tuned:</span> Keep an eye on your inbox for updates and exclusive sneak peeks as we gear up for the app launch. The countdown to an epic nightlife adventure begins now!</li>
                </ol>
            </div>
        </div><section className="section contact-main reduced-margin-top">
                <div className="container d-flex justify-content-center">
                    <div className="col-12 col-lg-6 col-xxl-6 ">
                        <div
                            className="contact-main__form"
                            data-aos="fade-up"
                            data-aos-duration="600"
                        >
                            <form action="#" method="post">
                                <div
                                    className="group-input"
                                    data-aos="fade-up"
                                    data-aos-duration="600"
                                    data-aos-delay="600"
                                >
                                    <input
                                        type="text"
                                        name="contact-name"
                                        id="contactName"
                                        placeholder="enter full name" />
                                </div>
                                <div
                                    className="group-input"
                                    data-aos="fade-up"
                                    data-aos-duration="600"
                                >
                                    <input
                                        type="email"
                                        name="contact-email"
                                        id="contactEmail"
                                        placeholder="enter Your Email" />
                                </div>
                                <div
                                    className="group-input"
                                    data-aos="fade-up"
                                    data-aos-duration="600"
                                >
                                    <input
                                        type="phone"
                                        name="contact-phone"
                                        id="contactPhone"
                                        placeholder="enter Your Phone" />
                                </div>

                                {/*
<div
className="group-input"
data-aos="fade-up"
data-aos-duration="600"
>
<select className="subject">
<option data-display="Select Subject">
Select Subject
</option>
<option value="1">Account</option>
<option value="2">Service</option>
<option value="3">Pricing</option>
<option value="4">Support</option>
</select>
</div>

<div
className="group-input"
data-aos="fade-up"
data-aos-duration="600"
>
<textarea
name="contact-message"
id="contactMessage"
placeholder="Write a message"
></textarea>
</div>
<div className="group-radio">
<input
type="checkbox"
name="contact-check"
id="contactCheck"
/>
<label htmlFor="contactCheck">
I accept your terms & conditions
</label>
</div>
*/}
                                <div className="form-cta d-flex justify-content-center">
                                    <button type="submit" className="btn btn--nonary">
                                        Become a Beta Tester
                                        <i className="fa-solid fa-paper-plane"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section></>
  );
};

export default Form;