import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type SkillsList1Type = {
  className?: string;
  websiteDesign?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propRight?: CSSProperties["right"];
};

const SkillsList1: NextPage<SkillsList1Type> = ({
  className = "",
  websiteDesign,
  propWidth,
  propRight,
}) => {
  const menutitleStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const leasingStyle: CSSProperties = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 gap-[17px] text-left text-5xl text-white font-nav-bar-text-21 ${className}`}
    >
      <div className="relative tracking-[0.03em] font-semibold mq450:text-lgi">
        {websiteDesign}
      </div>
      <div className="self-stretch h-3 relative rounded-md bg-whitesmoke-200">
        <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke-200 w-full h-full hidden" />
        <div
          className="absolute top-[0px] left-[0px] rounded-md bg-darkorange-100 w-[657px] h-3 z-[1]"
          style={menutitleStyle}
        />
        <div
          className="absolute top-[calc(50%_-_16px)] right-[84px] shadow-[0px_4px_7px_rgba(0,_0,_0,_0.2)] rounded-[50%] bg-whitesmoke-200 border-darkorange-100 border-[0px] border-solid box-border w-8 h-8 z-[2]"
          style={leasingStyle}
        />
      </div>
    </div>
  );
};

export default SkillsList1;