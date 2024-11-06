import { AppBar, Box, Grid, Toolbar } from '@mui/material'
import Link from 'next/link'

const styles = {
  paddingLeft: 50,
  marginBottom: 20,
}
const Navbar = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          color: 'black',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Toolbar>
          <Box>
            <img
              src="/logo.png"
              alt="logo"
              style={{
                paddingLeft: 130,
                width: '100%',
                height: 'auto',
                zIndex: 1000,
                paddingTop: 20,
              }}
            />
          </Box>
          <Link color="inherit" style={styles} href="/shop">
            Shop
          </Link>
          <Link color="inherit" style={styles} href="/recipes">
            Recipes
          </Link>
          <Link color="inherit" style={styles} href="/learn">
            Learn
          </Link>
          <Link color="inherit" style={styles} href="/about">
            About
          </Link>
          <Link color="inherit" style={styles} href="/blog">
            Blog
          </Link>
        </Toolbar>
      </AppBar>
      <Grid
        style={{
          background: '#F8F5F0',
          height: 50,
          width: '100%',
          position: 'relative',
          top: -50,
          zIndex: -1,
          paddingLeft: 260,
          flex: 1,
          flexDirection: 'row',
          alignContent: 'center',
        }}
      >
        <Link color="inherit" style={styles} href="/categories">
          Categories
        </Link>
        <Link color="inherit" style={styles} href="/collections">
          Collections
        </Link>
        <Link color="inherit" style={styles} href="/resources">
          Resources
        </Link>
      </Grid>
    </>
  )
}

export default Navbar
