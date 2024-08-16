import type { NextPage } from "next";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`ml-[-5px] self-stretch bg-bg-gray flex flex-col items-start justify-start pt-0 pb-[0px] pl-[5px] pr-0 box-border gap-[62px] max-w-full shrink-0 text-left text-29xl text-bg-gray font-montserrat mq950:h-auto mq950:gap-[15px] mq950:pb-[50px] mq1425:gap-[31px] mq1425:pb-[100px] ${className}`}
    >
      <div className="self-stretch h-[552px] relative bg-bg-gray hidden" />
      <div className="mt-[-443px] w-[1909px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[779px] flex flex-col items-start justify-start gap-[90.5px] shrink-0 max-w-full mq950:gap-[45px] mq450:gap-[23px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[75px] mq950:gap-[37px] mq450:gap-[19px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[22px]">
              <div className="w-[277px] flex flex-row items-start justify-start gap-5">
                <img
                  className="h-[67px] w-[67px] relative z-[1]"
                  alt=""
                  src="/subtract.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-[10.2px] px-0 pb-0">
                  <h1 className="m-0 self-stretch h-[46px] relative text-inherit inline-block whitespace-nowrap z-[1] font-[inherit] mq950:text-19xl mq450:text-10xl">
                    <b>M</b>
                    <span>{`umair `}</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-5 text-2xl text-white font-nav-bar-text-21 mq950:flex-wrap">
              <div className="relative tracking-[0.03em] inline-block min-w-[66px] z-[1] mq450:text-mid">
                Home
              </div>
              <div className="h-8 relative tracking-[0.03em] inline-block min-w-[105px] z-[1] mq450:text-mid">
                About Me
              </div>
              <div className="relative tracking-[0.03em] inline-block min-w-[92px] z-[1] mq450:text-mid">
                Services
              </div>
              <div className="relative tracking-[0.03em] inline-block min-w-[89px] z-[1] mq450:text-mid">
                Projects
              </div>
              <div className="relative tracking-[0.03em] z-[1] mq450:text-mid">
                Testimonials
              </div>
              <div className="relative tracking-[0.03em] inline-block min-w-[90px] z-[1] mq450:text-mid">
                Contact
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="flex flex-row items-start justify-start gap-[25px]">
              <img
                className="h-[32.5px] w-[32.5px] relative overflow-hidden shrink-0 min-h-[33px] z-[1]"
                alt=""
                src="/facebook.png"
              />
              <img
                className="h-[32.5px] w-[32.5px] relative overflow-hidden shrink-0 min-h-[33px] z-[1]"
                alt=""
                src="/twitter.png"
              />
              <img
                className="h-[32.5px] w-[32.5px] relative overflow-hidden shrink-0 min-h-[33px] z-[1]"
                alt=""
                src="/instagram.png"
              />
              <img
                className="h-[32.5px] w-[32.5px] relative overflow-hidden shrink-0 min-h-[33px] z-[1]"
                alt=""
                src="/linkedin.png"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="self-stretch bg-gray-200 flex flex-row items-start justify-center py-[26px] px-5 box-border shrink-0 max-w-full z-[1] text-left text-2xl text-white font-nav-bar-text-21">
        <div className="h-[84px] w-[1921px] relative bg-gray-200 hidden max-w-full" />
        <div className="relative tracking-[0.03em] z-[2] mq450:text-mid">
          <span>{`© 2023 `}</span>
          <b className="text-darkorange-100">{`Mumair `}</b>
          <span>All Rights Reserved , Inc.</span>
        </div>
      </footer>
    </section>
  );
};

export default FrameComponent2;
