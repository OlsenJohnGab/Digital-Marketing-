import React from 'react'

export default function Item() {
  return (
    <div className="px-[70px] flex flex-row w-full mt-[100px]">
    {/* First row */}
    <div className="flex flex-col justify-start items-start gap-y-[80px]">
        <div className="w-[1280px] h-[174px] justify-between items-center flex">
            <div className="w-[684px] text-black text-5xl font-semibold font-['Plus Jakarta Sans'] leading-[62.40px]">
                Digital Marketing & SEO Services That Grow Traffic & Increase Revenue
            </div>
            <div className="flex-col justify-center items-start gap-12">
                <div className="w-[557px] text-neutral-400 text-base font-medium font-['Plus Jakarta Sans'] leading-7">
                    We are the top digital marketing agency for branding corp. We offer a full range of services to help clients improve their search engine rankings and drive more traffic to their websites.
                </div>
                <div className="w-[156px] px-4 py-[17px] rounded-[50px] border border-black flex justify-center items-end gap-8">
                    <div className="text-black text-base font-bold font-['Manrope'] leading-snug">See more</div>
                </div>
            </div>
        </div>

        <div className="flex flex-row">
            <div className="w-[410.67px] h-[316px] p-8 bg-white rounded-[20px] flex-col justify-start items-start gap-14">
                <div className="self-stretch h-[135px] flex-col justify-start items-start gap-6">
                    <div className="self-stretch justify-between items-center flex">
                        <div className="w-3.5 h-3.5 bg-sky-400 rounded-full"></div>
                        <div className="text-neutral-400 text-sm font-medium font-['Plus Jakarta Sans'] leading-snug">5 min read</div>
                    </div>
                    <div className="self-stretch text-black text-[26px] font-semibold font-['Plus Jakarta Sans'] leading-[39px]">
                        How a Digital Marketing Agency Can Boost Your Business
                    </div>
                </div>
                <div className="w-[346.67px] flex justify-between items-center">
                    <div className="w-[220px] h-[61px] text-neutral-400 text-sm font-medium font-['Plus Jakarta Sans'] leading-snug">
                        We are the top digital marketing agency for branding corp. We offer a full range of services to improve search engine rankings.
                    </div>
                    <div className="px-8 py-4 bg-black rounded-[70px] flex justify-center items-center gap-[42px]">
                        <div className="w-6 h-6 relative" style={{ backgroundImage: "url('/RightPointer.svg')" }}></div>
                    </div>
                </div>
            </div>

            <div className="w-[410.67px] h-[316px] p-8 bg-white rounded-[20px] flex-col justify-start items-start gap-14">
                <div className="self-stretch h-[135px] flex-col justify-start items-start gap-6">
                    <div className="self-stretch justify-between items-start flex">
                        <div className="w-3.5 h-3.5 bg-red-500 rounded-full"></div>
                        <div className="text-neutral-400 text-sm font-medium font-['Plus Jakarta Sans'] leading-snug">5 min read</div>
                    </div>
                    <div className="self-stretch text-black text-[26px] font-semibold font-['Plus Jakarta Sans'] leading-[39px]">
                        The Latest Trends and Strategies with a Digital Marketing Agency
                    </div>
                </div>
                <div className="w-[346.67px] flex justify-start items-center gap-10">
                    <div className="w-[220px] h-[61px] text-neutral-400 text-sm font-medium font-['Plus Jakarta Sans'] leading-snug">
                        Working with this digital marketing agency has been a true partnership. They have taken the time to understand our business and industry.
                    </div>
                    <div className="px-8 py-4 rounded-[70px] border border-black flex justify-center items-center gap-[42px]">
                        <div className="w-6 h-6 relative invert color" style={{ backgroundImage: "url('/RightPointer.svg')" }}></div>
                    </div>
                </div>
            </div>

            <div className="w-[410.67px] h-[316px] p-8 bg-white rounded-[20px] flex-col justify-start items-start gap-14">
                <div className="self-stretch h-[135px] flex-col justify-start items-start gap-6">
                    <div className="self-stretch justify-between items-start flex">
                        <div className="w-3.5 h-3.5 bg-violet-700 rounded-full"></div>
                        <div className="text-neutral-400 text-sm font-medium font-['Plus Jakarta Sans'] leading-snug">5 min read</div>
                    </div>
                    <div className="self-stretch text-black text-[26px] font-semibold font-['Plus Jakarta Sans'] leading-[39px]">
                        Maximizing ROI with the Expertise of a Digital Marketing Agency
                    </div>
                </div>
                <div className="w-[346.67px] flex justify-start items-center gap-10">
                    <div className="w-[220px] h-[61px] text-neutral-400 text-sm font-medium font-['Plus Jakarta Sans'] leading-snug">
                        What sets this digital marketing agency apart is their commitment to transparency and collaboration. They keep us informed every step of the way.
                    </div>
                    <div className="px-8 py-4 rounded-[70px] border border-black flex justify-center items-center gap-[42px]">
                        <div className="w-6 h-6 relative invert color" style={{ backgroundImage: "url('/RightPointer.svg')" }}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}