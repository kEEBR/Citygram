import * as React from "react"
import Header from "./Header";
import Content from "./Content";
class MainPage extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div>
                <Header/>
                <Content/>
                </div>
            </React.Fragment>
        )
    }
}

export default MainPage;