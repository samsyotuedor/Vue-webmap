<template>
    <div class="col-md-5 registration-form">
        <form>
            <div class="form-icon">
                <span class="icon icon-user">Create Public Places</span>
            </div>
            <div class="form-group">
                <input type="text" v-model="name" class="form-control item" id="name" placeholder="Name">
            </div>
            <div class="form-group">
                <input type="text" v-model="fulladdress" class="form-control item" id="fulladdress" placeholder="Full Address">
            </div>
            <div class="form-group">
                <input type="text" v-model="decription" class="form-control item" id="description" placeholder="Description">
            </div>
            <div class="form-group">
                <input type="text" v-model="imageUrl" class="form-control item" id="image" placeholder="Image url">
            </div>
            <div class="form-group">
                <input type="number" v-model="phonenumber" class="form-control item" id="phonenumber" placeholder="Phone Number">
            </div>
            <div class="form-group">
                <input type="text" v-model="postedBy" class="form-control item" id="postedby" placeholder="Postedby">
            </div>
            <div class="form-group">
                <button type="submit" v-on:click="Add" class="btn btn-block create-account">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CreatePlaces',
  data () {
    return {
      name: '',
      fulladdress: '',
      imageUrl: '',
      phonenumber: '',
      description: '',
      postedBy: ''
    }
  },
  methods: {
    Add () {
      axios.post('http://wakalagos.somee.com/api/publicplaces', {
        name: this.name,
        fulladdress: this.fulladdress,
        imageUrl: this.imageUrl,
        phonenumber: this.phonenumber,
        description: this.description,
        postedBy: this.postedBy
      })
        .then((response) => {
          console.log(response)
        }).catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
body{
    background-color: #dee9ff;
}

.registration-form{
    padding: 50px 0;
}
@-webkit-keyframes registration-form{
    0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(30deg);
    }
    100% {
        -webkit-transform: rotate(60deg);
                transform: rotate(60deg);
    }
}
@keyframes registration-form {
    0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(30deg);
    }
    100% {
        -webkit-transform: rotate(60deg);
                transform: rotate(60deg);
    }
}

.registration-form form{
    background-color: #fff;
    max-width: 600px;
    margin: auto;
    margin-top: 5%;
    padding: 40px 60px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
    -webkit-animation: registration-form form 7s infinite steps(8);
            animation: registration-form form 7s infinite steps(8);
    }
.registration-form .form-icon{
    /* padding: 15px 25px; */
    text-align: center;
    background:#2f3441;
    border-radius: 30px;
    font-size: 18px;
    font-weight: bolder;
    color: white;
    max-width: 600px;
    height: 50px;
    margin: auto;
    margin-bottom: 50px;
    line-height: 43px;
}

.registration-form .item{
    border-radius: 20px;
    margin-bottom: 25px;
    padding: 10px 20px;
}

.registration-form .create-account{
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    background:#2f3441;
    border: none;
    color: white;
    margin-top: 20px;
}

.registration-form .social-media{
    max-width: 600px;
    background-color: #fff;
    margin: auto;
    padding: 35px 0;
    text-align: center;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    color: #9fadca;
    border-top: 1px solid #dee9ff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}

.registration-form .social-icons{
    margin-top: 30px;
    margin-bottom: 16px;
}

.registration-form .social-icons a{
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

.registration-form .social-icons a:hover{
    text-decoration: none;
    opacity: 0.6;
}

@media (max-width: 576px) {
    .registration-form form{
        padding: 50px 20px;
    }
}
</style>
