import { any } from "prop-types";
import React from "react";
import Youtube from "react-youtube-embed";
import "../CourseContent/CourseContent.css";

class CourseContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentVidID: any };
    this.componentDidMount = this.componentDidMount.bind(this);
    console.log(this.props);
  }

  componentDidMount() {}

  render() {
    const lessonNum = 1;
    let contentID = "G-Fg7l7G1zw";
    if (typeof this.props.currentCourse["lessons"] !== "undefined") {
      contentID = this.props.currentCourse["lessons"][lessonNum]["videoID"];
    }
    return <Youtube id={contentID} />;
  }
}

export default CourseContent;
