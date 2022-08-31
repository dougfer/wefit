import styled from 'styled-components'

export const Card = styled.div`
  padding: 11px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;

`

export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

export const Image = styled.img`
  width: 150px;
  height: 188px;
  object-fit: contain;
`

export const MovieTitle = styled.p`
  color: ${({ theme }) => theme.colors.text_primary};
  font-size: 18px;
  font-weight: 700;
  ${({ theme }) => theme.fonts.bold}

`

export const Price = styled.p`
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.text_primary};
  font-size: 14px;
  ${({ theme }) => theme.fonts.bold}
`

