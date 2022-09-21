import styled from 'styled-components'

export const SettingsTitle = styled.p`
  font-size: 2rem;
  margin: 30px 0px 10px 0;
`
export const SettingsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin-top: 10px;
`

export const SettingSelect = styled.select`
  widht: 100%;
  height: 35px;
  padding: 0px 10px;
  margin: 10px 0;
  border-radius: 5px;
  option {
  }
  &:hover {
    border: 1px solid ${({ theme }) =>
      theme.colors.primary};
  }

  &:focus {
    outline:none;
    border: 1px solid;
    color: ${props =>
      props.themeColor === 'dark' &&
      (({ theme }) => theme.colors.secondaryLight)};
    color: ${props =>
      props.themeColor === 'light' &&
      (({ theme }) => theme.colors.secondary)};
  color: ${props =>
    props.themeColor === 'colored' &&
    (({ theme }) => theme.colors.primary)};
  }
  
  }
 
`
export const ClearHistoryBtn = styled.button`
  widht: 100%;
  height: 35px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadows[0]};
  border: 1px solid
    ${({ theme }) => theme.colors.lightTheme};
  &:hover {
    border: 1px solid
      ${({ theme }) => theme.colors.coloredTheme};
  }
  &:active {
    background-color: ${({ theme }) =>
      theme.colors.coloredBtns};
  }
`
