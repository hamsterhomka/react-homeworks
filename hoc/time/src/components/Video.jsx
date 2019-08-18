import React from 'react';
import DateTime from './DateTime';
import {prettified} from '../hoc';

const DateTimePretty = prettified(DateTime);

function Video(props) {
  return (
    <div className="video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen/>
      <DateTimePretty date={props.date} />
    </div>
  )
}

export default Video;