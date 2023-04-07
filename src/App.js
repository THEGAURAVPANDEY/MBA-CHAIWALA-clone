import { useEffect } from "react";
import IntroVideo from "./Components/IntroVideo";
import Section from "./Components/Section";
import freshTopicImg from "./Assets/academy.png";
import data from "./Data/data.json";
import freshTopic2Img from "./Assets/story.png";
import tedtalksImg from "./Assets/in-the-news.gif";
import franchiseImg from "./Assets/franchise.gif";
import mapImg from "./Assets/locations.png";
import coursesImg from "./Assets/image2.png";
import albumsImg from "./Assets/mba-cares.gif";
import baratImg from "./Assets/image1.png";
import chaiwalaImg from "./Assets/image3.png";
import Footer from "./Components/Footer";
import Misc from "./Components/Misc";

import "./styles/App.scss";
import "./styles/intro.scss";
import "./styles/section.scss";
import "./styles/Footer.scss";
import "./styles/misc.scss";
import "./styles/mediaQuery.scss";

// $yellow: #fff100;
// $pink: #ed1e79;
// $red: #d20120;
// $white: #fff;
// $brown: #6d3d0f;
const yellow = "#fff100",
  pink = "#ed1e79",
  red = "#d20120",
  white = "#fff",
  brown = "#6d3d0f";

function App() {
  const {
    freshTopic,
    freshTopic2,
    tedTalks,
    franchise,
    map,
    courses,
    barat,
    chaiwala,
    album,
  } = data;

  const dotCursor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY - 14}px`;
    cursor.style.left = `${e.pageX - 14}px`;

    const element = e.target;

    if (element.getAttribute("data-cusrsorpointer")) {
      cursor.classList.add("cursorHover");
    } else if (element.getAttribute("data-cusrsorpointerMini")) {
      cursor.classList.add("cursorHoverMini");
    } else {
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", dotCursor);
    return () => {
      window.removeEventListener("mousemove", dotCursor);
    };
  }, []);

  return (
    <>
      <IntroVideo />

      {/* FreshTopic */}
      <Section
        h3={freshTopic.heading}
        text={freshTopic.text}
        btnTxt={freshTopic.btn}
        imgSrc={freshTopicImg}
        backgroundColor={pink}
        HeadingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />
      {/* freshTopic -2 */}
      <Section
        h3={freshTopic2.heading}
        text={freshTopic2.text}
        btnTxt={freshTopic2.btn}
        imgSrc={freshTopic2Img}
        backgroundColor={pink}
        HeadingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />
      {/* Ted talks */}
      <Section
        h3={tedTalks.heading}
        text={tedTalks.text}
        btnTxt={tedTalks.btn}
        imgSrc={tedtalksImg}
        backgroundColor={yellow}
        HeadingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />
      {/* Franchise*/}
      <Section
        h3={franchise.heading}
        text={franchise.text}
        btnTxt={franchise.btn}
        imgSrc={franchiseImg}
        backgroundColor={white}
        HeadingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />
      {/* Map*/}
      <Section
        h3={map.heading}
        text={map.text}
        imgSrc={mapImg}
        backgroundColor={pink}
        HeadingColor={yellow}
        textColor={yellow}
        btnBgColor={brown}
        btnColor={yellow}
        hasBtn={false}
      />
      {/* Courses*/}
      <Section
        h3={courses.heading}
        text={courses.text}
        btnTxt={courses.btn}
        imgSrc={coursesImg}
        imgSize={"30%"}
        backgroundColor={yellow}
        HeadingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />
      {/* Albums*/}
      <Section
        h3={album.heading}
        text={album.text}
        btnTxt={album.btn}
        imgSrc={albumsImg}
        backgroundColor={white}
        HeadingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />
      {/* Barat*/}
      <Section
        h3={barat.heading}
        text={barat.text}
        btnTxt={barat.btn}
        imgSrc={baratImg}
        backgroundColor={pink}
        HeadingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />
      {/* Chaiwala*/}
      <Section
        h3={chaiwala.heading}
        text={chaiwala.text}
        btnTxt={chaiwala.btn}
        imgSrc={chaiwalaImg}
        backgroundColor={white}
        HeadingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />
      <Footer />
      <Misc />
    </>
  );
}

export default App;
