import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`

export const TableHead = styled.th`
  color: ${({ theme }) => theme.colors.text_secondary};
  text-transform: uppercase;
  text-align: left;
  ${({ theme }) => theme.fonts.bold};
`

export const ImageCell = styled.img`
  width: 90px;
  height: 114px;
  object-fit: contain;
  user-select: none;
`

export const TextInfo = styled.p`
  font-size: 20px;
  margin: 0;
  color: ${({ theme }) => theme.colors.text_message};
  ${({ theme }) => theme.fonts.bold};
  user-select: none;
`
export const Line = styled.div`
  height: 1.36px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text_message};
  margin-bottom: 12px;
`

export const Footer = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
`

export const TotalContent = styled.div`
  display: flex;
  align-items: center;
`

export const TotalValue = styled.p`
  color: ${({ theme }) => theme.colors.text_message};
  font-size: 21px;
  ${({ theme }) => theme.fonts.bold};
`

export const TotalText = styled.p`
  color: ${({ theme }) => theme.colors.text_secondary};
  font-size: 12px;
  margin-right: 4px;
  ${({ theme }) => theme.fonts.bold};
`
