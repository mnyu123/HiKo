import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomProgressBar({ now }) {
    return <ProgressBar animated now={now} label={`${now}초`}/>;
  }

export default CustomProgressBar;