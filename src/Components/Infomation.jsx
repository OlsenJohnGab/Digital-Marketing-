import React from 'react'

export default function Information(){
    return(

        <div className="px-[70px] flex flex-row w-full mt-[100px]">
    <div className="w-[1280px] h-[345px] flex flex-col justify-start items-start gap-[74px] bg-cover" style={{ backgroundImage: "url('/Background Noise.svg')" }}> 
        <div className="w-[1280px] text-black text-4xl font-semibold leading-[57.60px]">“ They thoroughly analyze our industry and target audience, allowing them to 
            develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”</div>
        <div className="w-[1280px] flex justify-between items-center">
            <div className="flex items-center gap-6">
                <img className="w-[70px] h-[70px] rounded-full border-2 border-white/opacity-50" src="/Micheal.svg" alt="Michael's profile" />
                <div className="flex flex-col justify-start items-start gap-[5px]">
                    <div className="text-black text-xl font-bold leading-9">Michael Kaizer</div>
                    <div className="text-neutral-400 text-base font-medium leading-7">CEO of Basecamp Corp</div>
                </div>
            </div>
            <div className="flex items-center gap-[38px]">
            <div className="px-8 py-4 rotate-0 rounded-[70px] border border-black flex items-center gap-[42px]">
            <div className="w-6 h-6 relative" style={{ transform: "scaleX(-1)" }}>
            <img className="w-full h-full" src="/RightPointer.svg" alt="Right arrow" style={{ filter: "invert(1) grayscale(100%)" }} />
        </div>
    </div>
                <div><span className="text-black text-base font-semibold underline leading-7">01</span><span className="text-black/opacity-40 text-base font-semibold leading-7">/05</span></div>
                <div className="px-8 py-4 bg-black rounded-[70px] flex items-center gap-[42px]">
                    <div className="w-6 h-6 relative" style={{ backgroundImage: "url('/RightPointer.svg')" }}></div>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}