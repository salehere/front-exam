import React from 'react';
import styled, { keyframes } from 'styled-components';

const Spiner = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid #e40e0e;
    border-radius: 50%;
    animation: ${Spiner} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #e40e0e transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const Loading = () => {
  return (
    <Container>
      <div />
      <div />
      <div />
      <div />
    </Container>
  );
};

export default Loading;
