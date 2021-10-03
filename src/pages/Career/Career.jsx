import React from "react";
import { CareerComponent } from "../../components/CareerComponent/CareerComponent";
import { CareerDiv } from "./Career.styles";

export const Career = () => {
  const dummyData = [
    {
      id: 1,
      type: "Internship",
      title: "Graphic Designer",
      workingHour: "fulltime",
      postDate: "3 days ago",
    },
    {
      id: 2,
      type: "Permanent",
      title: "Web Developer",
      workingHour: "fulltime",
      postDate: "4 days ago",
    },
    {
      id: 3,
      type: "volunteer",
      title: "Context Writer",
      workingHour: "fulltime",
      postDate: "3 days ago",
    },
    {
      id: 4,
      type: "Internship",
      title: "Graphic Designer",
      workingHour: "fulltime",
      postDate: "3 days ago",
    },
    {
      id: 5,
      type: "Internship",
      title: "Graphic Designer",
      workingHour: "fulltime",
      postDate: "3 days ago",
    },
  ];
  return (
    <CareerDiv>
      {dummyData.map((data) => (
        <CareerComponent key={data.id} data={data} />
      ))}
    </CareerDiv>
  );
};
