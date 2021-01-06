import React, { Component } from 'react';
import ItemVideo from './ItemVideo';
import { connect } from 'react-redux';
import { loadVideo, viewVideo } from '../actions/videos'
import Detail from '../components/Detail';

class ListVideo extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getVideo();
    }

    render() {
        let { video } = this.props;

        const listNode = video.map((item, index) =>
            <ItemVideo
                index={index + 1}
                key={item._id}
                _id={item._id}
                title={item.title}
                description={item.description}
                url={item.url}
                viewVideo={() => this.props.viewVideo(item)}
            />
        )

        return (
            <div class="vidz_list">
                <div class="row">
                    {listNode}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    video: state.video
})

const mapDispatchToProps = (dispatch) => ({
    getVideo: () => dispatch(loadVideo()),
    viewVideo: (video) => dispatch(viewVideo(video))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListVideo)