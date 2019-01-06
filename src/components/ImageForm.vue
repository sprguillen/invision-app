<template>
  <section>
    <div class="content">
      <article>
        <div class="header-wrap">
          <header>
            <h1>Sed augue ipsum egestas</h1>
            <h2>Curabitur nisi. Vivamus consectetuer hendrerit.</h2>
          </header>
        </div>
        <div class="form-wrap">
          <form class="ml-3">
            <div class="row">
              <v-icon name="map-marker" class="input-icon" />
              <input
                name="city"
                class="col-lg-3 col-md-7 curved-input curved-input__lg form-control"
                type="text"
                placeholder="Palau Ujong, Singapore"
              />
              <v-icon name="bullseye" class="input-icon" />
              <input
                name="city"
                class="col-lg-2 col-md-4 curved-input form-control"
                type="text"
                placeholder="5 mi"
              />
              <v-icon name="heart" class="input-icon" />
              <input
                name="city"
                class="col-lg-2 col-md-12 curved-input form-control"
                type="text"
                placeholder="Cooking"
              />
              <v-icon name="lightbulb" class="input-icon" />
              <input
                name="city"
                class="col-lg-2 col-md-12 curved-input form-control"
                type="text"
                placeholder="Italian Cuisine"
              />
              <button type="button" class="ml-3 col-lg-1 btn btn-info submit-bttn">Search</button>
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

.content {
  padding: 200px 2em;
  background: url(../assets/cultcrew.jpg) no-repeat;
  max-width: 1400px;
  margin: 0 auto;
}

h1 {
  color: $light-color;
  font-size: 2.75rem;
}

h2 {
  color: $light-color;
  font-size: 1.5rem;
  font-weight: 100;
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
}

.curved-input {
  &__lg {
    @extend .curved-input;
    width: $text-box-lg;
  }

  &__sm {
    @extend .curved-input;
    width: $text-box-sm;
  }
}

.input-icon {
  position: relative;
  top: 1rem;
  left: 2rem;
  z-index: 2;
  color: $secondary-color;
}

.submit-bttn {
  border-radius: 5px;
  height: 50px;
  padding-bottom: 3px;
  font-weight: 600;
  border: none;
  font-size: 0.9rem;
  width: 200px;
}
</style>
