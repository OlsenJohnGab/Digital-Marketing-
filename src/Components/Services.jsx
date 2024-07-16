import React from 'react'

export default function Services() {
  return (

<div className="px-[70px] flex flex-row w-full mt-[100px]">
  <div className="flex flex-col">
    <div className="w-full h-[103px] justify-between items-start inline-flex mb-[100px]">
      <div className="w-[684px] text-black text-5xl font-semibold font-Jakarta leading-[62.40px]">
        Provide the best service with out of the box ideas
      </div>
      <div className="w-[557px] h-[103px] text-neutral-400 text-base font-medium font-Jakarta leading-7">
        we are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of 
        experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.
      </div>
    </div>

    <div className="flex flex-row gap-10">
      <div className="w-[438px] h-[382px] bg-black rounded-[30px] pl-10 relative pb-5" style={{backgroundImage: "url('image 60.svg')"}}>
        <div>
          <span className="text-white text-[84px] font-bold font-Jakarta leading-[126px]">920</span>
          <span className="text-lime-300 text-[84px] font-bold font-Jakarta leading-[126px]">+</span>
        </div>
        <div className="text-neutral-400 text-[19px] font-medium font-Jakarta leading-loose">
          Project finish with superbly
        </div>

        <div className="w-[357px] h-[70px] justify-start items-center gap-[7px] inline-flex bottom-5 absolute">
          <img className="w-[70px] h-[70px] rounded-full border-2 border-white/opacity-50" src="Ellipse 1.svg" />
          <img className="w-[70px] h-[70px] rounded-full border-2 border-white/opacity-50" src="Ellipse 1.svg" />
          <img className="w-[70px] h-[70px] rounded-full border-2 border-white/opacity-50" src="Ellipse 1.svg" />
          <img className="w-[70px] h-[70px] rounded-full border-2 border-white/opacity-50" src="Ellipse 1.svg" />
          <div className="text-white text-[74px] right-0 bottom-[-10px] font-bold font-Jakarta leading-[111px] absolute">+</div>
        </div>
      </div>

      <div className="w-[818px] h-[382px] bg-black/opacity-20 rounded-[30px] relative flex justify-center items-center">
        <img src="/Rectangle 23813.svg" alt="How We Work" />
        <div className="text-white text-5xl font-semibold font-Jakarta leading-[67.20px] tracking-[12.96px] absolute">
          HOW WE WORK
        </div>
        <div className="w-[163px] h-[163px] bg-lime-400 rounded-full border-[10px] border-neutral-50 absolute flex justify-center items-center bottom-[-20px] right-[-20px]">
          <img className="w-11 h-11 absolute" src="/solar_play-bold.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

)
}