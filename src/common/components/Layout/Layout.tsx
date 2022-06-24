import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { ReactNode } from 'react';

export type LayoutType = {
  children?: ReactNode,
};

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
  layoutTitle: {
    textShadow: '0px 1px 1px #000000',
    paddingBottom: theme.spacing(12),
  },
}));

export const Layout = ({ children }: LayoutType) => {
  const classes = useStyles();
  const {
    wrapper,
    layout,
    layoutTitle,
  } = classes;

  return (
    <Grid container className={wrapper}>
      <Grid container direction="column" className={layout}>
        <Typography variant="h2" textAlign="center" className={layoutTitle}>
          Ты сегодня покормил кота?
        </Typography>
        <Grid container justifyContent="space-around">
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};
