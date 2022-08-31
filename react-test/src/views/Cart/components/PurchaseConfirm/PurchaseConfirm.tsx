import React from 'react'
import { ReactComponent as ConfirmedImage } from 'src/assets/images/Purchase.svg'
import { Button } from 'src/components'
import { Container, Message } from './styled'
import { useNavigate } from 'react-router-dom'

export const PurchaseConfirm: React.FC = () => {

  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }

  return (
    <Container>
      <Message>Compra realizada com sucesso!</Message>
      <ConfirmedImage />
      <span style={{ marginTop: '21px' }}>
        <Button onClick={handleBack}>Voltar</Button>
      </span>
    </Container>
  )
}
