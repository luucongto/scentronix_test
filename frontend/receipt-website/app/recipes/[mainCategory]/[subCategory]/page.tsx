import { Recipe, recipes } from '@/data'
import { Box, Button, Grid, Typography } from '@mui/material'

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
    <Grid container spacing={3} style={{ marginTop: '20px' }}>
      <Grid item xs={12} md={6}>
        <Typography variant="h2" gutterBottom>
          {data?.title}
        </Typography>
        <Typography variant="body1" paragraph style={{ marginTop: 50 }}>
          {data?.content}
        </Typography>
        <Grid container spacing={3}>
          {data?.actions.map((eachAction) => (
            <Grid item xs={12 / data?.actions.length}>
              <Grid container spacing={1} alignItems="flex-start">
                <Grid item xs={12} md={3}>
                  {eachAction.image && <img src={eachAction.image} />}
                </Grid>
                <Grid item xs={12} md={9}>
                  <Typography>{eachAction.type}</Typography>
                  <Typography variant="h6">{eachAction.content}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <div
          style={{
            background: '#ECECEC',
            height: 2,
            width: '100%',
            marginTop: 10,
            marginBottom: 20,
          }}
        />
        <Grid container>
          {data?.yield && (
            <Grid item xs={4}>
              <Grid container spacing={1} alignItems="flex-start">
                <Grid item xs={12} md={3}>
                  <img src={'/yield.png'} />
                </Grid>
                <Grid item xs={12} md={9}>
                  <Typography>{data?.yield.type}</Typography>
                  <Typography variant="h6">{data?.yield.content}</Typography>
                </Grid>
              </Grid>
            </Grid>
          )}
          <Grid item xs={data?.yield ? 8 : 12} alignContent={'center'}>
            <Grid container spacing={2}>
              <Grid item>
                <Button
                  style={{
                    width: 150,
                    border: '2px solid #FECBCA',
                    color: 'black',
                  }}
                >
                  SAVE RECIPE
                </Button>
              </Grid>
              <Grid item>
                <Button
                  style={{
                    width: 100,
                    border: '2px solid #FECBCA',
                    color: 'black',
                  }}
                >
                  PRINT
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
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
