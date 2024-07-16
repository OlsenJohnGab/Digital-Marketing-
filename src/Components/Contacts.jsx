import React from 'react'

export default function Contacts() {
  return (
    // Parent div
    <div className="px-[70px] flex flex-row w-full mt-[100px]">
      {/* The flex com that divides them into two rows */}
      <div className="flex flex-col gap-y-[80px]">
      <div class="w-[1400px] h-[200px]  bg-black rounded-[30px] shadow justify-between items-center inline-flex p-[64px]" style={{ backgroundImage: "url('/BackgroundConNoise.svg')" }}>
        <div class="text-white text-[80px] font-semibold font-Jakarta leading-[104px]">Ready to work with us ?</div>
          <div class="px-8 py-4 bg-white rounded-[70px] justify-center items-center gap-[42px] flex">
            <div class="justify-start items-center gap-3 flex">
                <div class="text-black text-base font-bold font-Jakarta leading-snug">Get Started</div>
            </div>
            <div className="w-6 h-6 relative invert color" style={{ backgroundImage: "url('/RightPointer.svg')" }}></div>
        </div>
      </div>
      {/* The flex that will make them in line with each other */}
      <div className="flex flex-row gap-[200px]"> 

      <div class="w-[534px] h-[241px] flex-col justify-start items-start gap-[30px] inline-flex px-[70px]">
          <div class="justify-start items-center gap-[12.36px] inline-flex">
              <div class="w-[51px] h-[51px] relative">
                  <div class="w-[51px] h-[51px] left-0 top-0 absolute bg-lime-400 rounded-tl rounded-tr rounded-bl rounded-br-[81.91px]"></div>
                  <div class="w-[51px] h-[51px] left-0 top-0 absolute bg-lime-400 rounded-tl rounded-tr rounded-bl rounded-br-[81.91px]"></div>
                  <div class="w-[21.64px] h-[21.64px] left-[17px] top-[17.77px] absolute bg-gray-800 rounded-tl rounded-tr rounded-bl rounded-br-[81.91px]"></div>
              </div>
              <div class="text-black text-[37.09px] font-bold font-Manrope">boostim</div>
          </div>
          <div class="w-[534px] text-neutral-400 text-sm font-normal font-['Roboto'] leading-normal">We offers a comprehensive suite of digital marketing services that cover all aspects of our online presence. From SEO and social media marketing to content creation and PPC advertising, they have the expertise and resources to handle our diverse marketing needs.</div>

          {/* The Text after the logo */}
        </div>
        <div class="w-[643px] h-[237px] justify-start items-start gap-[200px] inline-flex">
              <div class="relative">
                  <div class="left-0 top-0 absolute text-gray-800 text-lg font-semibold font-['Roboto']">Navigation</div>
                  <div class="left-0 top-[61px] absolute text-neutral-400 text-sm font-normal font-['Roboto'] ">Service<br/>Agency<br/>Case Study<br/>Resource<br/>Contact</div>
              </div>
      <div class="relative">
        <div class="left-0 top-0 absolute text-gray-800 text-lg font-semibold font-['Roboto']">Licence</div>
        <div class="left-0 top-[61px] absolute text-neutral-400 text-sm font-normal font-['Roboto']">Privacy Policy<br/>Copyright<br/>Email Address</div>
    </div>
    <div class="w-60 h-[191px] relative">
        <div class="left-0 top-0 absolute text-gray-800 text-lg font-semibold font-['Roboto']">Contact</div>
        <div class="flex left-0 top-[64px] absolute text-neutral-400 text-sm font-normal font-['Roboto'] gap-2"><div class="w-6 h-6 relative" style={{ backgroundImage: "url('/Phone.svg')" }}></div>(406) 555-0120</div>
        <div class="flex left-0 gap-2 top-[104px] absolute text-neutral-400 text-sm font-normal font-['Roboto']"> <div class="w-6 h-6 relative" style={{ backgroundImage: "url('/Email.svg')" }}></div>Hey@boostim.com</div>
        <div class="flex left-0 gap-3 top-[143px] absolute text-neutral-400 text-sm font-normal font-['Roboto']"> <div class="w-6 h-6 bg-no-repeat relative" style={{ backgroundImage: "url('/Location.svg')" }}></div>2972 Westheimer Rd. Santa Ana, Illinois 85486 </div>

        <div class="w-6 h-6 left-[24px] top-[61px] absolute origin-top-left rotate-180 justify-center items-center inline-flex">
            <div class="w-6 h-6 relative flex-col justify-start items-start flex"></div>
        </div>
        <div class="w-6 h-6 left-0 top-[100px] absolute"></div>
        <div class="w-6 h-6 px-[5px] pt-[3px] pb-0.5 left-0 top-[139px] absolute justify-center items-center inline-flex">
            <div class="w-3.5 h-[19px] relative flex-col justify-start items-start flex"></div>
        </div>
        <div class="w-6 h-6 left-0 top-[100px] absolute"></div>
    </div> 
      </div>
      </div>

      </div>
    </div>
  )
}
