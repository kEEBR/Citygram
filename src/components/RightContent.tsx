import * as React from "react";
import Phone from "../img/Map.png";
class RightContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Map">
          <img src={Phone} />
        </div>
      </React.Fragment>
    );
  }
}

export default RightContent;
