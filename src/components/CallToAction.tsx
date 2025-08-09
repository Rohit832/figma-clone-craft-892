import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="absolute -translate-x-2/4 w-[calc(100%_-_80px)] max-w-[1252px] left-2/4 bottom-[50px] max-md:relative max-md:w-full max-md:mt-10 max-md:left-auto max-md:bottom-auto">
      <button className="flex justify-center items-center shadow-[0_6.506px_0_0_#000] text-2xl font-semibold text-black text-center tracking-[0.96px] uppercase bg-[#FFE149] px-[29.276px] py-[13.011px] rounded-[8.132px] border-[1.626px] border-solid border-black max-md:text-xl max-md:p-5 max-sm:text-lg max-sm:tracking-[0.5px] max-sm:px-5 max-sm:py-[15px] w-full hover:shadow-[0_4px_0_0_#000] hover:translate-y-[2px] transition-all duration-150">
        You receive monthly usage + wellness reports
        <br />
        It's plug-and-play. But powerful
      </button>
    </section>
  );
};

export default CallToAction;
