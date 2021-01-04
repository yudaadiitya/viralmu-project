import React, { Component } from 'react';
import { viewVideo } from '../actions/videos';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player/youtube';
import detailVideo from '../reducers/DetailVideo';

class Detail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.viewVideo(this.props.match.params._id);
    }

    render() {
        return (
            <div class="wrapper">
                <header>
                    <div class="top_bar">
                        <div class="container">
                            <div class="top_header_content">
                                <div class="menu_logo">
                                    <a href="/" title="" class="logo">
                                        <img src="images/logo.png" alt="" />
                                    </a>
                                </div>
                                <div class="search_form">
                                    <form>
                                        <input type="text" name="search" placeholder="Search Videos" />
                                        <button type="submit">
                                            <i class="icon-search" />
                                        </button>
                                    </form>
                                </div>
                                <ul class="controls-lv">
                                    <li class="user-log">
                                        <div class="user-ac-img">
                                            <img src="images/resources/user-img.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <a href="Upload_Video.html" title="" class="btn-default">Sign In</a>
                                    </li>
                                </ul>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </header>

                <section class="mn-sec">
                    <div class="container">
                        <div class="row">
                            <div class="mn-vid-sc single_video">
                                <div class="vid-1">
                                    <div class="vid-pr">
                                        <video id="my-video" class="video-js" controls preload="auto" width="640" height="264" data-setup="{}">
                                            <ReactPlayer
                                                className='react-player'
                                                url={this.props.detailVideo.url}
                                                width='100%'
                                                height='100%'
                                            />
                                        </video>
                                    </div>
                                    <div class="vid-info">
                                        <h3>{this.props.video.title}</h3>
                                        <div class="info-pr">
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="abt-mk">
                                    <div class="info-pr-sec">
                                        <div class="vcp_inf cr">
                                            <div class="vc_hd">
                                                <img src="images/resources/th5.png" alt="" />
                                            </div>
                                            <div class="vc_info pr">
                                                <h4><a href="#" title="">Ade Sugiono</a></h4>
                                                <span>Published on Oct 22, 2017</span>
                                            </div>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="about-ch-sec">
                                        <div class="abt-rw">
                                            <h4>Description : </h4>
                                            <p>{this.props.video.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cmt-bx">
                                <div class="clearfix"></div>
                                <div class="clearfix"></div>
                                <div class="vcp_inf pc">
                                    <div class="vc_hd">
                                        <img src="images/resources/th1.png" alt="" />
                                    </div>
                                    <form>
                                        <input type="text" placeholder="Type your comments" />
                                        <button type="submit">Comment</button>
                                    </form>
                                    <div class="clearfix"></div>
                                    <div class="rt-cmt">
                                        <a href="#" title="">
                                            <i class="icon-cancel" />
                                        </a>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                                <ul class="cmn-lst">
                                    <li>
                                        <div class="vcp_inf">
                                            <div class="vc_hd">
                                                <img src="images/resources/th2.png" alt="" />
                                            </div>
                                            <div class="coments">
                                                <h2>ScereBro <small class="posted_dt"> . 18 hours ago</small></h2>
                                                <p>Where does Thor: Ragnarok rank amongst the other Thor movies? Amongst the
                                                rest of the MCU? Let us know in the comments below and tell us which
												other movies you'd like to see us make Honest.</p>
                                                <ul class="cmn-i">
                                                    <li>
                                                        <a href="#" title="">
                                                            <i class="icon-thumbs_up" />
                                                        </a>
                                                        <span>680</span>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="">
                                                            <i class="icon-thumbs_down" />
                                                        </a>
                                                        <span>21</span>
                                                    </li>
                                                </ul>
                                                <a href="#" title="">View all 164 replies</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="more_items_sec text-center">
                    <div class="container">
                        <a href="#" title="">
                            <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.1618 24.0001H0.838235C0.374412 24.0001 0 23.6261 0 23.1628V5.86052C0 5.39727 0.374412 5.02332 0.838235 5.02332H18.1618C18.6256 5.02332 19 5.39727 19 5.86052V23.1628C19 23.6261 18.6256 24.0001 18.1618 24.0001ZM1.67647 22.3256H17.3235V6.69773H1.67647V22.3256Z"
                                    fill="#9494A0" />
                                <g opacity="0.25">
                                    <path opacity="0.25"
                                        d="M13.1324 4.18605C12.6685 4.18605 12.2941 3.81209 12.2941 3.34884V1.67442H6.70589V3.34884C6.70589 3.81209 6.33148 4.18605 5.86765 4.18605C5.40383 4.18605 5.02942 3.81209 5.02942 3.34884V0.83721C5.02942 0.373954 5.40383 0 5.86765 0H13.1324C13.5962 0 13.9706 0.373954 13.9706 0.83721V3.34884C13.9706 3.81209 13.5962 4.18605 13.1324 4.18605Z"
                                        fill="#9494A0" />
                                </g>
                                <path
                                    d="M9.50001 19.3479C9.28487 19.3479 9.06972 19.267 8.90766 19.1024L5.92634 16.1275C5.59942 15.801 5.59942 15.2707 5.92634 14.9442C6.25325 14.6177 6.78413 14.6177 7.11104 14.9442L9.50001 17.3275L11.8862 14.9442C12.2131 14.6177 12.744 14.6177 13.0709 14.9442C13.3978 15.2707 13.3978 15.801 13.0709 16.1275L10.0924 19.1024C9.93031 19.267 9.71516 19.3479 9.50001 19.3479Z"
                                    fill="#9494A0" />
                                <path
                                    d="M9.49999 18.4186C9.03617 18.4186 8.66176 18.0447 8.66176 17.5814V10.3256C8.66176 9.86236 9.03617 9.4884 9.49999 9.4884C9.96382 9.4884 10.3382 9.86236 10.3382 10.3256V17.5814C10.3382 18.0447 9.96382 18.4186 9.49999 18.4186Z"
                                    fill="#9494A0" />
                                <g opacity="0.5">
                                    <path opacity="0.5"
                                        d="M15.6471 6.69764C15.1832 6.69764 14.8088 6.32369 14.8088 5.86043V4.18601H4.19118V5.86043C4.19118 6.32369 3.81677 6.69764 3.35294 6.69764C2.88912 6.69764 2.51471 6.32369 2.51471 5.86043V3.34881C2.51471 2.88555 2.88912 2.5116 3.35294 2.5116H15.6471C16.1109 2.5116 16.4853 2.88555 16.4853 3.34881V5.86043C16.4853 6.32369 16.1109 6.69764 15.6471 6.69764Z"
                                        fill="#9494A0" />
                                </g>
                            </svg>
                        </a>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    detailVideo: state.detailVideo
})

const mapDispatchToProps = (dispatch) => ({
    viewVideo: (_id) => dispatch(viewVideo(_id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail)