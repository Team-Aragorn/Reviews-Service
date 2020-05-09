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
  line-height: 19.5px;
  margin-right: 5px;
  padding: 2px 10px;
  text-shadow: 0 0 .65px #333, 0 0 .65px #333;

  &:hover {
    box-shadow: inset 0 0 5px rgba(0,0,0,.2);
    text-shadow: none;
  }

  &:disabled {
    background-color: inherit;
    cursor: auto;
    color: ${(props) => props.voted ? '#da291c' : '#000'};
    box-shadow: none;
    text-shadow: 0 0 .65px #333, 0 0 .65px #333;
  }
`;

const Text = styled.span`
  align-self: center;
  font-size: 16px;
  line-height: 24px;
  padding-right: 10px;
`;

class ReviewHelpful extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      helpfulSubmitted: false,
      yesVote: false,
      noVote: false,
      reportSubmitted: false,
    };

    this.handleYesClick = this.handleYesClick.bind(this);
    this.handleNoClick = this.handleNoClick.bind(this);
    this.handleReportClick = this.handleReportClick.bind(this);
  }

  handleYesClick() {
    this.submitVote('yes')
      .then(() => {
        this.setState({
          helpfulSubmitted: true,
          yesVote: true,
        });
      });
  }

  handleNoClick() {
    this.submitVote('no')
      .then(() => {
        this.setState({
          helpfulSubmitted: true,
          noVote: true,
        });
      });
  }

  handleReportClick() {
    this.setState({
      reportSubmitted: true,
    });

    console.log('Review has been reported!\nTODO: Report handling.');
  }

  submitVote(voteString) {
    const { id, endpoint, redraw } = this.props;

    const body = { id, voteString };

    return fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(() => { redraw(); });
  }

  render() {
    const { className, yes, no } = this.props;
    const {
      helpfulSubmitted,
      yesVote,
      noVote,
      reportSubmitted,
    } = this.state;

    return (
      <div className={className}>
        <Text>Helpful?</Text>
        <Button disabled={helpfulSubmitted} onClick={this.handleYesClick} voted={yesVote}>
          {`Yes · ${yes}`}
        </Button>
        <Button disabled={helpfulSubmitted} onClick={this.handleNoClick} voted={noVote}>
          {`No · ${no}`}
        </Button>
        <Button disabled={reportSubmitted} onClick={this.handleReportClick}>
          {reportSubmitted ? 'Reported' : 'Report'}
        </Button>
      </div>
    );
  }
}


const StyledReviewHelpful = styled(ReviewHelpful)`
  grid-area: helpful;
  padding-bottom: 24px;
`;

export default StyledReviewHelpful;

ReviewHelpful.propTypes = {
  className: PropTypes.string.isRequired,
  yes: PropTypes.number.isRequired,
  no: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  endpoint: PropTypes.string.isRequired,
  redraw: PropTypes.func.isRequired,
};
