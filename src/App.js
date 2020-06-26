import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './pages/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout className="pages">
        <Header style={{boxShadow: "0 5px 2px -2px white"}} className="header" title={<Link style={{color: 'black',textDecoration: 'none', fontFamily: 'Open Sans Condensed'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation >
                <Link style={{color: "black"}} to="/resume">Resume</Link>
                <Link style={{color: "black"}}to="/aboutme">About Me</Link>
                <Link style={{color: "black"}}to="/projects">Projects</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black', fontFamily: 'Open Sans Condensed'}} to="/">MyPortfolio</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
