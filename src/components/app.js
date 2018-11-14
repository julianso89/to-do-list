import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../assets/css/app.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import List from './list';
import AddItem from './add_item';

const BASE_URL = 'http://api.reactprototypes.com/todos';
const API_KEY = '?key=julianskey';



class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            list: [],
            error: ''
        }
    }

    deleteItem = async (id) => {

        await axios.delete(`${BASE_URL}/${id + API_KEY}`);

        this.getListData();
    }


    addItem = async (item) => {
        const resp = await axios.post(BASE_URL + API_KEY, item);

        this.getListData();
    }

    componentDidMount(){
        this.getListData();
    }

    //    BELOW IS THE .THEN WAY TO DO AN AXIOS CALL

    // getListData(){
    //     axios.get(BASE_URL + API_KEY).then((resp) => {
    //         this.setState({
    //             list: resp.data.todos
    //         });
    //      }).catch((err) => {
    //             this.setState({
    //                 error: 'Error getting todos'
    //             });
    //         });
    // }

    // BELOW IS THE WAY TO USE ASYNC/AWAIT

    async getListData() {
        //await waits for the data to be returned, then stores it in resp.
        //then setState is set.
        try {
            const resp = await axios.get(BASE_URL + API_KEY);

            this.setState({
                list: resp.data.todos
            })
        } catch (err) {
            this.setState({
                error: 'Errors getting todos'
            });
        }
    }


    render(){

        const { error, list } = this.state;

        return (
            <div className="container">

                <Route exact path="/" render={() => {
                    return <List delete={this.deleteItem} data={list} error={error}/>
                }}/>   

                 <Route path="/add-item" render={() => {
                    return <AddItem add={this.addItem} />
                }}/>  


            </div>
        );
    };
}

export default App;
