<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 adjust">
                <SideMenu />
            </div>
            <div class="col-md-9">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import SideMenu from '../components/Dashboard/sidebar'
export default {
  components: { SideMenu }
}
</script>

<style scoped>
.adjust{
    margin-top: -23px;
}
</style>
