import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CardMemberLoader from "@/components/common/CardMemberLoader";
import MarqueeBlueGreen from "@/components/common/MarqueeBlueGreen";
import CardMember from "@/components/common/CardMember";
import OrganizerLabel from "@/features/Home/components/OrganizerLabel";
import type { OrganizerSectionProps } from "@/features/Home/types";

const OrganizerSection: React.FC<OrganizerSectionProps> = (props) => {
  const {
    HODMembers,
    UIUXMembers,
    AIMembers,
    WebMembers,
    MobileMembers,
    CyberMembers,
    StrategicMembers,
    isLoading,
  } = props;

  return (
    <>
      <section className="container lg:mb-20 mb-10">
        <h1 className="text-[40px] text-center lg:pb-20 pb-9">Organizer</h1>

        <div className="flex flex-col items-center justify-center gap-6">
          {isLoading ? (
            <CardMemberLoader lenght={3} />
          ) : (
            <>
              <div className="flex flex-wrap justify-center lg:gap-8 gap-4">
                {HODMembers.slice(0, 3).map((item, index) => (
                  <CardMember key={index} {...item} />
                ))}
              </div>
              <div className="flex flex-wrap justify-center lg:gap-8 gap-4">
                {HODMembers.slice(3, 10).map((item, index) => (
                  <CardMember key={index} {...item} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <MarqueeBlueGreen />
      <section className="container lg:mt-20 mt-10 space-y-6">
        <div className="lg:grid lg:grid-cols-2 flex flex-col lg:gap-16 gap-9 items-center">
          <OrganizerLabel
            title="UI/UX Design Department"
            subtitle="UI/UX Design department helps Establish short-term and long-term performance goals for the department in order to learn and implement UI/UX Design concepts."
          />
          {isLoading ? (
            <CardMemberLoader lenght={2} />
          ) : (
            <>
              <div className="lg:grid grid-cols-2 gap-y-5 lg:blok hidden">
                {UIUXMembers.map((item, index) => {
                  const lastIndex = index === UIUXMembers.length - 1;
                  return (
                    <div
                      key={index}
                      className={`${
                        lastIndex && "col-span-2"
                      } justify-self-center`}
                    >
                      <CardMember {...item} />
                    </div>
                  );
                })}
              </div>
              <Carousel
                opts={{
                  align: "start",
                }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
                className="w-full lg:hidden"
              >
                <CarouselContent>
                  {UIUXMembers.map((item, index) => (
                    <CarouselItem key={index} className="flex md:basis-1/3">
                      <CardMember {...item} isMobile />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </>
          )}
        </div>

        <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse lg:gap-16 gap-9 items-center">
          {isLoading ? (
            <CardMemberLoader lenght={2} />
          ) : (
            <>
              <div className="lg:grid grid-cols-2 gap-y-5 lg:blok hidden">
                {AIMembers.map((item, index) => {
                  const lastIndex = index === AIMembers.length - 1;
                  return (
                    <div
                      key={index}
                      className={`${
                        lastIndex && "col-span-2"
                      } justify-self-center`}
                    >
                      <CardMember {...item} />
                    </div>
                  );
                })}
              </div>
              <Carousel
                opts={{
                  align: "start",
                }}
                plugins={[
                  Autoplay({
                    delay: 3200,
                  }),
                ]}
                className="w-full lg:hidden"
              >
                <CarouselContent>
                  {AIMembers.map((item, index) => (
                    <CarouselItem key={index} className="flex md:basis-1/3">
                      <CardMember {...item} isMobile />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </>
          )}
          <OrganizerLabel
            title="AI Development Department"
            subtitle="AI Development Department helps Establish short-term and long-term performance goals for the department in order to learn and implement AI/ Machine Learning Concept."
          />
        </div>

        <div className="lg:grid lg:grid-cols-2 flex flex-col lg:gap-16 gap-9 items-center">
          <OrganizerLabel
            title="Web Development Department"
            subtitle="Web Development Department helps Establish short-term and long-term performance goals for the department in order to learn and implement Webite Development concepts."
          />
          {isLoading ? (
            <CardMemberLoader lenght={2} />
          ) : (
            <>
              <div className="lg:grid grid-cols-2 gap-y-5 lg:blok hidden">
                {WebMembers.map((item, index) => (
                  <div key={index}>
                    <CardMember {...item} />
                  </div>
                ))}
              </div>
              <Carousel
                opts={{
                  align: "start",
                }}
                plugins={[
                  Autoplay({
                    delay: 3400,
                  }),
                ]}
                className="w-full lg:hidden"
              >
                <CarouselContent>
                  {WebMembers.map((item, index) => (
                    <CarouselItem key={index} className="flex md:basis-1/2">
                      <CardMember {...item} isMobile />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </>
          )}
        </div>

        <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse lg:gap-16 gap-9 items-center">
          {isLoading ? (
            <CardMemberLoader lenght={2} />
          ) : (
            <>
              <div className="lg:grid grid-cols-2 gap-y-5 lg:blok hidden">
                {MobileMembers.map((item, index) => (
                  <div key={index}>
                    <CardMember {...item} />
                  </div>
                ))}
              </div>
              <Carousel
                opts={{
                  align: "start",
                }}
                plugins={[
                  Autoplay({
                    delay: 3600,
                  }),
                ]}
                className="w-full lg:hidden"
              >
                <CarouselContent>
                  {MobileMembers.map((item, index) => (
                    <CarouselItem key={index} className="flex md:basis-1/2">
                      <CardMember {...item} isMobile />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </>
          )}
          <OrganizerLabel
            title="Mobile Development Department"
            subtitle="Mobile Development Department helps Establish short-term and long-term performance goals for the department in order to learn and implement Mobile Development Concept."
          />
        </div>

        <div className="lg:grid lg:grid-cols-2 flex flex-col lg:gap-16 gap-9 items-center">
          <OrganizerLabel
            title="Cyber Security Department"
            subtitle="Cyber Security Department helps Establish short-term and long-term performance goals for the department in order to learn and implement Cyber Security concepts."
          />
          {isLoading ? (
            <CardMemberLoader lenght={2} />
          ) : (
            <>
              <div className="lg:grid grid-cols-2 gap-y-5 lg:blok hidden">
                {CyberMembers.map((item, index) => (
                  <div key={index}>
                    <CardMember {...item} />
                  </div>
                ))}
              </div>
              <Carousel
                opts={{
                  align: "start",
                }}
                plugins={[
                  Autoplay({
                    delay: 3800,
                  }),
                ]}
                className="w-full lg:hidden"
              >
                <CarouselContent>
                  {CyberMembers.map((item, index) => (
                    <CarouselItem key={index} className="flex md:basis-1/2">
                      <CardMember {...item} isMobile />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </>
          )}
        </div>

        <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse lg:gap-16 gap-9 items-center">
          {isLoading ? (
            <CardMemberLoader lenght={2} />
          ) : (
            <>
              <div className="lg:grid grid-cols-2 gap-y-5 lg:blok hidden">
                {StrategicMembers.map((item, index) => {
                  return (
                    <div key={index}>
                      <CardMember {...item} />
                    </div>
                  );
                })}
              </div>
              <Carousel
                opts={{
                  align: "start",
                }}
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
                className="w-full lg:hidden"
              >
                <CarouselContent>
                  {StrategicMembers.map((item, index) => (
                    <CarouselItem key={index} className="flex md:basis-1/2">
                      <CardMember {...item} isMobile />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </>
          )}
          <OrganizerLabel
            title="Strategic Planning & Communications"
            subtitle="Strategic Planning & Communications conducts strategic planning and effective communication to achieve the goals of GDSC UMS."
          />
        </div>
      </section>
    </>
  );
};

export default OrganizerSection;
