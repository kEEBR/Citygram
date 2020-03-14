import * as React from "react";
import { Link } from "react-router-dom";
class LeftContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="LeftContent">
          <div className="text">
            <p>Общайся Легко!</p>
          </div>
          <div className="textGreen">
            <p>Решаем проблемы жителей</p>
          </div>
          <div className="DoubleButton">
            <p id="text3">Власть на расстоянии клика</p>
            <div className="Links">
              <Link to="/NewsMap">
                <span className="percent1">Предложение</span>
              </Link>
              <Link to="/NewsMap">
                <span className="percent2">Обращение</span>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LeftContent;
