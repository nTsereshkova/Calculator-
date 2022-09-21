import styled from 'styled-components'

export const KeypadDiv = styled.div`
  display: flex;
  flex-direction: raw;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  padding-top: 30px;
  justify-content: center;
`
export const Key = styled.button`
  width: 90px;
  height: 90px;
  margin: 0 40px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.btns};

  box-shadow: ${({ theme }) => theme.boxShadows[0]};
  border: 1px solid ${({ theme }) => theme.colors.darkTheme};
  color: ${props =>
    props.themeColor === 'dark'
      ? ({ theme }) => theme.colors.white
      : ({ theme }) => theme.colors.black};
  background-color: ${props =>
    props.themeColor === 'light' &&
    (({ theme }) => theme.colors.lightBtns)};
  background-color: ${props =>
    props.themeColor === 'dark' &&
    (({ theme }) => theme.colors.darkBtns)};
  background-color: ${props =>
    props.themeColor === 'colored' &&
    (({ theme }) => theme.colors.coloredBtns)};
  font-size: 30px;
  &:hover {
    background-color: ${props =>
      props.themeColor === 'light' &&
      (({ theme }) => theme.colors.lightTheme)};
    background-color: ${props =>
      props.themeColor === 'dark' &&
      (({ theme }) => theme.colors.darkTheme)};
    background-color: ${props =>
      props.themeColor === 'colored' &&
      (({ theme }) => theme.colors.coloredTheme)};
  }
  &:active {
    background-color: ${props =>
      props.themeColor === 'light' &&
      (({ theme }) => theme.colors.lightBtns)};
    background-color: ${props =>
      props.themeColor === 'colored' &&
      (({ theme }) => theme.colors.coloredBtns)};
    background-color: ${props =>
      props.themeColor === 'dark' &&
      (({ theme }) => theme.colors.darkBtns)};
  }

  @media (max-width: 1130px) {
    width: 80px;
    height: 80px;
    margin: 0 40px;
  }
  @media (max-width: 1055px) {
    width: 70px;
    height: 70px;
    margin: 0 35px;
  }
  @media (max-width: 875px) {
    width: 70px;
    height: 70px;
    margin: 0 20px;
  }
  @media (max-width: 615px) {
    width: 50px;
    height: 50px;
    margin: 0 20px;
    border-radius: 10px;
  }
  @media (max-width: 520px) {
    width: 50px;
    height: 50px;
    margin: 0 12px;
    border-radius: 10px;
  }
`
