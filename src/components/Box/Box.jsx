import styled from 'styled-components';

const Box = styled.div`
  box-sizing: border-box;
  background-color: #03B6BC;
  border: 9px solid #FFFA65;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
  width: 240px;
  height: 300px;
  margin: 0;
  padding: 9px;
  margin: -9px;

  * {
    box-sizing: border-box
  }
`;

export default Box;
