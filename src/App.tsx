import React, { Component } from 'react';
import Toggle from './Toggle';
import Slider from './Slider';

export default class App extends Component {
  render() {
    return (
      <>
        <Toggle title="Test" checked>
          <Toggle.OnContent>checked!</Toggle.OnContent>
          <Toggle.OffContent>unchecked!</Toggle.OffContent>
          ⭐
        </Toggle>
        <hr />
        <Slider orientation="horizontal" childrenPlacement="slide">
          <Slider.Slide title="Slide 1">Slide #1 content</Slider.Slide>
          <Slider.Slide title="Slide 2">Slide #2 content</Slider.Slide>
          <Slider.Slide title="Slide 3">Slide #3 content</Slider.Slide>
          <Slider.Slide title="Slide 4">Slide #4 content</Slider.Slide>
          <div>Extra content</div>
        </Slider>
      </>
    );
  }
};
