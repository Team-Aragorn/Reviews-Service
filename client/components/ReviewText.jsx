import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ReviewText = ({ className, review }) => (
  <div className={className}>
    {review}
  </div>
);


const StyledReviewText = styled(ReviewText)`
grid-area: review;
line-height: 24px;
font-size: 16px;
margin-bottom: 16px;
`;

export default StyledReviewText;

ReviewText.propTypes = {
  className: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};
