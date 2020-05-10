import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  color: 333333;
  display: block;
  height: 8px;
  line-height: 24px;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  position: relative;
  width: 100%;
  z-index: 2;
`;

const Item = styled.li`
  box-shadow: inset 1px 0 0 rgba(255,255,255,.5),inset -1px 0 0 rgba(0,0,0,.25);
  direction: ltr;
  display: list-item;
  float: left;
  height: 8px;
  width: 20%;
`;

const FirstItem = styled(Item)`
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
`;

const LastItem = styled(Item)`
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
`;

const Rating = styled.span`
  background-color: da291c;
  background-image: -webkit-linear-gradient(top,rgba(255,255,255,.3) 0,rgba(255,255,255,0) 100%);
  border-radius: 2px;
  display: block;
  height: 8px;
  position: relative;
  top: -8px;
  width: ${(props) => ((props.rating / 5) * 100)}%;
`;

const BarRating = ({ className, rating, clean }) => (
  <div className={className}>
    <List>
      {clean ? <></> : (
        <>
          <FirstItem />
          <Item />
          <Item />
          <Item />
          <LastItem />
        </>
      )}
    </List>
    <Rating rating={rating} />
  </div>
);

const StyledBarRating = styled(BarRating)`
  margin-top: 6px;
  margin-bottom: 24px;
  background-color: #e3e3e3;
  background-image: -webkit-linear-gradient(top,rgba(255,255,255,.3) 0,rgba(255,255,255,0) 100%);
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  box-shadow: inset 0 0 2px rgba(0,0,0,.25);
  height: 8px;
  line-height: 24px;
`;

export default StyledBarRating;

BarRating.propTypes = {
  className: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  clean: PropTypes.bool,
};

BarRating.defaultProps = {
  clean: false,
};
