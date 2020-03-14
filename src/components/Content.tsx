import * as React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
class Content extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Content">
          <LeftContent />
          <RightContent />
        </div>
      </React.Fragment>
    );
  }
}

export default Content;
