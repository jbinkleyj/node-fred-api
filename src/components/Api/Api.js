import React, { Component } from 'react';
import { MenuItem, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui'
import Prism from 'prismjs';
import "./Api.css";
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import logo from '../../api/logo.png';

const style = {
    button: {
        color: 'white'
    },
    image: {
        margin: 5
    },
    header: {
        color: 'black'
    }
};

const code = Prism.highlight('import fred from node-fred;', Prism.languages.javascript);

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
                        <img alt="logo" className="logo" src={logo} />
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
                <main className="HolyGrail-content">
                     <div className="subtopics">
                        <section>
                            <h1 className="header"> Overview </h1>
                            <div className="description">
                                <p>
                                    Welcome to the Fred 2 Api. Below is a list of routes...
                                </p>
                            </div>
                        </section>
                        <section>
                            <h1 className="header"> Authentication </h1>
                            <div className="description">
                                <p>
                                    You must obtain an api key through the Fred 2 service. See this link...
                                </p>
                            </div>
                        </section>
                        <section>
                            <h1 className="header"> Category </h1>
                            <div className="description">
                                <h3> Category </h3>
                                <div> Gets all categories </div>
                                <h5> HTTP Request </h5>
                                <code className="request"> GET https://fred2.stlouis.com/categories </code>
                                <h5> Query Parameters </h5>
                                <Table>
                                    <TableHeader className="parameter-header" displaySelectAll={false} adjustForCheckbox={false}>
                                        <TableRow>
                                            <TableHeaderColumn style={style.header}>Parameter</TableHeaderColumn>
                                            <TableHeaderColumn style={style.header}>Description</TableHeaderColumn>
                                            <TableHeaderColumn style={style.header}>Type</TableHeaderColumn>
                                            <TableHeaderColumn style={style.header}>Required</TableHeaderColumn>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody displayRowCheckbox={false}>
                                        <TableRow>
                                            <TableRowColumn>category_id</TableRowColumn>
                                            <TableRowColumn>The id for a category.</TableRowColumn>
                                            <TableRowColumn>Integer</TableRowColumn>
                                            <TableRowColumn>Yes</TableRowColumn>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </section>
                     </div>
                </main>
                <aside className="HolyGrail-ads">
                    <div className="examples">
                        <code>
                            <div dangerouslySetInnerHTML={{__html: code}} />
                        </code>
                    </div>
                </aside>
            </div>
           
        );
    }
}

export default Api;
