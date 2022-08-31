import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  padding: 43px 143px 150px;
  border-radius: 4px;
  padding-bottom: 100px;
`
