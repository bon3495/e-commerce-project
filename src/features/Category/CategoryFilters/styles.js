import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2.5, 0, 1.5),
    backgroundColor: '#F5F7FA',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
  },

  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#222',
    paddingLeft: '20px',
    paddingBottom: '10px',
  },

  filtersBtnWrapper: {},

  filtersBtn: {
    width: '100%',
    justifyContent: 'flex-start',
    padding: '15px 30px',
    '&.active': {
      backgroundColor: '#ccc',
    },
  },
}));
