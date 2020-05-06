import React from 'react';
import ReviewListItem from './ReviewListItem';


const ReviewList = (props) => {
  const { reviews } = props;

  return (
    <>
      {reviews.map((review) => <ReviewListItem review={review} />)}
    </>
  );
};

export default ReviewList;
