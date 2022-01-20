import { makeStyles } from '@material-ui/core';
export default makeStyles(theme => ({
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    justifyContent: 'center',
    borderBottom: '1px solid #ccc',
    position: 'relative',
  },

  exitButton: {
    position: 'absolute',
    left: '20px',
  },

  title: {
    fontSize: '24px',
    color: '#3f51b5',
    fontWeight: '700',
  },

  emptyCart: {
    width: '300px',
    flex: 1,
  },

  emptyImg: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },

  listContainer: {
    width: '300px',
    flex: 1,
  },

  text: {
    '& > span': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },

  subTextContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  quantityText: {
    margin: '0 10px',
    color: '#222',
  },

  price: {
    fontSize: '16px',
  },

  totalContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 20px',
    borderTop: '1px solid #ccc',
    borderBottom: '1px solid #ccc',
  },

  totalText: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  total: {
    fontSize: '20px',
    fontWeight: 'bold',
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    columnGap: '20px',
    padding: '20px',
  },
}));
