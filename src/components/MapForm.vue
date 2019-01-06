<template>
  <section data-aos="fade" data-aos-duration="3000">
    <div class="map-wrapper">
      <div class="map-content">
        <div class="row row-max-width">
          <div class="mid-on-small col-lg-6 col-md-7 col-offset-md-5 col-sm-8 col-offset-sm-4">
            <h1>16 vloggers near Palau Ujong</h1>
            <p>Palau Ujong, Singapore &#183; 10 miles radius &#183; Vlog</p>
          </div>
          <div class="
            col-lg-6
            col-md-7
            col-offset-md-5
            col-sm-9
            col-offset-sm-3
            col-10
            col-offset-2"
          >
            <button
              type="button"
              class="col-lg-4 col-md-4 col-sm-8 col-8 btn btn-light adv-search-bttn"
            >Advanced Search</button>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <GmapMap
              :center="{lat:1.38, lng:103.8}"
              :zoom="12"
              map-type-id="terrain"
              :style="this.style"
            >
            </GmapMap>
          </div>
        </div>
        <div class="result-grid ml-3">
          <div class="row">
            <p>Viewing <strong>12</strong> or <strong>12</strong> results</p>
          </div>
          <div class="row row-custom-margin">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              class="
                col-lg-3
                col-md-4
                col-sm-6
                col-12
                card-grid-custom-margin
              ">
              <div class="card card-custom-width card-decor__odd">
                <div class="card-body text-center">
                  <avatar class="centered" username="Jane Doe" :size="avatarSize"></avatar>
                  <strong>1. Jane Doe</strong>
                  <div class="text-center">
                    <v-icon name="map-marker" class="card-icon" />
                    <span>Bishan Singapore · 5 miles away</span>
                  </div>
                  <div class="text-center">
                    <span>Vlog | Cooking | Arts</span>
                  </div>
                  <div class="mt-1">
                    <button class="btn btn-light-outline mr-3">View Channel</button>
                    <button class="btn btn-light-outline">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              class="
                col-lg-3
                col-md-4
                col-sm-6
                col-12
                card-grid-custom-margin
              ">
              <div class="card card-custom-width card-decor__even">
                <div class="card-body text-center">
                  <avatar class="centered" username="Robert Watajorski" :size="avatarSize"></avatar>
                  <strong>2. Robert Watajorski</strong>
                  <div class="text-center">
                    <v-icon name="map-marker" class="card-icon" />
                    <span>Bishan Singapore · 5 miles away</span>
                  </div>
                  <div class="text-center">
                    <span>Vlog | Cooking | Arts</span>
                  </div>
                  <div class="mt-1 centered">
                    <button class="btn btn-light-outline mr-3">View Channel</button>
                    <button class="btn btn-light-outline">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              class="
                col-lg-3
                col-md-4
                col-sm-6
                col-12
                card-grid-custom-margin
              ">
              <div class="card card-custom-width card-decor__odd">
                <div class="card-body text-center">
                  <avatar class="centered" username="Hannah Montana" :size="avatarSize"></avatar>
                  <strong>3. Hannah Montana</strong>
                  <div class="text-center">
                    <v-icon name="map-marker" class="card-icon" />
                    <span>Bishan Singapore · 5 miles away</span>
                  </div>
                  <div class="text-center">
                    <span>Vlog | Cooking | Arts</span>
                  </div>
                  <div class="mt-1 centered">
                    <button class="btn btn-light-outline mr-3">View Channel</button>
                    <button class="btn btn-light-outline">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              class="
                col-lg-3
                col-md-4
                col-sm-6
                col-12
                card-grid-custom-margin
              ">
              <div class="card card-custom-width card-decor__even">
                <div class="card-body text-center">
                  <avatar class="centered" username="Danny Ainge" :size="avatarSize"></avatar>
                  <strong>4. Danny Ainge</strong>
                  <div class="text-center">
                    <v-icon name="map-marker" class="card-icon" />
                    <span>Bishan Singapore · 5 miles away</span>
                  </div>
                  <div class="text-center">
                    <span>Vlog | Cooking | Arts</span>
                  </div>
                  <div class="mt-1 centered">
                    <button class="btn btn-light-outline mr-3">View Channel</button>
                    <button class="btn btn-light-outline">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              class="
                col-lg-3
                col-md-4
                col-sm-6
                col-12
                card-grid-custom-margin
              ">
              <div class="card card-custom-width card-decor__odd">
                <div class="card-body text-center">
                  <avatar class="centered" username="Michael Jordan" :size="avatarSize"></avatar>
                  <strong>5. Michael Jordan</strong>
                  <div class="text-center">
                    <v-icon name="map-marker" class="card-icon" />
                    <span>Bishan Singapore · 5 miles away</span>
                  </div>
                  <div class="text-center">
                    <span>Vlog | Cooking | Basketball</span>
                  </div>
                  <div class="mt-1 centered">
                    <button class="btn btn-light-outline mr-3">View Channel</button>
                    <button class="btn btn-light-outline">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              class="
                col-lg-3
                col-md-4
                col-sm-6
                col-12
                card-grid-custom-margin
              ">
              <div class="card card-custom-width card-decor__even">
                <div class="card-body text-center">
                  <avatar class="centered" username="Hakeem Olajuwon" :size="avatarSize"></avatar>
                  <strong>6. Hakeem Olajuwon</strong>
                  <div class="text-center">
                    <v-icon name="map-marker" class="card-icon" />
                    <span>Bishan Singapore · 5 miles away</span>
                  </div>
                  <div class="text-center">
                    <span>Vlog | Cooking | Basketball</span>
                  </div>
                  <div class="mt-1 centered">
                    <button class="btn btn-light-outline mr-3">View Channel</button>
                    <button class="btn btn-light-outline">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              class="
                col-lg-3
                col-md-4
                col-sm-6
                col-12
                card-grid-custom-margin
              ">
              <div class="card card-custom-width card-decor__odd">
                <div class="card-body text-center">
                  <avatar class="centered" username="Victor Wooten" :size="avatarSize"></avatar>
                  <strong>7. Victor Wooten</strong>
                  <div class="text-center">
                    <v-icon name="map-marker" class="card-icon" />
                    <span>Bishan Singapore · 5 miles away</span>
                  </div>
                  <div class="text-center">
                    <span>Vlog | Bass | Martial Arts</span>
                  </div>
                  <div class="mt-1 centered">
                    <button class="btn btn-light-outline mr-3">View Channel</button>
                    <button class="btn btn-light-outline">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              class="
                col-lg-3
                col-md-4
                col-sm-6
                col-12
                card-grid-custom-margin
              ">
              <div class="card card-custom-width card-decor__even">
                <div class="card-body text-center">
                  <avatar class="centered" username="John Patitucci" :size="avatarSize"></avatar>
                  <strong>8. John Patitucci</strong>
                  <div class="text-center">
                    <v-icon name="map-marker" class="card-icon" />
                    <span>Bishan Singapore · 5 miles away</span>
                  </div>
                  <div class="text-center">
                    <span>Vlog | Bass | Brazilian Culture</span>
                  </div>
                  <div class="mt-1 centered">
                    <button class="btn btn-light-outline mr-3">View Channel</button>
                    <button class="btn btn-light-outline">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              class="
                col-lg-3
                col-md-4
                col-sm-6
                col-12
                card-grid-custom-margin
              ">
              <div class="card card-custom-width card-decor__odd">
                <div class="card-body text-center">
                  <avatar class="centered" username="Roger Palageer" :size="avatarSize"></avatar>
                  <strong>9. Roger Palageer</strong>
                  <div class="text-center">
                    <v-icon name="map-marker" class="card-icon" />
                    <span>Bishan Singapore · 5 miles away</span>
                  </div>
                  <div class="text-center">
                    <span>Vlog | Cooking | Daydreaming</span>
                  </div>
                  <div class="mt-1 centered">
                    <button class="btn btn-light-outline mr-3">View Channel</button>
                    <button class="btn btn-light-outline">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              class="
                col-lg-3
                col-md-4
                col-sm-6
                col-12
                card-grid-custom-margin
              ">
              <div class="card card-custom-width card-decor__even">
                <div class="card-body text-center">
                  <avatar class="centered" username="Zilly Zohan" :size="avatarSize"></avatar>
                  <strong>10. Zilly Zohan</strong>
                  <div class="text-center">
                    <v-icon name="map-marker" class="card-icon" />
                    <span>Bishan Singapore · 5 miles away</span>
                  </div>
                  <div class="text-center">
                    <span>Vlog | Cooking | Espionage</span>
                  </div>
                  <div class="mt-1 centered">
                    <button class="btn btn-light-outline mr-3">View Channel</button>
                    <button class="btn btn-light-outline">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              class="
                col-lg-3
                col-md-4
                col-sm-6
                col-12
                card-grid-custom-margin
              ">
              <div class="card card-custom-width card-decor__odd">
                <div class="card-body text-center">
                  <avatar class="centered" username="Fredie Mercury" :size="avatarSize"></avatar>
                  <strong>11. Freddie Mercury</strong>
                  <div class="text-center">
                    <v-icon name="map-marker" class="card-icon" />
                    <span>Bishan Singapore · 5 miles away</span>
                  </div>
                  <div class="text-center">
                    <span>Vlog | Cooking | Singing</span>
                  </div>
                  <div class="mt-1 centered">
                    <button class="btn btn-light-outline mr-3">View Channel</button>
                    <button class="btn btn-light-outline">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              class="
                col-lg-3
                col-md-4
                col-sm-6
                col-12
                card-grid-custom-margin
              ">
              <div class="card card-custom-width card-decor__even">
                <div class="card-body text-center">
                  <avatar class="centered" username="Mark Zuckemberg" :size="avatarSize"></avatar>
                  <strong>12. Mark Zuckemberg</strong>
                  <div class="text-center">
                    <v-icon name="map-marker" class="card-icon" />
                    <span>Bishan Singapore · 5 miles away</span>
                  </div>
                  <div class="text-center">
                    <span>Vlog | Cooking | Programming</span>
                  </div>
                  <div class="mt-1 centered">
                    <button class="btn btn-light-outline mr-3">View Channel</button>
                    <button class="btn btn-light-outline">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Avatar from 'vue-avatar';

export default {
  name: 'MapForm',
  components: {
    Avatar,
  },
  data() {
    return {
      style: 'width: 97.5%; height: 350px',
      avatarSize: 70,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/common/variables";

.centered {
  margin: 0 auto;
}

.map-wrapper {
  background: #F5F5F5;
  max-width: 1400px;
  @extend .centered;
  padding: 0 2em 200px;
}

.map-content {
  @extend .centered;
  max-width: 1200px;
  padding-top: 40px;
}

.left-content {
  float: left;
  width: 50%;
  height: 50px;
}

.right-content {
  float: right;
  width: 50%;
}

.adv-search-bttn {
  height: 70px;
  float: right;
  @media screen and (max-width: $breakpoint-lg) {
    margin-right: 1.1rem;
  }
}

.button-position {
  position: relative;
}

.map {
  position: relative;
  top: 3rem;
}

.result-grid {
  position: relative;
  top: 6rem;
}

.left-content p {
  margin-top: -0.5rem;
  font-family: Arial, Helvetica, sans-serif;
  color: $secondary-color;
}

.result-grid p {
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  color: $secondary-color;
}

.card-grid-custom-margin {
  margin-right: -0.7rem;
  margin-bottom: 1rem;
}

.card-custom-width {
  width: 100%;
}

.row-custom-margin {
  margin-left: -2rem;
}

.card-icon {
  width: 0.7rem;
  height: 0.7rem;
  color: $secondary-color;
}

.card-body span {
  font-size: 0.9rem;
}

.btn-light-outline {
  border-color: $light-color;
  font-size: 0.7rem;
  color: $light-color;
}

.row-max-width {
  max-width: 1200px;
}

.mid-on-small {
  @media screen and (max-width: $breakpoint-lg) {
    margin: 0 auto;
  }
}

.card-decor {
  color: white;
}

.card-decor__odd {
  @extend .card-decor;
  background-image: url(https://jumpcut.com/img/jumpcut-homepage/va-bg.jpg);
}

.card-decor__even {
  @extend .card-decor;
  background-image: url(https://jumpcut.com/img/jumpcut-homepage/aim-bg.jpg);
}

h1 {
  font-size: 2rem;
}
</style>
