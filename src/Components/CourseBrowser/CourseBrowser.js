import React from "react";

const CourseBrowser = props => {
  const tableStyle = {
    height: "300px",
    marginTop: "10%",
    marginLeft: "auto",
    marginRight: "auto"
  };
  const bigHeadingStyle = {
    color: "#7a653f",
    fontWeight: "bold",
    fontSize: "350%"
  };

  const { params } = props.match;
  //console.log(params.searchString);

  return (
    <table style={tableStyle}>
      <tbody>
        <tr>
          <td className="align-middle text-center" style={bigHeadingStyle}>
            Course Browser Page
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CourseBrowser;
