import React from 'react';
import ExperienceCard from '../molecules/Card';


const experiences = [
  {
    name: '',
    position: '',
    date: '',
    imgSrc: 'oncampus.png',
    works: [
      "Q1: How to Reset the PIN? You have to manually do it on your Mobile app or at your bank with the TPE.",
      "Q2: How to send money? You just have to click on the link, after your clicked on the option Send Money.",
      "Q3: How to Create an account? Go to the most close AFD to your place and then proceed to create an account, the staff will help you.",
      "Q4: How to Delete my account? You can simply go to the Bank and fill the revokation form and submit it at the office.",
      "Q5: Should I keep my PIN personnnaly? Yes, you should in order to save your account and money save",
      "Q6: Can I have two accounts? Yes, you can have more than two account if you provide the source or the proof of fund."
    ],
  }
];

function FAQCards({ isDetailed }) {
  return (
    <>
      {experiences.map(({ name, position, date, imgSrc, works }, idx) => {
        return (
          <ExperienceCard
            name={name}
            position={position}
            date={date}
            imgSrc={imgSrc}
            works={works}
            key={idx}
            isDetailed={isDetailed}
          />
        );
      })}
    </>
  );
}

export default FAQCards;
