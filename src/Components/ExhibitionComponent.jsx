import React,{Component} from 'react'
import Storage from '../Storage'

class ExhibitionComponent extends Component{
    componentDidMount(){
        Storage.setPath("/exhibition")
    }
    render(){
        return(
            <div className="mainContainer">
                <h1>Exhibition</h1>
            </div>
        )
    }
}

export default ExhibitionComponent