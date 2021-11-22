import React from 'react';
import styled from 'styled-components';
import Post from '../../Layout/Post';

const Wrapper = styled.div`
  padding: 40px;
  text-align: center;
  .info {
    margin-top: 40px;
    &:first-of-type {
      margin-top: 0;
    }
  }
  h4 {
    color: #238db3;
    font-weight: bold;
    font-size: 1.5rem;
  }
  p,
  ul {
    margin: 10px 0;
    line-height: 20px;
  }
  li {
    margin: 5px 0;
  }
  .date {
    color: #aaa;
    font-weight: bold;
    font-size: 0.95rem;
  }
`;

const Info = ({ title }) => {
  return (
    <Post>
      <Wrapper>
      </Wrapper>
    </Post>
  );
};

export default Info;
