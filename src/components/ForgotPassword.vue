<template>
  <div class="ello">
    <div class="sgnform2">
      <p id="sgnIn">Sign In</p>
      <b-form @submit.prevent="forgotPassword">
         <div class=" userN input-group mb-3">
          <span class="input-group-text" id="basic-addon1"><i  class="fas fa-envelope"></i></span>
          <input type="email"  v-model="user.email"  class="form-control type" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1">
        </div>
        <b-button id="btn" type="submit">Reset password<i v-if="loggedIn" class="fas fa-circle-notch fa-spin"></i></b-button><br>
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
      user: {
        email: '',
        loggedIn: false
      }
    }
  },
  methods: {
    forgotPassword () {
      this.user.loggedIn = true
      console.log(this.user.email, 'email')
      firebase.auth().sendPasswordResetEmail(this.user.email)
        .then(() => {
          alert('check your mailbox')
          //   this.$router.push('/dashboard')
          this.user = {
            email: ''
          }
          this.user.loggedIn = false
        }, err => {
          alert(err.message)
          this.user.loggedIn = false
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ello{
   height: 85vh;
   width: 100%;
   color: rgb(49, 49, 49);
   text-align: center;
   top: 1px;
 background: linear-gradient(
   rgba(34, 33, 33,0.7),
   rgba(34, 33, 33,0.7)
  ),url('../assets/signup.jpg');
   /* transform: translateY(6rem); */
   padding: 0.1rem;
   /* padding-bottom: 4.1rem; */
   margin-bottom: -60px;
}
.sgnform2{
  width: 30%;
  margin: 10rem auto;
  background-color: rgb(226, 218, 245);
  height: 20rem;
  border: 1px solid rgb(199, 199, 199);
  border-radius: 8px;
  box-shadow: 0px 8px 9px rgba(70, 70, 70, 0.9);
  text-align: center;
  position: relative;
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
  width: 40%;
}
#btn:hover{
  border-radius: 15px;
  background-color: rgb(115, 115, 214)!important;
  border: none;
}
#sgnIn{
font-size: 23px;
font-weight: bolder;
}
</style>
// async login (e) {
    //   try {
    //     const userlog = firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    //     console.log(userlog)
    //     alert(`You are logged in as ${userlog.user.email}`)
    //     this.$router.push('/')
    //   } catch (err) {
    //     alert(err.message)
    //     console.log(err)
    //     e.preventDefault()
    //   }
    // }
