import React from 'react';

 import { Load } from './styles';

 export default function Loading() {
  return (
    <Load>
        <div className="text">LOADING</div>
        <div className="ring"></div>
    </Load>
  );
}

