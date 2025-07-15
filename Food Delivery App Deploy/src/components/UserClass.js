import React from "react";


class UserClass extends React.Component {

    constructor(props) {
        super(props);

        // console.log(props);

        // this.state = {
        //     count: 0,
        //     count2: 2
        // };
        // console.log(this.props.name + "Child Constructor");


        //displaying information

        this.state = {
            userInfo: {
                name: "Default",
                location: "Default",
            }
        }
    }

    async componentDidMount() {
        // console.log('Child component did mount');
        //API call

        const data = await fetch("https://api.github.com/users/Deepanker200");
        const json = await data.json();     //data.json is an asynchronous operation


        //this.state again re-renders the updated cycle
        this.setState({
            userInfo: json,
        });

        console.log(json);
    }

    componentDidUpdate(){
        console.log("Component Did Update called");
    }

    componentWillUnmount(){
        console.log("Component will unmount");
        
    }

    render() {
        //destructing
        // const { location } = this.props;
        // const { count } = this.state
        // console.log("Child Render")
        const { name,location,avatar_url } = this.state.userInfo;

        return (
            <div className='user-card'>
                {/* <h1>Count: {count}</h1> */}
                {/* <button onClick={() => {
                    //Never update state variable directly
                    this.setState({
                        count: count + 1
                    })
                }}>
                    Count Increase
                </button> */}

                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: Deepanker200</h4>
            </div>
        )
    }
}

export default UserClass;