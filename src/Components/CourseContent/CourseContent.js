import { any } from "prop-types";
import React from "react";
import Youtube from "react-youtube-embed";
import "../CourseContent/CourseContent.css";

class CourseContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentVidID: any };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {}

  render() {
    let contentID = "";

    if (typeof this.props.vidID !== "undefined") {
      contentID = this.props.vidID;
    }
    return <Youtube id={contentID} />;
  }
}

export default CourseContent;
