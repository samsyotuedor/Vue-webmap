<template>
  <div class="nav1">
    <nav class="  navbar navbar-expand-md  navbar-dark">
      <a class="navbar-brand" href="#">Dashboard</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav navbar-dark head">
            <div class="input">
              <input type="text" placeholder="search...">
            </div>
            <!-- <div class="list"> -->
              <li v-if="isLoggedIn"><span class="email black-text text-align-end">{{currentUser}}</span></li>
              <li class="nav-item">
                <router-link to="/login"><button class="btn btn-light" v-on:click="logout" >logOut</button></router-link>
              </li>
            <!-- </div> -->
          </ul>
        </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/auth'
export default {
  name: 'header',
  data () {
    return {
      isLoggedIn: false,
      currentUser: false
    }
  },
  created () {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true
      this.currentUser = firebase.auth().currentUser.email
    }
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.go({ path: this.$router.path })
      })
    }
  }
}
</script>

<style scoped>
/* .email{
    padding-right: 10px;
} */
.nav1{
  padding: 0;
  margin: 0;
  color: white !important;
  height: 3.5rem;
  top: 1px;
  width: 100%;
  position: fixed;
  z-index: 10;
  background:#2f3441;
  /* background: linear-gradient(to right bottom, #2f3441 50%, #212531 50%); */
}
.head{
  justify-content: space-between;
  width: 50%;
  margin: auto;
  /* display: inline-block; */
}
</style>
