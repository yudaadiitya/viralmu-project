import React from 'react';

export default function Detail() {
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
                                    <div class="account-menu">
                                        <h4>RUBICAMP</h4>
                                        <div class="sd_menu">
                                            <ul class="mm_menu">
                                                <li>
                                                    <span>
                                                        <i class="icon-user" />
                                                    </span>
                                                    <a href="#" title="">My Profile</a>
                                                </li>
                                                <li>
                                                    <span>
                                                        <i class="icon-logout" />
                                                    </span>
                                                    <a href="#" title="">Sign out</a>
                                                </li>
                                            </ul>
                                        </div>
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

            <div class="side_menu">
                <div class="form_dvv">
                    <a href="#" title="" class="login_form_show">Sign in</a>
                </div>
                <div class="sd_menu">
                    <ul class="mm_menu">
                        <li>
                            <span>
                                <i class="icon-home" />
                            </span>
                            <a href="#" title="">Home</a>
                        </li>
                        <li>
                            <span>
                                <i class="icon-fire" />
                            </span>
                            <a href="#" title="">Category</a>
                        </li>
                    </ul>
                </div>
                <div class="sd_menu">
                    <ul class="mm_menu">
                        <li>
                            <span>
                                <i class="icon-logout" />
                            </span>
                            <a href="#" title="">Sign out</a>
                        </li>
                    </ul>
                </div>
                <div class="sd_menu m_linkz">
                    <span>RUBICAMP Batch 23</span>
                </div>
                <div class="sd_menu bb-0">
                    <ul class="social_links">
                        <li>
                            <a href="#" title="">
                                <i class="icon-facebook-official" />
                            </a>
                        </li>
                        <li>
                            <a href="#" title="">
                                <i class="icon-twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#" title="">
                                <i class="icon-instagram" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="dd_menu"></div>
            </div>

            <section class="mn-sec">
                <div class="container">
                    <div class="row">
                        <div class="mn-vid-sc single_video">
                            <div class="vid-1">
                                <div class="vid-pr">
                                    <video id="my-video" class="video-js" controls preload="auto" width="640" height="264"
                                        poster="images/resources/poster-img.jpg" data-setup="{}">
                                        <source src="demo_video.mp4" type="video/mp4" />
                                        <source src="demo_video.webm" type="video/webm" />
                                    </video>
                                </div>
                                <div class="vid-info">
                                    <h3>Kingdom Come: Deliverance Funny Moments and Fails Compilation</h3>
                                    <div class="info-pr">
                                        <span>60,723,169 views</span>
                                        <ul class="pr_links">
                                            <li>
                                                <button data-toggle="tooltip" data-placement="top" title="I like this">
                                                    <i class="icon-thumbs_up_fill" />
                                                </button>
                                                <span>388K</span>
                                            </li>
                                            <li>
                                                <button data-toggle="tooltip" data-placement="top" title="I dislike this">
                                                    <i class="icon-thumbs_down_fill" />
                                                </button>
                                                <span>28K</span>
                                            </li>
                                        </ul>
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
                                        <p> Three years after the events of Uncharted 3: Drake's Deception, Nathan Drake,
                                        now retired as a fortune hunter, has settled into a normal life with his wife
                                        Elena Fisher. His world is then turned upside down when his older brother Sam,
										long believed to be dead, suddenly reappears seeking Drake's help. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cmt-bx">
                            <ul class="cmt-pr">
                                <li><span>18,386</span> Comments</li>
                                <li>
                                    <span><i class="icon-sort_by" /><a href="#" title="">Sort By</a></span>
                                </li>
                            </ul>
                            <div class="clearfix"></div>
                            <div class="clearfix"></div>
                            <div class="vcp_inf pc">
                                <div class="vc_hd">
                                    <img src="images/resources/th1.png" alt="" />
                                </div>
                                <form>
                                    <input type="text" placeholder="Add a public comment" />
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
                                            <div class="pinned-comment">
                                                <span><i class="icon-pinned" />Pinned by ScereBro</span>
                                            </div>
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
                                <li>
                                    <div class="vcp_inf">
                                        <div class="vc_hd">
                                            <img src="images/resources/th3.png" alt="" />
                                        </div>
                                        <div class="coments">
                                            <h2>Doge <small class="posted_dt"> . 2 hours ago</small></h2>
                                            <p>Depressive Alcoholics are my favorite superheroes </p>
                                            <ul class="cmn-i">
                                                <li>
                                                    <a href="#" title="">
                                                        <i class="icon-thumbs_up" />
                                                    </a>
                                                    <span>61</span>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <i class="icon-thumbs_down" />
                                                    </a>
                                                    <span>3</span>
                                                </li>
                                            </ul>
                                            <a href="#" title="">View all 26 replies</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="vcp_inf">
                                        <div class="vc_hd">
                                            <img src="images/resources/th4.png" alt="" />
                                        </div>
                                        <div class="coments">
                                            <h2>Juan Lacanaria <small class="posted_dt"> . 12 hours ago</small></h2>
                                            <p>Can you please say "winner winner , chicken dinner" </p>
                                            <ul class="cmn-i">
                                                <li>
                                                    <a href="#" title="">
                                                        <i class="icon-thumbs_up" />
                                                    </a>
                                                    <span>22</span>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <i class="icon-thumbs_down" />
                                                    </a>
                                                    <span></span>
                                                </li>
                                            </ul>
                                            <a href="#" title="">View all 9 replies</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="vcp_inf">
                                        <div class="vc_hd">
                                            <img src="images/resources/th5.png" alt="" />
                                        </div>
                                        <div class="coments">
                                            <h2>Comander Lucky <small class="posted_dt"> . 2 weeks ago</small></h2>
                                            <p>It looked like electro shuffle was most synced</p>
                                            <ul class="cmn-i">
                                                <li>
                                                    <a href="#" title="">
                                                        <i class="icon-thumbs_up" />
                                                    </a>
                                                    <span>37</span>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <i class="icon-thumbs_down" />
                                                    </a>
                                                    <span>3</span>
                                                </li>
                                            </ul>
                                            <a href="#" title="">View all 12 replies</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="vcp_inf">
                                        <div class="vc_hd">
                                            <img src="images/resources/th1.png" alt="" />
                                        </div>
                                        <div class="coments">
                                            <h2>Menji <small class="posted_dt"> . 1 week ago</small></h2>
                                            <p>The floss, fresh, flapper, ride the pony were all in sync if you ask me
                                            plus if they used the original music they would be copyrighted. Plus the
												original music made it worst for these dances. </p>
                                            <ul class="cmn-i">
                                                <li>
                                                    <a href="#" title="">
                                                        <i class="icon-thumbs_up" />
                                                    </a>
                                                    <span>147</span>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <i class="icon-thumbs_down" />
                                                    </a>
                                                    <span>8</span>
                                                </li>
                                            </ul>
                                            <a href="#" title="">View all 7 replies</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="vcp_inf">
                                        <div class="vc_hd">
                                            <img src="images/resources/th3.png" alt="" />
                                        </div>
                                        <div class="coments">
                                            <h2>Storax Storm <small class="posted_dt"> . 11 hours ago</small></h2>
                                            <p>Well Epic Games would have gotten Copyrighted if they used the original
												music but yea I see you</p>
                                            <ul class="cmn-i">
                                                <li>
                                                    <a href="#" title="">
                                                        <i class="icon-thumbs_up" />
                                                    </a>
                                                    <span>71</span>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <i class="icon-thumbs_down" />
                                                    </a>
                                                    <span>28</span>
                                                </li>
                                            </ul>
                                            <a href="#" title="">View all 21 replies</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="vcp_inf">
                                        <div class="vc_hd">
                                            <img src="images/resources/th2.png" alt="" />
                                        </div>
                                        <div class="coments">
                                            <h2>Nick Jacobs <small class="posted_dt"> . 6 hours ago</small></h2>
                                            <p>Electro shuffle best dance hands down </p>
                                            <ul class="cmn-i">
                                                <li>
                                                    <a href="#" title="">
                                                        <i class="icon-thumbs_up" />
                                                    </a>
                                                    <span>42</span>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <i class="icon-thumbs_down" />
                                                    </a>
                                                    <span></span>
                                                </li>
                                            </ul>
                                            <a href="#" title="">View all 32 replies</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="vcp_inf">
                                        <div class="vc_hd">
                                            <img src="images/resources/th4.png" alt="" />
                                        </div>
                                        <div class="coments">
                                            <h2>Jumpman30 <small class="posted_dt"> . 2 hours ago</small></h2>
                                            <p>bruh okay the original fresh music is the best hands down, it looks
												classy. the music they put on the fresh in fort nite makes it worse </p>
                                            <ul class="cmn-i">
                                                <li>
                                                    <a href="#" title="">
                                                        <i class="icon-thumbs_up" />
                                                    </a>
                                                    <span>48</span>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        <i class="icon-thumbs_down" />
                                                    </a>
                                                    <span>2</span>
                                                </li>
                                            </ul>
                                            <a href="#" title="">View all 3 replies</a>
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