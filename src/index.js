import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import Auth from './components/auth';
import BucketlistView from './components/bucketlist';

class Bucket extends React.Component {
    render(){
        return (
            <div>
                <Header />
                <Auth />
            </div>
        )
    }
}

ReactDOM.render(<Bucket/>, document.querySelector('#root'));