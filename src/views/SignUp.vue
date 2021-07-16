<template>
  <div class="hello">
    <Navbar/>
      <div class="sgnform">
              <div class="form-icon mt-4">
                  <span class="icon icon-user">Sign Up</span>
              </div>
        <div v-if="error" class="error">{{error}}</div>
        <b-form @submit.prevent="pressed">
          <div class=" userN input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><i  class="fas fa-user"></i></span>
            <input type="text"  v-model="firstname"  class="form-control type" placeholder="First Name" aria-label="Name" aria-describedby="basic-addon1">
          </div>
          <div class=" userN input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><i  class="fas fa-user"></i></span>
            <input type="text" v-model="lastname" class="form-control type" id="firstname" placeholder="Last Name">
          </div>
          <div class=" userN input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><i  class="fas fa-phone"></i></span>
            <input type="number" min="0" max="100000000000" v-model="number"  class="form-control type" placeholder="Phone" aria-label="Phone" aria-describedby="basic-addon1">
          </div>
          <div class=" userN input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><i  class="fas fa-envelope"></i></span>
            <input type="email"  v-model="email"  class="form-control type" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1">
          </div>
          <div class=" userN input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><i  class="fas fa-lock"></i></span>
            <input type="password" v-model="password"  class="form-control type" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
          </div>
          <b-button id="btn" v-on:click="signup" type="submit" variant="secondary">CREATE ACCOUNT</b-button><br><br>
          <p>Already have an account? <router-link to="/login">Sign in</router-link></p><br>
        </b-form>
          <div class="social-icons">
                  <a href="https://www.facebook.com"><i class="fab fa-facebook" title="Facebook"></i></a>
                  <a href="https://www.google.com"><i class="fab fa-google" title="Google"></i></a>
                  <a href="https://www.twitter.com"><i class="fab fa-twitter" title="Twitter"></i></a>
          </div>
      </div>
    <Footer/>
  </div>
</template>

<script>
import swtal from 'sweetalert'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
// import db from '../firebasekey/firebase'
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'
export default {
  name: 'ello',
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      firstname: '',
      lastname: '',
      email: '',
      number: '',
      password: '',
      error: ''
    }
  },
  methods: {
    signup: function (e) {
      // Add a new document with a generated id.
      firebase.firestore().collection('user').add({
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        number: this.number,
        password: this.password
      })
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id)
        })
        .catch((error) => {
          console.error('Error adding document: ', error)
        })
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          swtal({
            title: 'Registered',
            text: `${user.user.email}.`,
            icon: 'success',
            button: 'OK'
          })
          this.$router.push('/login')
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
  height: 58rem;
  padding-top: 0.03px;
  margin: 0;
  margin-bottom: -60px;
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
  width: 35%;
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
.form-icon{
    text-align: center;
    border-radius: 30px;
    font-size: 30px;
    font-weight: bolder;
    color: rgb(44, 44, 44);
    max-width: 600px;
    height: 40px;
    margin: auto;
    margin-bottom: 50px;
    line-height: 40px;
}
.social-icons{
    margin-top: 30px;
    margin-bottom: 16px;
}
.social-icons a{
    font-size: 23px;
    margin: 0 3px;
    color: #5691ff;
    border: 1px solid;
    border-radius: 50%;
    width: 45px;
    display: inline-block;
    height: 45px;
    text-align: center;
    background-color: #fff;
    line-height: 45px;
}

.social-icons a:hover{
    text-decoration: none;
    opacity: 0.6;
}

@media (max-width: 776px) {
    .registration-form form{
        padding: 50px 20px;
    }

    .form-icon{
        width: 40%;
        font-size: 25px;
        line-height: 30px;
    }
    .userN{
      width: 80%;
    }
    .sgnform{
      width: 60%;
      margin: 10rem auto;
    }
}
</style>
