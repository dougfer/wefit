import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Message = styled.p`
  font-size: 35px;
  color: ${({ theme }) => theme.colors.text_message};
  ${({ theme }) => theme.fonts.bold};
`