<template>
    <div class="card-body">
        <div class="table table-responsive card">
            <div class="card tb">
                <h3 class="card-title">Available Places</h3>
                <p class="card-category">Here is a subtitle for this table</p>
            </div>
            <table class="table-hover bg-white table-striped" >
                <thead class="tble">
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Full Address</th>
                    <th>Description</th>
                    <th>ImageUrl</th>
                    <th>Phone No.</th>
                    <th>Posted By</th>
                </thead>
                <tbody v-for="(place,index) in places" :key="place.index">
                    <tr>
                        <td>{{index + 1}}</td>
                        <td>{{place.name}}</td>
                        <td>{{place.fullAddress}}</td>
                        <td>{{place.description}}</td>
                        <td class="img">{{place.imageUrl}}</td>
                        <td>{{place.phoneNumber}}</td>
                        <td>{{place.postedBy}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
  name: 'Table',
  data () {
    return {
      places: null
    }
  },
  created () {
    axios.get('http://wakalagos.somee.com/api/publicplaces')
      .then((resp) => {
        console.log(this.places = resp.data)
      }).catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.tb{
    background:#3e465f;
    color: whitesmoke;
}
.table{
    background:#3e465f;
   color: black;
    margin-top: 8%;
}
.tble{
     background:#3e465f;
     color: whitesmoke;
     width: 100%;
    /* margin-top: 8%; */
}
.img{
    max-width: 40px;
}
</style>
