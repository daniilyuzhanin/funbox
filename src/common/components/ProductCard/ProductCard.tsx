import { Grid, Typography, IconButton } from '@mui/material';
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
    position: 'relative',
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

  cardContainerDisabled: {
    background: `${theme.palette.error.main}!important`,

    '& > *': {
      color: `${theme.palette.error.main}!important`,
    },

    '& $cardContainerWeight': {
      background: `${theme.palette.error.dark}!important`,
      color: `${theme.palette.primary.light}!important`,
    },

    '&::after': {
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
      zIndex: 15,
      opacity: '0.45',
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
    color: theme.palette.info.main,
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
  shopTextDisabled: {
    color: `${theme.palette.info.light}`,
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
  const [isHovered, setIsHovered] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const noop = () => {};

  const disableButton = () => setIsDisabled(!isDisabled);

  const chooseCard = () => {
    if (isChangeColor) {
      setIsHovered(false);
    }
    return setIsChoosen(!isChoosen);
  };
  const changeColor = () => {
    setIsChangeColor(!isChangeColor);
    chooseCard();
  };
  const onClickShopLink = () => setIsChangeColor(!isChangeColor);

  const onHover = () => (isChangeColor
    ? setIsHovered(true) : setIsHovered(false));

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
    cardContainerDisabled,
    shopText,
    shopTextLink,
    shopTextDisabled,
  } = classes;

  const deleteHoverEffect = () => setIsHovered(false);

  const selectRightClass = isChangeColor
    ? cardContainerColorChanged : cardContainerColor;
  const mouseLeaving = isChoosen ? changeColor : deleteHoverEffect;

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

  const choosingRightShopText = () => (isChangeColor ? <Typography className={shopText} textAlign="center" variant="subtitle2">{description}</Typography>
    : <Grid className={shopText} display="flex" justifyContent="center"><Typography variant="subtitle2">Чего сидишь? Порадуй котэ,&nbsp;</Typography><Typography onClick={onClickShopLink} className={shopTextLink} variant="subtitle2">купи.</Typography></Grid>);
  const disableShopText = () => (isDisabled ? <Typography className={`${shopText} ${shopTextDisabled}`} textAlign="center" variant="subtitle2">Печалька, {filler} закончился.</Typography> : choosingRightShopText());

  return (
    <Grid item className={cardWrapper} direction="column" mb={7}>
      <IconButton
        onClick={disableButton}
        style={{
          position: 'absolute',
          width: '18px',
          height: '18px',
          cursor: 'default',
        }}
      />
      <Grid
        container
        direction="column"
        className={`${cardContainer} ${selectRightClass} ${isDisabled ? cardContainerDisabled : noop}`}
        onClick={isDisabled ? noop : chooseCard}
        onMouseEnter={isDisabled ? noop : onHover}
        onMouseLeave={isDisabled ? noop : mouseLeaving}
      >
        {isHovered
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
      {disableShopText()}
    </Grid>
  );
};
