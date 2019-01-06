<template>
  <section>
    <div class="map-wrapper">
      <div class="map-content">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <h1>16 vloggers near Palau Ujong</h1>
            <p>Palau Ujong, Singapore &#183; 10 miles radius &#183; Vlog</p>
          </div>
          <div class="col-lg-5 col-md-5">
            <button
              type="button"
              class="col-lg-4 btn btn-dark adv-search-bttn"
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
            <p>Viewing <strong>12</strong> or <strong>40</strong> results</p>
          </div>
          <div class="row row-custom-margin">
            <div class="col-lg-3 col-md-4 card-grid-custom-margin">
              <div class="card card-custom-width">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title
                    and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 card-grid-custom-margin">
              <div class="card card-custom-width">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title
                    and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 card-grid-custom-margin">
              <div class="card card-custom-width">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title
                    and make up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 card-grid-custom-margin">
              <div class="card card-custom-width">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title
                    and make up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 card-grid-custom-margin">
              <div class="card card-custom-width">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title
                    and make up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 card-grid-custom-margin">
              <div class="card card-custom-width">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title
                    and make up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 card-grid-custom-margin">
              <div class="card card-custom-width">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title
                    and make up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 card-grid-custom-margin">
              <div class="card card-custom-width">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title
                    and make up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 card-grid-custom-margin">
              <div class="card card-custom-width">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title
                    and make up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 card-grid-custom-margin">
              <div class="card card-custom-width">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title
                    and make up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 card-grid-custom-margin">
              <div class="card card-custom-width">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title
                    and make up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 card-grid-custom-margin">
              <div class="card card-custom-width">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title
                    and make up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
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
export default {
  name: 'MapForm',
  data() {
    return {
      style: 'width: 91%; height: 350px',
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/common/variables";

.map-wrapper {
  background: #F5F5F5;
  max-width: 1400px;
  margin: auto;
  padding: 0 2em 200px;
}

.map-content {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
}

.left-content {
  float: left;
  width: 50%;
  height: 50px;
}

.clearfixed {
  clear: both;
}

.right-content {
  float: right;
  width: 50%;
}

.adv-search-bttn {
  height: 70px;
  float: right;
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
  margin-right: -2rem;
  margin-bottom: 1rem;
}

.card-custom-width {
  width: 95%;
}

.row-custom-margin {
  margin-left: -2rem;
}

h1 {
  font-size: 2rem;
}
</style>
