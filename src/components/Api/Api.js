import React, { Component } from 'react';
import { Drawer, MenuItem, Paper, FlatButton, Avatar } from 'material-ui'
import "./Api.css";
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import logo from '../../api/logo.png';

const style = {
    button: {
        color: 'white'
    },
    image: {
        margin: 5
    }
};

class Api extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }

    render() {
        return (
            <div className="HolyGrail-body">
                <nav className="HolyGrail-nav">
                    <div className="topics">
                        <img className="logo" src={logo} />
                        <h2 className="title"> Fred 2 Database Api </h2>
                        <MenuItem
                            primaryText="Category"
                            style={style.button}
                            rightIcon={<ArrowDropRight />}
                            menuItems={[
                                <MenuItem>Category</MenuItem>,
                                <MenuItem>Child Categories</MenuItem>,
                                <MenuItem>Related Categories</MenuItem>
                            ]}
                        />
                        <MenuItem style={style.button}>Related Tags</MenuItem>
                        <MenuItem style={style.button}>Release</MenuItem>
                        <MenuItem style={style.button}>Releases</MenuItem>
                        <MenuItem style={style.button}>Series</MenuItem>
                        <MenuItem style={style.button}>Source</MenuItem>
                    </div>
                </nav>
                <main className ="HolyGrail-content">
                     <div className="subtopics">
                     
                     </div>
                </main>
                <aside className="HolyGrail-ads">
                    <div className="examples">
                    
                    </div>
                </aside>
            </div>
           
        );
    }
}

export default Api;
