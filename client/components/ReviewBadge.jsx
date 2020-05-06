import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ReviewBadge = ({ className, badge }) => {
  if (badge) {
    return (
      <div className={className}>
        * Verified Purchaser
      </div>
    );
  }
  return (<div className={className} />);
};

const StyledReviewBadge = styled(ReviewBadge)`
grid-area: badge;
align-self: start;
justify-self: end;
background: #cbd5e8;
font-size: 16px;
line-height: 25px;
`;

export default StyledReviewBadge;

ReviewBadge.propTypes = {
  className: PropTypes.string.isRequired,
  badge: PropTypes.bool.isRequired,
};
