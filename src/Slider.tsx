import './Slider.css';
import React, { Component, MouseEventHandler, ReactNode, ReactElement, Children, isValidElement } from 'react';

type SlideProps = {
  title: string;
};

class Slide extends Component<SlideProps> {
  render() {
    return this.props.children;
  }
}

type SliderProps = {
  orientation: 'horizontal' | 'vertical';
  childrenPlacement: 'slides' | 'slide';
};

type SliderState = {
  selectedSlideTitle: string | null;
};

export default class Slider extends Component<SliderProps, SliderState> {
  static Slide = Slide;

  readonly state: SliderState = { selectedSlideTitle: null };

  render() {
    const children: ReactNode[] = [];
    const slides: ReactElement<SlideProps & React.Props<never>>[] = [];
    Children.forEach(this.props.children, child => {
      if (isValidElement(child) && child.type === Slide) {
        slides.push(child as ReactElement<SlideProps & React.Props<never>>);
      } else {
        children.push(child);
      }
    });

    const slide = slides.find(s => s.props.title === this.state.selectedSlideTitle);
    return (
      <div className={'Slider Slider-' + this.props.orientation}>
        <div className="Slider-slides">
          {slides.map(s => <button className={slide && slide.props.title === s.props.title ? 'selected' : ''} data-title={s.props.title} onClick={this.handleSlideButtonClick}>{s.props.title}</button>)}
        </div>
        <div className="Slider-slide">
          {slide && slide.props.children}
          {this.props.childrenPlacement === 'slide' && children}
        </div>
        {this.props.childrenPlacement === 'slides' && children}
      </div>
    )
  }

  private readonly handleSlideButtonClick: MouseEventHandler<HTMLButtonElement> = event => {
    const slideTitle = event.currentTarget.dataset.title!;
    this.setState({ selectedSlideTitle: slideTitle });
  };
}
