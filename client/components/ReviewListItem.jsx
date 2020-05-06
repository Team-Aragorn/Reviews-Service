import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

const Container = styled.div`
display: grid;
grid-template-columns: 60px 7fr 3fr;
grid-template-rows: 60px 60px 60px 60px 60px;
grid-template-areas:
"avatar header    badge"
"   .   review    ratings"
"   .   owned     ratings"
"   .   recommend ratings"
"   .   helpful   helpful";
`;

const Avatar = styled.div`
grid-area: avatar;
background: #b3e2cd;
`;

const Header = styled.div`
grid-area: header;
background: #fdcdac;
`;

const Badge = styled.div`
grid-area: badge;
background: #cbd5e8;
`;

const Review = styled.div`
grid-area: review;
background: #f4cae4;
`;

const Owned = styled.div`
grid-area: owned;
background: #e6f5c9;
`;

const Recommend = styled.div`
grid-area: recommend;
background: #f1e2cc;
`;

const Ratings = styled.div`
grid-area: ratings;
background: #cccccc;
`;

const Helpful = styled.div`
grid-area: helpful;
background: #fff2ae;
`;


const ReviewListItem = (props) => {
  const { review } = props;

  return (
    <Container>
      <Avatar />
      <Header />
      <Badge />
      <Review>{review.review}</Review>
      <Owned />
      <Recommend />
      <Ratings />
      <Helpful />
    </Container>
  );
};

export default ReviewListItem;
