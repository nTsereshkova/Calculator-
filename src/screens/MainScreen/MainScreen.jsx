import React from 'react'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Calculator } from '@/components/Calculator'

const MainScreen = () => (
  <ErrorBoundary>
    <Calculator />
  </ErrorBoundary>
)

export default MainScreen
