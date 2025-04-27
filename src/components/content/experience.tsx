
"use client"

import React from 'react';
import about from './about.json'

const Experience: React.FC = () => {

  return (
    <div className="about  pt-8 md:pt-18">
      <h1 className='sticky text-3xl '>Experience</h1>
      <div className='flex flex-col gap-10'>
        {about.experience.map((element, index) => {
          return <Row
            key={index + 'i'}
            joiningYear={element.joiningYear}
            index={index} company={element.company} status={element.tenure} duration={element.duration} position={element.title} description={element.description} />
        })}


      </div>
    </div >
  );
};

export default Experience;

const TimeLine = ({ year }: { year: string }) => {
  return <div className="flex ">
    <div className=" md:w-full lg:w-11/12   flex items-center justify-center">
      <div className="w-full h-px bg-black dark:bg-white  my-4"></div>
    </div>
    <div className="hidden lg:flex w-1/12 items-center justify-end">
      {year}
    </div>
  </div>
}

const Row = ({ company, status, duration, position, description, index, joiningYear }: { joiningYear: string, index: number, company?: string, status?: string, duration?: string, position?: string, description?: string, }) => {

  return <div>
    {about?.experience?.[index - 1]?.joiningYear !== joiningYear ? <TimeLine year={joiningYear}></TimeLine> : ''}
    <div className="flex" >
      <div className=" w-full lg:w-11/12 flex items-center row justify-between">
        <div className='text-2xl'>
          {company}
        </div>
        <div className='text-sm text-green-700'>
          {status}
        </div>
      </div>
      <div className="hidden lg:flex w-1/12 items-center justify-center">
      </div>
    </div>

    <div className="flex ">
      <div className=" w-full lg:w-11/12 flex items-center  justify-between">
        <div className='text-xl'>
          {position}
        </div>
        <div className='text-sm'>
          {duration}
        </div>
      </div>
      <div className="hidden lg:flex w-1/12 items-center justify-center">
      </div>
    </div>

    <div className="flex ">
      <div className=" md:w-full lg:w-11/12 text-justify">
        <div className=''>
          {description}
        </div>
      </div>
      <div className="hidden lg:flex w-1/12 items-center justify-center">
      </div>
    </div>
  </div>
}