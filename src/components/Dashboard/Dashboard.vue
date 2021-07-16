<template>
    <div id="dash">
        <Header/>
        <router-view></router-view>
        <!-- <Sidebar/>
        <Main/> -->
    </div>
</template>

<script>
import Header from './header.vue'
// import Sidebar from './sidebar.vue'
// import Main from './mainContent.vue'
export default {
  name: 'Dashboard',
  components: {
    Header
    // Sidebar,
    // Main
  }
}
</script>

<style scoped>
#dash{
    background-color: rgb(245, 239, 239);
    height: 43rem;
}
</style>
