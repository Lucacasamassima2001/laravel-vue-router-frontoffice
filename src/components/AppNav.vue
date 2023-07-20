<script>
  export default {};
</script>

<template>
  <nav class="bg-dark py-2">
    <ul class="footer-links d-flex gap-2 justify-content-center">
      <li class="list-unstyled">
        <router-link :to="{ name: 'home' }">
          <a class="nav-link active" aria-current="page">Home</a>
        </router-link>
      </li>

      <li class="list-unstyled">
        <router-link :to="{ name: 'about' }">
          <a class="nav-link active" aria-current="page">About</a>
        </router-link>
      </li>

      <li class="list-unstyled">
        <router-link :to="{ name: 'drinks' }">
          <a class="nav-link active" aria-current="page">Drinks</a>
        </router-link>
      </li>

      <li class="list-unstyled">
        <!-- <router-link :to="{ name: 'contacts' }">
          <a class="nav-link active" aria-current="page">Contacts</a>
        </router-link> -->
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Oswald:500');

  nav {
    width: 100%;
    position: fixed;
    top:50px;
    text-align:center;
  }
  
  nav a {
    font-weight:500;
    text-transform:uppercase;
    text-decoration:none;
    color:#ffffff;
    margin:0 15px;
    font-size:16px;
    letter-spacing:1px;
    position:relative;
    display:inline-block;
  }
  
  nav a:before {
  content:'';
    position: absolute;
    width: 100%;
    height: 3px;
    background:#16151b;
    top:47%;
    animation:out 0.2s cubic-bezier(1, 0, 0.58, 0.97) 1 both;
  }
  
  nav a:hover:before {
    animation:in 0.2s cubic-bezier(1, 0, 0.58, 0.97) 1 both;
  }
  
  @keyframes in {
    0% {
      width: 0;
      left:0;
      right:auto;
    }
    100%{
      left:0;
      right:auto;
      width: 100%;
    }
  }
  
  @keyframes out{
    0%{
      width:100%;
      left: auto;
      right: 0;
    }
    100%{
      width: 0;
      left: auto;
      right: 0;
    }
  }
  
  @keyframes show{
    0%{
      opacity:0;
      transform:translateY(-10px);
    }
    100%{
      opacity:1;
      transform:translateY(0);
    }
  }

  @for $i from 1 through 5 {
    nav a:nth-child(#{$i}){
      animation:show .2s #{$i*0.1+1}s ease 1 both;
    }
  }
</style>