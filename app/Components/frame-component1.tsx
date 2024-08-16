import type { NextPage } from "next";
import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  const onDividerContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='letsDesignTogether']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section
      className={`self-stretch flex flex-col items-end justify-start pt-0 px-[453px] pb-[552px] box-border gap-[139px] max-w-full shrink-0 text-center text-46xl text-white font-nav-bar-text-21 mq950:gap-[35px] mq950:pl-[113px] mq950:pr-[113px] mq950:pb-[233px] mq950:box-border mq450:gap-[17px] mq450:pl-5 mq450:pr-5 mq450:pb-[151px] mq450:box-border mq1425:gap-[69px] mq1425:pl-[226px] mq1425:pr-[226px] mq1425:pb-[359px] mq1425:box-border ${className}`}
    >
      <div
        className="mr-[-1161px] w-[3385px] flex flex-col items-center justify-start py-0 pl-[69px] pr-5 box-border gap-[87px] max-w-[334%] shrink-0 mq950:gap-[43px] mq450:gap-[22px] mq1425:pl-[34px] mq1425:box-border"
        data-scroll-to="productviewbuttonWrapperContainer"
      >
        <div className="w-[1920px] flex flex-col items-start justify-start gap-[72px] max-w-full mq950:gap-[18px] mq1425:gap-9">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-7 box-border max-w-full">
            <div className="w-[932px] flex flex-col items-end justify-start gap-4 max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[22px] pr-5">
                <h1 className="m-0 relative text-inherit tracking-[0.03em] font-semibold font-[inherit] mq950:text-33xl mq450:text-20xl">
                  Testimonials
                </h1>
              </div>
              <div className="self-stretch h-[101px] relative text-2xl tracking-[0.03em] inline-block shrink-0 mq450:text-mid">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[392px] box-border gap-[62px] max-w-full text-justify text-13xl text-darkorange-100 mq950:gap-[31px] mq950:pl-[98px] mq950:pr-[98px] mq950:box-border mq450:gap-[15px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1425:pl-[196px] mq1425:pr-[196px] mq1425:box-border mq1900:flex-wrap mq1900:justify-center">
            <div className="ml-[-1149px] w-[1087px] rounded-sm bg-whitesmoke-100 flex flex-row items-start justify-start pt-[55px] px-12 pb-[53px] box-border relative gap-[11px] shrink-0 max-w-full mq950:flex-wrap mq950:justify-center mq450:flex-wrap mq450:justify-center mq1425:flex-wrap mq1425:justify-center mq1425:pl-6 mq1425:pr-6 mq1425:box-border mq1900:flex-wrap mq1900:justify-center">
              <div className="h-[344px] w-[1087px] relative rounded-sm bg-whitesmoke-100 hidden max-w-full z-[0]" />
              <div className="h-[235px] w-[235px] relative rounded-[50%] bg-gainsboro z-[1]" />
              <div className="w-[452px] flex flex-row items-start justify-start py-0 pl-0 pr-[393px] box-border [row-gap:20px] max-w-full mq950:flex-wrap mq450:pr-[196px] mq450:box-border">
                <b className="w-[18px] relative tracking-[0.02em] inline-block z-[1] mq950:text-7xl mq450:text-lgi">
                  “
                </b>
                <div className="flex-1 flex flex-col items-start justify-start pt-[207px] px-0 pb-0 box-border min-w-[27px] text-lgi text-black">
                  <div className="self-stretch relative tracking-[0.02em] z-[2]">
                    CEO
                  </div>
                </div>
              </div>
              <div className="w-[76px] absolute !m-[0] bottom-[81px] left-[312px] text-5xl tracking-[0.02em] font-medium text-black inline-block z-[1] mq450:text-lgi">
                Name
              </div>
              <div className="w-[253px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border text-2xl text-darkslategray">
                <div className="self-stretch flex flex-col items-end justify-start">
                  <div className="w-[698px] h-[146px] relative tracking-[0.02em] inline-block shrink-0 max-w-[276%] z-[1] mq450:text-mid">
                    Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                    accumsan. Id leo urna velit neque mattis id tellus arcu
                    condimentum. Augue dictum dolor elementum convallis
                    dignissim malesuada commodo ultrices.
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[5px] mt-[-40px] text-13xl text-darkorange-100">
                    <b className="relative tracking-[0.02em] inline-block min-w-[18px] z-[2] mq950:text-7xl mq450:text-lgi">
                      “
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1087px] rounded-sm bg-whitesmoke-100 flex flex-row items-start justify-start pt-[55px] px-12 pb-[53px] box-border shrink-0 [row-gap:20px] max-w-full mq950:flex-wrap mq450:flex-wrap mq1425:flex-wrap mq1425:pl-6 mq1425:pr-6 mq1425:box-border mq1900:flex-wrap">
              <div className="h-[344px] w-[1087px] relative rounded-sm bg-whitesmoke-100 hidden max-w-full" />
              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[11px]">
                <img
                  className="w-[235px] h-[235px] relative rounded-[50%] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/ellipse-10@2x.png"
                />
              </div>
              <h3 className="m-0 relative text-inherit tracking-[0.02em] font-bold font-[inherit] inline-block min-w-[18px] z-[1] mq950:text-7xl mq450:text-lgi">
                “
              </h3>
              <div className="w-[698px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border max-w-full text-2xl text-darkslategray">
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch flex flex-col items-end justify-start max-w-full">
                    <div className="self-stretch h-[146px] relative tracking-[0.02em] inline-block shrink-0 z-[1] mq450:text-mid">
                      Lorem ipsum dolor sit amet consectetur. In enim cursus
                      odio accumsan. Id leo urna velit neque mattis id tellus
                      arcu condimentum. Augue dictum dolor elementum convallis
                      dignissim malesuada commodo ultrices.
                    </div>
                    <div className="w-[478px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-40px] text-13xl text-darkorange-100">
                      <h3 className="m-0 relative text-inherit tracking-[0.02em] font-bold font-[inherit] inline-block min-w-[18px] z-[2] mq950:text-7xl mq450:text-lgi">
                        “
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-[-8px] text-5xl text-black">
                    <div className="relative tracking-[0.02em] font-medium inline-block min-w-[76px] z-[1] mq450:text-lgi">
                      Name
                    </div>
                    <div className="relative text-lgi tracking-[0.02em] inline-block min-w-[41px] z-[1] mt-[-1px]">
                      CEO
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1087px] rounded-sm bg-whitesmoke-100 flex flex-row items-start justify-start pt-[55px] px-12 pb-[53px] box-border relative gap-[11px] shrink-0 max-w-full text-5xl text-black mq950:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="h-[344px] w-[1087px] relative rounded-sm bg-whitesmoke-100 hidden max-w-full z-[0]" />
              <img
                className="h-[235px] w-[235px] relative rounded-[50%] object-cover min-h-[235px] z-[1] mq950:flex-1"
                loading="lazy"
                alt=""
                src="/ellipse-11@2x.png"
              />
              <div className="absolute !m-[0] bottom-[81px] left-[312px] tracking-[0.02em] font-medium inline-block min-w-[76px] z-[1] mq450:text-lgi">
                Name
              </div>
              <div className="w-[85px] flex flex-row items-start justify-start min-w-[85px] text-13xl text-darkorange-100 mq950:flex-1">
                <h3 className="m-0 relative text-inherit tracking-[0.02em] font-bold font-[inherit] inline-block min-w-[18px] z-[1] mq950:text-7xl mq450:text-lgi">
                  “
                </h3>
                <div className="flex-1 flex flex-col items-start justify-start pt-[25px] px-0 pb-0 text-2xl text-darkslategray">
                  <div className="self-stretch flex flex-col items-start justify-start gap-7">
                    <div className="self-stretch flex flex-col items-start justify-start py-0 px-0">
                      <div className="w-[698px] h-[146px] relative tracking-[0.02em] inline-block shrink-0 max-w-[1042%] z-[1] mq450:text-mid">
                        Lorem ipsum dolor sit amet consectetur. In enim cursus
                        odio accumsan. Id leo urna velit neque mattis id tellus
                        arcu condimentum. Augue dictum dolor elementum convallis
                        dignissim malesuada commodo ultrices.
                      </div>
                      <div className="self-stretch h-12 flex flex-row items-start justify-start py-0 pl-[450px] pr-0 box-border mt-[-40px] text-13xl text-darkorange-100 mq950:pl-[225px] mq950:box-border">
                        <h3 className="m-0 self-stretch w-[18px] relative text-inherit tracking-[0.02em] font-bold font-[inherit] inline-block shrink-0 z-[2] mq950:text-7xl mq450:text-lgi">
                          “
                        </h3>
                      </div>
                    </div>
                    <div className="relative text-lgi tracking-[0.02em] text-black inline-block min-w-[41px] z-[1]">
                      CEO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1920px] flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border max-w-full">
          <div className="w-[255px] flex flex-row items-start justify-start gap-[9px]">
            <div className="h-4 flex-1 relative rounded-lg bg-gainsboro" />
            <div className="h-4 flex-1 relative rounded-lg bg-darkorange-100" />
            <div className="h-4 flex-1 relative rounded-lg bg-gainsboro" />
            <div className="h-4 flex-1 relative rounded-lg bg-gainsboro" />
          </div>
        </div>
      </div>
      <div
        className="w-[932px] flex flex-col items-start justify-start gap-12 max-w-full cursor-pointer mq950:gap-6"
        onClick={onDividerContainerClick}
      >
        <div
          className="self-stretch flex flex-col items-start justify-start gap-[15px]"
          data-scroll-to="groupContainer"
        >
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[22px]">
            <h1
              className="m-0 h-[98px] relative text-inherit tracking-[0.03em] font-semibold font-[inherit] inline-block mq950:text-33xl mq450:text-20xl"
              data-scroll-to="letsDesignTogether"
            >
              Lets Design Together
            </h1>
          </div>
          <div className="self-stretch h-[101px] relative text-2xl tracking-[0.03em] inline-block shrink-0 mq450:text-mid">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[29px] box-border max-w-full">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[25px] max-w-full">
            <TextField
              className="[border:none] bg-[transparent] h-[75px] flex-1 font-nav-bar-text-21 text-2xl text-gray-100 min-w-[300px] max-w-full"
              placeholder="Enter Your Email"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#afafaf" },
                "& .MuiInputBase-root": {
                  height: "75px",
                  backgroundColor: "#f8f8f8",
                  borderRadius: "14px",
                  fontSize: "21px",
                },
                "& .MuiInputBase-input": { color: "#797979" },
              }}
            />
            <Button
              className="h-[75px] w-[222px]"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "24",
                background: "#fd6f00",
                borderRadius: "14px",
                "&:hover": { background: "#fd6f00" },
                width: 222,
                height: 75,
              }}
            >{`Contact Me `}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;