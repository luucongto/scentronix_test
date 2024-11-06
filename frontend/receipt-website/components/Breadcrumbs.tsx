'use client'
import { camelToSentenceCase } from '@/utils'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Breadcrumbs, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
const CustomBreadcrumbs: React.FC = () => {
  const pathname = usePathname()
  const pathnames = pathname.split('/').filter((x) => x)

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
      sx={{ marginBottom: '20px' }}
    >
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`

        return (
          <Typography
            color="text.primary"
            key={to}
            sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}
          >
            {camelToSentenceCase(value).toUpperCase()}
          </Typography>
        )
      })}
    </Breadcrumbs>
  )
}

export default CustomBreadcrumbs
