import React from 'react';
import ExperienceCard from '../molecules/Card';


const experiences = [
  {
    name: '',
    position: '',
    date: '',
    imgSrc: 'oncampus.png',
    works: [
      'You can call directly the special number 3350, by providing this code: '+Math.floor(5000 + Math.random()*(6000 - 5000 + 1))+', it will be avaible to you for 1 hour. Otherwise, go to the bank physically.',
    ],
  },
];

function AppointmentCards({ isDetailed }) {
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

export default AppointmentCards;
