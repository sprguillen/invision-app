<template>
  <footer class="footer">
    <div class="left-side">
      <p>
        © 2018 Jumpcut
      </p>
    </div>
    <div class="right-side">
      <p>
        Refund Policy | Contact Us | Privacy Policy | Terms of Service |
          Earnings Disclaimer | Testimonial Disclosure | Affiliate Disclosure
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'CustomFooter',
};
</script>
<style lang="scss" scoped>
@import "../scss/common/variables";

.footer {
  flex-shrink: 0;
  max-width: 1300px;
  margin: auto;
  color: $light-color;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
}

.clearfix {
  clear: both;
}

.left-side {
  @media screen and (max-width: $breakpoint-lg) {
    margin: 0 auto;
    width: 200px;
    margin-top: 1rem;
  }

  @media screen and (min-width: $breakpoint-lg) {
    width: 40%;
    float: left;
    margin-top: 1rem;
  }
}

.left-side p {
  padding-bottom: 1rem;
}

.right-side {
  @media screen and (max-width: $breakpoint-lg) {
    margin: 0 auto;
    width: 800px;
    margin-top: 1rem;
  }

  @media screen and (min-width: $breakpoint-lg) {
    width: 60%;
    float: left;
    margin-top: 1rem;
  }
}
</style>
