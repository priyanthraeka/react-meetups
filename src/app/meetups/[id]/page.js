"use client";
import DetailMeetup from "@/components/DetailMeetup";
import React from "react";

const Detail = ({ params }) => {
  return <DetailMeetup id={params.id} />;
};

export default Detail;
