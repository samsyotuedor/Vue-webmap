<template>
  <div class="hello">
    <Navbar/>
    <div class="hmn">
      <div class="learn">
        <p id="wel"> WELCOME</p>
        <p>Learn about <a href="#"> building Web apps with ASP.NET Core.</a></p>
        <p><a href="#">Web hosting by Somee.com</a></p>
        <button type="button" class="btn btn-primary btn-lg">Get started free</button>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'
export default {
  name: 'hello',
  components: {
    Navbar,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hmn{
   /* margin: 6rem auto; */
   background: linear-gradient(
          rgba(78, 78, 78, 0.9),
          rgba(46, 27, 46, 0.9)
   ),url("../assets/map.png");
   height: 65vh;
   width: 100%;
   color: whitesmoke;
   text-align: center;
   top: 1px;
   transform: translateY(6rem);
   padding: 0.1rem;
   margin-bottom: 6.0rem;
}
.learn{
  color: rgb(248, 245, 245);
  width: 40%;
  margin: 5rem auto;
}
.learn #wel{
  font-family: 'Times New Roman', Times, serif;
  font-size: 70px;
}
.learn button{
  border-radius: 30px;
  font-size: small;
  width: 35%;
   height: 7vh;
}
</style>
