import React from 'react';
import _ from 'lodash';

const ReviewListItem = (props) => {
  const {
    date,
    title,
    review,
    nickname,
    location,
    overall,
    graphics,
    gameplay,
    appeal
  } = props.review;

  return (
    <div>
      <h4>{_.startCase(title)}</h4>
      <span>{nickname}</span>
      {` (${location})`}
      <p>
        {review}
      </p>
      Overall: {overall}
      <br />
      Graphics: {graphics}
      <br />
      Gameplay: {gameplay}
      <br />
      Lasting Appeal: {appeal}
    </div>
  );
};

export default ReviewListItem;
