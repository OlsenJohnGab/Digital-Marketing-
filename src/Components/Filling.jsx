import React from 'react'

export default function Filling() {
  return (
<div className="px-[70px] flex flex-row w-full mt-[100px]">
  <div className="w-[1440px] h-[1090px] bg-black rounded-[20px] p-5 pt-[50px] backdrop-blur-[84px] bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: "url('/Background Noise2.svg')" }}>
    <div className="w-full h-full">
      <div className="flex flex-col">
        {/* Row 1 */}
        <div className="w-[1280px] h-[199px] flex-col justify-center items-center gap-[53px] inline-flex">
          <div className="w-[1280px] text-center text-white text-5xl font-semibold font-Jakarta leading-[62.40px]">
            Real-world examples of how we have helped companies achieve their marketing objectives.
          </div>
          {/* The Buttons */}
          <div className="justify-start items-start gap-6 inline-flex">
            <div className="justify-start items-start gap-6 flex">
              <div className="h-12 px-4 py-[13px] rounded-[50px] border border-white justify-center items-end gap-8 flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="text-white text-base font-bold font-Manrope leading-snug">All Work [20]</div>
                </div>
              </div>
              <div className="h-12 px-4 py-[13px] bg-lime-300 rounded-[50px] justify-center items-end gap-8 flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="text-black text-base font-bold font-Manrope leading-snug">UI/UX Design [10]</div>
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-6 flex">
              <div className="h-12 px-4 py-[13px] rounded-[50px] border border-white justify-center items-end gap-8 flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="text-white text-base font-bold font-Manrope leading-snug">Digital Marketing [5]</div>
                </div>
              </div>
              <div className="h-12 px-4 py-[13px] rounded-[50px] border border-white justify-center items-end gap-8 flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="text-white text-base font-bold font-Manrope leading-snug">Branding [5]</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="w-[1488px] h-[460px] flex justify-start items-center gap-[54px] pl-5 absolute bottom-[100px]">
  <div className="w-[460px] h-[460px] relative">
    <img className="w-full h-full rounded-full border-[10px] border-white/40 backdrop-blur-[134px] absolute left-0 top-0 object-cover object-center" src="/Dribble shot1.svg" />
    <div className="w-[163px] h-[163px] absolute left-[149px] top-[149px]">
      <div className="w-[163px] h-[163px] bg-lime-400 rounded-full absolute"></div>
      <div className="absolute left-[35px] top-[75px] text-black text-lg font-bold font-Jakarta leading-snug">See Details</div>
    </div>
  </div>
  <div className="w-[460px] h-[460px] rounded-[30px] border-[10px] border-white/30 relative overflow-hidden">
    <div className="w-full h-full absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Dribble shot2.svg')" }}></div>
    <div className="absolute left-[32px] top-[32px] text-white text-[17px] font-semibold font-Jakarta leading-snug">Ai Corporation. 2023</div>
    <div className="absolute left-[32px] top-[401px] text-white text-2xl font-semibold font-Jakarta leading-[33.60px]">Ai Wave - Ai Chatbot Mobile App</div>
  </div>
  <div className="w-[460px] h-[460px] relative">
    <img className="w-full h-full rounded-[30px] border-[10px] border-white/30 backdrop-blur-[134px] absolute left-0 top-0 object-cover object-center" src="/Dribble shot3.svg" />
    <div className="absolute left-[32px] top-[32px] text-white text-[17px] font-semibold font-Jakarta leading-snug">Lancer Corporation. 2023</div>
    <div className="absolute left-[32px] top-[401px] text-white text-2xl font-semibold font-Jakarta leading-[33.60px]">App Lancer - Freelance Mobile App</div>
  </div>
</div>
      </div>
    </div>
  </div>
</div>
  )
}