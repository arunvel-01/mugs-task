import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import Btn from "./btn";
import SkillsList from "./skills-list";
import SkillsList1 from "./skills-list1";
import FrameComponent from "./frame-component";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  const onMenutitleContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSubmenuIconContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onServicesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='servicesText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onItemContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onMenutitleContainerClick1 = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='productviewbuttonWrapperContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSubmenuIconContainerClick1 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={`w-[1473px] flex flex-col items-end justify-start gap-[69.5px] max-w-full text-center text-46xl text-white font-nav-bar-text-21 mq950:gap-[35px] mq450:gap-[17px] ${className}`}
    >
      <header className="w-[1426px] flex flex-row items-start justify-end pt-0 px-[3px] pb-[50.5px] box-border max-w-full text-left text-29xl text-bg-gray font-montserrat">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5">
          <div className="w-[277px] flex flex-row items-start justify-start gap-5">
            <img
              className="h-[67px] w-[67px] relative"
              loading="lazy"
              alt=""
              src="/subtract.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <a className="[text-decoration:none] self-stretch h-[59px] relative text-[inherit] inline-block whitespace-nowrap">
                <b>M</b>
                <span>{`umair `}</span>
              </a>
            </div>
          </div>
          <div className="w-[1019px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full text-2xl text-white font-nav-bar-text-21">
            <div className="self-stretch flex flex-row items-start justify-start gap-[26px] max-w-full">
              <div className="flex flex-row items-start justify-start gap-3 mq1425:hidden">
                <div
                  className="flex flex-row items-start justify-start py-2.5 px-[13px] cursor-pointer"
                  onClick={onMenutitleContainerClick}
                >
                  <a className="[text-decoration:none] relative tracking-[0.03em] text-[inherit] inline-block min-w-[66px]">
                    Home
                  </a>
                </div>
                <div
                  className="flex flex-row items-start justify-start py-2.5 px-[13px] cursor-pointer"
                  onClick={onSubmenuIconContainerClick}
                >
                  <a className="[text-decoration:none] h-8 relative tracking-[0.03em] text-[inherit] inline-block min-w-[105px] whitespace-nowrap">
                    About Me
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                <a
                  className="[text-decoration:none] relative tracking-[0.03em] text-[inherit] inline-block min-w-[92px] cursor-pointer"
                  onClick={onServicesTextClick}
                >
                  Services
                </a>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-3 max-w-full">
                <div className="flex-1 flex flex-row items-start justify-start gap-3 mq950:hidden">
                  <div
                    className="flex flex-row items-start justify-start py-2.5 px-[13px] cursor-pointer"
                    onClick={onItemContainerClick}
                  >
                    <a className="[text-decoration:none] relative tracking-[0.03em] text-[inherit] inline-block min-w-[89px]">
                      Projects
                    </a>
                  </div>
                  <div
                    className="flex-1 flex flex-row items-start justify-start py-2.5 px-3.5 cursor-pointer text-snow"
                    onClick={onMenutitleContainerClick1}
                  >
                    <a className="[text-decoration:none] relative tracking-[0.03em] text-[inherit]">
                      Testimonials
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-3">
                  <div
                    className="flex flex-row items-start justify-start py-2.5 px-3.5 cursor-pointer"
                    onClick={onSubmenuIconContainerClick1}
                  >
                    <a className="[text-decoration:none] relative tracking-[0.03em] text-[inherit] inline-block min-w-[90px]">
                      Contact
                    </a>
                  </div>
                </div>
                <Button
                  className="h-[52px] w-[188px]"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "21",
                    background: "#fd6f00",
                    borderRadius: "5px",
                    "&:hover": { background: "#fd6f00" },
                    width: 188,
                    height: 52,
                  }}
                >
                  Downlaod CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="w-[1446px] flex flex-row items-start justify-end py-0 px-[23px] box-border max-w-full text-justify text-2xl">
        <div className="flex-1 flex flex-col items-end justify-start gap-[36.8px] max-w-full mq950:gap-[18px]">
          <div
            className="self-stretch flex flex-row items-end justify-start gap-[148px] shrink-0 max-w-full mq950:gap-[37px] mq450:gap-[18px] mq1425:flex-wrap mq1425:gap-[74px]"
            data-scroll-to="groupContainer2"
          >
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[25.2px] box-border min-w-[464px] max-w-full mq950:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[27.5px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-1.5 max-w-full text-left text-5xl">
                  <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                    <div className="relative tracking-[0.03em] font-semibold inline-block min-w-[89px] mq450:text-lgi">{`Hi I am `}</div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-w-full text-13xl text-darkorange-100">
                    <div className="flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
                      <h3 className="m-0 relative text-inherit tracking-[0.03em] font-semibold font-[inherit] mq950:text-7xl mq450:text-lgi">{`Muhammad Umair `}</h3>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start max-w-full mt-[-13px] text-81xl text-white">
                      <h1 className="m-0 w-[386px] relative text-inherit tracking-[0.03em] leading-[120%] font-bold font-[inherit] inline-block max-w-full mq950:text-31xl mq950:leading-[72px] mq450:text-11xl mq450:leading-[48px]">{`UI & UX`}</h1>
                      <div className="self-stretch flex flex-row items-start justify-end mt-[-25px]">
                        <h1 className="m-0 relative text-inherit tracking-[0.03em] leading-[120%] font-bold font-[inherit] mq950:text-31xl mq950:leading-[72px] mq450:text-11xl mq450:leading-[48px]">{`Designer `}</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[7px] pr-[9px] box-border max-w-full">
                  <div className="flex-1 relative tracking-[0.03em] inline-block max-w-full mq450:text-mid">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                    massa nibh lectus netus in. Aliquet donec morbi convallis
                    pretium. Turpis tempus pharetra
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                  <Btn />
                </div>
              </div>
            </div>
            <div className="h-[617.2px] w-[538px] relative min-w-[538px] max-w-full mq950:min-w-full mq1425:flex-1">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                loading="lazy"
                alt=""
                src="/group-2@2x.png"
              />
              <div className="absolute top-[78px] left-[82px] bg-darkorange-200 w-[374px] h-[83px] z-[1]" />
            </div>
          </div>
          <div className="w-[559px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="flex flex-row items-start justify-start gap-[25px] shrink-0">
              <img
                className="h-[32.5px] w-[32.5px] relative overflow-hidden shrink-0 min-h-[33px]"
                loading="lazy"
                alt=""
                src="./facebook.png"
              />
              <img
                className="h-[32.5px] w-[32.5px] relative overflow-hidden shrink-0 min-h-[33px]"
                loading="lazy"
                alt=""
                src="/twitter.png"
              />
              <img
                className="h-[32.5px] w-[32.5px] relative overflow-hidden shrink-0 min-h-[33px]"
                loading="lazy"
                alt=""
                src="/instagram.png"
              />
              <img
                className="h-[32.5px] w-[32.5px] relative overflow-hidden shrink-0 min-h-[33px]"
                loading="lazy"
                alt=""
                src="/linkedin.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[69.5px] pl-0 pr-[3px] box-border max-w-full text-left mq950:pb-[45px] mq950:box-border">
        <div
          className="flex-1 flex flex-row items-end justify-start gap-[33px] max-w-full mq950:gap-4 mq1425:flex-wrap"
          data-scroll-to="groupContainer1"
        >
          <div className="h-[675px] w-[681px] relative min-w-[681px] max-w-full mq950:min-w-full mq1425:flex-1">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover"
              loading="lazy"
              alt=""
              src="/group-7@2x.png"
            />
            <div className="absolute top-[111px] left-[153px] bg-darkorange-200 w-[374px] h-[83px] z-[3]" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[42px] box-border min-w-[491px] min-h-[620px] max-w-full mq950:pb-[27px] mq950:box-border mq950:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
              <h1 className="m-0 relative text-inherit tracking-[0.03em] font-semibold font-[inherit] inline-block max-w-full mq950:text-33xl mq450:text-20xl">{`About Me `}</h1>
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full text-5xl">
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px] box-border max-w-full text-2xl">
                  <div className="flex-1 relative tracking-[0.03em] inline-block max-w-full mq450:text-mid">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                    massa nibh lectus netus in. Aliquet donec morbi convallis
                    pretium. Turpis tempus pharetra
                  </div>
                </div>
                <SkillsList uX="UX" />
                <SkillsList1 websiteDesign="Website Design" />
                <SkillsList1
                  websiteDesign="App Design "
                  propWidth="721px"
                  propRight="20px"
                />
                <SkillsList
                  uX="Graphic Design "
                  propDisplay="unset"
                  propMinWidth="unset"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1433px] flex flex-row items-start justify-end pt-0 px-2.5 pb-[69.5px] box-border max-w-full mq950:pb-[45px] mq950:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-6 max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[23px] box-border max-w-full">
            <div className="w-[932px] flex flex-col items-end justify-start gap-4 max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[22px] pr-5">
                <h1
                  className="m-0 relative text-inherit tracking-[0.03em] font-semibold font-[inherit] mq950:text-33xl mq450:text-20xl"
                  data-scroll-to="servicesText"
                >
                  Services
                </h1>
              </div>
              <div className="self-stretch h-[101px] relative text-2xl tracking-[0.03em] inline-block shrink-0 mq450:text-mid">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[31px] max-w-full text-left text-13xl text-black mq950:gap-[15px]">
            <div className="flex-1 rounded-sm bg-whitesmoke-100 flex flex-col items-start justify-start pt-[57px] px-[18px] pb-2.5 box-border gap-[26px] min-w-[304px] max-w-full text-center">
              <div className="w-[330px] h-[346px] relative rounded-sm bg-whitesmoke-100 hidden max-w-full" />
              <div className="w-[70px] h-[70px] flex flex-row items-start justify-start relative">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                <h3 className="m-0 relative text-inherit tracking-[0.03em] font-semibold font-[inherit] inline-block min-w-[96px] z-[1] mq950:text-7xl mq450:text-lgi">
                  UI/UX
                </h3>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0 text-left text-lgi">
                  <div className="h-[120px] flex-1 relative tracking-[0.03em] inline-block z-[1]">
                    Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam
                    diam interdum
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-sm bg-whitesmoke-100 flex flex-col items-start justify-start pt-[54px] px-[18px] pb-2.5 box-border gap-4 min-w-[304px] max-w-full">
              <div className="w-[330px] h-[346px] relative rounded-sm bg-whitesmoke-100 hidden max-w-full" />
              <img
                className="w-[72px] h-[82px] relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/layer-1.svg"
              />
              <h3 className="m-0 relative text-inherit tracking-[0.03em] font-semibold font-[inherit] z-[1] mq950:text-7xl mq450:text-lgi">{`Web Design `}</h3>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0 text-lgi">
                <div className="h-[120px] flex-1 relative tracking-[0.03em] inline-block z-[1]">
                  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam
                  diam interdum
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-sm bg-whitesmoke-100 flex flex-col items-start justify-start pt-[51px] px-[18px] pb-2.5 box-border gap-[19.5px] min-w-[304px] max-w-full">
              <div className="w-[330px] h-[346px] relative rounded-sm bg-whitesmoke-100 hidden max-w-full" />
              <div className="flex flex-row items-start justify-start py-0 px-1">
                <img
                  className="h-[82.5px] w-[47px] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-18.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                <h3 className="m-0 relative text-inherit tracking-[0.03em] font-semibold font-[inherit] z-[1] mq950:text-7xl mq450:text-lgi">
                  App Design
                </h3>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0 text-lgi">
                  <div className="h-[120px] flex-1 relative tracking-[0.03em] inline-block z-[1]">
                    Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam
                    diam interdum
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-sm bg-whitesmoke-100 flex flex-col items-start justify-start pt-[57px] px-[18px] pb-2.5 box-border gap-[26px] min-w-[304px] max-w-full">
              <div className="w-[330px] h-[346px] relative rounded-sm bg-whitesmoke-100 hidden max-w-full" />
              <div className="w-[82px] h-[70px] flex flex-row items-start justify-start relative">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                    alt=""
                    src="/vector-8.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                <h3 className="m-0 relative text-inherit tracking-[0.03em] font-semibold font-[inherit] z-[1] mq950:text-7xl mq450:text-lgi">{`Graphic Design `}</h3>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0 text-lgi">
                  <div className="h-[120px] flex-1 relative tracking-[0.03em] inline-block z-[1]">
                    Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam
                    diam interdum
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[1423px] flex flex-col items-start justify-start gap-[106px] max-w-full text-5xl text-black mq950:gap-[53px] mq450:gap-[26px]"
        data-scroll-to="frameContainer"
      >
        <div className="rounded-xl bg-whitesmoke-100 border-dimgray border-[0.4px] border-solid hidden flex-row items-start justify-start py-[9px] px-[19px]">
          <div className="relative tracking-[0.03em] inline-block min-w-[69px] mq450:text-lgi">
            UI/UX
          </div>
        </div>
        <div className="rounded-xl bg-whitesmoke-100 border-dimgray border-[0.4px] border-solid hidden flex-row items-start justify-start py-[9px] px-[19px]">
          <div className="relative tracking-[0.03em] inline-block min-w-[69px] mq450:text-lgi">
            UI/UX
          </div>
        </div>
        <div className="rounded-xl bg-whitesmoke-100 border-dimgray border-[0.4px] border-solid hidden flex-row items-start justify-start py-[9px] px-[19px]">
          <div className="relative tracking-[0.03em] inline-block min-w-[69px] mq450:text-lgi">
            UI/UX
          </div>
        </div>
        <div className="w-[1404px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-46xl text-white">
          <div className="w-[936px] flex flex-col items-start justify-start gap-[73px] max-w-full mq950:gap-[18px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[15px] pr-0 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[22px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px]">
                  <h1 className="m-0 h-[98px] relative text-inherit tracking-[0.03em] font-semibold font-[inherit] inline-block mq950:text-33xl mq450:text-20xl">
                    My Projects
                  </h1>
                </div>
                <div className="self-stretch relative text-2xl tracking-[0.03em] text-center mq450:text-mid">
                  Lorem ipsum dolor sit amet consectetur. Mollis erat duis
                  aliquam mauris est risus lectus. Phasellus consequat urna
                  tellus
                </div>
              </div>
            </div>
            <div className="w-[859px] flex flex-row flex-wrap items-start justify-center gap-[17px] max-w-full text-center text-5xl text-black">
              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[5px]">
                <div className="rounded-xl bg-whitesmoke-100 border-dimgray border-[0.4px] border-solid flex flex-row items-start justify-start py-[9px] px-[19px]">
                  <div className="relative tracking-[0.03em] inline-block min-w-[31px] mq450:text-lgi">
                    All
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-whitesmoke-100 border-dimgray border-[0.4px] border-solid flex flex-row items-start justify-start py-[9px] px-[19px] z-[3]">
                <div className="relative tracking-[0.03em] inline-block min-w-[69px] mq450:text-lgi">
                  UI/UX
                </div>
              </div>
              <Button
                className="h-14 w-[190px]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "24",
                  background: "#fd6f00",
                  border: "#545454 solid 0.4px",
                  borderRadius: "12px",
                  "&:hover": { background: "#fd6f00" },
                  width: 190,
                  height: 56,
                }}
              >
                Web Design
              </Button>
              <Button
                className="h-14 w-[184px]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "24",
                  background: "#f8f8f8",
                  border: "#545454 solid 0.4px",
                  borderRadius: "12px",
                  "&:hover": { background: "#f8f8f8" },
                  width: 184,
                  height: 56,
                }}
              >
                App Design
              </Button>
              <Button
                className="h-14 flex-1 min-w-[152px]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "24",
                  background: "#f8f8f8",
                  border: "#545454 solid 0.4px",
                  borderRadius: "12px",
                  "&:hover": { background: "#f8f8f8" },
                  height: 56,
                }}
              >
                Graphic Design
              </Button>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-11 max-w-full text-left text-lgi text-darkorange-100 mq950:gap-[22px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[37px] min-w-[334px] max-w-full mq450:gap-[18px]">
            <div className="self-stretch rounded-xl bg-antiquewhite flex flex-row items-start justify-start py-0 pl-[39px] pr-[27px] box-border max-w-full">
              <div className="self-stretch w-[445px] relative rounded-xl bg-antiquewhite hidden max-w-full" />
              <div className="h-[489px] flex-1 relative max-w-full">
                <img
                  className="absolute h-full top-[0px] bottom-[0px] left-[105px] max-h-full w-[274px] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/web-designs@2x.png"
                />
                <img
                  className="absolute top-[84px] left-[0px] w-[274px] h-[405px] object-cover z-[2]"
                  alt=""
                  src="/web-designs-1@2x.png"
                />
              </div>
              <div className="h-[533px] w-[445px] relative rounded-xl [background:linear-gradient(179.83deg,_rgba(255,_235,_219,_0),_#ffebdb,_#545454)] hidden max-w-full" />
            </div>
            <div className="flex flex-col items-start justify-start gap-2.5 max-w-full">
              <div className="relative tracking-[0.03em] inline-block min-w-[119px]">{`Web Design `}</div>
              <b className="relative text-5xl tracking-[0.03em] text-white mq450:text-lgi">{`AirCalling Landing Page Design `}</b>
            </div>
          </div>
          <FrameComponent
            webDesigns="/web-designs-2@2x.png"
            webDesigns1="/web-designs-3@2x.png"
            businessLandingPageDesign="Business Landing Page Design "
          />
          <FrameComponent
            webDesigns="/web-designs-4@2x.png"
            webDesigns1="/web-designs-5@2x.png"
            businessLandingPageDesign="Ecom Web Page Design "
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
