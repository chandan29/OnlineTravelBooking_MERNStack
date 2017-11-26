const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const doLogin = (payload) =>
    fetch(`${api}/login`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res);
        return res.status;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const logout = () =>
    fetch(`${api}/logout`, {
        method: 'POST',
        headers: {
            ...headers
        },
        credentials:'include'
    }).then(res => {
        return res.status;
        res.data;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

        export const getCars = (payload) =>
            fetch(`${api}/getCars`, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                },
                credentials:'include',
                body: JSON.stringify(payload)
            }).then(res => {
                return res.json();
            })
                .catch(error => {
                    console.log("This is error");
                    return error;
                });
                export const getHotels = (payload) =>
                    fetch(`${api}/getHotels`, {
                        method: 'POST',
                        headers: {
                            ...headers,
                            'Content-Type': 'application/json'
                        },
                        credentials:'include',
                        body: JSON.stringify(payload)
                    }).then(res => {
                        return res.json();
                    })
                        .catch(error => {
                            console.log("This is error");
                            return error;
                        });


        export const getFlights = (payload) =>
            fetch(`${api}/getFlights`, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(payload)
            }).then(res => {
                return res.json();
            })
                .catch(error => {
                    console.log("This is Error in fetching flights");
                    return error;
                });


        export const getCartile = (payload) =>
            fetch(`${api}/bookCar`, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                },
                credentials:'include',
                body: JSON.stringify(payload)
            }).then(res => {
                return res.json();
            })
                .catch(error => {
                    console.log("This is error");
                    return error;
                });


                export const getHoteltile = (payload) =>
                    fetch(`${api}/bookHotel
                      `, {
                        method: 'POST',
                        headers: {
                            ...headers,
                            'Content-Type': 'application/json'
                        },
                        credentials:'include',
                        body: JSON.stringify(payload)
                    }).then(res => {
                        return res.json();
                    })
                        .catch(error => {
                            console.log("This is error");
                            return error;
                        });



            export const getFlighttile = (payload) =>
                fetch(`${api}/bookFlight`,{
                    method: 'POST',
                    headers: {
                        ...headers,
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include',
                    body: JSON.stringify(payload)
                }).then(res => {
                    return res.json();
                })
                    .catch(error => {
                        console.log("there is an error in getting Flight Tile");
                        return error;
                    })

{/********************************************  Admin APIs below    ***************************************************/}

export const addCarToList = (payload) =>
    fetch(`${api}/adminAddCarToList`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const addFlightToList = (payload) =>
    fetch(`${api}/adminAddFlightToList`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });



        export const registerUser = (payload) =>
            fetch(`${api}/registerUser`, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                },
                credentials:'include',
                body: JSON.stringify(payload)
            }).then(res => {
                return res.json();
            })
                .catch(error => {
                    console.log("This is error");
                    return error;
                });



                export const loginUser = (payload) =>
                    fetch(`${api}/loginUser`, {
                        method: 'POST',
                        headers: {
                            ...headers,
                            'Content-Type': 'application/json'
                        },
                        credentials:'include',
                        body: JSON.stringify(payload)
                    }).then(res => {
                        return res.json();
                    })
                        .catch(error => {
                            console.log("This is error");
                            return error;
                        });
