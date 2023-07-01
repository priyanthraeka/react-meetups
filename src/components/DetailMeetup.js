import React, { useEffect, useState } from "react";
import Card from "./Card";
import Image from "next/image";
import { DUMMY_MEETUP } from "./All";

const DetailMeetup = (props) => {
  const { id } = props;

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

      const filteredData = meetupsData.filter((item) => item.id === id);
      setMeetup(filteredData);
    };

    fetchingMeetups();
  }, [id]);

  return (
    <Card>
      {meetup.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center items-center border border-black p-2 rounded-md max-w-[400px] m-auto"
        >
          <Image src={item.image} alt={item.title} width={400} height={320} />
          <h2 className="text-2xl mt-2">{item.title}</h2>
          <address className="text-lg">{item.address}</address>
          <p className="text-lg text-center">{item.description}</p>
        </div>
      ))}
    </Card>
  );
};

export default DetailMeetup;
