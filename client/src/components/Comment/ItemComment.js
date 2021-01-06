import React, { Component } from 'react'

class ItemComment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { comment } = this.props

        return (
            <li>
                <div class="vcp_inf">
                    <div class="vc_hd">
                        <img src="images/resources/th2.png" alt="" />
                    </div>
                    <div class="coments">
                        {/* <h2>ScereBro <small class="posted_dt"> . 18 hours ago</small></h2> */}
                        <p>{comment}</p>
                    </div>
                </div>
            </li>
        )
    }
}

export default ItemComment;