import type { NextPage } from "next";
import { useCallback } from "react";

export type BtnType = {
  className?: string;
};

const Btn: NextPage<BtnType> = ({ className = "" }) => {
  const onBtnContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='letsDesignTogether']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={`flex flex-row items-start justify-start pt-[17px] pb-[3px] pl-[53px] pr-[52px] relative whitespace-nowrap cursor-pointer text-justify text-2xl text-white font-nav-bar-text-21 ${className}`}
      onClick={onBtnContainerClick}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs bg-darkorange-100" />
      <div className="relative tracking-[0.03em] inline-block min-w-[83px] z-[1]">{`Hire Me `}</div>
    </div>
  );
};

export default Btn;