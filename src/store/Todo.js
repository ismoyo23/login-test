/**
 * https://www.sulaeman.com/mencoba-memakai-mobx-dengan-react-untuk-pengganti-redux-biar-gak-nambah-pusing
 *
 * Author © 2017 Sulaeman <me@sulaeman.com>. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

 import { extendObservable } from 'mobx';
 import uuid from 'node-uuid';
 import axios from 'axios'
 
 /**
  * The Todo item.
  */
 export class Todo {
 
   /**
    * unique id of this todo, immutable.
    */
   id = null;
 
   parent = null;
 
   constructor(parent, id = uuid.v4()) {
     extendObservable(this, {
       data: {},
       isLoading: false
     });
 
     this.parent = parent;
     this.id = id;
   }
 
   update(json) {
     this.data = json;
   }
 
   delete() {
     this.parent.removeItem(this);
   }
 
   startLoading() {
     this.isLoading = true;
   }
 
   stopLoading() {
     this.isLoading = false;
   }
 
 }
 
 /**
  * The Todo Store.
  */
 export class TodoStore {
 
   constructor() {
     extendObservable(this, {
       email: `${localStorage.getItem('Email')}`,
       AccessToken: `${localStorage.getItem('AccessToken')}`,
       isLoading: false,
       get total() {
         return this.items.length;
       }
     });
   }

   create(data, callback) {
    this.startLoading();

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL}login`,
      data: {
        email: data.email,
        password: data.password
      }
    })
      .then((response) => {
        localStorage.setItem('Email', response.data.data[0].email);
        localStorage.setItem('AccessToken', response.data.data[0].AccessToken);
        
      })
      .catch((error) => {
        console.log({
          email: data.email,
          password: data.password
        });
      });

    if (callback) {
      callback();
    }

    this.stopLoading();
  }
 
   load(params) {
     this.emptyItems();
     this.startLoading();
   }
 
 
 
   removeItem(item) {
     this.items.splice(this.items.indexOf(item), 1);
   }
 
   emptyItems() {
     this.items = [];
   }
 
   startLoading() {
     this.isLoading = true;
   }
 
   stopLoading() {
     this.isLoading = false;
   }
 
 }