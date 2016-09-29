// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={800}>
          <Slide>
            <Heading>Boardroom.ninja</Heading>
            <Text>Will Barnes &nbsp; &nbsp; &nbsp; &nbsp;
                  Daniel King &nbsp; &nbsp; &nbsp; &nbsp;
                  JC Zhang</Text>
          </Slide>
          <Slide>
            <Heading>Problems</Heading>
              <Text margin={25} textAlign="left" textSize={36}> Hand-written communication offers greater flexibility than other media </Text>
              <Text margin={25} textAlign="left" textSize={36}> There is a lack of open-source solutions for remote hand-written communication </Text>
              <Text margin={25} textAlign="left" textSize={36}> Integration testing is cumbersome for applications incorporating WebRTC and often must be done manually</Text>
          </Slide>
          <Slide>
            <Heading size={1} margin={20}>Proposed Solutions</Heading>
              <Text margin={25} textSize={36}> A real-time whiteboard featuring live audio, video, and text-chat  </Text>
              <Text margin={25} textSize={36}> A library with a streamlined API for integration testing in WebRTC apps
              </Text>
          </Slide>
          <Slide>
            <Heading size={1}>MVP Features</Heading>
            <Layout>
              <Fill>
                <Heading size={5} margin={25} textAlign="left">Boardroom App</Heading>
                <Text margin={25} textAlign="left" textSize={36}> Interactive whiteboard </Text>
                <Text margin={25} textAlign="left" textSize={36}> Video Chat </Text>
                <Text margin={25} textAlign="left" textSize={36}> Text Chat </Text>
                <Text margin={25} textAlign="left" textSize={36}> User authentication </Text>
                <Text margin={25} textAlign="left" textSize={36}> Users can create separate rooms </Text>
              </Fill>
              <Fill>
                <Heading size={5} margin={25} textAlign="left">WebRTC Testing</Heading>
                <Text margin={25} textAlign="left" textSize={36}> Can create a client object that encapsulates an invisible Chrome instance </Text>
                <Text margin={25} textAlign="left" textSize={36}> Client object has public methods that expose the DOM </Text>
                <Text margin={25} textAlign="left" textSize={36}> Client object can monitor events related to WebRTC data streams </Text>

              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading>Stretch Goals</Heading>
            <Layout>
            <Fill>
              <Heading size={5} margin={25} textAlign="left">Boardroom App</Heading>
              <Text margin={25} textAlign='left' textSize={36}>Saving the canvas data</Text>
              <Text margin={25} textAlign='left' textSize={36}>Recording the audio and canvas</Text>
              <Text margin={25} textAlign='left' textSize={36}>Make the Canvas into a module that can be plugged into other Applications</Text>
            </Fill>
            <Fill>
              <Heading size={5} margin={25} textAlign="left">WebRTC Testing</Heading>
              <Text margin={25} textAlign='left' textSize={36}>Can monitor signaling communication on the server</Text>
              <Text margin={25} textAlign='left' textSize={36}>Client Object has methods to simulate a NAT Firewall</Text>
              <Text margin={25} textAlign='left' textSize={36}>Client Object can simulate losing its internet connection</Text>
            </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading>Technologies</Heading>
              <Appear><Text textAlign="center">React</Text></Appear>
              <Appear><Text textAlign="center">HTML5 Canvas</Text></Appear>
              <Appear><Text textAlign="center">Express</Text></Appear>
              <Appear><Text textAlign="center">MongoDB</Text></Appear>
              <Appear><Text textAlign="center">Socket.io</Text></Appear>
              <Appear><Text textAlign="center">WebRTC</Text></Appear>
              <Appear><Text textAlign="center">Electron</Text></Appear>
          </Slide>
          <Slide>
            <Heading>Technical Challenges</Heading>
            <Layout>
              <Fill>
                <Heading size={5} margin={25} textAlign="left">Boardroom App</Heading>
                <Text margin={25} textAlign='left' textSize={36}>Maintaining a stable connection between clients</Text>
                <Text margin={25} textAlign='left' textSize={36}>Reinitializing a connection in the event that the connection drops</Text>
                <Text margin={25} textAlign='left' textSize={36}>Keeping the canvas's synchronized despite network interruptions</Text>
              </Fill>
              <Fill>
                <Heading size={5} margin={25} textAlign="left">WebRTC Testing</Heading>
                <Text margin={25} textAlign='left' textSize={36}>Exposing the dom in a chrome process</Text>
                <Text margin={25} textAlign='left' textSize={36}>Observing dataflow between two instances of Chromium from outside the processes</Text>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading>CHECK US OUT AT BOARDROOM.NINJA</Heading>
            <Heading>Ninjaz, YEAHHHH</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
