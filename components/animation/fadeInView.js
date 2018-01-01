import React from 'react';
import { Animated, Text, View, Dimensions } from 'react-native';

export default class FadeInView extends React.Component {

  constructor(props){
    super(props)
    let { width } = Dimensions.get('window')
    this.state = {
      pan: new Animated.ValueXY({x:width, y:0}),  // Initial value for opacity: {x:200, y:0}
      fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    }
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.pan,            // The animated value to drive
      {
        toValue: {x:0, y:0},         // Animate to opacity: {x:0, y:0} (opaque)
        duration: 300,              // Make it take a while
      }
    ).start();                        // Starts the animation

    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,         // Animate to opacity: {x:0, y:0} (opaque)
        duration: 300,              // Make it take a while
      }
    ).start();
  }

  render() {
    let { fadeAnim, pan } = this.state;
    return (
      <Animated.View
        style={{
          ...this.props.style,
          transform: pan.getTranslateTransform(),
          opacity: fadeAnim,
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
