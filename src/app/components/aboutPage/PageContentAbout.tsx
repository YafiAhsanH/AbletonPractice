import React from "react";
import TextSection from "./TextSection";
import TextSectionTitle from "./TextSectionTitle";
import TextSectionDesc from "./TextSectionDesc";
import TextLink from "./TextLink";
import Image from "next/image";

const PageContentAbout = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full px-[8%]">
        <div
          className="flex justify-center items-center bg-cover h-[75vh] bg-center text-my-orange font-semibold text-9xl "
          style={{ backgroundImage: `url(/studio.jpg)` }}
        >
          Ableton
        </div>
      </div>
      <TextSection>
        <TextSectionTitle>
          We make <TextLink>Live</TextLink>, <TextLink>Push</TextLink> and{" "}
          <TextLink>Link</TextLink> — unique software and hardware for music
          creation and performance. With these products, our community of users
          creates amazing things.
        </TextSectionTitle>
        <TextSectionDesc>
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </TextSectionDesc>
      </TextSection>
      <div className="w-full flex relative h-[115vh]">
        <div className="absolute w-full h-full z-10 flex">
          <div className="w-[42.5%]"></div>
          <div className="bg-my-yellow w-[57.5%]"></div>
        </div>
        <div className="z-20 grid grid-rows-5 grid-cols-8 w-full m-28">
          <div
            className="row-start-1 row-end-6 col-span-4 bg-cover flex justify-center items-center"
            style={{ backgroundImage: `url(/image1.jpg)` }}
          ></div>
          <div
            className="row-start-2 row-span-3 col-start-6 col-span-3 bg-cover flex justify-center items-center"
            style={{ backgroundImage: `url(/image2.jpg)` }}
          ></div>
        </div>
      </div>
      <TextSection>
        <TextSectionTitle>
          {`Making music isn't easy. It takes time, effort, and learning. But when
          you're in the flow, it's incredibly rewarding.`}
        </TextSectionTitle>
        <TextSectionDesc>
          We feel the same way about making Ableton products. The driving force
          behind Ableton is our passion for what we make, and the people we make
          it for.
        </TextSectionDesc>
      </TextSection>
      <div className="w-full flex flex-col px-[25%]">
        <div
          className="flex justify-center items-center bg-cover h-[60vh] bg-center text-my-orange font-semibold text-9xl"
          style={{ backgroundImage: `url(/interview.jpg)` }}
        ></div>
        <p className="text-xs font-semibold p-2">
          Why Ableton - Juanpe Bolivar
        </p>
      </div>
      <TextSection>
        <TextSectionTitle>
          We are more than 350 people from 30 different countries divided
          between our headquarters in Berlin and our offices in Los Angeles and
          Tokyo.
        </TextSectionTitle>
        <TextSectionDesc>
          Most of us are active musicians, producers, and DJs, and many of us
          use Live and Push every day. We come from a wide range of cultural and
          professional backgrounds. Some of us have PhDs, some are self-taught,
          and most of us are somewhere in between. What connects us is the
          shared belief that each of us has the skills and knowledge to
          contribute to something big: helping to shape the future of music
          culture.
        </TextSectionDesc>
      </TextSection>
      <div className="w-full flex relative h-[160vh]">
        <div className="absolute w-full h-full z-10 flex">
          <div className="bg-my-green w-[59%]"></div>
          <div className="w-[41%]"></div>
        </div>
        <div className="z-20 grid grid-rows-12 grid-cols-10 w-full m-28">
          <div
            className="row-start-1 row-span-5 col-span-4 bg-cover flex justify-center items-center"
            style={{ backgroundImage: `url(/image4.jpg)` }}
          ></div>
          <div
            className="row-start-[8] row-span-5 col-start-1 col-span-4 bg-cover bg-bottom flex justify-center items-center"
            style={{ backgroundImage: `url(/image5.jpg)` }}
          ></div>
          <div
            className="row-start-3 row-[span_8_/_span_8] col-start-6 col-span-full bg-cover flex justify-center items-center"
            style={{ backgroundImage: `url(/image6.jpg)` }}
          ></div>
        </div>
      </div>
      <TextSection>
        <TextSectionTitle>
          We believe it takes focus to create truly outstanding instruments. We
          only work on a few products and we strive to make them great.
        </TextSectionTitle>
        <TextSectionDesc>
          {`Rather than having a one-size-fits-all process, we try to give our
          people what they need to work their magic and grow. We've learned that
          achieving the best results comes from building teams that are richly
          diverse, and thus able to explore problems from a wider set of
          perspectives. We don't always agree with each other, but opinion and
          debate are valued and openly encouraged.`}
        </TextSectionDesc>
      </TextSection>
      <div className="w-full px-[8%]">
        <div
          className="bg-cover h-screen bg-center"
          style={{ backgroundImage: `url(/stocks.jpg)` }}
        ></div>
      </div>
      <TextSection>
        <TextSectionTitle>
          {`We're passionate about what we do, but we're equally passionate about improving who we are.`}
        </TextSectionTitle>
        <TextSectionDesc>
          We work hard to foster an environment where people can grow both
          personally and professionally, and we strive to create a wealth of
          opportunities to learn from and with each other.
        </TextSectionDesc>
        <div className="py-3"></div>
        <TextSectionDesc>
          Alongside an internal training program, employees are actively
          supported in acquiring new knowledge and skills, and coached on
          applying these in their daily work. In addition, staff-organized
          development and music salons are a chance to discuss new technologies,
          production techniques and best practices.
        </TextSectionDesc>
      </TextSection>
      <div className="w-full flex relative h-[130vh]">
        <div className="absolute w-full h-full z-10 flex">
          <div className="bg-my-purple w-[67.5%] ml-[17%]"></div>
        </div>
        <div className="z-20 grid grid-rows-5 grid-cols-12 w-full my-28">
          <div
            className="row-start-2 row-span-3 col-start-2 col-span-4 bg-cover flex justify-center items-center"
            style={{ backgroundImage: `url(/image7.jpg)` }}
          ></div>
          <div
            className="row-start-1 row-span-full col-start-8 col-span-full bg-cover flex justify-center items-center"
            style={{ backgroundImage: `url(/image8.jpg)` }}
          ></div>
        </div>
      </div>
      <TextSection>
        <TextSectionTitle>
          {`We want our employees to love it here. Since we're looking for exceptional talent from around the world, we will do everything 
          we can to make your transition as easy as possible.`}
        </TextSectionTitle>
        <TextSectionDesc>
          {`If you're joining us in Berlin, we'll help with relocation and paperwork. We'll even provide you with free German or English lessons. 
          Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. 
          Office hours are flexible, but it's not all work; we have several company and team outings throughout the year as well as a variety of fun, 
          informal small-group activities.`}
        </TextSectionDesc>
      </TextSection>
      <div className="w-full flex justify-between px-[8%] pb-32">
        <div
          className="flex-[50%] bg-cover"
          style={{ backgroundImage: `url(/office.jpg)` }}
        ></div>
        <div className="flex flex-col flex-[50%] justify-center bg-my-blue py-44 px-[10%] text-2xl font-semibold leading-10">
          <p>{`We're really proud of the work we've done so far. But there's so much more to come. If you'd like to be a part of it, please join us.`}</p>
          <p className="text-blue-700 hover:cursor-pointer py-8">{`See latest jobs >`}</p>
        </div>
      </div>
    </div>
  );
};

export default PageContentAbout;
