import React from 'react';
import PropTypes from 'prop-types';
import ReviewListItem from './ReviewListItem';


const ReviewList = (props) => {
  const { reviews } = props;

  return (
    <>
      {reviews.map((review) => <ReviewListItem review={review} key={review._id} />)}
    </>
  );
};

export default ReviewList;

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
