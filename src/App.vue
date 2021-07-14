<template>
  <div id="app" class="row">
    <form class= "col card p-5 my-5 mx-5 ">
      <h3>Get Key Here</h3><br>
            <div class="form-group">
              <input type="text" v-model="id" class="form-control" placeholder="Enter Id" id="id1">
            </div>
              <br>
            <div class="form-group">
              <input type="text" v-model="password" class="form-control" placeholder="Enter Password" id="password">
            </div>
            <div class="form-group form-check">
            </div>
            <button @click="updateKey" class="btn btn-primary">Update</button>
            <br>

            <div class="form-group">
              <label for="key">Update and Get Your Key Here:</label>
              <label type="text"  class="form-control"  id="key" ></label>
            </div>
            <div class="alert alert-warning">
              <strong>Warning!</strong> You can Update one key in 30 minutes!
            </div>  
    </form>
    <form class= " col card p-5 my-5 ">
            <h3>Update Post Url</h3>
            <div class="form-group">
              <label for="Id"></label>
              <input type="text" v-model="id" class="form-control" placeholder="Enter Id" id="id2">
            </div>
            
            <div class="form-group">
              <label for="password"></label>
              <input type="password" v-model="password" class="form-control" placeholder="Enter Password" id="passwordRemove">
            </div>

            <div class="form-group">
              <label for="url"></label>
              <input type="url" v-model="url" class="form-control" placeholder="Post Url" id="url">
            </div>
            <br>
            <button @click="updatePost" class="btn btn-primary">Submit</button>
            <br>
            <div class="alert alert-warning">
              <strong>Warning!</strong> You can Update one url in 15 hour!
            </div>
    </form>
    <form class= " col card p-5 my-5 mx-5">
            <h3>Verify Your key</h3>
            <div class="form-group">
              <label for="Id"></label>
              <input type="text" v-model="id" class="form-control" placeholder="Enter Id" id="id3">
            </div><br>
            <div class="form-group">
              <input type="text" v-model="password" class="form-control" placeholder="Enter Password" id="password3">
            </div>
            <div class="form-group">
              <label for="key"></label>
              <input type="text" v-model="keyVerify" class="form-control" placeholder="Enter Key Here" id="key">
            </div>
            <br>
            <button @click="verifyKey" class="btn btn-primary">Verify</button>
            <br>
            <div class="alert alert-success">
              <strong>Todays Visits: </strong>{{todayVisits }}</div>
    </form>
    <div class="col" /><br>
     <div class="container">
       <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </symbol>
        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </symbol>
        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </symbol>
      </svg>      
      <div v-if="alertType==='success'" class="alert alert-success d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
        <div>
          <strong>&nbsp;&nbsp;Success!</strong>
        </div>
      </div>
      <div v-if="alertType === 'fail'" class="alert alert-danger d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
          <strong> &nbsp;&nbsp;Failed!</strong>
        </div>
      </div>
     </div>
  </div>
</template>

<script>
import {nameRef} from './firebase';
import { db } from './firebase'
export default {
  name: 'app',
  data () {
    return {
      id: '',
      key: '',
      password: '',
      diff: 0,
      alertType: '',
      todayVisits: 0,
      url: '',
      keyVerify: '',
      
    }
  },
  methods: {
    showAlert() {
      setTimeout(() => this.alertType = '', 3000);
    },
    updateKey(e){
      e.preventDefault();
        nameRef.child(this.id).get().then(snapshot => {
        var data = snapshot.val();
        var dt1 = new Date(data['time']); 
        var dt2 = new Date();
        var diff =(dt2.getTime() - dt1.getTime()) / 1000;
        diff /= 60;
        this.diff = Math.abs(Math.round(diff));
        console.log(this.diff);
        })
        nameRef.child(this.id).get().then((snapshot) => {
           var data = snapshot.val();
           if (data == null){
              this.alertType = 'fail';
              this.showAlert();
           }
           if(this.password == data['password'] && this.diff >= 30 && data != null){ 
             this.alertType = 'success';
              this.showAlert();
             var length = 19,
                  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                  retVal = "";
              for (var i = 0, n = charset.length; i < length; ++i) {
                  retVal += charset.charAt(Math.floor(Math.random() * n));
                  this.key = retVal;
              }
              nameRef.child(this.id).update({
                key: this.key,
                time: new Date()
              })
              document.getElementById('key').innerHTML = this.key;
           }
           else{
             this.alertType = 'fail';
              this.showAlert();
             console.log('password is wrong \n' + data['password'])
           }
           
        })
        
    },
    updatePost(e){
       e.preventDefault();
        nameRef.child(this.id).get().then(snapshot => {
        var data = snapshot.val();
        var dt1 = new Date(data['time']); 
        var dt2 = new Date();
        var diff =(dt2.getTime() - dt1.getTime()) / 1000;
        diff /= 60;
        this.diff = Math.abs(Math.round(diff));
        console.log(this.diff);
        })
        nameRef.child(this.id).get().then((snapshot) => {
           var data = snapshot.val();
           if (data == null){
              this.alertType = 'fail';
              this.showAlert();
           }
           if(this.password == data['password'] && this.diff >= 900 && data != null){ 
             this.alertType = 'success';
              this.showAlert();
              nameRef.child(this.id).update({
                url: this.url,
                time: new Date()
              })
           }
           else{
             this.alertType = 'fail';
              this.showAlert();
             console.log('password is wrong \n' + this.password + '\n' + data['password'])
           }
           
        })
    },
    verifyKey(e){
      e.preventDefault();
       db.ref('data').get().then(snapshot => {
        var data1 = snapshot.val();
        var validKey = false;
        db.ref('users').get().then(snapshot => {
          var userData = snapshot.child(this.id).val(); 
            for(var i = 0; i < data1['totalMember']; i++){
             var i1 = i+1;

             var si = i1.toString();
             console.log(si)
             var innerdata = snapshot.child(i1).val();
             if(this.keyVerify == innerdata['key']){
               validKey = true;
             }
            }
            if(validKey == true && this.password === userData['password']){
              this.alertType = 'success';
              this.showAlert();

              console.log(this.keyVerify);
              this.todayVisits = this.todayVisits + 1;
              nameRef.child(this.id).update({
                todayVisits: this.todayVisits,
              })
          }
            else{
              this.alertType = 'fail';
              this.showAlert();
            }
        })
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}
.card{
  margin: auto auto;
  
}

* {
    padding: 0;
    margin: 0;
}

form {
    width: 400px;
}
</style>
