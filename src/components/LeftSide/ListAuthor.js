import React , {useState} from 'react';

import {useDispatch} from 'react-redux';

import {
  selectAuthor
} from '../../redux/actions/author.actions';

const ListAuthor = (props) => {
  const dispatch = useDispatch();
  const {data} = props;
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleSelect = (ind) => {
    dispatch(selectAuthor(ind));
    setActiveIndex(ind);
  }
  
  return data ? (
    <div className="author-list-block">
      <ul className="author-list">
        {data.map((item, ind) => <li key={`author-${ind}`} className={ ind===activeIndex ? 'active author-item': item.colleagues.length ? 'is-colleagues author-item' : 'author-item'} onClick={() => handleSelect(ind)} >{item.name}</li>)}
      </ul>
    </div>
  ) : null;
}

export default ListAuthor;
