import React, { Component } from 'react';
import { Drawer, MenuItem, Paper } from 'material-ui'
import "./Api.css";
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

const style = {
  display: 'inline-block',  
  margin: '16px 32px 16px 0'
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
                <main className ="HolyGrail-content">
                     <Paper style={style}>
                        <Drawer open={this.state.open}>
                            <h1> Fred Database </h1>
                            <MenuItem
                                primaryText="Category"
                                rightIcon={<ArrowDropRight />}
                                className="topics"
                                menuItems={[
                                    <MenuItem>Category</MenuItem>,
                                    <MenuItem>Child Categories</MenuItem>,
                                    <MenuItem>Related Categories</MenuItem>
                                ]}
                            />
                            <MenuItem className="topics">Related Tags</MenuItem>
                            <MenuItem className="topics">Release</MenuItem>
                            <MenuItem className="topics">Releases</MenuItem>
                            <MenuItem className="topics">Series</MenuItem>
                            <MenuItem className="topics">Source</MenuItem>
                        </Drawer>
                    </Paper>
                </main>
                <nav className="HolyGrail-nav">World</nav>
                <aside className="HolyGrail-ads">Examples</aside>
            </div>
           
        );
    }
}

export default Api;
