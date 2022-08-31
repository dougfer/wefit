import styled from 'styled-components'
import { FiLoader } from 'react-icons/fi'

type ContainerProps = {
  isLoading: boolean
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: ${({ isLoading }) => isLoading ? 'center' : 'space-between' };
  width: 100%;
  gap: 30px;
  height: 100%;
  padding-bottom: 100px;
`

export const LoadingIcon = styled(FiLoader)`
  animation: spin 3s linear infinite;
  align-items: center;
  color: ${({ theme }) => theme.colors.background_secondary};

  @keyframes spin { 
    100% { 
        transform: rotate(360deg); 
    } 
}
`
