import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Select from "@material-ui/core/Select";
import React, {useState} from "react";
import "../Messages/Messages.css";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      selectedMsg: []
    };
    this.handleMessageClick = this.handleMessageClick.bind(this);
  }

  handleMessageClick = (msgIndex, msg) => {
    
    console.log(this.state);
  }

  componentDidMount () {
    const newMessages = [
      ["I love dogs", "But I love MasterCook even more!", "John Wick"],
      ["Tally Ho' Lad!", "A vote for me is a vote for freedom!", "Theodore Roosevelt"],
      ["Pocahontas is cool", "Do you think they'll release an Indian cooking course?", "John Smith"],
      ["Mickey Mouse", "Wanna go to Disneyland?", "Walt Disney"],
      ["Where's Red October?", "Is it in the cookie dough?", "Jack Ryan"],
      ["Figure Skating is fun", "Cooking is fun too, I guess", "Michelle Kwan"],
      ["Lets build a wall", "MasterCook is the best", "Donald Trump"],
      ["I'm a celebrity", "this is my message!", "Pamela Anderson"],
      ["OMG", "I just made the cutest cupcakes ever thanks to MasterCook!", "Kristen Bell"],
      ["ITS SPHERICAL!", "SPHERICAL!!", "Josh Peck"],
      ["You get a car!", "And you get a car!", "Oprah Winfrey"],
      ["Where art thou, Romeo?", "Tis' me, Juliet!", "William Shakespeare"],
      ["Yay Basketball", "Buy my shoes", "Michael Jordan"],
      ["Asian Basketball", "Linsanity!", "Jeremy Lin"]
    ];
    this.setState({
      messages: newMessages,
      selectedMsg: ["message0", "No Conversations Selected", "N/A"]
      }
    );
    console.log (this.state);

  }
  render () {
      
      return (
        <div className="messages-container">
          <div className="messages-header">
            <div>
              <FormControl>
                <InputLabel id="demo-controlled-open-select-label">
                  Course
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  className="select-container"
                >
                  <MenuItem value={0}>
                    MC003: Cookies (Advanced Level)
                  </MenuItem>
                  <MenuItem value={10}>MC002: Chicken Recipes (Advanced)</MenuItem>
                  <MenuItem value={20}>MC001: Tofu recipes</MenuItem>
                  
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="messages-inbox">
            <MenuList className="menulist-container">
              {this.state.messages.map((message,index) => (
                <MenuItem key={index} className="messages-row" onClick={() => this.setState({selectedMsg:message})} >{message[0]}<br/><br/> Sender: {message[2]}</MenuItem>
              ))}
            </MenuList>
          </div>
          <div className="messages-content"> 
            <div className="messages-icon">
              <FontAwesomeIcon icon={faEnvelopeOpenText} size="10x" color="gray" />
            </div>
              <p>{this.state.selectedMsg[1]}</p>
              <br/>
              <b> Sent By: {this.state.selectedMsg[2]}</b>
          </div>
        </div>
      );
  }
}

export default Messages;
