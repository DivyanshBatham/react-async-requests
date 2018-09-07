import React, { Component } from 'react';
import axios from 'axios';


class Axios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: null,
            items: []
        }
    }

    componentDidMount() {
        console.log("componentDidMount");

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res);
                this.setState({
                    items: res.data.slice(0, 10),
                    isLoading: false
                })
            }).catch((err) => {
                console.log(err);
                this.setState({
                    error: 'Error ' + err.status
                })
            });
    }

    render() {
        console.log("render");
        const { error, isLoading, items } = this.state;

        // const cardList = items.map(item => {
        //     return (
        //         <div className="card" key={item.id}>
        //             <div className="card-title">
        //                 {item.Title}
        //             </div>
        //             <div className="card-body">
        //                 {item.Body}
        //             </div>
        //         </div>
        //     )
        // })

        if (error) {
            return (
                <div className="container">
                    <div className="col-12 m-4">
                        <h2>Error: {error.message}</h2>
                    </div>
                </div>
            );
        } else if (isLoading) {
            return (
                <div className="container">
                    <div className="col-12 m-4">
                        <h2>Loading..</h2>
                    </div>
                </div>
            );
        } else {
            return (
                items.map(item => {
                    return (
                        <div className="container">
                            <div className="col-12 m-4">
                                <div className="card" style={{ width: '60%' }} key={item.id}>
                                    <div className="card-title">
                                        {item.title}
                                    </div>
                                    <div className="card-body">
                                        {item.body}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }

    }
}

export default Axios;