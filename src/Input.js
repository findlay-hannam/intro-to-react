import React, { useState, useRef } from 'react';

export default function Input() {
  const inputRef = useRef();
  function getInputValue() {
    return inputRef.current.value;
  }
  return <input ref={inputRef} />;
}