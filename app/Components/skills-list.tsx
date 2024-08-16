import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type SkillsListType = {
  className?: string;
  uX?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const SkillsList: NextPage<SkillsListType> = ({
  className = "",
  uX,
  propDisplay,
  propMinWidth,
}) => {
  const uXStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[7px] max-w-full text-left text-5xl text-white font-nav-bar-text-21 ${className}`}
    >
      <div
        className="relative tracking-[0.03em] font-semibold inline-block min-w-[35px] mq450:text-lgi"
        style={uXStyle}
      >
        {uX}
      </div>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <div className="h-8 flex-1 relative max-w-full">
          <div className="absolute top-[10px] left-[0px] rounded-md bg-whitesmoke-200 w-[753px] h-3" />
          <div className="absolute top-[10px] left-[0px] rounded-md bg-darkorange-100 w-[687px] h-3 z-[1]" />
          <div className="absolute top-[0px] left-[669px] shadow-[0px_4px_7px_rgba(0,_0,_0,_0.2)] rounded-[50%] bg-whitesmoke-200 border-darkorange-100 border-[0px] border-solid box-border w-8 h-8 z-[2]" />
        </div>
      </div>
    </div>
  );
};

export default SkillsList;