import React, {Component} from 'react';
import  './MSAccordion.css';
import ClassNames from 'classnames';

export default class MSAccordion  extends Component {
  render() {
    debugger;
    return (
      <div className="main">
        <div className="title">{this.props.title}</div>
        <Section title="Section Title One"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum
          voluptas aliquid rem possimus nostrum excepturi!
        </Section>
        <Section title="Section Title Two"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum
          voluptas aliquid rem possimus nostrum excepturi!
        </Section>
        <Section title="Section Title Three"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum
          voluptas aliquid rem possimus nostrum excepturi!
        </Section>
      </div>
    );
  }
}

export class Section extends Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      open: false,
      class: "section"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.open) {
      this.setState({
        open: false,
        class: "section"
      });
    } else {
      this.setState({
        open: true,
        class: "section open"
      });
    }
  }

  render() {
    return (
      <div className={ClassNames(this.state.class)}>
        <button>toggle</button>
        <div className="sectionhead" onClick={this.handleClick}>{this.props.title}</div>
        <div className="articlewrap">
          <div className="article">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

// export default {
//   MSAccordion,
//   Section,
// };
