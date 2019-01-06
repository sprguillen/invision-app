<template>
  <section>
    <div class="content" data-aos="fade" data-aos-duration="5000">
      <article>
        <div class="header-wrap">
          <header>
            <h1>Sed augue ipsum egestas</h1>
            <h2>Curabitur nisi. Vivamus consectetuer hendrerit.</h2>
          </header>
        </div>
        <div class="form-wrap">
          <form class="ml-3">
            <div class="row centered">
              <div class="form-group col-lg-3 col-md-7 col-sm-12 mb-md">
                <input
                  name="city"
                  class="col-12 curved-input curved-input__xl form-control"
                  type="text"
                  placeholder="Palau Ujong, Singapore"
                />
                <v-icon name="map-marker" class="input-icon" />
              </div>
              <div class="form-group row-custom-margin col-lg-2 col-md-4 col-sm-12 mb-md">
                <input
                  name="city"
                  class="col-12 curved-input curved-input__xl form-control"
                  type="text"
                  placeholder="5 mi"
                />
                <v-icon name="bullseye" class="input-icon" />
              </div>
              <div class="form-group row-custom-margin col-lg-3 col-md-11 col-sm-12 mb-md">
                <input
                  name="city"
                  class="col-12 curved-input curved-input__xl form-control"
                  type="text"
                  placeholder="Cooking"
                />
                <v-icon name="heart" class="input-icon" />
              </div>
              <div class="form-group row-custom-margin col-lg-3 col-md-11 col-sm-12 mb-md">
                <input
                  name="city"
                  class="col-12 curved-input curved-input__xl form-control"
                  type="text"
                  placeholder="Italian Cuisine"
                />
                <v-icon name="lightbulb" class="input-icon" />
              </div>
              <button
                type="button"
                class="
                  col-lg-1
                  col-md-4
                  col-md-offset-8
                  col-sm-5
                  col-11
                  btn btn-info
                  submit-bttn
                ">Search</button>
            </div>
          </form>
        </div>
      </article>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ImageForm',
};
</script>
<style lang="scss" scoped>
@import "../scss/common/variables";

.centered {
  margin: 0 auto;
}

.mb-md {
  @media screen and (max-width: $breakpoint-lg) {
    margin-bottom: -0.5rem;
  }
}

.content {
  padding: 200px 2em;
  background: url(../assets/cultcrew.jpg) no-repeat;
  max-width: 1400px;
  @extend .centered;
}

h1 {
  color: $light-color;
  font-size: 2.50rem;

  @media screen and (max-width: $breakpoint-sm) {
    font-size: 2rem;
    text-align: center;
  }
}

h2 {
  color: $light-color;
  font-size: 1.5rem;
  font-weight: 100;

  @media screen and (max-width: $breakpoint-sm) {
    font-size: 1.3rem;
    text-align: center;
  }
}

.header-wrap {
  max-width: 500px;
}

.form-wrap {
  max-width: 1200px;
}

.header-wrap, .form-wrap {
  margin: 0 auto;
}

.curved-input {
  border-radius: 5px;
  height: 50px;
  text-indent: 2rem;

  @media screen and (max-width: $breakpoint-md) {
    margin: 0 auto;
  }
}

.curved-input {
  &__xl {
    @extend .curved-input;
    @media screen and (max-width: $breakpoint-lg) {
      width: 804px;
    }
  }
}

.input-icon {
  position: relative;
  top: -2.5rem;
  left: 1rem;
  z-index: 2;
  color: $secondary-color;
}

.input-icon-md {
  @media screen and (max-width: $breakpoint-lg) {
    top: 10rem !important;
    left: 2rem !important;
  }
}

.row-custom-margin {
  @media screen and (min-width: $breakpoint-lg) {
    margin-left: -1rem;
  }
}

.submit-bttn {
  border-radius: 5px;
  height: 50px;
  padding-bottom: 3px;
  font-weight: 600;
  border: none;
  font-size: 0.9rem;
  width: 200px;

  @media screen and (max-width: $breakpoint-lg) {
    margin-left: 1rem;
  }

  @media screen and (max-width: 992px) {
    margin: 0 auto;
  }
}
</style>
