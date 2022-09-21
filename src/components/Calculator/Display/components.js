import styled from 'styled-components'

export const DisplayDiv = styled.div`
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.secondaryLight};
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  font-size: 2.5rem;
  align-items: center;
  padding-right: 80px;
`
