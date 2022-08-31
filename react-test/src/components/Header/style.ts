import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 41px;
`
export const Logo = styled.p`
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: 25px;
  ${({ theme }) => theme.fonts.bold}
`

export const CartSection = styled.div`
  display: flex;
`

export const MyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: 19px;
  line-height: 0;
  ${({ theme }) => theme.fonts.semi_bold}
`

export const ItemsCount = styled.p`
  color: ${({ theme }) => theme.colors.text_secondary};
  font-size: 19px;
  line-height: 0;
  ${({ theme }) => theme.fonts.semi_bold}
`


export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`