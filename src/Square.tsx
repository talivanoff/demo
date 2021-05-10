import React from 'react';
import './Square.css';

export interface NamesProps {
  color: string;
  name: string;
}

function Square({ isRed, name }: {isRed: boolean; name: string; }) {
  return (
    <div className={isRed ? "squareRed" : "squareYellow"}>{name}</div>
  );
}

export default Square;
