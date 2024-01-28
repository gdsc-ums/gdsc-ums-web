import React from "react";

import Image from "next/image";

import LogoUms from "@/public/Logo_UMS.png";

const AboutSection = () => {
  return (
    <>
      <div id="about" className="relative">
        <div
          id="circle3"
          className="hidden sm:block absolute w-[139px] h-[139px] bg-green-500/60 ml-28 -mt-16 rounded-full animate-[scale-up_2.5s_ease-in-out_infinite] -z-20"
        ></div>

        <div className="flex flex-col items-center">
          <Image src={LogoUms} alt="UMS Logo" priority className="my-5" />

          <div className="max-w-[1086px] mb-44">
            <h3 className="text-[32px] sm:text-[40px] leading-normal font-normal text-center px-5 sm:px-40 mb-10 sm:mb-[65px]">
              The GDSC UMS Chapter is part of a global community of over
              <span className="inline-block border-2 border-green-500 px-1 rounded-full">
                1500 universities.
              </span>
            </h3>
            <div className="grid grid-row-2 sm:grid-cols-2 gap-7">
              <div className="py-3 px-5">
                <h6 className="text-[20px] leading-6 font-bold mb-3 sm:mb-5">
                  Google Developer Student Clubs (GDSC)
                </h6>
                <p className="text-[15px] leading-6 font-normal">
                  is a student-led community backed by Google Developers aimed
                  at empowering undergraduate students from all disciplines to
                  grow their knowledge in technology, build solutions for their
                  local communities, and connect with other members from the
                  Google community.
                </p>
              </div>
              <div className="py-3 px-5">
                <h6 className="text-[20px] leading-6 font-bold mb-3 sm:mb-5">
                  GDSC (Google Developer Student Clubs) UMS
                </h6>
                <p className="text-[15px] leading-6 font-normal">
                  GDSC at the University of Muhammadiyah Surakarta is a vibrant
                  and innovative student community dedicated to fostering
                  technological learning, collaboration, and innovation. This
                  student-led organization operates under the umbrella of Google
                  Developers and is committed to empowering students with the
                  knowledge and skills required to thrive in the rapidly
                  evolving field of technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
