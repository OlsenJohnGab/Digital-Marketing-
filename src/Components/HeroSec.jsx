import React from 'react'

export default function HeroSec() {
  return (
    <div className='px-[70px] flex flex-row w-full'>
        {/** Left Container */}
        <div className="flex flex-col justify-start items-start gap-y-[48px] w-full">
    <h1 class="text-balance text-7xl font-semibold font boldfont-Plus Jakarta Sans text-left mb-4 w-full">
        <div>Stay ahead of the</div><div>curve with our</div><div>forward-thinking</div>
    </h1>
    <div class="flex flex-col items-start gap-y-8">
    <p class="text-base font-medium font boldfont-Plus Jakarta Sans text-gray-700 mb-2 gap-y-48 w-full">
        <div>An award-winning SEO agency with disciplines in digital marketing,</div>
        <div>design, and website development. Focused on understanding you.</div>
    </p>
    </div>

  <div className="flex flex-row justify-center items-center gap-x-8">
    <button className="h-10 px-8 font-Manrope rounded-full border bg-black border-slate-200 text-slate-200 inline-flex items-center" type="button">
    Schedule Call
    <img className="h-auto max-w-full object-contain bg-black ml-2" src="/RightPointer.svg" alt="Right Pointer" />
    </button>
   <button className="h-10 px-6 font-Manrope text-gray-700 underline flex items-center" type="button">
    View Case Study
   </button>
  </div>

  <div className="flex flex-col items-start gap-x-[16px]">
  <div className="flex items-start justify-between px-0">
    <p className="text-gray-900 leading-[1.6] font-Plus_Jakarta_Sans text-base font-semibold font-Size">
      <div>Trusted by the world's</div> 
      <div>biggest brands</div>
    </p>
    <div className="flex items-center px-7">
      <img className="h-auto max-w-full object-contain bg-white p-2" src="/Afterpay.svg" alt="Afterpay Logo" />
      <img className="h-auto max-w-full object-contain bg-white p-2" src="/Basecamp.svg" alt="Basecamp Logo" />
      <img className="h-auto max-w-full object-contain bg-white p-2" src="/Maze.svg" alt="Maze Logo" />
    </div>
  </div>
</div>

</div>

        {/** Right Container */}
        <div className="mx-auto max-w-7xl flex flex-col mt-6">
  <div className="flex flex-row justify-center items-center gap-5 mb-5 relative">
    <img className="w-[303px] h-[275px] rounded-tl-[1000px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]op-blur backdr-[84px]" src="/Rectangle.svg" alt="" />
    <div className="w-[108px] h-[108px] bg-black rounded-[683.54px] shadow absolute flex items-center justify-center top-[-20px] left-[170px]">
      <img className="w-12 h-12" src="/UpArrow.svg" alt="" />
    </div>
    <div className="w-[259px] h-[281px] bg-zinc-100 rounded-[20px] backdrop-blur-[84px] flex flex-col items-center">
      <div className="w-[211px] h-[153px] flex-col justify-start items-start inline-flex">
        <div className="text-black text-[84px] font-bold font-Jakarta leading-[126px] mb-[1px]">230+</div>
        <div className="w-[211px] text-zinc-600 text-base font-medium font-Jakarta leading-normal">some big companies that we work with, and trust us very much</div>
        <img className="mt-10" src="/Line.svg" alt="" />
      </div>
    </div>
  </div>

  <div className="w-[588px] h-[216px] gap-10 bg-black rounded-[20px] backdrop-blur-[84px] bg-no-repeat justify-center items-center relative pl-10 pt-10" style={{ backgroundImage: "url('/image 60.svg')" }}>
    <div className="flex flex-row">
      <div className="w-[280px] h-[108px] flex-col justify-start items-start gap-8 inline-flex">
        <div className="justify-center items-center gap-[13px] inline-flex">
          <div className="text-white text-sm font-semibold font-Jakarta leading-[17.64px] flex">
            <img className="mr-2" src="/Dashline.svg" alt="" />Drive More Traffic and Sales
          </div>
        </div>
        <div className="w-[280px] text-white text-[32px] font-semibold font-Jakarta leading-[41.60px]">Drive more traffic and product sales</div>
      </div>
      <div className="absolute w-[227px] h-[166px] bottom-0 right-5 justify-end items-end gap-2.5 inline-flex">
        <div className="w-[69px] h-[95px] bg-lime-300"></div>
        <div className="w-[69px] h-[136px] bg-lime-300"></div>
        <div className="w-[69px] h-[166px] bg-lime-500"></div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}