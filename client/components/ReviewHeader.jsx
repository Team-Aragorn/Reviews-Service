import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import StarRating from './StarRating';

TimeAgo.addLocale(en);

const Container = styled.div`
display: grid;
grid-template-columns: 114px auto;
grid-template-rows: auto;
grid-template-areas:
"stars signature"
"title title";
`;

const Signature = styled.div`
grid-area: signature;
align-self: center;
font-size: 12px;
margin-left: 5px;
`;

const Nickname = styled.span`
  font-weight: 700;
`;

const Date = styled.span`
`;

const Title = styled.h3`
  grid-area: title;
  font-size: 22px;
  font-weight: 700;
  margin: 0px;
  margin-bottom: 1em;
  padding: 0px;
  text-transform: capitalize;
`;

const ReviewHeader = ({ className, review }) => (
  <Container className={className}>
    <StarRating rating={review.overall} />
    <Signature>
      <Nickname>{review.nickname}</Nickname>
      <Date>
        {' · '}
        <ReactTimeAgo date={new window.Date(review.date)} />
      </Date>
    </Signature>
    <Title>{review.title}</Title>
  </Container>
);

const StyledReviewHeader = styled(ReviewHeader)`
  grid-area: header;
`;

export default StyledReviewHeader;

ReviewHeader.propTypes = {
  className: PropTypes.string.isRequired,
  review: PropTypes.shape({
    _id: PropTypes.string,
    gameId: PropTypes.number,
    date: PropTypes.string,
    overall: PropTypes.number,
    title: PropTypes.string,
    review: PropTypes.string,
    recommend: PropTypes.bool,
    nickname: PropTypes.string,
    location: PropTypes.string,
    email: PropTypes.string,
    buyForSelf: PropTypes.bool,
    ageBracket: PropTypes.number,
    gender: PropTypes.number,
    graphics: PropTypes.number,
    gameplay: PropTypes.number,
    appeal: PropTypes.number,
    ownershipBracket: PropTypes.number,
    purchaseOnline: PropTypes.bool,
    readReviews: PropTypes.bool,
    recommendBGS: PropTypes.number,
    meta: PropTypes.shape({
      helpful: PropTypes.number,
      unhelpful: PropTypes.number,
    }),
  }).isRequired,
};
