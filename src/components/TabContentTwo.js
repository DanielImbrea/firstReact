import React from 'react'
import { Button } from './Button';
import styled from 'styled-components';
import ImgTv from '../images/tab-tv.png'
 function TabContentTwo() {
  return (
    <TabContainer>
  <div className="tab-content">
        <div className="tab-top-content">
          <span style={{fontSize:'1.5rem'}}>Watch TV shows and movies anytime</span>
          <Button className="btn">try it now</Button>
        </div>
        <div className="tab-bottom-content">
          <div>
            <img src={ImgTv}/>
          </div>
        </div>
      </div>
    </TabContainer>
  )
}

export default TabContentTwo;

const TabContainer = styled.div`
  background: var(--main-deep-dark);
  .tab-content {
margin: 0 15%;
  }
  .tab-top-content {
    display:grid;
    grid-template-columns:repeat(12,
      1fr);
      justify-content: center;
      align-items:center;
      padding:2.5rem 0;
  }
  span {
    grid-column: 1/8;
  }

  .btn {
    grid-column:10 / 12;
    margin: 0 1.25rem 1.25rem;
  }
`;