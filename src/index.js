import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from "youtube-api-search";

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from "./components/video_details";
import {API_KEY} from "./constants";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedvideo: ''
        };
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            console.log(videos);
            this.setState({videos: videos, selectedvideo: videos[0]});
        });

    }

    /*function tick() {
    const element = (
        <div>
            <h4>It is {new Date().toLocaleTimeString()}.</h4>
        </div>
    );
        ReactDOM.render(
            element,
            document.getElementById('root')
        );
    }*/
    render() {
        return (
            <div>
                <div className="letter">
                    <SearchBar onSearchTermChange={this.videoSearch.bind(this)}/>
                </div>
                <br/>
                {/*setInterval(tick, 1000);*/}
                {/*<h2>It is {new Date().toLocaleTimeString()}.</h2>*/}
                <VideoDetails video={this.state.selectedvideo}/>
                <VideoList videos={this.state.videos}
                           onVideoSelect={(video) => {
                               this.setState({selectedvideo: video});
                           }}
                           videos={this.state.videos}
                />
            </div>
        );
    }
}
ReactDOM.render(<App/>, document.querySelector('.container'));
//ReactDOM.render(<App/>,document.getElementsByClassName('container')[0]);
