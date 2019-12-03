import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import "../Discussions/Discussions.css";

class Discussion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Takes active tab from props if it is defined there
      activeTab: props.activeTab || 1
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedTab) {
    // The active tab must be set into the state so that
    // the Tabs component knows about the change and re-renders.
    this.setState({
      activeTab: selectedTab
    });
  }

  render() {
    let courseDescription = "Description of the course you're taking.";
    let questionAnswers = [
      {
        Question: "-",
        Answer: "-"
      }
    ];
    let comments = ["-"];
    if (typeof this.props.currentDiscussions !== "undefined") {
      courseDescription = this.props.currentDiscussions["Description"];
      questionAnswers = this.props.currentDiscussions["QA"];
      comments = this.props.currentDiscussions["Comments"];
    }
    return (
      <div className="tab-container">
        <Tabs
          activeKey={this.state.activeTab}
          onSelect={this.handleSelect}
          className="app-bar"
        >
          <Tab eventKey={1} title="Description">
            <h1>{courseDescription}</h1>
          </Tab>

          <Tab eventKey={2} title="Q&A">
            {questionAnswers.map((el, index) => (
              <div key={index}>
                <b key={index}>• {el["Question"]}</b>
                <br key={index + 1} />
                <i key={index + 2}>{el["Answer"]}</i>
              </div>
            ))}
          </Tab>
          <Tab eventKey={3} title="Comments">
            {comments.map((el, index) => (
              <p key={index}>- {el}</p>
            ))}
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Discussion;
