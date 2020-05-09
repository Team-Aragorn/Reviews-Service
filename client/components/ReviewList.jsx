import React from 'react';
import PropTypes from 'prop-types';
import ReviewListItem from './ReviewListItem';


const ReviewList = (props) => {
  const { reviews, endpoint } = props;

  return (
    <>
      {reviews.map((review) => (
        <ReviewListItem
          review={review}
          endpoint={endpoint}
          key={review._id}
        />
      ))}
    </>
  );
};

export default ReviewList;

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  endpoint: PropTypes.string.isRequired,
};
