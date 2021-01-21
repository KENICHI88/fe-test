
import React from 'react';
import {useSelector} from 'react-redux';

import './RightSide.scss';


  
const author1 = '../../assets/images/profile_pics/Vito_Corleone.jpg';
const author2 = '../../assets/images/profile_pics/Carmelia_Corleone.jpg';
const author3 = '../../assets/images/profile_pics/Carlo_Rizzi.jpg';
const author4 = '../../assets/images/profile_pics/Luci_Mancini.jpg';

const RightSide = (props) => {
  const authorList = useSelector(state => state.author.data);
  const activeInd = useSelector(state => state.author.selectIndex);
  
  const activeAuthor = authorList[activeInd];
  
  return activeAuthor ? (
    <div className="main-bio">
      <div className="main-bio__container">
        <div className="main-bio__inner">
          <div className="bio__avatar">
            <div className="bio__avatar__container">
              <img src="avatar" alt={activeAuthor.name} />
            </div>
          </div>
          <div className="bio__content">
            <div className="bio__name">{activeAuthor.name}</div>
            <div className="bio__popularity">
              <span className="bio__popularity__text">Popularity</span>
              <input type="range" min="0" max="100" value={activeAuthor.popularity} className="bio__popularity__range" />
            </div>
            <div className="bio__detail-content">
              <div className="bio__detail-content__container">
                <div className="bio__detail-content__title">Biography</div>
                <div className="bio__detail-content__desc" dangerouslySetInnerHTML={{ __html: activeAuthor.biography }}></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  ) : null ;
}

export default RightSide;
