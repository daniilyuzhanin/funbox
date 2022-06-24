import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

export type ProductCardType = {
  filler: string,
  weight: number | string,
};

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    width: theme.spacing(160),
    height: theme.spacing(255),
  },
  cardContainer: {
    position: 'relative',
    height: theme.spacing(240),
    background: theme.palette.primary.main,
    paddingTop: theme.spacing(10.5),
    paddingLeft: theme.spacing(25.5),
    border: '4px solid transparent',
    borderRadius: theme.spacing(5),
    overflow: 'hidden',
    clipPath: 'polygon(15% 0, 100% 0%, 100% 100%, 0 100%, 0 10%)',

    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      height: theme.spacing(236),
      width: theme.spacing(156),
      background: theme.palette.secondary.light,
      clipPath: 'inherit',
      borderRadius: theme.spacing(5),
    },

    '& > *': {
      zIndex: 10,
    },
  },
  cardContainerTitle: {
    color: theme.palette.primary.contrastText,
  },
  cardContainerText: {
    color: theme.palette.secondary.contrastText,
  },
  cardContainerImage: {
    position: 'absolute',
    bottom: theme.spacing(-46),
    left: theme.spacing(-12.5),
  },
  cardContainerWeight: {
    position: 'absolute',
    bottom: theme.spacing(6),
    right: theme.spacing(6),
    height: theme.spacing(40),
    width: theme.spacing(40),
    zIndex: 10,
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50%',
    fontSize: theme.spacing(21),
    lineHeight: theme.spacing(11),
    paddingTop: theme.spacing(10),
  },
}));

export const ProductCard = ({ filler, weight }: ProductCardType) => {
  const classes = useStyles();
  const {
    cardWrapper,
    cardContainer,
    cardContainerTitle,
    cardContainerText,
    cardContainerImage,
    cardContainerWeight,
  } = classes;
  return (
    <Grid item className={cardWrapper} direction="column">
      <Grid container direction="column" className={cardContainer}>
        <Typography className={cardContainerText}>
          Сказочное заморское явство
        </Typography>
        <Typography variant="h1" className={cardContainerTitle}>Нямушка</Typography>
        <Typography variant="h3" className={cardContainerTitle}>{filler}</Typography>
        <Typography className={cardContainerText}>sallary</Typography>
        <img className={cardContainerImage} src="/cat.png" alt="cat" />
        <Grid item className={cardContainerWeight} textAlign="center">
          {weight}
          <Typography variant="subtitle1">кг</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Typography>Чего сидишь? Порадуй котэ, купи</Typography>
      </Grid>
    </Grid>
  );
};
