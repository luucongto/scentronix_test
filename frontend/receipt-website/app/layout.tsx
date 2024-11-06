import { CssBaseline } from '@mui/material'
import * as React from 'react'
import { PropsWithChildren } from 'react'
import CustomBreadcrumbs from '../components/Breadcrumbs'
import Navbar from '../components/Navbar'
import './globals.css'
const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Recipe App</title>
      </head>
      <body>
        <CssBaseline />
        <Navbar />

        <div style={{ marginRight: 50, marginLeft: 130 }}>
          <CustomBreadcrumbs />
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout
