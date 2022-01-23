import { Avatar, Box, Container, Paper, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import React, { useEffect, useRef } from 'react';
import useStyles from './styles';

const FormContainer = ({ children, formTitle }) => {
  const classes = useStyles();
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <Box className={classes.root} ref={scrollRef}>
      <Container component="main" maxWidth="sm">
        <Paper elevation={0}>
          <Box className={classes.wrapper}>
            <Box
              display="flex"
              alignItems="center"
              className={classes.avatarContainer}
              justifyContent="center"
            >
              <Avatar className={classes.avatar}>
                <LockOutlined />
              </Avatar>
              <Typography
                component="h3"
                variant="h5"
                className={classes.title}
                color="primary"
              >
                {formTitle}
              </Typography>
            </Box>
            {children}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default FormContainer;
