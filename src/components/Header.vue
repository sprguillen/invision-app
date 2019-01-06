<template>
  <header data-aos="fade" data-aos-duration="3000">
    <nav class="navbar navbar-expand-lg nav-custom">
      <img src="../assets/jumpcut_logo.png" />
      <b-navbar-toggle target="nav_collapse" variant="light">
        <v-icon name="bars" class="color-white" />
      </b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">

        <ul class="navbar-nav mr-auto menu">
          <li class="nav-item">
            <a class="nav-link" href="#">MY COURSES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">COMMUNITY</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">VIDEO REVIEW</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">BOOTCAMP</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">COLLABORATE</a>
          </li>
        </ul>
        <ul class="side-menu">
          <li><a href="#"><v-icon name="regular/bell" /></a></li>
          <li><a href="#"><v-icon name="regular/comment" /></a></li>
          <li>
            <a href="#">
              <v-icon name="regular/user" class="avatar" />
              <span class="avatar-name">Simon</span>
            </a>
          </li>
        </ul>
      </b-collapse>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'CustomHeader',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/common/variables";

.nav-custom {
  max-width: 1200px;
  margin: auto;
}

.left-nav {
  width: 12%;
  float: left;
}

.left-nav img {
  display: inline;
}

.right-nav {
  width: 88%;
  float: left;
  position: relative;
}

.menu {
  float: left;

  @media screen and (min-width: $breakpoint-md) {
    width: 65%;
  }

  @media screen and (max-width: $breakpoint-md) {
    width: 50%;
  }
}

.menu li {
  font-size: 0.9rem;
  margin-right: 2rem;
  float: left;
  list-style: none;
  vertical-align: top;
  margin-top: 0.3rem;
}

.menu li a {
  text-decoration: none;
  color: $light-color;
  font-size: 0.8rem;
}

.menu li a:active, .menu li a:hover {
  color: $teal;
}

.side-menu {
  float: right;
  position: relative;
  top: 0.5rem;

  @media screen and (min-width: $breakpoint-md) {
    width: 30%;
    left: 5rem;
  }

  @media screen and (max-width: $breakpoint-sm) {
    width: 50%;
    left: 2rem;
  }
}

.side-menu li {
  margin-right: 1.5rem;
  float: left;
  list-style: none;
  margin-top: 0.3rem;
}

.side-menu li a {
  text-decoration: none;
  color: $light-color;
}

span.avatar-name {
  margin-left: 0.5em;
  vertical-align: top;
}

.color-white {
  color: white;
}
</style>
