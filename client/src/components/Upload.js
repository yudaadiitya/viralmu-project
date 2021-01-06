import React from 'react';
import { connect } from 'react-redux';
import { postVideo } from '../actions/videos';
import { signout } from '../actions/users';
import Swal from 'sweetalert2';

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            url: '',
            category: ''
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeUrl = this.handleChangeUrl.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleChangeTitle(event) {
        this.setState({ title: event.target.value });
    }

    handleChangeDescription(event) {
        this.setState({ description: event.target.value });
    }

    handleChangeUrl(event) {
        this.setState({ url: event.target.value });
    }

    handleChangeCategory(event) {
        this.setState({ category: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addVideo(this.state.title, this.state.description, this.state.url, this.state.category);
        if (!this.state.category) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Category is already exist!',
            })
        } else {
            Swal.fire(
                'Good job!',
                'Your video is successfully upload!',
                'success'
            )
        }
        this.setState({ title: '', description: '', url: '', category: '' })
    }

    handleLogout(){
        this.props.logout()
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
                                <ul class="controls-lv">
                                    <li class="user-log">
                                        <div class="user-ac-img">
                                            <img src="images/resources/user-img.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                    <button type="submit" onClick={this.handleLogout} title="" class="btn-default">Sign Out</button>
                                    </li>
                                </ul>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </header>

                <section class="banner-section p120" style={{ backgroundImage: `url("https://phinemo.com/wp-content/uploads/2018/01/tips-videografi-1024x481.jpg")` }}>
                    <div class="container">
                        <div class="banner-text">
                            <h2>Upload your video here</h2>
                            <p>Copy / paste your video link and please fill the form</p>
                        </div>
                    </div>
                </section>

                <section class="vid-title-sec">
                    <div class="container">
                        <form onSubmit={this.handleSubmit}>
                            <div class="vid-title">
                                <h2 class="title-hd">Video Title </h2>
                                <div class="form_field">
                                    <input
                                        type="text"
                                        placeholder="Add your video title here"
                                        name="title"
                                        value={this.state.title}
                                        onChange={this.handleChangeTitle}
                                    />
                                </div>
                            </div>
                            <div class="abt-vidz-pr">
                                <h2 class="title-hd"> Description </h2>
                                <div class="form_field">
                                    <textarea
                                        type="text"
                                        placeholder="Add your video description here"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.handleChangeDescription}
                                    />
                                </div>
                            </div>
                            <div class="vid-title">
                                <h2 class="title-hd">Video URL </h2>
                                <div class="form_field">
                                    <input
                                        type="text"
                                        placeholder="Copy / Paste your video link here"
                                        name="url"
                                        value={this.state.url}
                                        onChange={this.handleChangeUrl}
                                    />
                                </div>
                            </div>
                            <div class="category">
                                <h2 class="title-hd">Category</h2>
                                <div class="category-typ">
                                    <div class="clearfix"></div>
                                    <div class="form_field">
                                        <input
                                            type="text"
                                            placeholder="Create your own category here"
                                            name="category"
                                            value={this.state.category}
                                            onChange={this.handleChangeCategory}
                                        />
                                    </div>
                                    <div class="btn-sbmit">
                                        <button type="submit">Upload</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>

                <section class="suggestions">
                    <div class="container">
                        <div class="sgst_content">
                            <h3>Important!</h3>
                            <p>Every video that you upload will be verified first by the administrator.<br />
                                You will be notified if your video has been published successfully. Have a nice day!</p>
                        </div>
                    </div>
                </section>

                <footer>
                    <div class="container">
                        <div class="top-footer">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="ft-logo">
                                        <img src="images/ft-logo.png" alt="" />
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-6 col-12">
                                    <div class="widget widget-information">
                                        <h3 class="widget-title">Information</h3>
                                        <p>Oren is a video sharing platform created for the discovery & promotion of content
                                        creators. It's home to breaking news in social media, & urban cultural
									entertainment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bottom-strip">
                            <p>© RUBICAMP Batch 23 <i class="icon-like"></i> Made in Indonesia</p>
                            <ul class="social-links">
                                <li><a href="#" title=""><i class="icon-facebook-official"></i></a></li>
                                <li><a href="#" title=""><i class="icon-twitter"></i></a></li>
                                <li><a href="#" title=""><i class="icon-instagram"></i></a></li>
                            </ul>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addVideo: (title, description, url, category) => dispatch(postVideo(title, description, url, category)),
    logout: () => dispatch(signout())
})

export default connect(
    null,
    mapDispatchToProps
)(Upload)