<script>
export default {};
</script>

<template>
  <footer class="footer-distributed container-fluid">
    <div class="footer-right">
      <a href="#"><i class="fa-brands fa-facebook"></i></a>
      <a href="#"><i class="fa-brands fa-twitter"></i></a>
      <a href="#"><i class="fa-brands fa-instagram"></i></a>
      <a href="#"><i class="fa-brands fa-tiktok"></i></a>
    </div>

    <div class="footer-left">
      <ul class="footer-links d-flex gap-2">
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

      <div class="text-light">MixTales &copy; 2023</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer-distributed {
  background-color: #292c2f;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  padding: 10px 50px;
  height: 5rem;
}

.footer-distributed .footer-left ul {
  color: #8f9296;
  font-size: 14px;
  margin: 0;
}

/* FOOTER LINKS */

.footer-distributed ul.footer-links {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin: 0 0 10px;
  padding: 0;
  transition: ease 0.25s;
}

.footer-distributed ul.footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
  transition: ease 0.25s;
}

.footer-distributed .footer-links a:before {
  font-size: 20px;
  left: 0;
  color: #fff;
  display: inline-block;
  padding-right: 5px;
}

.footer-distributed .footer-links:before {
  content: none;
}

.footer-distributed .footer-right {
  float: right;
  margin-top: 14px;
  max-width: 180px;
}

.footer-distributed .footer-right a {
  display: inline-block;
  width: 35px;
  height: 35px;
  background-color: #33383b;
  border-radius: 2px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;
  margin-left: 3px;
  transition: all 0.25s;
}

.footer-distributed .footer-right a:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
}

.footer-distributed ul.footer-links a:hover {
  text-decoration: underline;
}

/* Media Queries */

@media (max-width: 600px) {
  .footer-distributed .footer-left,
  .footer-distributed .footer-right {
    text-align: center;
  }
  .footer-distributed .footer-right {
    float: none;
    margin: 0 auto 20px;
  }
  .footer-distributed .footer-left ul.footer-links {
    line-height: 1.8;
  }
}
</style>
