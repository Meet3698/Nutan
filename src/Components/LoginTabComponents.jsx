import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Form, Button} from 'react-bootstrap';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Register" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Form style={{padding:'auto'}}>
                            <Form.Group controlId="formBasicEmail">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
  </Button>
                        </Form>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Form>
                            <Form.Group controlId="formBasicEmail">
                            {/* <Form.Label> Name </Form.Label> */}
                                <Form.Control type="text" placeholder="Enter Name" style={{margin:'1%'}}/>
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Enter email" style={{margin:'1%'}}/>
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control type="password" placeholder="Password" style={{margin:'1%'}}/>
                                {/* <Form.Label>Confirm Password</Form.Label> */}
                                <Form.Control type="password" placeholder="Confirm Password" style={{margin:'1%'}}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Register
  </Button>
                        </Form>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}