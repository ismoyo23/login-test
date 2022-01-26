import React, {Component} from 'react'
import { observer } from 'mobx-react';
import {TodoStore} from '../store/Todo'
import { extendObservable } from 'mobx';
import PropTypes from 'prop-types'

const HomePage = observer(class HomePage extends Component {


    static propTypes = {
        store: PropTypes.object.isRequired
      };
     
      constructor() {
        super();
        this.todoStore = new TodoStore();
        
      }

    
          
            
          
     
    render(){
    return(
      
        <div class="card">
            <h5 class="card-header">Hallo {this.todoStore.email}</h5>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button  class="btn btn-primary" onClick={this.remove}>Remove session</button>
            </div>
            </div>
           
    )
}

remove(e){
  
    localStorage.removeItem("Email");
    localStorage.removeItem("AccessToken");
    window.location.reload();

    
   
    
}
})
export default HomePage
