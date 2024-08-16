'use client';

import type { NextPage } from "next";
import Content from "./Components/content";
import FrameComponent1 from "./Components/frame-component1";
import FrameComponent2 from "./Components/frame-component2";

const LandingPage: NextPage = () => {
  return (
    <div className="w-full h-[5600px] relative bg-bg-gray overflow-hidden flex flex-col items-start justify-start pt-[61px] px-0 pb-[691px] box-border gap-[139px] leading-[normal] tracking-[normal] mq950:gap-[35px] mq1425:h-auto mq1425:gap-[69px]">
      <section className="w-[1873px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0">
        <Content />
      </section>
      <FrameComponent1 />
      <FrameComponent2 />
    </div>
  );
};

export default LandingPage;
