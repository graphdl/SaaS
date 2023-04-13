import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Logo } from './components/Logo'
import { Button } from './components/Button'

const config: DocsThemeConfig = {
  logo: <Logo/>,
  project: {
    link: 'https://github.com/graphdl/saas',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/graphdl/saas/blob/main/docs',
  footer: {
    text: 'OpenSaaS.org',
  },
  navbar: {
    extraContent: <Button/>
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – OpenSaaS',
    }
  }
}

export default config
