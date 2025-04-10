import React from 'react';
import EventCard from './EventCard';
import NoDataFound from '@/components/NoDataFound';

const Events = () => {
    const events = [1,2,3,4,5,5]
    return (
        <div className="py-section flex flex-col items-center justify-center gap-14">
      <h3 className="section-heading wrapper max-width m-auto text-center xl:text-left capitalize">
        <span className="highlight">
        Events
          <br className="xl:hidden" />
        </span>{" "}
        Happening for you!
      </h3>
      {
        events?.length < 1 ?
        <NoDataFound message="No Events Available" />
        :
        <div className="w-full overflow-hidden wrapper-left">
        <div className="carousel carousel-center w-full p-4 space-x-6 bg-neutral rounded-box">
          {events?.map((event, index:number) => (
            <div key={index} className="carousel-item">
              <EventCard
                wrapperClassName=""
                // {...event}
              />
            </div>
          ))}
        </div>
      </div>
      }
    </div>
    );
};

export default Events;