import React, { Component } from 'react';
import ItemVideo from './ItemVideo';
import { connect } from 'react-redux';
import { loadVideo } from '../actions/videos'

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
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
            />
        )

        return (
            <div class="vidz_list">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                        {listNode}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    video: state.video
})

const mapDispatchToProps = (dispatch) => ({
    getVideo: () => dispatch(loadVideo())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListVideo)