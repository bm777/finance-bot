import React from 'react';
import ExperienceCard from '../molecules/Card';

const experiences = [
  {
    name: '',
    position: 'ChatBot System',
    date: '@2022',
    imgSrc: 'oncampus.png',
    works: [
      'Developed and maintained by Nkomo Nanga to allow everyone to access bank services',
      'This system aims to reduce the waiting time at the bank',
      'Free space on the waitlist',
    ],
  },
];

function ProjectCards({ isDetailed }) {
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

export default ProjectCards;
