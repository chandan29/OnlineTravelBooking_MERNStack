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

                    export const getAdminBills = (payload) =>
                fetch(`${api}/getAdminBills`, {
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

{/********************************************  Admin SWAPNIL APIs START below    ***************************************************/}

{/********************************************  Admin APIs below    ***************************************************/}




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
{/********************************************  Admin Add List APIs below    ***************************************************/}
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



export const addHotelToList = (payload) =>
    fetch(`${api}/adminAddHotelToList`, {
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



{/********************************************  Admin Fetch List APIs below    ***************************************************/}

export const getAdminCars = (payload) =>
    fetch(`${api}/getAdminCars`, {
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

export const getAdminFlights = (payload) =>
    fetch(`${api}/getAdminFlights`, {
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

export const getAdminHotels = (payload) =>
    fetch(`${api}/getAdminHotels`, {
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



export const getAdminBills2 = (payload) =>
    fetch(`${api}/getAdminBills2`, {
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



export const getAdminBillDetail = (payload) =>
    fetch(`${api}/getAdminBillDetail`, {
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

export const getAdminUsers = (payload) =>
    fetch(`${api}/getAdminUsers`, {
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


export const getAdminCarArray = (payload) =>
    fetch(`${api}/getAdminCarArray`, {
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


export const getAdminFlightArray = (payload) =>
    fetch(`${api}/getAdminFlightArray`, {
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

export const getAdminHotelArray = (payload) =>
    fetch(`${api}/getAdminHotelArray`, {
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

export const getAdminUserDetail = (payload) =>
    fetch(`${api}/getAdminUserDetail`, {
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

{/********************************************  Admin Modify List APIs below    ***************************************************/}

export const modifyCarToList = (payload) =>
    fetch(`${api}/adminModifyCarToList`, {
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

export const modifyFlightToList = (payload) =>
    fetch(`${api}/adminModifyFlightToList`, {
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



export const modifyHotelToList = (payload) =>
    fetch(`${api}/adminModifyHotelToList`, {
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


export const modifyAdminUserDetail = (payload) =>
    fetch(`${api}/modifyAdminUserDetail`, {
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

{/********************************************  Admin Delete  APIs below    ***************************************************/}


export const deleteAdminUser = (payload) =>
    fetch(`${api}/deleteAdminUser`, {
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

export const deleteCarFromList = (payload) =>
    fetch(`${api}/deleteCarFromList`, {
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


export const deleteFlightFromList = (payload) =>
    fetch(`${api}/deleteFlightFromList`, {
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

export const deleteHotelFromList = (payload) =>
    fetch(`${api}/deleteHotelFromList`, {
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
{/********************************************  UserProfile  APIs below    ***************************************************/}

/*export const uploadFile = (payload) =>
    fetch(`${api}/upload`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        return res.status;
    }).catch(error => {
        console.log("This is error");
        return error;
    });*/
/*export const getImages = (payload) =>
    fetch(`${api}/getImg`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .catch(error => {
            console.log("This is error.");
            return error;
        })*/

export const uploadFile = (payload) =>
    fetch(`${api}/upload`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        return res.status;
    }).catch(error => {
        console.log("This is error");
        return error;
    });
export const getImages = () =>
    fetch(`${api}/getImg`,{
    method: 'GET',
        headers: {
    ...headers,
            'Content-Type': 'application/json'
    },
    credentials:'include'
    }).then(res => res.json())
        .catch(error => {
            console.log("This is error.");
            return error;
        });

export const doAdminLogin = (payload) =>
    fetch(`${api}/adminLogin`, {
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

{/********************************************  Admin SWAPNIL APIs END below    ***************************************************/}
export const getRevenuepercity = (payload) =>
    fetch(`${api}/getRevenuepercity`, {
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

        export const getClicksPerPage = (payload) =>
            fetch(`${api}/getClicksPerPage`, {
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


                export const getTrace= (payload) =>
                    fetch(`${api}/getTrace`, {
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


                        export const getTenProperties= (payload) =>
                            fetch(`${api}/getTenProperties`, {
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



                                export const getUserDetails= (payload) =>
                                    fetch(`${api}/getUserDetails`, {
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


                                        export const profileUpload= (payload) =>
                                            fetch(`${api}/profileUpload`, {
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


                                                export const profilepicture = (payload) =>
                                                    fetch(`${api}/profilepicture`, {
                                                        method: 'POST',
                                                        headers: {
                                                            ...headers,
                                                        },
                                                        body:payload,
                                                        credentials: 'include'
                                                    }).then(res => {
                                                        return res;
                                                    }).catch(error => {
                                                        console.log("This is error");
                                                        return error;
                                                    });

                                                    export const getUsername= (payload) =>
                                                        fetch(`${api}/getUsername`, {
                                                            method: 'POST',
                                                            headers: {
                                                                ...headers,
                                                            },
                                                            body:payload,
                                                            credentials: 'include'
                                                        }).then(res => {
                                                            return res.json();
                                                        }).catch(error => {
                                                            console.log("This is error");
                                                            return error;
                                                        });


                                                        export const getClickStream= (payload) =>
                                                            fetch(`${api}/getClickStream`, {
                                                                method: 'POST',
                                                                headers: {
                                                                    ...headers,
                                                                },
                                                                body:payload,
                                                                credentials: 'include'
                                                            }).then(res => {
                                                                return res.json();
                                                            }).catch(error => {
                                                                console.log("This is error");
                                                                return error;
                                                            });





                                                                export const handleDeleteAccount= (payload) =>
                                                                    fetch(`${api}/handleDeleteAccount`, {
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
