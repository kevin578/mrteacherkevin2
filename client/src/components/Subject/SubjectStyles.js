import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  height: 800px;
  width: 75%;
`;

const vidHeight = 350;
const vidWidth = vidHeight * 1.77778;

export const Image = props => {
  let width = 350;
  if (props.width) {
    width = props.width;
  }
  const height = width / 1.7777778;
  let styles = {
    width,
    height
  };
  return <img src={props.src} alt={props.src} style={styles} />;
};

export const Video = props => {
  const videoPlayerType = "iframe";

  if (videoPlayerType == "html5") {
    return (
      <video width={vidWidth} height={vidHeight} controls>
        <source src={props.src} type="video/mp4" />
      </video>
    );
  } else if (videoPlayerType == "iframe") {
    return (
      <iframe
        width={vidWidth}
        height={vidHeight}
        src={props.src}
        title="video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    );
  }
};

export const Header = styled.h1`
  font-size: 28px;
  margin-top: 50px;
`;

export const Body = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

