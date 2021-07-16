<template>
  <div>
      <div class="dash-hm rounded-lg container-fluid">
        <div  class=" dash-hm rounded-lg pt-2 row">
           <div class="col-xl-3 mb-2 col-md-6" v-for="content in contents" :key="content.id">
                <div class="card  card-stats card-body text-dark bg-white">
                    <div class="col-7">
                        <div class="numbers">
                            <div>
                                <p class="card-category text-bold">{{ content.name }}</p>
                                <h4 class="card-title">{{content.count}}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="hello">
        <GChart type="ColumnChart" :data="chartData" />
      </div>
      <div>
        <GChart type="PieChart" :data="chartDataTwo" />
      </div>
  </div>
</template>

<script>
import GoogleCharts from 'vue-google-charts'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.use(GoogleCharts)
export default {
  name: 'Dash',
  data () {
    const pieData = [
      ['Tasks', 'Hours per Day'],
      ['LGA', 11],
      ['Ministry', 2],
      ['Club', 2],
      ['Campus', 3],
      ['Mall', 7]
    ]
    return {
      contents: null,
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2014', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartDataTwo: pieData
    }
  },
  created () {
    axios.get('http://wakalagos.somee.com/api/publicplaces/categ/')
      .then((resp) => {
        console.log(this.contents = resp.data)
      }).catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.dash-hm{
    margin-top: 10%;
    background:#2f3441;
    /* display: flex; */
    color: black;
}
</style>
