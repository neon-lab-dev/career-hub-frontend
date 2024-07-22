import OurValuableHiringPartners from "@/components/OurValuableHiringPartners";
import TrendingCourseToday from "@/components/TrendingCourseToday";
import WhatWeDo from "@/components/WhatWeDo";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="max-width-full h-[175px] md:h-[283px] lg:h-[310px] bg-[#F5F6FA] flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-[17px] mt-[20px] h-[40px] w-[154px] md:h-[71px] md:w-[260px] lg:h-[81px] lg:w-[293px]">
          <div className="bg-primary-500 gap-[10px] flex justify-center items-center">
            <p className="text-white font-bold text-center text-[32px] md:text-[56px] lg:text-[64px] font-plus-jakarta-sans">
              About
            </p>
          </div>
          <div>
            <p className="text-black font-bold text-center text-[32px] md:text-[56px] lg:text-[64px] font-plus-jakarta-sans">
              us
            </p>
          </div>
        </div>
      </div>
      <div className="wrapper mt-10">
        <p className="text-[#303D5C] text-[400] text-[18px] md:text-[22px] lg:text-[24px] leading-[27px] md:leading-[33px] lg:leading-[36px]">
          Lorem ipsum dolor sit amet consectetur. Morbi semper dui faucibus
          molestie habitasse suscipit neque. Bibendum elit viverra posuere
          pretium tellus velit id feugiat. Praesent id scelerisque nulla dolor
          blandit praesent a. In aliquam sapien egestas quis egestas at
          ultricies non vitae. Elementum pharetra sed ut eget eleifend ante
          volutpat malesuada. Egestas aliquet risus tincidunt tempor vitae sem.
          Dictum ut augue phasellus feugiat morbi diam ut. Urna venenatis
          ultrices aliquam facilisis arcu.
        </p>
        <br />
        <p className="text-[#303D5C] text-[400] text-[18px] md:text-[22px] lg:text-[24px] leading-[27px] md:leading-[33px] lg:leading-[36px]">
          Praesent nisl risus condimentum nunc. Fermentum volutpat facilisi sed
          diam euismod magna scelerisque egestas pharetra. Ultrices egestas
          dignissim sed id duis aliquet viverra urna ut. Euismod id nunc at
          magna arcu tristique facilisi. Tellus maecenas maecenas posuere varius
          porta. Pharetra odio mauris libero duis quam sagittis. Consequat sed
          vestibulum neque elementum. Aenean quis aenean sit ornare.
        </p>
        <br />
        <p className="text-[#303D5C] text-[400] text-[18px] md:text-[22px] lg:text-[24px] leading-[27px] md:leading-[33px] lg:leading-[36px]">
          Diam lacinia tempus ut adipiscing vitae scelerisque auctor porta quam.
          Odio pharetra tellus sollicitudin fermentum nullam. Facilisi
          adipiscing porta lacinia sit suscipit lectus. Ut non netus elementum
          sagittis id. In sapien non sapien adipiscing. Nulla amet id
          suspendisse nec pellentesque sed in. Sed venenatis pulvinar vivamus
          malesuada. Mi accumsan cursus ornare lacinia pellentesque est. Cras et
          mi augue turpis lorem venenatis. Dictum venenatis in morbi aliquam.
          Commodo id leo mauris commodo nibh vivamus sed cursus metus. Purus id
          velit sed lorem dignissim congue auctor gravida mauris. Vitae nibh
          aliquam vitae augue vitae. Sed dolor metus nullam posuere. Sagittis
          non euismod non mattis mi vitae posuere arcu a.
        </p>
        <br />
        <p className="text-[#303D5C] text-[400] text-[18px] md:text-[22px] lg:text-[24px] leading-[27px] md:leading-[33px] lg:leading-[36px]">
          Sem pharetra adipiscing scelerisque commodo in. Risus hendrerit urna
          aliquam egestas arcu vel. Elementum nibh rhoncus dictum pharetra duis
          a cras. Magnis dignissim nunc velit egestas a morbi vitae lorem
          pretium. Blandit nisi sapien sagittis sagittis varius vivamus massa.
        </p>
        <br />
        <p className="text-[#303D5C] text-[400] text-[18px] md:text-[22px] lg:text-[24px] leading-[27px] md:leading-[33px] lg:leading-[36px]">
          Tortor fringilla fermentum nunc consectetur ultrices elit ultricies
          tortor. Convallis eget ultrices suspendisse habitant arcu adipiscing.
          Lectus nascetur faucibus nec malesuada pulvinar nam pellentesque a.
          Diam faucibus cursus neque at eget et cras aliquam ultrices. Blandit
          porttitor id adipiscing tortor morbi quis. Aliquet lorem molestie et
          velit quisque quis purus quam. In nisl sit hendrerit et quis tincidunt
          lorem. Ut gravida et dui mattis et est tincidunt amet. Neque facilisis
          hendrerit tincidunt leo quam in eget vel sit.
        </p>
        <br />
        <p className="text-[#303D5C] text-[400] text-[18px] md:text-[22px] lg:text-[24px] leading-[27px] md:leading-[33px] lg:leading-[36px]">
          Faucibus tincidunt aliquam feugiat quisque. Risus bibendum leo amet
          amet mattis dictumst. Sit pulvinar auctor tellus congue.
        </p>
        <br />
        <p className="text-[#303D5C] text-[400] text-[18px] md:text-[22px] lg:text-[24px] leading-[27px] md:leading-[33px] lg:leading-[36px]">
          Ante diam tellus sit amet massa eget. Orci urna habitasse in egestas
          sed. Odio orci habitant lectus sem lorem neque. Viverra eget lacus
          integer tristique eros amet. Sit ipsum dictum urna sed tincidunt nibh
          tempor placerat a. Tellus arcu adipiscing duis senectus lorem ut
          euismod netus ultricies. Varius aliquam iaculis amet leo in felis.
        </p>
        <br />
      </div>
        <TrendingCourseToday/>
        <OurValuableHiringPartners/>
        
      <WhatWeDo/>
    </div>
  );
};

export default page;
