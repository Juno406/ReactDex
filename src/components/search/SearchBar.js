import React, { Component, createContext, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from 'axios';
import NotFound from './../../Not Found';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';


  var axios = Axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/', 
  })
  
  const SearchBar =() => {
    const dispatch = useDispatch()
    const [name, setName] = useState(' ')
    const [id, setId] = useState(' ')
  
    const request = async () => {
      dispatch({type: 'SET_LOADING_STATE', payload: true})
      try{
        let response = await axios.get(queryDex())
        console.log(response);
        if(response.data.meta.pages_remaining !== 0){
          dispatch({type: 'SET_HAS_MORE_ITEMS_TO_LOAD', payload: true})
          dispatch({type: 'SET_NEXT_PAGE_TO_LOAD', payload: response.data.meta.next_page})
        }else{
          dispatch({type: 'SET_HAS_MORE_ITEMS_TO_LOAD', payload: false})
        }
        dispatch({type: 'UPDATE_LISTER', payload: response.data.data})
        dispatch({type: 'SET_LOADING_STATE', payload: false})
      }catch (err){
        <Route path="*" component={NotFound} />
        dispatch({type: 'SET_LOADING_STATE', payload: false})
      }
    }
  
    const queryDex = () => {
      return `pokemon/num=30&offset=0`+name+id
    }

    return (
      <div>
        <input type="text" placeholder="Pokemon"
          onChange={({target:{value}}) => setName(`&fname=${value}`)}></input>
          <button onClick={() => {request()}}>Search</button>
      </div>
    );
  } 

 
  
export default SearchBar
