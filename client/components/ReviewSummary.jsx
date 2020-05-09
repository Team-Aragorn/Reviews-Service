import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RatingSnapshot from './RatingSnapshot';


const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 250px 250px;
grid-template-areas:
"snapshot  average"
"favorable unfavorable";
gap: 10px 10px;
padding: 20px 10px;
margin-bottom: 50px;
`;

const Average = styled.div`
  grid-area: average;
  background-color: #b3cde3;
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
      <Average averages={averages} />
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
