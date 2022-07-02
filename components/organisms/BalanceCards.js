import React from 'react';
import ExperienceCard from '../molecules/Card';


const experiences = [
  {
    name: '',
    position: '',
    date: '',
    imgSrc: 'oncampus.png',
    works: [
      "The balance of your account is XAF "+Math.floor(50000 + Math.random()*(500000 - 50000 + 1)),
    ],
  }
];

function BalanceCards({ isDetailed }) {
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

export default BalanceCards;
