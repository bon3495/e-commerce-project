import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    opacity: 0,
    visibility: 'hidden',
    transition: 'all 0.5s linear',
    position: 'absolute',
    top: 0,
    left: 0,
    '&.active': {
      opacity: 1,
      visibility: 'visible',
    },
  },
  imageContainer: {
    height: '100%',
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${({ slider }) => slider.img})`,
  },

  info: {
    maxWidth: '550px',
    position: 'absolute',
    color: '#222',
    top: '50%',
    left: `${({ slider }) => slider.position === 'right' && '6%'}`,
    right: `${({ slider }) => slider.position === 'left' && '10%'}`,
    transform: 'translateY(-50%)',
  },
  sub: {
    fontSize: '18px',
    fontWeight: '600',
  },
  title: {
    fontSize: '50px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    margin: '8px 0',
  },
  desc: {
    marginBottom: '10px',
    fontSize: '14px',
    lineHeight: ' 24.5px',
    color: '#878787',
  },
}));
