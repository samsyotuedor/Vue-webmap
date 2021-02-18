<template>
  <div class="hello">
    <div class="sgnform">
      <p id="sgnUp">Sign Up</p>
      <div v-if="error" class="error">{{error}}</div>
      <b-form @submit.prevent="pressed">
        <div class=" userN input-group mb-3">
          <span class="input-group-text" id="basic-addon1"><i  class="fas fa-user"></i></span>
          <input type="text"  v-model="name"  class="form-control type" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1">
        </div>
        <div class=" userN input-group mb-3">
          <span class="input-group-text" id="basic-addon1"><i  class="fas fa-phone"></i></span>
          <input type="number"  v-model="number"  class="form-control type" placeholder="Phone" aria-label="Phone" aria-describedby="basic-addon1">
        </div>
        <div class=" userN input-group mb-3">
          <span class="input-group-text" id="basic-addon1"><i  class="fas fa-envelope"></i></span>
          <input type="email"  v-model="email"  class="form-control type" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1">
        </div>
        <div class=" userN input-group mb-3">
          <span class="input-group-text" id="basic-addon1"><i  class="fas fa-key"></i></span>
          <input type="password" v-model="password"  class="form-control type" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
        </div>
        <b-button id="btn" v-on:click="signup" type="submit" variant="secondary">CREATE ACCOUNT</b-button><br><br>
        <p>Already have an account? <router-link to="/login">Sign in</router-link></p><br>
      </b-form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  name: 'ello',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    signup: function (e) {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert(`Account created ${user.user.email}`)
          this.$router.push('/')
        }, err => {
          alert(err.message)
        })
      e.preventDefault()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
background: linear-gradient(
   rgba(34, 33, 33,0.6),
   rgba(34, 33, 33,0.6)
  ),url('../assets/signup.jpg');
  height: 35rem;
  padding-top: 0.03px;
  margin: 0;
  margin-bottom: -60px;
}
#name, #email, #pass{
  width: 75%;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0px 8px 9px rgba(104, 104, 104, 0.4);
  text-align: start;
}
.userN input{
  margin: 0;
  border-radius: 10px !important;
  box-shadow: 0px 8px 9px rgba(145, 145, 145, 0.3);
}
.userN{
   width: 75%;
   margin: auto;
   /* box-shadow: 0px 8px 9px rgba(104, 104, 104, 0.4); */
}
.userN span{
  margin: 0;
  /* width: 10%; */
  border-radius: 10px !important;
  box-shadow: 0px 8px 9px rgba(145, 145, 145, 0.3);
}
#btn{
  border-radius: 15px;
  background-color: rgb(133, 133, 250);
  border: none;
}
#btn:hover{
  border-radius: 15px;
  background-color: rgb(115, 115, 214)!important;
  border: none;
}
#sgnUp{
    font-size: 23px;
    font-weight: bolder;
}
.sgnform{
  /* margin-top: 5% !important; */
  width: 30%;
  margin: 10rem auto;
  border: 1px solid rgb(180, 180, 180);
  border-radius: 8px;
  box-shadow: 0px 8px 9px rgba(44, 44, 44, 0.9);
  text-align: center;
  position: relative;
  background-color: rgb(226, 218, 245);
  color: rgb(32, 32, 32);
  top: 1px;
}
</style>
