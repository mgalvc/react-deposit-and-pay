import { Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material";

export default function Action({ title, onClick }) {
  return (
    <Grid item xs={6}>
      <Card variant='outlined' sx={{
        textAlign: 'center'
      }}>
        <CardActionArea onClick={onClick}>
          <CardContent>
            <Typography sx={{ fontSize: '1.4em' }}>{title}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}