import React, { Component, useState } from "react";
import classes from "./Video.module.css";
import Titlebar from "../../components/titlebar/Titlebar";
import { BsYoutube } from "react-icons/bs";
import Videocard from "../../components/videocard/Videocard";
import image12 from "../../assets/images/image 12.png";
import iamge13 from "../../assets/images/image 13.png";
import image14 from "../../assets/images/image 14.svg";
import download1 from "../../assets/images/download1.png";
import roottreatment from "../../assets/images/Root-Canal-Treatment1.png";
const Video = () => {
  const [videoCard, setVideoCard] = useState([
    {
      id: "1",
      cardImage: image12,
      heading: "System assembly part one all in",
      para: "A short explanaition of what does it means this block and what the user can get of it",
    },
    {
      id: "2",
      cardImage: iamge13,
      heading: "Step-by-step instructions for use",
      para: "A short explanaition of what does it means this block and what the user can get of it",
    },
    {
      id: "3",
      cardImage: image14,
      heading: "Clinical protocol initial treatment",
      para: "A short explanaition of what does it means this block and what the user can get of it",
    },
    {
      id: "4",
      cardImage: download1,
      heading: "Play Nicole protocol treatment",
      para: "A short explanaition of what does it means this block and what the user can get of it",
    },
    {
      id: "5",
      cardImage: roottreatment,
      heading: "System maintenance an overall view",
      para: "A short explanaition of what does it means this block and what the user can get of it",
    },
    {
      id: "6",
      cardImage: roottreatment,
      heading: "SAF Infiniton system scientific Webbinar",
      para: "A short explanaition of what does it means this block and what the user can get of it",
    },
  ]);

  return (
    <>
      <div className={`container ${classes.video_main_page}`}>
        <div className="row align-items-center">
          <div className="col-lg-12 ">
            <Titlebar
              icon={<BsYoutube />}
              title="Video instruction"
              link={"/pdf"}
            />
          </div>
        </div>
        <div className="row">
          {videoCard.map((e, idx) => (
            <Videocard
              cardImage={e.cardImage}
              heading={e.heading}
              para={e.para}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Video;
