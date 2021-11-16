import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';


const services = [
  {
    title: 'Apache Spark',
    description: [
      '1 master node',
      '2 worker nodes',
    ],
    code: 'kubectl exec <POD_NAME> -n project -c spark -- spark-submit',
    link: "http://driver/spark",
    buttonText: 'Portal',
    buttonVariant: 'contained',
  },
  {
    title: 'Apache Hadoop',
    description: [
      '1 master node',
      '2 worker nodes',
    ],
    buttonText: 'Portal',
    link: "http://driver/hadoop",
    buttonVariant: 'contained', // outlined
  },
  {
    title: 'Jupiter Notebook',
    description: [
    ],
    buttonText: 'Get started',
    link: "http://driver/jupiter",
    buttonVariant: 'contained',
  },
  {
    title: 'SonarQube SonarScanner',
    description: [
    ],
    code: 'kubectl exec <POD_NAME> -n project -c sonar-scanner -- sonar-scanner',
    buttonText: 'Portal',
    link: "http://driver/sonarqube",
    buttonVariant: 'contained',
  },
];


function App() {
  return (
  <React.Fragment>
    <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
    <CssBaseline />
    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 12, pb: 5 }}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        BIG DATA PROCESSING TOOLBOX
      </Typography>
    </Container>
    <Container disableGutters maxWidth="lg" component="main" sx={{ pt: 2, pb: 15 }}>
      <Typography variant="h5" align="center" color="text.secondary" component="p">
        Quickly build an effective pricing table for your potential customers with
        this layout. It&apos;s built with default MUI components with little
        customization.
      </Typography>
    </Container>
    
    <Container maxWidth="lg" component="main" sx={{pb: 20}}>
      <Grid container spacing={5} alignItems="flex-end">
        {services.map((service) => (
          <Grid
            item
            key={service.title}
            xs={12}
            sm={6}
            md={3}
          >
            <Card>
              <CardHeader
                title={service.title}
                subheader={service.subheader}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{
                  align: 'center',
                }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: "space-between",
                    lineBreak: "auto",
                    alignItems: 'baseline',
                    mb: 2,
                  }}
                >
                  <Typography fontSize='0.7rem' color="text.secondary" fontFamily="monospace">
                  {service.code}
                  </Typography>
                </Box>

                <ul>
                  {service.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      {line}
                    </Typography>
                  ))}
                </ul>
              </CardContent>
              <a href={service.link}>
                <CardActions>
                    <Button fullWidth variant={service.buttonVariant}>
                      {service.buttonText}
                    </Button>
                </CardActions>
              </a>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </React.Fragment>
  );
}


export default App;