import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
  webDesigns?: string;
  webDesigns1?: string;
  businessLandingPageDesign?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  webDesigns,
  webDesigns1,
  businessLandingPageDesign,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[37px] min-w-[334px] max-w-full text-left text-lgi text-darkorange-100 font-nav-bar-text-21 mq450:gap-[18px] ${className}`}
    >
      <div className="self-stretch rounded-xl bg-antiquewhite flex flex-row items-start justify-start py-0 pl-[39px] pr-7 box-border max-w-full">
        <div className="self-stretch w-[445px] relative rounded-xl bg-antiquewhite hidden max-w-full" />
        <div className="h-[489px] flex-1 relative max-w-full">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[105px] max-h-full w-[273px] object-cover z-[1]"
            alt=""
            src="/webDesigns.png"
          />
          <img
            className="absolute top-[77px] left-[0px] w-[273px] h-[412px] object-cover z-[2]"
            alt=""
            src="/webDesigns1.png"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-2.5 max-w-full">
        <div className="relative tracking-[0.03em] inline-block min-w-[119px]">{`Web Design `}</div>
        <b className="relative text-5xl tracking-[0.03em] text-white mq450:text-lgi">
          {businessLandingPageDesign}
        </b>
      </div>
      
    </div>
  );
};

export default FrameComponent;