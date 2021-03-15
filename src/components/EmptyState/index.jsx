import React from 'react';
import { Button } from 'components/Button';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  h1,
  h3 {
    text-align: center;
  }

  h1 {
    margin-bottom: 8px;
  }

  h3 {
    margin-bottom: 32px;
  }
`

export const EmptyState = ({ connected }) => {
  const renderMessage = () => {
    if (connected) {
      return (
        <h3>Make sure you're on the Matic Network</h3>
      )
    }
    return (
      <>
        <h3>Please connect to Metamask</h3>
        <Button>Connect</Button>
      </>
    )
  }

  return (
    <Container>
      <h1>No Aavegotchis.</h1>
      {renderMessage()}
    </Container>
  )
}