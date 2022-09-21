import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { PageLayout } from '@/layouts'

import Loader from '@/components/Loader'
import { MainScreen } from '@/screens/MainScreen'
import { Settings } from '@/screens/Settings'
import { Header } from '@/components/Header'

import { Card } from './components'

export default () => {
  const [isLoading, setIsLoading] = useState(true)

  const isSettingsOn = useSelector(
    state => state.settings.showSettings,
  )
  useEffect(() => {
    setTimeout(setIsLoading(false), 2000)
  }, [])
  return (
    <PageLayout>
      <Card>
        {isLoading && <Loader />}

        <Header />
        {isSettingsOn ? <Settings /> : <MainScreen />}
      </Card>
    </PageLayout>
  )
}
