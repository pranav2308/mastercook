import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function Lessons() {
  const classes = useStyles();
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
  console.log(lessonsArr);
  return (
    <div className={classes.root}>
      {lessonsArr.map(lesson => (
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>{lesson[0]}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{lesson[1]}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}
