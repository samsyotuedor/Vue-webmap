<template>
    <div class="side w-100 " id="mainNavbar">
            <nav class="navbar  w-100 " id="sidebar-wrapper" role="navigation">
                <ul class="nav sidebar-nav ">
                    <div class="sidebar-brand">
                        <p>WHAKALAGO</p>
                    </div>
                    <li><router-link to="/dash"><span class="fas fa-border-all mr-2"></span>Dashboard</router-link></li>
                    <li><a href="#user"><span class="far fa-user-circle  mr-2"></span>User Profile</a></li>
                    <li><router-link to="/table"><span class="fas fa-clipboard-list mr-2"></span>Table List</router-link></li>
                    <li><a href="#icons"><span class="fas fa-atom mr-2"></span> Icons</a></li>
                    <li><a href="#location"> <span class="fas fa-street-view mr-2"></span> Location</a></li>
                    <li><router-link to="/seeplaces"><span class="fas fa-map-marked-alt mr-2"></span> See Places</router-link></li>
                    <li><a href="#addplaces"><span class="fas fa-plus-square mr-2"></span> Add Places</a></li>
                    <li><router-link to="/create"><span class="fab fa-creative-commons-share mr-2"></span> Create</router-link></li>
                    <li><a href="#services"><span class="fab fa-servicestack mr-2"></span> Services</a></li>
                    <li><a href="#contact"><span class="fas fa-id-badge mr-2"></span> Contact</a></li>
                    <li><a href="#followme"><span class="fas fa-blender-phone mr-2"></span> Follow me</a></li>
                </ul>
            </nav>
        <!-- </b-sidebar> -->
    </div>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>

<style scoped>
.side{
    background-size: cover;
    background-position: center;
     background: linear-gradient(
       rgba(24, 24, 41, 0.5),
       rgba(22, 22, 37, 0.5)
    ),url('../../assets/Valley5.jpg');
    height: 90vh;
    width: 10.3%;
    margin-top: 26.2%;
    margin-left: -15px;
    color: white;
    position: sticky;
    transition: left 1.3s;
}
/*-------------------------------*/
/*     Sidebar nav styles        */
/*-------------------------------*/
.navbar {
  padding: 0;
}

.sidebar-nav {
    position: relative;
    top: 0;
    max-width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    font-weight: bold;
}

.sidebar-nav li {
    position: relative;
    line-height: 20px;
    display: inline-block;
    width: 100%;
}

.sidebar-nav li:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100%;
    width: 3px;
    background-color: #1c1c1c;
    -webkit-transition: width .5s ease-in;
      -moz-transition:  width .5s ease-in;
       -ms-transition:  width .5s ease-in;
            transition: width .5s ease-in;

}
.sidebar-nav li:first-child a {
    color: #fff;
    background-color: #1a1a1a;
}
.sidebar-nav li:nth-child(5n+1):before {
    background-color: #ec1b5a;
}
.sidebar-nav li:nth-child(5n+2):before {
    background-color: #79aefe;
}
.sidebar-nav li:nth-child(5n+3):before {
    background-color: #314190;
}
.sidebar-nav li:nth-child(5n+4):before {
    background-color: #279636;
}
.sidebar-nav li :nth-child(5n+5):before {
    background-color: #7d5d81;
}

.sidebar-nav li:hover:before,
.sidebar-nav li.open:hover:before {
    width: 100%;
    -webkit-transition: width .5s ease-in;
      -moz-transition:  width .5s ease-in;
       -ms-transition:  width .5s ease-in;
            transition: width .5s ease-in;

}

.sidebar-nav li a {
    display: block;
    color: #ddd;
    text-decoration: none;
    padding: 10px 15px 10px 30px;
}

.sidebar-nav li a:hover,
.sidebar-nav li a:active,
.sidebar-nav li a:focus,
.sidebar-nav li.open a:hover,
.sidebar-nav li.open a:active,
.sidebar-nav li.open a:focus{
    color: #fff;
    text-decoration: none;
    background-color: transparent;
}
.sidebar-brand {
    font-size: 20px;
    text-align: center;
    height: 65px;
    width: 100%;
    position: relative;
    background:#212531;
    background: linear-gradient(to right bottom, #2f3441 50%, #212531 50%);
    padding-top: 1em;
}
.sidebar-brand p{
    color: #ddd;
}
.sidebar-brand p:hover {
    color: #fff;
    text-decoration: none;
}
</style>
