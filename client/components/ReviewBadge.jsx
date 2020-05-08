import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const StyledFA = styled(FontAwesomeIcon)`
  color: #da291c;
  margin-right: 5px;
`;

const ReviewBadge = ({ className, badge }) => {
  if (badge) {
    return (
      <div className={className}>
        <StyledFA icon={faCheckCircle} />
        Verified Purchaser
      </div>
    );
  }
  return (<div className={className} />);
};

const StyledReviewBadge = styled(ReviewBadge)`
grid-area: badge;
align-self: start;
justify-self: end;
font-size: 16px;
line-height: 25px;
`;

export default StyledReviewBadge;

ReviewBadge.propTypes = {
  className: PropTypes.string.isRequired,
  badge: PropTypes.bool.isRequired,
};
