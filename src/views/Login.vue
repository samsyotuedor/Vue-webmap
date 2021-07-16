<template>
  <div class="ello">
    <Navbar/>
    <div class="sgnform2">
        <div class="form-icon mt-4">
          <span class="icon icon-user">Sign In</span>
        </div>
      <b-form @submit.prevent="pressed">
        <div class=" userN input-group mb-3">
          <span class="input-group-text" id="basic-addon1"><i  class="fas fa-envelope"></i></span>
          <input type="email"  v-model="email"  class="form-control type" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1">
        </div>
        <div class=" userN input-group mb-3">
          <span class="input-group-text" id="basic-addon1"><i  class="fas fa-lock"></i></span>
          <input type="password" v-model="password"  class="form-control type" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
        </div>
        <b-button id="btn" v-on:click="login" type="submit">Log In <i v-if="loggedIn" class="fas fa-circle-notch fa-spin"></i></b-button><br>
        <p><router-link to="/forgot-password">Forgotten password?</router-link></p>
        <p>I don't have an account?<router-link to="/signup"> create account </router-link></p><br>
      </b-form>
    </div>
    <Footer/>
  </div>
</template>

<script>
import swtal from 'sweetalert'
import firebase from 'firebase/app'
import 'firebase/auth'
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'
// import dashboard from '@/components/dashboard.vue'
export default {
  name: 'ello',
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      email: '',
      password: '',
      error: '',
      loggedIn: false
    }
  },
  methods: {
    login: function (e) {
      this.loggedIn = true
      console.log(this.email, 'email')
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          swtal({
            title: 'Login Successful',
            text: `${user.user.email}.`,
            icon: 'success',
            button: 'OK'
          })
          this.$router.push('/dash')
          this.loggedIn = false
        }, err => {
          alert(err.message)
          this.loggedIn = false
        })
      e.preventDefault()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-icon{
    text-align: center;
    border-radius: 30px;
    font-size: 30px;
    font-weight: bolder;
    color: rgb(37, 37, 37);
    max-width: 600px;
    height: 40px;
    margin: auto;
    margin-bottom: 50px;
    line-height: 40px;
}
.ello{
   height: 42.2rem;
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
  width: 35%;
  margin: 10rem auto;
  background-color: rgb(226, 218, 245);
  height: 22rem;
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
@media (max-width: 776px) {
    .registration-form form{
        padding: 50px 20px;
    }

    .form-icon{
        width: 50%;
        font-size: 30px;
        line-height: 30px;
        color: rgb(53, 52, 52);
    }
    .userN{
      width: 80%;
    }
    .sgnform2{
      width: 50%;
      margin: 10rem auto;
    }
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
