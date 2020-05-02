import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';

const ReviewList = (props) => {
  return (
    <div>
      {props.reviews.map((review) => <ReviewListItem review={review} />)}
    </div>
  );
};

export default ReviewList;