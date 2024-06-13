import React, { useState } from "react";

const FaqTwoLight = () => {
  const [activeTab, setActiveTab] = useState(true);
  // Define imgTab to accept both number and null values
  const [imgTab, setImgTab] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the purpose of this app?",
      answer:
        "Our app is designed to enhance your nightlife experience by providing you with tools to discover, navigate, and enjoy the best venues and events in your city.",
    },
    {
      question: "How do I get started?",
      answer:
        "Enter your email and we will let you know when you have been selected to start using the app",
    },
    {
      question: "How does the app help me find venues?",
      answer:
        "The app features a user-friendly interface that allows you to search for venues based on your preferences, such as location, type of venue, vibe, and crowd size.",
    },
    {
      question: "Can I see crowd levels at venues before I go?",
      answer:
        "Yes! Our app provides real-time crowd monitoring, allowing you to gauge the flow of people and identify peak times at venues.",
    },
    {
      question: "How accurate is the crowd flow information?",
      answer:
        "Our crowd flow data is updated regularly and is based on real-time user feedback and venue monitoring, ensuring accuracy and reliability.",
    },
    {
      question: "Can I share my experiences with friends?",
      answer:
        "Absolutely! You can easily share your favorite venues and experiences with friends through the app, making it easy to plan and coordinate outings together.",
    },
    {
      question: "Is my personal information safe?",
      answer:
        "We take the security and privacy of your personal information very seriously. Our app uses industry-standard encryption and security measures to protect your data.",
    },
    {
      question: "Can I provide feedback or suggestions for improvement?",
      answer:
        "Yes, we welcome feedback from our users! You can submit feedback and suggestions directly through the app, or contact our support team for assistance.",
    },
    {
      question: "Is the app available in multiple languages?",
      answer:
        "Currently, our app is available in English, Spanish & Arabic. We are continuously working to add support for additional languages in the future.",
    },
    {
      question: "How often are new features and updates released?",
      answer:
        "We are committed to providing our users with the best possible experience, which includes regularly updating the app with new features and improvements. Updates are typically released on a monthly basis, depending on the nature of the updates.",
    },
  ];

  return (
    <section className="section faq-two faq-light pb-0 reduced-margin-top" >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div
              className="section__header--secondary"
            >
              <div className="row align-items-center items-gap">
                <div className="col-12 col-xl-7">
                  <h2 className="h2">Frequently Asked Questions</h2>
                </div>
                <div className="col-12 col-xl-5">
                </div>
              </div>
            </div>
            <div className={activeTab ? "stactive faq-tab-content" : "faq-tab-content"}>
              <div className="accordion" id="accordion" >
                {faqs.map((faq, index) => (
                 <div className="accordion-item" key={index} >
                 <h5 className="accordion-header" id={`heading${index}`} >
                   <button
                     className={`accordion-button ${imgTab === index ? "" : "collapsed"}`}
                     onClick={() => setImgTab(imgTab === index ? null : index)}
                     type="button"
                     data-bs-toggle="collapse"
                     data-bs-target={`#collapse${index}`}
                     aria-expanded={imgTab === index}
                     aria-controls={`collapse${index}`}
                    // Inline style for text wrapping
                   >
                     {faq.question}
                   </button>
                 </h5>
                 <div
                   id={`collapse${index}`}
                   className={`accordion-collapse collapse ${imgTab === index ? "show" : ""}`}
                   aria-labelledby={`heading${index}`}
                   data-bs-parent="#accordion"
                   
                 >
                   <div className="accordion-body">
                    <p>
                     {faq.answer}
                     </p>
                   </div>
                 </div>
               </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqTwoLight;
