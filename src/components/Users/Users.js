import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm , Select} from 'antd';
import { routerRedux } from 'dva/router';
import styles from './Users.css';
import { PAGE_SIZE } from '../../constants';
import BarChart from '../Charts/BarChart';
const { Option, OptGroup } = Select;

function Users({dispatch, list: dataSource, loading, total, page: current }) {
  function deleteHandler(id) {
    console.warn(`TODO: ${id}`);
  }
  function pageChangeHandler(page){
    dispatch(routerRedux.push({
       pathname: '/users',
       query: { page },
    }));
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
     // render: text => <a href="">{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text, { id }) => (
        <span className={styles.operation}>
          <a href="">Edit</a>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  const children = [];
  for(let i = 0; i<dataSource.length;i++){
    children.push(<option key={dataSource[i].id}>{dataSource[i].name}</option>)
  }

  return (
      <div>
      <Select className={styles.select}
        mode="multiple"
        style={{ width: '30%' }}
        placeholder="Please select"
      >{children}
      </Select>
      <Select className={styles.select}
        mode="multiple"
        style={{ width: '30%' }}
        placeholder="Please select"
      >{children}
      </Select>
      <BarChart></BarChart>
      </div>
  );
}

function mapStateToProps(state) {
  const { list, total, page } = state.users;
  return {
      loading: state.loading.models.users,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Users);