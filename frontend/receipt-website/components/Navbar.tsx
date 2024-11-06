import { AppBar, Box, Button, Toolbar } from '@mui/material'
import Link from 'next/link'

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box>
          <img
            src="/logo.png"
            alt="logo"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
        <Button color="inherit" component={Link} href="/shop">
          Shop
        </Button>
        <Button color="inherit" component={Link} href="/recipes">
          Recipes
        </Button>
        <Button color="inherit" component={Link} href="/learn">
          Learn
        </Button>
        <Button color="inherit" component={Link} href="/about">
          About
        </Button>
        <Button color="inherit" component={Link} href="/blog">
          Blog
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
