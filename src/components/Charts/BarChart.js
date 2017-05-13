import React from 'react';
import { connect } from 'dva';
import echarts from 'echarts';
import styles from './BarChart.css';


class BarChart extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
    this.echartsElement = null; // echarts div element
  }
  render(){
    console.log("render");
    console.log(this.props);
    return (<div
        ref={(e) => { this.echartsElement = e; }}
        className={styles.chart}
      />)
  }
  componentDidUpdate() {
    this.renderEchartDom();
  }
  renderEchartDom(){
    const data = [];
    console.log("in");
    if(!this.props.list){
        return;
    }
    this.props.list.forEach((item,index)=>{
        data.push({value:index+1,name:item.name});
    })
    let myChart = echarts.init(this.echartsElement);
    // 绘制图表
    const option = {
    backgroundColor: '#2c343c',

    title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },
    series : [
        {
            name:'Customized Pie',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: data,
        }
    ]
};

    myChart.setOption(option);
  }
  componentDidMount(){
    console.log("componentDidMount")
    this.renderEchartDom()
  }
}
function mapStateToProps(state) {
  const { list, total, page } = state.BI;
  return {
    loading: state.loading.models.BI,
    list,
    total,
    page,
  };
}
export default connect(mapStateToProps)(BarChart);
