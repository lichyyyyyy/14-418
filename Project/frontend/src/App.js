import './App.css';
import hadoop from './resources/hadoop.svg';
import jupyter from './resources/jupyter.png';
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

const host_eip = process.env.REACT_APP_EIP;

const services = [
  {
    title: 'Apache Spark',
    description: [
      '1 master node',
      '2 worker nodes',
    ],
    code: 'kubectl exec <POD_NAME> -n project -c spark -- spark-submit',
    link: host_eip+":8080",
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
    logo: hadoop,
    link: host_eip+":9870",
    buttonVariant: 'contained', // outlined
  },
  {
    title: 'Jupyter Notebook',
    description: [
      "Password: admin",
      "Token: a7bd21fd79bdf2dffca90ed272d147d695c131dddb6dcdad",
    ],
    logo: jupyter,
    buttonText: 'Get started',
    link: host_eip+":8888",
    buttonVariant: 'contained',
  },
  {
    title: 'SonarQube SonarScanner',
    description: [
      "2 containers",
      "1 internal service"
    ],
    code: 'kubectl exec <POD_NAME> -n project -c sonar-scanner -- sonar-scanner',
    buttonText: 'Portal',
    link: host_eip+":9000",
    buttonVariant: 'contained',
  },
];


function App() {
  console.log("env: "+JSON.stringify(process.env));
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
      <Typography variant="h5" align="center" color="text.secondary" component="p" fontFamily="fantasy">
        <i>This is a microservice-based application built by <b>Chunying LI</b> in 2021.</i>
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" component="p">
        Users could run Apache Hadoop, Spark, Jupyter Notebooks, SonarQube and SonarScanner without having to install any of them
        in this application.
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
                    mb: 1,
                    height: 200
                  }}
                >
                  <Typography sx={{mt: 2}} fontSize='0.8rem' color="text.secondary" fontFamily="monospace" align="center">
                  {service.code}
                  </Typography>
                  {service.logo ? (
                    <img src={service.logo} alt='logo'></img>
                  ) : (<div></div>)}
                </Box>

                <ul>
                  {
                    service.title === "Jupyter Notebook" ? 
                    (<div><Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={service.title}
                    >
                      {service.description[0]} 
                      </Typography>
                      <Typography 
                      component="li"
                      variant="subtitle1"
                      align="center"
                      className='token_class'>
                        {service.description[1]}
                      </Typography>
                    </div>) : (service.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      {line}
                    </Typography>)))
                  }
                </ul>
              </CardContent>
              <a href={service.link} style={{textDecoration: 'none'}}>
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