import React from 'react'

export default function Header() {
  return (
    <div className='flex flex-row justify-between items-center px-20 w-full py-6'>
      <div className="flex flex-row justify-center items-center gap-x-7">
        <div className="flex flex-row justify-center items-center gap-x-[8px]">
            <img src="/boostim.svg" alt="logo"></img>
            <div className="text-black text-2xl font boldfont-Manrope font-weight:700">boostim</div>
        </div>
        {/*ul>(li>a)*5 */}
        <ul className="flex gap-x-8 justify-center items-center"> 
            <li className="flex justify-center items-center">
                <a href="">Service </a>
                <img src="/Arrow.svg" alt="logo"/>
            </li>
            
            <li className="flex justify-center items-center">
                <a href="">Agency</a>
                <img src="/Arrow.svg" alt="logo"/>
                </li>

            <li className="flex justify-center items-center">
                <a href="">Case Study</a>
                <img src="/Arrow.svg" alt="logo"/>
                </li>

            <li className="flex justify-center items-center">
                <a href="">Resources</a>
                <img src="/Arrow.svg" alt="logo"/>
                </li>

            <li><a href="">Contact</a></li>
        </ul>

      </div>

      {/** CTA */}
      {/**flex-con */}
      <div className="flex flex-row justify-center items-center gap-x-8 ">
      <button class="border border-black text-black text-base font-bold px-[32px] py-[13px] font-Manrope rounded-full">
          Get Started
        </button>
        <button className="bg-black rounded-full p-5">
  <img src={"/Bell.svg"} alt="Bell Icon" />
</button>
      </div>
    </div>
  )
}