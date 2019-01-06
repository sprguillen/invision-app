<template>
  <section data-aos="fade" data-aos-duration="7000" data-aos-delay="100">
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
              class="col-lg-4 col-md-4 col-sm-8 col-8 btn btn-dark adv-search-bttn"
            >Advanced Search</button>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <GmapMap
              map-type-id="terrain"
              :center="{lat:1.38, lng:103.8}"
              :zoom="12"
              :style="this.style"
            >
            </GmapMap>
          </div>
        </div>
        <div class="result-grid ml-3">
          <div class="row">
            <p
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              Viewing <strong>12</strong> or <strong>12</strong> results
            </p>
          </div>
          <div class="row row-custom-margin">
            <div
              v-for="person in persons"
              :key="person.id"
              data-aos="fade-down"
              data-aos-duration="1000"
              class="
                col-lg-3
                col-md-4
                col-sm-6
                col-12
                card-grid-custom-margin
              "
              @mouseover="hoverCard(person.id)"
              @mouseout="hoverCard(-1)"
            >
              <div
                class="card card-custom-width"
                :class="{
                  'add-opacity': !isSelected(person.id),
                  'card-decor__even': person.id % 2 === 0,
                  'card-decor__odd': person.id % 2 !== 0
                }"
              >
                <div class="card-body text-center">
                  <avatar class="centered" :username="person.name" :size="avatarSize"></avatar>
                  <strong>{{ person.id }}. {{ person.name }}</strong>
                  <div class="text-center">
                    <v-icon name="map-marker" class="card-icon" />
                    <span>{{ person.location }}</span>
                  </div>
                  <div class="text-center">
                    <span>{{ person.hobbies }}</span>
                  </div>
                  <div class="mt-1">
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
      selectedCard: -1,
      avatarSize: 70,
      persons: [
        {
          id: 1,
          name: 'Mark Zuckemberg',
          location: 'Bishan Singapore · 5 miles away',
          hobbies: 'Vlog | Cooking | Programming',
        },
        {
          id: 2,
          name: 'Jane Doe',
          location: 'Bishan Singapore · 5 miles away',
          hobbies: 'Vlog | Cooking | Travelling',
        },
        {
          id: 3,
          name: 'Bilbo Baggins',
          location: 'Bishan Singapore · 5 miles away',
          hobbies: 'Stealing | Writing | Travelling',
        },
        {
          id: 4,
          name: 'Gandalf Olorin',
          location: 'Bishan Singapore · 5 miles away',
          hobbies: 'Sorcery | Drinking | Travelling',
        },
        {
          id: 5,
          name: 'Lord Valdemort',
          location: 'Bishan Singapore · 5 miles away',
          hobbies: 'Sorcery | Studying | Sleeping',
        },
        {
          id: 6,
          name: 'Marcus Miller',
          location: 'Bishan Singapore · 5 miles away',
          hobbies: 'Bass | Producing | Recording',
        },
        {
          id: 7,
          name: 'Son Goku',
          location: 'Bishan Singapore · 5 miles away',
          hobbies: 'Eating | Sleeping | Training',
        },
        {
          id: 8,
          name: 'Baki Hanma',
          location: 'Bishan Singapore · 5 miles away',
          hobbies: 'Fighting | Sleeping | Eating',
        },
        {
          id: 9,
          name: 'Leonardo Otto',
          location: 'Bishan Singapore · 5 miles away',
          hobbies: 'World domination | Sleeping',
        },
        {
          id: 10,
          name: 'John Paticucci',
          location: 'Bishan Singapore · 5 miles away',
          hobbies: 'Bass | Brazilian Culture | Travelling',
        },
        {
          id: 11,
          name: 'Victor Wooten',
          location: 'Bishan Singapore · 5 miles away',
          hobbies: 'Bass | Cooking | Martial Arts',
        },
        {
          id: 12,
          name: 'Rober Jaworski',
          location: 'Bishan Singapore · 5 miles away',
          hobbies: 'Vlog | Politics | Basketball',
        },
      ],
    };
  },
  methods: {
    /**
     * Hover effect
     */
    hoverCard(selectedIndex) {
      this.selectedCard = selectedIndex;
    },
    isSelected(cardIndex) {
      return this.selectedCard === cardIndex;
    },
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

.card.add-opacity {
  opacity:0.2;
}

h1 {
  font-size: 2rem;
}
</style>
