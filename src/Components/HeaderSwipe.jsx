import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import { Menu } from 'react-feather'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    list: {
        width: '50vw',
    },
    fullList: {
        width: 'auto',
    },
});

export default function HeaderSwipe() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="ml-3">
                <List>
                    <Link className="nav-link" style={{ color: 'black' }} to="/basic">BASIC</Link>
                    <Link className="nav-link" style={{ color: 'black' }} to="/new-arrivals">NEW ARRIVALS</Link>
                    <Link className="nav-link" style={{ color: 'black' }} to="/clothing">CLOTHING</Link>
                    <Link className="nav-link" style={{ color: 'black' }} to="/">EXHIBITIONS</Link>
                </List>

            </div>
        </div>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)} style={{ width: '100%' }}><Menu /></Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}