import OurValuableHiringPartners from "@/components/OurValuableHiringPartners";
import TrendingCourseToday from "@/components/TrendingCourseToday";
import WhatWeDo from "@/components/WhatWeDo";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="max-width-full h-[175px] md:h-[283px] lg:h-[310px] bg-[#F5F6FA] flex flex-col justify-center items-center">
        <div className="highlight h-[40px] w-[270px] md:h-[71px] md:w-[581px] lg:h-[81px] lg:w-[661px]">
          <p className="text-white font-bold text-center text-[23px] md:text-[50px] lg:text-[60px] font-plus-jakarta-sans">
            Terms and Conditions
          </p>
        </div>
      </div>

      <div className="wrapper mt-10">
        <p className="text-[#303D5C] text-[400] text-[18px] md:text-[22px] lg:text-[24px] leading-[27px] md:leading-[33px] lg:leading-[36px]">
          Welcome to the website/web portal &quot;Careehub.com&quot; which is
          owned by &quot;MONCHI ENTERPRISE&quot;, to visit or use this website
          there are some terms and conditions accepted and agreed upon by every
          individual. It is also assumed that by opening and using careehub.com,
          you accept all the &quot;Terms of Use&quot; in full and have gone
          through with consent irrevocably to the same. If you disagree with the
          &quot;Terms of Use&quot; conditions, you must not use this
          website/portal i.e. careehub.com.
        </p>
        <br />
        <p className="text-[#303D5C] text-[400] text-[18px] md:text-[22px] lg:text-[24px] leading-[27px] md:leading-[33px] lg:leading-[36px]">
          Please read carefully before entering personal or other data into the
          portal (www.careehub.com).
        </p>
        <br />
        <p className="text-[#303D5C] text-[400] text-[18px] md:text-[22px] lg:text-[24px] leading-[27px] md:leading-[33px] lg:leading-[36px]">
          In this agreement/contract &quot;you&quot; or &quot;you&#39;re&quot;
          will be referred to any person, group, or entity subscribing to and/or
          using the resources or content according to the Terms and Conditions
          of the Agreement (each one a User and collectively &quot;Users&quot;.
          Unless otherwise stated MONCHI ENTERPRISE or CAREEHUB, &quot;we&quot;,
          or &quot;Our&quot; will each refer to MONCHI ENTERPRISE (partnership),
          an Indian company.
        </p>
        <br />
        <p className="text-[#303D5C] text-[400] text-[18px] md:text-[22px] lg:text-[24px] leading-[27px] md:leading-[33px] lg:leading-[36px]">
          All Users should create an account by completing the registration
          process to subscribe to provided / available resources/content by
          providing us with current, complete, and accurate information. You are
          entirely responsible for maintaining the confidentiality of your ID,
          password, and account. This also instructed you to immediately notify
          us of any unauthorized use of your account or any other breach of
          security. We are not liable for any loss that you may incur as a
          result of someone else using your password or account, either with or
          without your knowledge. Furthermore, you could be held
          liable/responsible for losses incurred by www.careehub.com or another
          party due to someone else using your account or password.
        </p>
        <br />
        <p className="text-[#303D5C] text-[400] text-[18px] md:text-[22px] lg:text-[24px] leading-[27px] md:leading-[33px] lg:leading-[36px]">
          By creating an account, the user agrees to the terms required to
          protect the confidentiality of the username and password for the
          account and shall be solely liable for any activity conducted using
          the user account. The user also agrees to accept all risks and
          responsibilities for activity done under the username. The user also
          agrees to receive SMS and Emails containing information related to the
          education or career guidance and of the courses and other programs.
        </p>
        <br />
      </div>
      <TrendingCourseToday />
      <OurValuableHiringPartners />
      <WhatWeDo />
    </div>
  );
};

export default page;
