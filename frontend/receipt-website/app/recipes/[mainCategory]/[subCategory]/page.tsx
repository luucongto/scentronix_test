import { Recipe, recipes } from '@/data'
import { Box, Grid, Paper, Typography } from '@mui/material'

const Page = async ({
  params,
}: {
  params: Promise<{ mainCategory: string; subCategory: string }>
}) => {
  const mainCategory = (await params).mainCategory
  const subCategory = (await params).subCategory
  const data: Recipe | null = recipes[mainCategory][subCategory]

  if (!data) {
    return 'No Recipe'
  }

  return (
    <Grid container spacing={2} style={{ marginTop: '20px' }}>
      <Grid item xs={12} md={8}>
        <Typography variant="h3" gutterBottom>
          {data?.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {data?.content}
        </Typography>
        <Paper elevation={3} style={{ padding: '10px', marginBottom: '10px' }}>
          {data?.actions.map((eachAction) => (
            <Typography variant="h6">{eachAction}</Typography>
          ))}
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box>
          <img
            src={data?.image}
            alt={data?.title}
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Grid>
    </Grid>
  )
}
export default Page
