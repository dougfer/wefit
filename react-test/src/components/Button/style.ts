import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${({ theme }) => theme.colors.button_primary};
  padding: 11px 7px;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    transition: 0.3s all;
  }
`
export const Title = styled.p`
display: inline-block;
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: 18px;
  ${({ theme }) => theme.fonts.bold};
  margin: 0;
`
export const IconContent = styled.div`
  margin: 0 10px;
  display: flex;
  color: ${({ theme }) => theme.colors.background_secondary};
  gap: 5px;

`
