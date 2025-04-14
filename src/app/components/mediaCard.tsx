import React from 'react';
import { cn } from '../utils/cn';
import { mediaData } from '../data';
import { socialMediaAccounts } from '../data';
// Assuming mediaData is the type for a social media account entry.


export default function MediaCard(props:mediaData) {
  return (
    <div
      className=
        "w-[250px] h-[210px] relative flex flex-col justify-around overflow-hidden bg-Light-Grayish-Blue dark:bg-Dark-Desaturated-Blue rounded-sm"
    >
        <div
        style={    props.color.includes("gradient")
            ? { backgroundImage: props.color }
            : { backgroundColor: `var(--color-${props.color})` }
        }
        className='absolute left-0 top-0 h-1 w-full'/>
      <section className="flex w-full justify-center items-center gap-2">
        <img
          src={props.icon}
          alt={`${props.platform} icon`}
          className="w-6 h-6"
        />
        <p className="text-sm text-Dark-Desaturated-Blue dark:text-Dark-Grayish-Blue">
          {props.username}
        </p>
      </section>
      <section className='flex flex-col items-center'>
        <p className="text-6xl font-bold text-Very-Dark-Blue-text dark:text-White-text">
            {props.followers}
        </p>
        <p className="text-xs tracking-[5px] text-Dark-Desaturated-Blue dark:text-Dark-Grayish-Blue">
        {props.type}
        </p>
      </section>
      
      <section className={cn(
            'flex items-center justify-center text-sm gap-1 font-semibold',
            props.updown == "/down.svg"? "text-Bright-Red" : "text-Lime-Green"
          )}>
      <img
      className='x-3 y-3'
          src={props.updown}
          alt={`${props.updown} icon`}
          
        />
      <p>{props.changeToday} Today </p>
      </section>
    </div>
  );
}
 