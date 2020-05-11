import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Title = styled.h3`
  font-size: 14;
  font-weight: 700;
  height: auto;
  margin: 0;
  margin-bottom: 24px;
`;

const Button = styled.button`
  background-color: #d9d9d9;
  border: 1px solid #505050;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.2);
  cursor: pointer;
  font-size: 11px;
  line-height: 16px;
  margin-right: 5px;
  padding: .5em 1em;
`;

const RedButton = styled(Button)`
  color: #f5f5f5;
  background-color: #da291c;
  border-color: #f5f5f5;
`;

const FilterBar = ({ filterMatrix, setter, clear }) => {
  if (filterMatrix.every((row) => (!row[0]))) {
    return (
      <></>
    );
  }

  return (
    <div>
      <Title>Active Filters</Title>
      {filterMatrix.map((row, index) => {
        if (row[0] === false) {
          return (<></>);
        }

        return (
          <RedButton key={row[2]} onClick={() => { setter(false, index); }}>
            {`${row[2]} `}
            <FontAwesomeIcon icon={faTimesCircle} />
          </RedButton>
        );
      })}
      <Button onClick={clear}>
        {'Clear All '}
        <FontAwesomeIcon icon={faTimesCircle} />
      </Button>
    </div>
  );
};

export default FilterBar;

FilterBar.propTypes = {
  filterMatrix: PropTypes.arrayOf(PropTypes.array).isRequired,
  setter: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};
