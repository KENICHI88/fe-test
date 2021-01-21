import React from 'react';
import {useSelector} from 'react-redux';

import logo from '../../assets/images/the-godfather.svg';

import './LeftSide.scss';

import ListAuthor from './ListAuthor';

const LeftSide = () => {
  const author = useSelector(state => state.author);
  return (
    <div className="left-side">
      <img src={logo} alt="The Godfather" className="logo" />
      <ListAuthor data={author.data} />
    </div>
  );
}

export default LeftSide;
