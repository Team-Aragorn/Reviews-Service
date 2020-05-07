import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Label = styled.span`
  font-weight: 700;
`;

const ReviewRecommend = ({ className, recommend }) => {
  if (recommend) {
    return (
      <div className={className}>
        <Label>
          <FontAwesomeIcon icon={faCheckCircle} /> Yes
        </Label>
        , I recommend this product.
      </div>
    );
  }
  return (
    <div className={className}>
      <Label>
        <FontAwesomeIcon icon={faTimesCircle} /> No
      </Label>
      , I do not recommend this product.
    </div>
  );
};

const StyledReviewRecommend = styled(ReviewRecommend)`
grid-area: recommend;
font-size: 12px;
line-height: 24px;
margin-bottom: 16px;
`;

export default StyledReviewRecommend;

ReviewRecommend.propTypes = {
  className: PropTypes.string.isRequired,
  recommend: PropTypes.bool.isRequired,
};
