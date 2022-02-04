import React , {Component} from "react";
import LeftNav from "../components/LeftNav";

import "./MobileView.scss"

class MobileView extends React.Component{
    state = {
        divcontainer:false,
    }
    render() {
        const handleChange = (e) => {
            this.setState({divcontainer:!this.state.divcontainer});
        }
        const x = this.state.divcontainer;
        return (
            <>
                <div className={x ? 'hamburger active' : 'hamburger '} onClick={handleChange}>
                    <span></span>
                </div>
                <LeftNav />
            </>

        )
    }
}

export default MobileView;