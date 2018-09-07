import React, { Component } from 'react';

class Fetch extends Component {
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

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoading: false,
                        items: result.slice(0, 10)
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoading: false,
                        error
                    });
                }
            )

    }

    render() {
        console.log("render");
        const { error, isLoading, items } = this.state;
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
                <div className="container">
                    <div className="col-12 m-4">
                        <ul>
                            {items.map(item => (
                                <li key={item.id}>
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            );

        }

    }
}

export default Fetch;