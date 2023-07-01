"use client";
import Card from "./Card";
import img from "/public/img.jpg";
import MeetupList from "./MeetupList";
import { useEffect, useState } from "react";

export const DUMMY_MEETUP = [
  {
    id: 1,
    image: img,
    title: "The First Meetup",
    address: "Denpasar, Bali",
    description: "This is the first meetup hold at Denpasar, Bali",
  },
  {
    id: 2,
    image: img,
    title: "The Second Meetup",
    address: "Karangasem, Bali",
    description: "This is the second meetup hold at Karangasem, Bali",
  },
];

const All = () => {
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    const fetchingMeetups = async () => {
      const response = await fetch(
        "https://react-meetups-455dd-default-rtdb.firebaseio.com/meetups.json"
      );
      const data = await response.json();
      const meetupsData = [];

      for (const key in data) {
        meetupsData.push({
          id: key,
          title: data[key].title,
          image: data[key].image,
          address: data[key].address,
          description: data[key].description,
        });
      }
      setMeetup(meetupsData);
    };

    fetchingMeetups();
  }, []);

  return (
    <Card>
      <div className="flex flex-wrap justify-center items-center gap-3">
        {meetup.map((item) => (
          <div key={item.id}>
            <MeetupList
              id={item.id}
              img={item.image}
              title={item.title}
              address={item.address}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default All;
