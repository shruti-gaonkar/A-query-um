import React, { useEffect } from 'react';
import API from "../utils/API";

function ListContainer() {
    useEffect(() => {
        loadResults();
    });

    const loadResults = () => {
        API.list()
            .then(res => {
                console.log(res);
                //this.setState({ books: res.data.items })
            })

            .catch(err => console.log(err));
    }

    return (
        <div>Welcome to search!!!!!</div>
    );
}

export default ListContainer;