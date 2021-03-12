import React from 'react';
import styled from 'styled-components';
import { space, layout, flexbox, position } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import omitProps from 'libs/omitProps';

const propsToOmit = [
  ...Object.keys(propTypes.space),
  ...Object.keys(propTypes.layout),
  ...Object.keys(propTypes.flexbox),
  ...Object.keys(propTypes.position),
];

const Box = styled(omitProps('div', propsToOmit))`
  box-sizing: border-box;
  ${layout}
  ${space}
  ${flexbox}
  ${position}
  background-color: #03B6BC;
  border: 1.2rem solid #FFFA65;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
  width: 320px;
  height: 400px;
  margin: auto;
  padding: 12px;
  box-sizing: border-box;

  * {
    box-sizing: border-box
  }
`;

export default Box;
