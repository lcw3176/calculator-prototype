<template>
<nav class="navbar is-light is-fixed-bottom" role="navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item is-expanded is-block has-text-centered" to="/">
        Home

      </router-link> 

      <router-link class="navbar-item is-expanded is-block has-text-centered" to="/about">
        About

      </router-link> 
      
    </div>
</nav>

  <router-view/>
</template>
