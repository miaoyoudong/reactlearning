import React from 'react';
import { connect } from 'dva';
import BarChart from '../components/Charts/BarChart';

function BI() {
  return (
    <div>
      <BarChart />
    </div>
  );
}

export default connect()(BI);