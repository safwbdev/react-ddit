import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Reddit from '@material-ui/icons/Reddit';
import {Container} from '@material-ui/core'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <AppBar 
                className="navigation"
                position="static">
                <Container>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" className="nav-icon">
                            <Reddit />
                        </IconButton>
                        <Typography variant="h6">
                            reddit Clone
                        </Typography>
                        <Link to="/">
                            <Button color="inherit" >Home</Button>
                        </Link>
                        <Link to="/saved">
                            <Button color="inherit" >Saved</Button>
                        </Link>
                        <Link to="/submit">
                            <Button color="inherit" >Create</Button>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        )
    }
}
