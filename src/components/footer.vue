<template>
  <div class="footer">
    <div class="getbuild">
      <div class="startbuild">
        <p id="start">Start building for free</p>
        <p id="apis">APIs and SDKs to build powerful location-aware apps</p>
      </div>
      <div class="btn-foot">
        <b-button id="getstart" variant="primary">Get started</b-button>
        <b-button id="contact" variant="default">contact Us</b-button>
      </div>
    </div>
    <div class="host-footer">
      <p>Hosted Windows Virtual Server. 2.5GHz CPU, 2GB RAM, 60GB SSD. Try it now for $1!</p>
      <p id="some"><a href="#">Web hosting by Somee.com</a></p>
    </div>
    <div id="line"></div>
    <div class="foot2">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#"> About</a></li>
        <li><a href="#"> Privacy</a></li>
        <li>Copyright 2021 &copy;</li>
      </ul>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.startbuild{
  margin-top: 60px;
}
#start{
 font-size: 19px;
 font-weight: bolder;
}
#apis{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 17px;
  color: rgb(179, 183, 185);
}
.getbuild{
  background-color: rgb(27, 27, 43);
  width: 100%;
  position: static;
  text-align: center;
  height: 10rem;
  top: 1px;
}
.btn-foot #getstart{
  border: none;
  border-radius: 20px;
  width: 12%;
  margin: 10px;
  height: 7vh;
}
.btn-foot #contact{
  color: white !important;
  border: none;
  border-radius: 20px;
  width: 12%;
  margin: 10px;
  height: 7vh;
  border: 1px solid;
}
.btn-foot #contact:hover{
  background-color: rgb(174, 220, 238);
  color: rgb(75, 74, 74) !important;
  border: none;
  border-radius: 20px;
  width: 12%;
  margin: 10px;
  height: 7vh;
  border: 1px solid;
}
.footer{
    background-color: rgb(57, 54, 66);
    height: 20rem;
    position: static;
    bottom: 0;
    max-width: 100%;
    min-width:100%;
    width:100%;
    color: whitesmoke;
}
.foot2 li{
  list-style: none;
  color: whitesmoke;
  width: 40%;
  font-size: 14px;
}
.foot2 ul{
  display: flex;
}
.foot2 li a{
 color: whitesmoke;
 font-size: 14px;
}
.foot2{
  width: 40%;
  text-align: center;
  margin: auto;
  padding: 10px;
}
.host-footer{
  padding: 8px;
  text-align: center;
  font-size: 14px;
}
#some a{
  color: whitesmoke;
}
#line{
  border-bottom: 1px solid;
}
</style>
