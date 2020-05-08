import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #d9d9d9;
  background-image: -webkit-linear-gradient(top,rgba(255,255,255,.1) 0,rgba(255,255,255,0) 100%);
  border: none;
  box-shadow: none;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  line-height: 19.5px;
  margin-right: 5px;
  padding: 2px 10px;

  &:hover {
    box-shadow: inset 0 0 5px rgba(0,0,0,.2);
    font-weight: 400;
  }
`;

const Text = styled.span`
font-size: 16px;
line-height: 24px;
padding-right: 10px;
`;

const ReviewHelpful = ({ className, yes, no }) => (
  <div className={className}>
    <Text>Helpful?</Text>
    <Button>
      {`Yes · ${yes}`}
    </Button>
    <Button>
      {`No · ${no}`}
    </Button>
    <Button>Report</Button>
  </div>
);

const StyledReviewHelpful = styled(ReviewHelpful)`
  grid-area: helpful;
  padding-bottom: 24px;
`;

export default StyledReviewHelpful;

ReviewHelpful.propTypes = {
  className: PropTypes.string.isRequired,
  yes: PropTypes.number.isRequired,
  no: PropTypes.number.isRequired,
};
