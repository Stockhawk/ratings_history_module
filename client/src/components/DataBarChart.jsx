import React from 'react';
import styled from 'styled-components';

import PercentProgress from './PercentProgress';

const DataBarChart = props => (
  <AllBars>
    <PercentProgress votes={props.stock.recBuy} total={props.stock.recBuy + props.stock.recHold + props.stock.recSell} voteFor="Buy" market={props.market} />
    <PercentProgress votes={props.stock.recHold} total={props.stock.recBuy + props.stock.recHold + props.stock.recSell} voteFor="Hold" market={props.market} />
    <PercentProgress votes={props.stock.recSell} total={props.stock.recBuy + props.stock.recHold + props.stock.recSell} voteFor="Sell" market={props.market} />
  </AllBars>
);

const AllBars = styled.div`
  font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
  font-weight: normal;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 0.0350em;
`;

export default DataBarChart;
