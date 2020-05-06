import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.span`
  font-weight: 700;
  margin-right: 5px;
`;

const OwnedText = ({ owned }) => {
  if (owned === 1) {
    return '1 week';
  }

  if (owned === 2) {
    return '1 month';
  }

  if (owned === 3) {
    return '3 months';
  }

  if (owned === 4) {
    return '6 months';
  }

  if (owned === 5) {
    return '1 year or longer';
  }

  return '';
};

const ReviewOwned = ({ className, owned }) => (
  <div className={className}>
    <Label>Length of ownership</Label>
    <OwnedText owned={owned} />
  </div>
);

const StyledReviewOwned = styled(ReviewOwned)`
grid-area: owned;
background: #e6f5c9;
font-size: 12px;
line-height: 24px;
margin-bottom: 16px;
`;

export default StyledReviewOwned;

ReviewOwned.propTypes = {
  className: PropTypes.string.isRequired,
  owned: PropTypes.number.isRequired,
};
