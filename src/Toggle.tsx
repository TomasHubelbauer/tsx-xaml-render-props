import './Toggle.css';
import React, { Component, ReactNode, Children, isValidElement, ReactElement } from 'react';

class OnContent extends Component {
  render() {
    return this.props.children;
  }
}

class OffContent extends Component {
  render() {
    return this.props.children;
  }
}

type ToggleProps = {
  title: string;
  checked: boolean;
};

type ToggleState = {
  checked: boolean;
}

export default class Toggle extends Component<ToggleProps, ToggleState> {
  // Keep the ID pairing `label` and `input` unique for each `Toggle` instance - see the constructor
  private static counter = 0;

  static OnContent = OnContent;

  static OffContent = OffContent;

  constructor(props: ToggleProps) {
    super(props);
    this.state = { checked: props.checked };
    Toggle.counter++;
  }

  render() {
    let children: ReactNode[] = [];
    let onContent: ReactElement | undefined;
    let offContent: ReactElement | undefined;
    Children.forEach(this.props.children, child => {
      if (isValidElement(child)) {
        switch (child.type) {
          case Toggle.OnContent: onContent = child; break;
          case Toggle.OffContent: offContent = child; break;
          default: children.push(child);
        }
      } else {
        children.push(child);
      }
    });

    return (
      <div className="Toggle">
        <label htmlFor={Toggle.counter + 'Toggle'}>{this.props.title}</label>
        <input type="checkbox" id={Toggle.counter + 'Toggle'} checked={this.state.checked} onChange={this.onChange} />
        {this.state.checked ? onContent : offContent}
        {children}
      </div>
    );
  }

  private readonly onChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };
}
