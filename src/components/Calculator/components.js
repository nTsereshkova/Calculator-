import styled from 'styled-components'

export const CalcDiv = styled.section`
  display: flex;
  height: 100%;
`
export const DisplayKeypadDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid
    ${({ theme }) => theme.colors.secondaryLight};
`
export const HistoryDiv = styled.div`
  width: 20%;
`
