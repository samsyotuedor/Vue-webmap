<template>
  <div id="nav">
      <img src="../assets/gid.webp" alt="gid">
      <div id="hm"><router-link to="/">Home</router-link></div>
      <div id="ab"><router-link to="/about">About</router-link></div>
      <div id="lg"><router-link to="/login">Login</router-link></div>
      <div id="sg"><router-link to="/signup">Sign up</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'nav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav img{
  width: 60px;
  height: 3rem;
}
#nav{
    position: fixed;
    width: 100%;
    background-color: rgb(54, 54, 54);
    color: whitesmoke;
    text-align: center;
    padding: 0px 0px 10px;
    z-index: 999;
    top:0;
}
#lg, #sg{
    width: 10%;
    color: whitesmoke;
    display: inline-block;
}
#hm, #ab{
    margin-top: 50px;
    width: 15%;
    color: whitesmoke;
    display: inline-block;
}
#nav a{
  color: whitesmoke;
}
</style>
