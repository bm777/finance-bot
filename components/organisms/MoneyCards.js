import React from 'react';
import ExperienceCard from '../molecules/Card';


const experiences = [
  {
    name: '',
    position: '',
    date: '',
    imgSrc: 'oncampus.png',
    works: [
      'https://afrilandfirstbank.com ',
    ],
  },
];

function MoneyCards({ isDetailed }) {
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

export default MoneyCards;
