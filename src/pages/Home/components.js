import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 0;
  box-shadow: ${({ theme }) => theme.boxShadows[0]};
  flex-wrap: nowrap;
`

export const Heading = styled.h3``
