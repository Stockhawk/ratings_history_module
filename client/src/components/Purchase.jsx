import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

class Purchase extends React.Component {
  constructor(props) {
    super(props);
    this.type = 'Market Buy';
    this.state = {
      expanded: false,
    };
    this.toggleReadMore = this.toggleReadMore.bind(this);
  }

  toggleReadMore(e) {
    e.preventDefault();
    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }));
  }

  render() {
    const { purchase } = this.props;
    const { name, timeinforce, submitted, status, enteredQuantity, filled, filledQuantityShares, filledQuantityPrice, total } = purchase;
    const submitTime = submitted.toString();
    const filledTime = filled.toString();

    if (this.state.expanded === false) {
      return (
        <PurchaseWrapper expanded={this.state.expanded} onClick={e => this.toggleReadMore(e)}>
          <Expandable>
            <TopInfo>
              <div className="bold left">{this.type}</div>
              {moment(submitTime).format('MMM DD')}
            </TopInfo>
            <TopInfo>
              <div className="bold right">${total}</div>
              {filledQuantityShares} {filledQuantityShares === 1 ? 'share' : 'shares'} at ${filledQuantityPrice}
            </TopInfo>
          </Expandable>
        </PurchaseWrapper>
      );
    }
    return (
      <PurchaseWrapper expanded={this.state.expanded} onClick={e => this.toggleReadMore(e)}>
        <Expandable>
          <TopInfo>
            <div className="bold left">{this.type}</div>
            {moment(submitTime).format('MMM DD')}
          </TopInfo>
          <TopInfo>
            <div className="bold right">${total}</div>
            {filledQuantityShares} {filledQuantityShares === 1 ? 'share' : 'shares'} at ${filledQuantityPrice}
          </TopInfo>
        </Expandable>

        <Details>
          <Info>
            <div className="key">Stock Name</div>
            <div className="value">{name}</div>
          </Info>
          <Info>
            <div className="key">Type</div>
            <div className="value">{this.type}</div>
          </Info>
          <Info>
            <div className="key">Time in Force</div>
            <div className="value">{timeinforce}</div>
          </Info>
          <Info>
            <div className="key">Submitted</div>
            <div className="value">{moment(submitTime).format('MMM DD, YYYY')}</div>
          </Info>
          <Info>
            <div className="key">Status</div>
            <div className="value">{status}</div>
          </Info>
          <Info>
            <div className="key">Entered Quantity</div>
            <div className="value">{enteredQuantity}</div>
          </Info>
          <Info>
            <div className="key">Filled</div>
            <div className="value">{moment(filledTime).format('LLL') + ' EDT'}</div>
          </Info>
          <Info>
            <div className="key">Filled Quantity</div>
            <div className="value">{filledQuantityShares} {filledQuantityShares === 1 ? 'share' : 'shares'} at ${filledQuantityPrice}</div>
          </Info>
          <Info>
            <div className="key">Total</div>
            <div className="value">
              $
              {total}
            </div>
          </Info>
        </Details>
        <DownloadTC>Download Trade Confirmation</DownloadTC>
      </PurchaseWrapper>
    );
  }
}

const Expandable = styled.div`
  height: 72px;
  margin: 24px 24px 0;
  display: flex;
  justify-content: space-between;
`;

const Details = styled.div`
  border-top: 1px solid;
  border-color: #f4f4f5;
  margin: 6px 16px 6px;
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 13px;
`;

const TopInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
  font-size: 13px;
  letter-spacing: 0.0350em;
  .bold {
      font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
      font-weight: normal;
      -webkit-text-stroke-width: 1px;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0.0350em;
    }
  .left {
    text-align: left;
  }
  .right {
    text-align: right;
  }
`;

const PurchaseWrapper = styled.div`
  padding-left: -24px;
  margin-right: 48px;
  border-top: 0px;
  border-bottom: ${props => (props.expanded === false ? '1px solid rgba(23,23,24,0.00)' : '1px solid rgba(23,23,24,0.00)')};
  border-left: ${props => (props.expanded === false ? '1px solid rgba(23,23,24,0.00)' : '1px solid rgba(23,23,24,0.00)')};
  border-right: ${props => (props.expanded === false ? '1px solid rgba(23,23,24,0.00)' : '1px solid rgba(23,23,24,0.00)')};
  border-radius: ${props => (props.expanded === false ? 'none' : '4px')};

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: ${props => (props.expanded === false ? 'none' : '0 0 4px 1px rgba(0, 0, 0, 0.01), 0 3px 24px rgba(48, 51, 51, 0.09)')};
  margin-bottom: ${props => (props.expanded === false ? '0' : '16px')};
  margin-top: ${props => (props.expanded === false ? '0' : '0')};
  
  &:after {
    content: '';
    height: 1px;
    width: 673px;
    border-bottom: ${props => (props.expanded === false ? '1px solid rgba(23,23,24,0.05)' : '1px solid rgba(23,23,24,0.00)')};
  }

  &:hover {
    background: rgba(23, 23, 24, 0.02);
    border-radius: 4px;
    border: 1px solid rgba(23, 23, 24, 0.00);
    border-top: 0px;
    cursor: pointer;
    -webkit-transition: background 150ms, margin-bottom 150ms, -webkit-box-shadow 150ms;
    transition: background 150ms, margin-bottom 150ms, -webkit-box-shadow 150ms;
    transition: background 150ms, box-shadow 150ms, margin-bottom 150ms;
    transition: background 150ms, box-shadow 150ms, margin-bottom 150ms, -webkit-box-shadow 150ms;
  }

}

  width: 697px;
`;

const Info = styled.div`
  width: 180px;
  padding: 0 8px;
  .key {
    overflow: hidden;
    font-weight: normal;
    -webkit-text-stroke-width: 0.8px;
  }
  .value {
    margin-bottom: 16px;
  }
`;

const DownloadTC = styled.div`
  color: ${props => (props.market === 'Bear'
    ? '#f45531'
    : '#21ce99')};
  &:hover {
    color: ${props => (props.market === 'Bear'
    ? '#ff6340'
    : '#1ae9aa')}
    transition-duration: 300ms;
  }
  padding: 8px 8px 16px;
  cursor: pointer;
  margin: 6px 16px;
  font-size: 13px;
  -webkit-text-stroke-width: 0.5px;
`;

Purchase.propTypes = {
  purchase: PropTypes.object,
};

export default Purchase;
