import { Grid, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { PropsWithChildren } from 'react';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: '100vh',
    background: `url(${'/pattern.jpeg'}) center center fixed`,
    padding: theme.spacing(18, 0, 33.5),
    position: 'relative',
    zIndex: 1,
    color: theme.palette.primary.light,

    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to bottom,rgba(0,0,0,.5)0%,rgba(0,0,0,0)50%,rgba(0,0,0,.5)100%)',
      zIndex: 2,
    },
  },
  layout: {
    position: 'relative',
    zIndex: 3,
  },
  layoutTitleText: {
    fontFamily: '"Exo 2", sans-serif',
    fontSize: theme.spacing(18),
    fontWeight: 100,
    textShadow: '0px 1px 1px #000000',
    paddingBottom: theme.spacing(12),
  },
}));

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  const classes = useStyles();
  const {
    wrapper,
    layout,
    layoutTitleText,
  } = classes;

  return (
    <Grid container className={wrapper}>
      <Grid container direction="column" className={layout}>
        <Grid item textAlign="center" className={layoutTitleText}>Ты сегодня покормил кота?</Grid>
        <Grid container justifyContent="center">
          <Grid item>Card container!</Grid>
          <Box style={{ textShadow: '0px 1px 1px #000000' }}>Ты сегодня покормил кота?</Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
