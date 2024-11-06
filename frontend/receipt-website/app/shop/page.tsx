import { shopItems } from '@/data'
import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import * as React from 'react'

const Shop: React.FC = () => {
  return (
    <>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {shopItems.map((item) => {
          return (
            <Grid item xs={12} md={4} component={Link} href={item.url}>
              <Box>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: 'auto' }}
                />
                <Typography variant="h6">{item.title}</Typography>
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default Shop
