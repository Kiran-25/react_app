import { Component } from "react";

import data from '../data.json'

class FetchJsonData extends Component{
    render(){
        return(
            data.map(result=>{
                return <div key={result.id}>{result.id} - {result.name}</div>
            })
        )
    }
}

export default FetchJsonData;