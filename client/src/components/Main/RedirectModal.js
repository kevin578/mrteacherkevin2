import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { customStyles, Header } from "../SignIn/modalStyles";
import FormButton from "../shared/FormButton";

const buttonStyle = {
  width: 240
};

const RedirectModal = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    checkForUrl();
  }, []);

  const redirectUrls = [
    "/homepage/scratch/",
    "/homepage/scratch/challenge-1-2/",
    "/homepage/scratch/challenge-2/",
    "/homepage/scratch/challenge-3/",
    "/homepage/scratch/sc...ge-5-platform-game/",
    "/homepage/scratch/sc...ck-and-paddle-game/",
    "/homepage/scratch/sc...ge-6-shooting-game/",
    "/homepage/scratch/scr...lenge-5-flappy-bird/",
    "/homepage/scratch/scr...lenge-6-fruit-ninja/"
  ];

  function getPath() {
    let path = window.location.pathname;
    if (path.charAt(path.length - 1) != "/") {
        path += "/";
    }
    return path;
  }

  function checkForUrl() {
    if (redirectUrls.includes(getPath())) {
      setShowModal(true);
    }
  }

  return (
    <Modal style={customStyles} isOpen={showModal}>
      <Header>Welcome to the new mrteacherkevin!</Header>
      <p>I have a lot of exciting new content and features.</p>
      <p>
        If you would like to visit the original page you can find it at{" "}
        <a
          href={`http://legacy.mrteacherkevin.rocks${getPath()}`}
        >
          legacy.mrteacherkevin.com
        </a>
      </p>
      <p>otherwise...</p>
      <FormButton
        style={buttonStyle}
        onClick={() => (window.location = "/")}
        text="Continue on to the new site!"
      />
    </Modal>
  );
};

export default RedirectModal;
