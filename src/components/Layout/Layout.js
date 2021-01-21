import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './Layout.scss';

import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';

import {
  setAuthorList
} from '../../redux/actions/author.actions';

import mockData from '../../assets/data/EmployeeData.json';

const Layout = () => {
  const dispatch = useDispatch();
  const author = useSelector(state => state.author);
  
  useEffect(() => {
    dispatch(setAuthorList(mockData.employees));
  }, [])
  
  return author ? (
    <div className="main-container">
      <LeftSide />
      <RightSide />
    </div>
  ) : null;
}

export default Layout;
