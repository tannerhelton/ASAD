import React from 'react';

export default function Intro(props) {
  return (
    <p className="App-intro">
      { props.message }
    </p>
  )
}