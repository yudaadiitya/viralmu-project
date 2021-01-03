import React, { Component } from 'react'
import { connect } from 'react-redux';

class ItemVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }

    render() {
        let { title, description } = this.props;

        return (
            <div class="videoo">
                <div class="vid_thumbainl">
                    <a href="/detail" title="">
                        <img src="images/resources/vide1.png" alt="" />
                        <span class="vid-time">10:21</span>
                        <span class="watch_later">
                            <i class="icon-watch_later_fill" />
                        </span>
                    </a>
                </div>
                <div class="video_info">
                    <h3><a href="/detail" title="">{title}</a></h3>
                    <span>686K views .<small class="posted_dt">1 week ago</small></span>
                    <span>{description}</span>
                </div>
            </div>
        )
    }
}

export default ItemVideo;