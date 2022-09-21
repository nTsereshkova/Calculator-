import styled from 'styled-components'

export const HeaderDiv = styled.section`
  display: flex;
  width: 100%;
  min-height: 70px;
  justify-content: space-between;
  background-color: ${props =>
    props.themeColor === 'light' &&
    (({ theme }) => theme.colors.lightTheme)};
  background-color: ${props =>
    props.themeColor === 'dark' &&
    (({ theme }) => theme.colors.darkTheme)};
  background-color: ${props =>
    props.themeColor === 'colored' &&
    (({ theme }) => theme.colors.coloredTheme)};
  align-items: center;
  border-radius: 10px 10px 0px 0px;
  color: ${props =>
    props.themeColor === 'dark'
      ? ({ theme }) => theme.colors.white
      : ({ theme }) => theme.colors.black};
  font-size: 1.2rem;
`
export const AppName = styled.p`
  padding-left: 10px;
`
export const ControlButtons = styled.div`
  display: flex;
  width: auto;
  height: auto;
  justify-content: flex-start;
  margin: 0;
`
export const Btn = styled.div`
  margin: 0 10px;
  &:hover {
    border-bottom: 3px solid;
    border-color: ${props =>
      props.themeColor === 'dark' && 'white'};
  }
  border-color: ${props =>
    props.themeColor !== 'dark' && 'black'};
}
`
