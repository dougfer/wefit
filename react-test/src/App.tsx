import React from 'react'
import { Cart, Home } from 'src/views'
import styled from 'styled-components'
import { Header } from 'src/components'
import { Route, Routes } from 'react-router-dom'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_primary};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const App: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </Content>
    </Container>
  )
}

export default App
