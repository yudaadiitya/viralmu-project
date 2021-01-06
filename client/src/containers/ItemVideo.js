import React, { Component } from 'react'
import ReactPlayer from 'react-player/youtube'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class ItemVideo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { _id, title, description, url, viewVideo } = this.props;

        return (
            <div class="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                <div class="videoo">
                    <div class="vid_thumbainl">
                        <Link to={`/detail`} title="" >
                            <ReactPlayer
                                className='react-player'
                                url={url}
                                width='100%'
                                height='100%'
                            />
                        </Link>
                    </div>
                    <div class="video_info">
                        <h3><Link to={`/detail`} title="" onClick={viewVideo}>{title}</Link></h3>
                        <h5><Link to={`/detail`} title="">{description}</Link></h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemVideo;