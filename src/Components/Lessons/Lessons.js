import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";

class Lessons extends React.Component {
  constructor(props) {
    super(props);
    this.handleLessonClick = this.handleLessonClick.bind(this);
  }

  handleLessonClick(lesson, index) {
    // pass back the video ID of clicked lesson to parent
    let vidID = "G-Fg7l7G1zw";
    if (typeof lesson["videoID"] !== "undefined") {
      vidID = lesson["videoID"];
    }
    this.props.callbackFromParent(vidID);
  }

  render() {
    if (typeof this.props.currentCourse["lessons"] !== "undefined") {
    }
    const useStyles = makeStyles(theme => ({
      root: {
        width: "100%"
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular
      }
    }));

    let courseLessons = [];

    if (typeof this.props.currentCourse["lessons"] !== "undefined") {
      courseLessons = this.props.currentCourse["lessons"];
    }

    return (
      <div className={useStyles.root}>
        {courseLessons.map((lesson, index) => (
          <ExpansionPanel
            key={index}
            onClick={function(e) {
              this.handleLessonClick(lesson, index);
            }.bind(this)}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              key={index}
            >
              <Typography className={useStyles.heading} key={index}>
                {lesson["lessonName"]}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails key={index}>
              <Typography key={index}>{lesson["descriptionText"]} </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
    );
  }
}

export default Lessons;
