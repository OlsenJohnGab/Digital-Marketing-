import React from 'react'
export default function Faqs(){
    return(
        <div className="px-[70px] flex flex-row w-full mt-[100px]">
    <div className="w-[1408px] h-[732px] px-20 py-[66px] bg-cover rounded-[28px] justify-start items-start gap-[90px] inline-flex" style={{ backgroundImage: "url('/Dribbble shot 2.svg')" }}>
        <div className="flex-col justify-center items-start gap-12 inline-flex">
            <div className="self-stretch text-black text-5xl font-semibold font-Jakarta leading-[62.40px]">Digital Marketing FAQs</div>
            <div className="w-[531px] text-neutral-400 text-base font-medium font-Jakarta leading-7">As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.</div>
            <div className="justify-start items-center gap-12 inline-flex">
                <div className="h-14 px-4 py-[17px] rounded-[50px] border border-black justify-center items-end gap-8 flex">
                    <div className="justify-start items-center gap-3 flex">
                        <div className="text-black text-base font-bold font-Manrope leading-snug">More Questions</div>
                    </div>
                </div>
                <div className="text-black text-base font-semibold font-Jakarta underline leading-7">Contact Us</div>
            </div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-center inline-flex">
            <div className="self-stretch h-[282px] px-6 py-[26px] bg-white border-t border-b border-black flex-col justify-start items-start gap-12 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                    <div className="w-[448px] text-black text-2xl font-semibold font-Jakarta leading-9">Why is digital marketing important for my business?</div>
                    <div className="w-6 h-6 relative" style={{ backgroundImage: "url('/minus.svg')" }}></div>
                </div>
                <div className="self-stretch text-neutral-400 text-[13px] font-medium font-Jakarta leading-7">Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.</div>
            </div>
            <div className="self-stretch px-6 py-[26px] bg-white border-b border-black justify-between items-center inline-flex">
                <div className="w-[448px] text-black text-2xl font-semibold font-Jakarta leading-9">How can digital marketing help improve my website's visibility?</div>
                <div className="w-6 h-6 relative" style={{ backgroundImage: "url('/plus.svg')" }}></div>
            </div>
            <div className="self-stretch px-6 py-[26px] bg-white border-b border-black justify-between items-center inline-flex">
                <div className="w-[448px] text-black text-2xl font-semibold font-Jakarta leading-9">How long does it take to see results from digital marketing efforts?</div>
                <div className="w-6 h-6 relative" style={{ backgroundImage: "url('/plus.svg')" }}></div>
            </div>
            <div className="self-stretch px-6 py-[26px] bg-white border-b border-black justify-between items-center inline-flex">
                <div className="w-[448px] text-black text-2xl font-semibold font-Jakarta leading-9">How do you measure the success of digital marketing campaigns?</div>
                <div className="w-6 h-6 relative" style={{ backgroundImage: "url('/plus.svg')" }}></div>
            </div>
        </div>
    </div>
</div>


    )
}