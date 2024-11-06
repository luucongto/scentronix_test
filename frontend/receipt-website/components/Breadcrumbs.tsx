'use client'
import { Breadcrumbs, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'

const camelToSentenceCase = (str: string): string => {
  return str
    .replace(/([A-Z])/g, ' $1') // Insert space before each uppercase letter
    .replace(/^./, (match) => match.toUpperCase()) // Capitalize the first letter of the string
    .toLowerCase()
    .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase())
}

const CustomBreadcrumbs: React.FC = () => {
  const pathname = usePathname()
  const pathnames = pathname.split('/').filter((x) => x)

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`

        return (
          <Typography color="text.primary" key={to}>
            {camelToSentenceCase(value)}
          </Typography>
        )
      })}
    </Breadcrumbs>
  )
}

export default CustomBreadcrumbs
