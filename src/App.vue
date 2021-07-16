<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'app',
  created () {
    console.log(firebase.database())
    firebase.auth().createUserWithEmailAndPassword('email@gmail.com', 'password')
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
*,*::before, *::after{
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}
body{
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  background-color: rgb(216, 216, 216);
  color: whitesmoke;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav a {
  font-weight: 600;
  color: #f5f3f3;
}

#nav a.router-link-exact-active {
  color: #d3d2fa;
}
</style>
