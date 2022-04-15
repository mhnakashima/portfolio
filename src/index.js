import React from 'react';
import ReactDOM from 'react-dom';
import './globals/global.scss';
import { HomeContainer } from './containers/HomeContainer';

ReactDOM.render(
  <React.StrictMode>
    <HomeContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

