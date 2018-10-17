import React from "react";
import Subject from "../../Subject/Subject";
import { Body, Header, Video } from "../../Subject/SubjectStyles";
import Checkbox from "../../Subject/Checkbox";
import Question from "../../Subject/Quiz";
import TextEditor from "../../Subject/TextEditor";
import Button from "../../Subject/Button";

class GoogleApps1 extends React.Component {
  render() {
    return (
      <Subject title="Google Apps" urlName="googleapps1">
        {[
          <Body key="intro" title="Loggin In">
            <Header>Logging In</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/googleApps/chromeIntro.mp4" />
            <Header>I have...</Header>
            <Checkbox>Logged into my Chrome account.</Checkbox>
            <Checkbox>Logged out of my Chrome account.</Checkbox>
            <Checkbox>Logged back in to my Chrome account.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="bookmarks" title="Bookmarks">
            <Header>Bookmarks</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/googleApps/bookmarks.mp4" />
            <Header>I have...</Header>
            <Checkbox>added multiple bookmarks.</Checkbox>
            <Checkbox>changed the name of a bookmark.</Checkbox>
            <Checkbox>organized your bookmarks into folders.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key="settings" title="Settings">
            <Header>Settings</Header>
            <Video src="https://s3.us-east-2.amazonaws.com/mrtk-videos/googleApps/settings.mp4" />
            <Header>I have...</Header>
            <Checkbox>tried adding a home button.</Checkbox>
            <Checkbox>changed the search engine and changed it back.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key = "extensions" title = "Extensions">
            <Header>Extensions</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/googleApps/extensions.mp4" />
            <Header>I have...</Header>
            <Checkbox>added an extension.</Checkbox>
            <Checkbox>removed an extension.</Checkbox>
          <Button>Next</Button>
          </Body>,

          <Body key = "drivefolders" title = "Drive">
            <Header>Google Drive</Header>
            <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/googleApps/driveFolders.mp4"/>
            <Header>I have...</Header>
            <Checkbox>organzied my Goolge Drive into folders.</Checkbox>
            <Checkbox>deletd any files I don't need.</Checkbox>
            <Button>Next</Button>
          </Body>,

          <Body key = "fileupload" title = "Uploading Files">
          <Header>Uploading Files</Header>
          <Video src = "https://s3.us-east-2.amazonaws.com/mrtk-videos/googleApps/fileupload.mp4" />
          <Header>I have...</Header>
          <Checkbox>uploaded a file.</Checkbox>
          <Checkbox>shared the file with a friend.</Checkbox>
          <Checkbox>downloaded a file from a friend.</Checkbox>
          <Button>Next</Button>
          </Body>
        ]}
      </Subject>
    );
  }
}

export default GoogleApps1;
