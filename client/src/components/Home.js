import React from 'react';

export default function Home() {
    return (
        <div class="wrapper hp_1">
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
                                                    <a href="/signout" title="">Sign out</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="/signin" title="" class="btn-default">Sign In</a>
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
            </div>

            <section class="banner-section">
                <div class="container">
                    <div class="banner-text">
                        <h2>Upload your viral video right now!</h2>
                        <a href="/register" title="">Create my account</a>
                    </div>
                </div>
            </section>

            <section class="services-sec">
                <div class="container">
                    <div class="services-row">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div class="service-col">
                                    <img src="images/sv1.png" alt="" />
                                    <h3>Get paid by your fans</h3>
                                    <p>Accept money from your fans through tips</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div class="service-col">
                                    <img src="images/sv2.png" alt="" />
                                    <h3>Grow your audience</h3>
                                    <p>Join a growing community of young millennials & get new fans.</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div class="service-col">
                                    <img src="images/sv3.png" alt="" />
                                    <h3>Simple transfer from YouTube</h3>
                                    <p>Upload your videos from YouTube with an easy link copy/paste.</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div class="service-col">
                                    <img src="images/sv4.png" alt="" />
                                    <h3>Make money with Amazon </h3>
                                    <p>Extra income through Amazon Affiliates on your channel.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="vds-main">
                <div class="vidz-row">
                    <div class="container">
                        <div class="vidz_sec">
                            <h3>Viral videos for you!</h3>
                            <div class="vidz_list">
                                <div class="row">
                                    <div class="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                                                <h3><a href="/detail" title="">Kingdom Come: Deliverance Funny Moments and Fails</a></h3>
                                                <span>686K views .<small class="posted_dt">1 week ago</small></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div class="videoo">
                                            <div class="vid_thumbainl">
                                                <a href="/detail" title="">
                                                    <img src="images/resources/vide2.png" alt="" />
                                                    <span class="vid-time">13:49</span>
                                                    <span class="watch_later">
                                                        <i class="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="video_info">
                                                <h3><a href="/detail" title="">DR DISRESPECT - Before They Were Famous - Twitch Streamer</a></h3>
                                                <span>283K views .<small class="posted_dt">3 months ago</small></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div class="videoo">
                                            <div class="vid_thumbainl">
                                                <a href="/detail" title="">
                                                    <img src="images/resources/vide3.png" alt="" />
                                                    <span class="vid-time">2:54</span>
                                                    <span class="watch_later">
                                                        <i class="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="video_info">
                                                <h3><a href="/detail" title="">Top Perectly Timed Twitch Moments 2017 #7</a></h3>
                                                <span>2.6M views .<small class="posted_dt">2 months ago</small></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div class="videoo">
                                            <div class="vid_thumbainl">
                                                <a href="/detail" title="">
                                                    <img src="images/resources/vide4.png" alt="" />
                                                    <span class="vid-time">5:25</span>
                                                    <span class="watch_later">
                                                        <i class="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="video_info">
                                                <h3><a href="/detail" title="">Top 5 Amazing Bridge Block ever in PUBG</a></h3>
                                                <span>612K views .<small class="posted_dt">5 months ago</small></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div class="videoo">
                                            <div class="vid_thumbainl">
                                                <a href="/detail" title="">
                                                    <img src="images/resources/vide5.png" alt="" />
                                                    <span class="vid-time">4:01</span>
                                                    <span class="watch_later">
                                                        <i class="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="video_info">
                                                <h3><a href="/detail" title="">Trailer Park Boys Season 12 - Official Trailer</a></h3>
                                                <span>45K views .<small class="posted_dt">3 days ago</small></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div class="videoo">
                                            <div class="vid_thumbainl">
                                                <a href="/detail" title="">
                                                    <img src="images/resources/vide6.png" alt="" />
                                                    <span class="vid-time">6:20</span>
                                                    <span class="watch_later">
                                                        <i class="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="video_info">
                                                <h3><a href="/detail" title="">A day in the life of a Google software engineer</a></h3>
                                                <span>86K views .<small class="posted_dt">6 days ago</small></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div class="videoo">
                                            <div class="vid_thumbainl">
                                                <a href="/detail" title="">
                                                    <img src="images/resources/vide7.png" alt="" />
                                                    <span class="vid-time">8:16</span>
                                                    <span class="watch_later">
                                                        <i class="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="video_info">
                                                <h3><a href="/detail" title="">Avengers: Infinity War - Gym Workout motivation 2019</a></h3>
                                                <span>144K views .<small class="posted_dt">6 days ago</small></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div class="videoo">
                                            <div class="vid_thumbainl">
                                                <a href="/detail" title="">
                                                    <img src="images/resources/vide8.png" alt="" />
                                                    <span class="vid-time">29:32</span>
                                                    <span class="watch_later">
                                                        <i class="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="video_info">
                                                <h3><a href="/detail" title="">How the Universe Works - The Milky Way Galaxy - Space</a></h3>
                                                <span>408K views .<small class="posted_dt">19 hours ago</small></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section class="more_items_sec text-center">
                        <div class="container">
                            <a href="#" title="">
                                <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.1618 24.0001H0.838235C0.374412 24.0001 0 23.6261 0 23.1628V5.86052C0 5.39727 0.374412 5.02332 0.838235 5.02332H18.1618C18.6256 5.02332 19 5.39727 19 5.86052V23.1628C19 23.6261 18.6256 24.0001 18.1618 24.0001ZM1.67647 22.3256H17.3235V6.69773H1.67647V22.3256Z" fill="#9494A0" />
                                    <g opacity="0.25">
                                        <path opacity="0.25" d="M13.1324 4.18605C12.6685 4.18605 12.2941 3.81209 12.2941 3.34884V1.67442H6.70589V3.34884C6.70589 3.81209 6.33148 4.18605 5.86765 4.18605C5.40383 4.18605 5.02942 3.81209 5.02942 3.34884V0.83721C5.02942 0.373954 5.40383 0 5.86765 0H13.1324C13.5962 0 13.9706 0.373954 13.9706 0.83721V3.34884C13.9706 3.81209 13.5962 4.18605 13.1324 4.18605Z" fill="#9494A0" />
                                    </g>
                                    <path d="M9.50001 19.3479C9.28487 19.3479 9.06972 19.267 8.90766 19.1024L5.92634 16.1275C5.59942 15.801 5.59942 15.2707 5.92634 14.9442C6.25325 14.6177 6.78413 14.6177 7.11104 14.9442L9.50001 17.3275L11.8862 14.9442C12.2131 14.6177 12.744 14.6177 13.0709 14.9442C13.3978 15.2707 13.3978 15.801 13.0709 16.1275L10.0924 19.1024C9.93031 19.267 9.71516 19.3479 9.50001 19.3479Z" fill="#9494A0" />
                                    <path d="M9.49999 18.4186C9.03617 18.4186 8.66176 18.0447 8.66176 17.5814V10.3256C8.66176 9.86236 9.03617 9.4884 9.49999 9.4884C9.96382 9.4884 10.3382 9.86236 10.3382 10.3256V17.5814C10.3382 18.0447 9.96382 18.4186 9.49999 18.4186Z" fill="#9494A0" />
                                    <g opacity="0.5">
                                        <path opacity="0.5" d="M15.6471 6.69764C15.1832 6.69764 14.8088 6.32369 14.8088 5.86043V4.18601H4.19118V5.86043C4.19118 6.32369 3.81677 6.69764 3.35294 6.69764C2.88912 6.69764 2.51471 6.32369 2.51471 5.86043V3.34881C2.51471 2.88555 2.88912 2.5116 3.35294 2.5116H15.6471C16.1109 2.5116 16.4853 2.88555 16.4853 3.34881V5.86043C16.4853 6.32369 16.1109 6.69764 15.6471 6.69764Z" fill="#9494A0" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}