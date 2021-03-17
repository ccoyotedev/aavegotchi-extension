import React from 'react';
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
        <>
          <h1>No Aavegotchis.</h1>
          <h3>Make sure you're on the Matic Network</h3>
        </>
      )
    }
    return (
      <>
        <h1>Not Connected</h1>
        <h3>Either connect the current page to metamask or refresh on a page already connected to metamask</h3>
      </>
    )
  }

  return (
    <Container>
      {renderMessage()}
    </Container>
  )
}