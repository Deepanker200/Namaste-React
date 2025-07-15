import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {

    constructor(props) {
        super(props);

        // console.log("Parent Constructor");

    }

    //it is used to make an API call- because we want to render our component at first just like useEffect in functional component
    componentDidMount() {
        // console.log('Parent component did mount');
    }

    render() {
        // console.log("Parent Render");

        return (
            <div>
                <h1>About Class Component</h1>
                <div>
                    LoggedIn User:
                    <UserContext.Consumer>
                        {({loggedInUser})=><h1>{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is About Page of this project</h2>
                {/* <User name={"Deepanker {function}"}/> */}
                <UserClass name={"Deepanker Tiwari {class}"} location="{Delhi}" />
                {/* <UserClass name={"Elon Musk {class}"} location="{US}" /> */}
            </div>
        )
    }
}

export default About;