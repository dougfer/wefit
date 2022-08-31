import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const QuantityContent = styled.div`
  width: 47px;
  height: 27px;
  border: ${({ theme }) => `1px solid ${theme.colors.text_secondary}` };
  border-radius: 4px;
  margin: 0 8px;
  padding-left: 5px;
  user-select: none;
`
