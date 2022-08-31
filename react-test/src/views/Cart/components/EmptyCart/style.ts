import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  padding: 60px 140px;
`

export const Message = styled.p`
  font-size: 35px;
  color: ${({ theme }) => theme.colors.text_message};
  ${({ theme }) => theme.fonts.bold};
`
export const Line = styled.div`
  height: 1.36px;
  width: 80%;
  background-color: ${({ theme }) => theme.colors.text_message};
  margin-bottom: 33px;
`