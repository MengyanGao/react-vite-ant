import React from "react";
import "./style.css";
class NavBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exporeObj: {},
      linkObj: {},
    };
  }

  render() {
    return (
      <div className="WrappmenueList">
        <ul className="menueList">
          <li>
            <span className="articleTitle">{this.props.exporeObj.title}</span>
            <ul>
              {this.props.exporeObj.expore.map((item, index) => {
                return <li key={index}> {item.name}</li>;
              })}
            </ul>
          </li>
          <li>
            <span className="articleTitle">{this.props.linkObj.title}</span>
            <ul>
              {this.props.linkObj.link.map((item, index) => {
                return <li key={index}> {item.name}</li>;
              })}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
export default NavBarComponent;
