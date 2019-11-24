import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Select from "@material-ui/core/Select";
import React from "react";
import "../Messages/Messages.css";

const Messages = () => {
  const messages = [
    ["message1", "this is my message!"],
    ["message2", "this is my message!"],
    ["message3", "this is my message!"],
    ["message4", "this is my message!"],
    ["message5", "this is my message!"],
    ["message6", "this is my message!"],
    ["message7", "this is my message!"],
    ["message8", "this is my message!"],
    ["message9", "this is my message!"],
    ["message10", "this is my message!"],
    ["message11", "this is my message!"],
    ["message12", "this is my message!"],
    ["message13", "this is my message!"],
    ["message14", "this is my message!"]
  ];

  return (
    <div class="messages-container">
      <div class="messages-header">
        <FormControl class="dropdown-container">
          <InputLabel
            id="demo-controlled-open-select-label"
            class="inputlabel-container"
          >
            Age
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            class="select-container"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div class="messages-inbox">
        <MenuList class="menulist-container">
          {messages.map(message => (
            <MenuItem class="messages-row">{message[0]}</MenuItem>
          ))}
        </MenuList>
      </div>
      <div class="messages-content">
        <div class="messages-icon">
          <FontAwesomeIcon icon={faEnvelopeOpenText} size="10x" color="gray" />
        </div>
        <p>No Conversations Selected</p>
      </div>
    </div>
  );
};

export default Messages;
