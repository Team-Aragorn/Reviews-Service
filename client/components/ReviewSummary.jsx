import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RatingSnapshot from './RatingSnapshot';
import RatingAverages from './RatingAverages';


const Container = styled.div`
display: grid;
grid-template-areas:
  "snapshot"
  "average"
  "favorable"
  "unfavorable";
grid-template-rows: auto auto 250px 250px;
gap: 10px 10px;

@media (min-width: 768px) {
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "snapshot  average"
    "favorable unfavorable";
  grid-template-rows: auto 250px;
}


padding: 20px 10px;
margin-bottom: 50px;
`;

const Favorable = styled.div`
  grid-area: favorable;
  background-color: #ccebc5;
`;

const Unfavorable = styled.div`
  grid-area: unfavorable;
  background-color: #decbe4;
`;

const ReviewSummary = (props) => {
  const { counts, averages, total } = props;

  return (
    <Container>
      <RatingSnapshot counts={counts} total={total} />
      <RatingAverages averages={averages} />
      <Favorable />
      <Unfavorable />
    </Container>
  );
};

export default ReviewSummary;

ReviewSummary.propTypes = {
  counts: PropTypes.arrayOf(PropTypes.number).isRequired,
  averages: PropTypes.arrayOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
};
