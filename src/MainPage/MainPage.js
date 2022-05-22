import React from "react";
import classes from "./MainPage.module.css";
import {News} from "../News/News"


class MainPage extends React.Component{
    constructor(props) {
        super(props);
        this.title = "News"
        this.state ={status:false}
        this.closeBox = this.closeBox.bind(this)
    }

    closeBox () {
        this.setState({status: !this.state.status})
    }

    render() {
        return(

            <div>
                <h2 className={classes.word}>Page with {this.title}</h2>
                {this.state.status === true ?   <News/> : ""}
        <div className={classes.second}>
                <button className={classes.menu} onClick={this.closeBox}>
                    News
                </button>
        </div>
            </div>
        )
    }
}

export default MainPage;