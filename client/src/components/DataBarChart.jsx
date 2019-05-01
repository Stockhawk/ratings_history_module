import React from 'react';
import styled from 'styled-components';

import PercentProgress from './PercentProgress';

const DataBarChart = props => (
  <AllBars>
    <PercentProgress votes={props.stock.recbuy} total={props.stock.recbuy + props.stock.rechold + props.stock.recsell} voteFor="Buy" market={props.market} />
    <PercentProgress votes={props.stock.rechold} total={props.stock.recbuy + props.stock.rechold + props.stock.recsell} voteFor="Hold" market={props.market} />
    <PercentProgress votes={props.stock.recsell} total={props.stock.recbuy + props.stock.rechold + props.stock.recsell} voteFor="Sell" market={props.market} />
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
