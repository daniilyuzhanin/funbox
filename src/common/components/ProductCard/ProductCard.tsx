import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';

export type ProductCardType = {
  filler: string,
  weight: number | string,
  description: string,
  count: number | string,
};

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    width: theme.spacing(160),
    height: theme.spacing(255),
  },

  cardContainer: {
    position: 'relative',
    height: theme.spacing(240),
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

  cardContainerColor: {
    background: theme.palette.primary.main,

    '& $cardContainerWeight': {
      backgroundColor: theme.palette.primary.main,
    },

    '&:hover': {
      background: theme.palette.primary.dark,

      '& $cardContainerWeight': {
        backgroundColor: theme.palette.primary.dark,
      },

    },
  },

  cardContainerColorChanged: {
    background: theme.palette.secondary.main,

    '& $cardContainerWeight': {
      backgroundColor: theme.palette.secondary.main,
    },

    '&:hover': {
      background: theme.palette.secondary.dark,

      '& $cardContainerWeight': {
        backgroundColor: theme.palette.secondary.dark,
      },
    },
  },

  cardContainerTitle: {
    color: theme.palette.primary.contrastText,
    marginTop: theme.spacing(2.5),
  },

  cardContainerText: {
    color: theme.palette.secondary.contrastText,
    marginTop: theme.spacing(7.5),
  },

  cardContainerTextHovered: {
    color: '#E62E7A',
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
    borderRadius: '50%',
    fontSize: theme.spacing(21),
    lineHeight: theme.spacing(11),
    paddingTop: theme.spacing(10),
  },

  cardContainerBoldText: {
    fontWeight: 'bold',
  },

  shopText: {
    paddingTop: theme.spacing(7),
  },
  shopTextLink: {
    color: theme.palette.primary.main,
    position: 'relative',

    '&:before': {
      position: 'absolute',
      bottom: 0,
      left: theme.spacing(0.5),
      width: '81%',
      borderTop: `1px dashed ${theme.palette.primary.main}`,
      content: '""',
    },

    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.dark,

      '&:before': {
        borderTop: `1px dashed ${theme.palette.primary.dark}`,
      },
    },
  },
}));

export const ProductCard = ({
  filler,
  weight,
  description,
  count,
}: ProductCardType) => {
  const [isChoosen, setIsChoosen] = useState(false);
  const [isChangeColor, setIsChangeColor] = useState(false);
  const [isTesting, setIsTesting] = useState(false);

  const chooseCard = () => {
    if (isChangeColor) {
      setIsTesting(false);
    }
    return setIsChoosen(!isChoosen);
  };
  const changeColor = () => {
    setIsChangeColor(!isChangeColor);
    chooseCard();
  };
  const onClickShopLink = () => setIsChangeColor(!isChangeColor);

  const newTest = () => (isChangeColor
    ? setIsTesting(true) : setIsTesting(false));

  const classes = useStyles();
  const {
    cardWrapper,
    cardContainer,
    cardContainerTitle,
    cardContainerText,
    cardContainerImage,
    cardContainerWeight,
    cardContainerColor,
    cardContainerColorChanged,
    cardContainerBoldText,
    cardContainerTextHovered,
    shopText,
    shopTextLink,
  } = classes;

  const a = () => setIsTesting(false);

  const selectRightClass = isChangeColor
    ? cardContainerColorChanged : cardContainerColor;
  const mouseLeaving = isChoosen ? changeColor : a;

  const mousesGiftCount = (foodCount: string | number) => {
    if (foodCount < 40) {
      return (<Typography variant="body2">мышь в подарок</Typography>);
    }
    if (foodCount < 100) {
      return (<Typography variant="body2"><span className={cardContainerBoldText}>2</span> мыши в подарок</Typography>);
    }
    return (
      <Grid container direction="column">
        <Typography variant="body2"><span className={cardContainerBoldText}>5</span> мышей в подарок</Typography>
        <Typography variant="body2">заказчик доволен</Typography>
      </Grid>);
  };

  return (
    <Grid item className={cardWrapper} direction="column" mb={7}>
      <Grid
        container
        direction="column"
        className={`${cardContainer} ${selectRightClass}`}
        onClick={chooseCard}
        onMouseEnter={newTest}
        onMouseLeave={mouseLeaving}
      >
        {isTesting
          ? <Typography className={`${cardContainerText} ${cardContainerTextHovered}`}>Котэ не одобряет?</Typography> : <Typography className={cardContainerText}>Сказочное заморское явство</Typography>}
        <Typography variant="h1" className={cardContainerTitle}>Нямушка</Typography>
        <Typography variant="h3" className={cardContainerTitle}>{filler}</Typography>
        <Grid container className={cardContainerText} direction="column">
          <Typography variant="body2"><span className={cardContainerBoldText}>{count}</span> порций</Typography>
          {mousesGiftCount(count)}
        </Grid>
        <img className={cardContainerImage} src="/cat.png" alt="cat" />
        <Grid item className={cardContainerWeight} textAlign="center">
          {weight}
          <Typography variant="subtitle1">кг</Typography>
        </Grid>
      </Grid>
      {isChangeColor ? <Typography className={shopText} textAlign="center" variant="subtitle2">{description}</Typography>
        : <Grid className={shopText} display="flex" justifyContent="center"><Typography variant="subtitle2">Чего сидишь? Порадуй котэ,&nbsp;</Typography><Typography onClick={onClickShopLink} className={shopTextLink} variant="subtitle2">купи.</Typography></Grid>}
    </Grid>
  );
};
