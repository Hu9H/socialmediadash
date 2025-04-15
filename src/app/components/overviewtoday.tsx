import React from 'react'
import { overviewData } from '../data'
import { cn } from '../utils/cn'

export default function Overviewtoday (props:overviewData) {
  return (
    <div 
    className='relative flex flex-col justify-between overflow-hidden rounded bg-Light-Grayish-Blue dark:bg-Dark-Desaturated-Blue w-[256px] h-[156px] p-8 py-4'
    >
    <section className='flex justify-between gap-2 '>
        
        <p className=" font-semibold text-Dark-Grayish-Blue ">
          {props.type}
        </p>
        <img
          src={props.icon}
          alt={`${props.platform} icon`}
          className="w-6 h-6"
        />
    </section>
    <section className='flex justify-between gap-2 ' >    
        <div className='text-3xl font-bold text-Very-Dark-Blue-text dark:text-White-text'>
            {props.value}
        </div>
        <section className={cn(
                    'flex items-center justify-center text-sm gap-1 font-semibold',
                    props.percentage < 0 ? "text-Bright-Red" : "text-Lime-Green"
                  )}>
            <img
                className='x-3 y-3'
                src={props.percentage > 0 ? "/up.svg" :"/down.svg"}
                alt={`${props.percentage > 0 ? "/up.svg" :"/down.svg"} icon`}    
            />
            <p>{props.percentage}% </p>
        </section>
        </section>
    </div>
  )
}