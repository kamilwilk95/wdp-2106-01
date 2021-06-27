import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import styles from './Summary.module.scss';

const AntTabs = withStyles({
  indicator: {
    backgroundColor: '#ffffff',
  },
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    borderRight: '1px solid #b6b6b6',
    borderBottom: '1px solid #b6b6b6',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'black',
    minWidth: 72,
    fontWeight: 700,
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&$selected': {
      color: '#d58e32',
      fontWeight: 700,
      borderBottom: '1px solid #000000',
    },
    '&:focus': {
      color: '#d58e32',
      borderBottom: 'none',
    },
  },
  selected: {},
}))(props => <Tab disableRipple {...props} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
}));

export default function Summary({
  tab1,
  tab2,
  tab3,
  tab4,
  inner1,
  inner2,
  inner3,
  inner4,
}) {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
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
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label='ant example'>
          <AntTab label={tab1} />
          <AntTab label={tab2} />
          <AntTab label={tab3} />
          <AntTab label={tab4} />
        </AntTabs>
        <Typography className={classes.padding} />
      </div>
      <TabPanel className={styles.tabInner} value={value} index={0}>
        <span>{inner1}</span>
      </TabPanel>
      <TabPanel className={styles.tabInner} value={value} index={1}>
        <span>{inner2}</span>
      </TabPanel>
      <TabPanel className={styles.tabInner} value={value} index={2}>
        <span>{inner3}</span>
      </TabPanel>
      <TabPanel className={styles.tabInner} value={value} index={3}>
        <span>{inner4}</span>
      </TabPanel>
    </div>
  );
}

Summary.propTypes = {
  tab1: PropTypes.string,
  tab2: PropTypes.string,
  tab3: PropTypes.string,
  tab4: PropTypes.string,
  inner1: PropTypes.string,
  inner2: PropTypes.string,
  inner3: PropTypes.string,
  inner4: PropTypes.string,
};
