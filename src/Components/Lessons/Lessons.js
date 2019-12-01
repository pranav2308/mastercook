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

  handleLessonClick() {}

  render() {
    const useStyles = makeStyles(theme => ({
      root: {
        width: "100%"
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular
      }
    }));

    const lessonsArr = [
      [
        "Lesson1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex sit amet blandit leo lobortis eget."
      ],
      [
        "Lesson2",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex sit amet blandit leo lobortis eget."
      ],
      [
        "Lesson3",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex sit amet blandit leo lobortis eget."
      ],
      [
        "Lesson4",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex sit amet blandit leo lobortis eget."
      ],
      [
        "Lesson5",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex sit amet blandit leo lobortis eget."
      ]
    ];

    return (
      <div className={useStyles.root}>
        {lessonsArr.map((lesson, index) => (
          <ExpansionPanel key={index}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              key={index}
            >
              <Typography className={useStyles.heading} key={index}>
                {lesson[0]}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails key={index}>
              <Typography key={index}>{lesson[1]} </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
    );
  }
}

export default Lessons;
