<template>
  <div class="container-fluid pl-0 pr-0" style="background-color:#F0F0F0;height:100%;">
    <nav class="navbar navbar-expand-sm" style="background-color: #164e87;">
      <a class="navbar-brand" href="/home">
        <img class="img-fluid" src="../logo/whitelogo.png" alt="Notify" style="height:50px;" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target=".navbar-collapse"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse mr-5">
        <ul class="navbar-nav mr-5">
          <li class="nav-item">
            <v-btn color="white" text class="nav-link" href="/home/">Home</v-btn>
          </li>
          <li class="nav-item">
            <v-btn color="white" text class="nav-link" @click="OpenFeature">Features</v-btn>
          </li>
          <li class="nav-item">
            <v-btn
              color="white"
              text
              class="nav-link"
              href="#"
              @click="morefeatures"
            >Want more feautures?</v-btn>
          </li>
          <li class="nav-item">
            <v-btn color="white" text class="nav-link" href="#" @click="reportabug">Report a Bug</v-btn>
          </li>
        </ul>
        <v-menu offset-y auto light>
          <template v-slot:activator="{ on }">
            <v-text-field
              clearable
              append-icon="mdi mdi-magnify"
              v-on="on"
              v-model="websitebySearch"
              @input="SearchforInput"
              placeholder=" Search for website"
              background-color="white"
            ></v-text-field>
          </template>
          <v-list>
            <v-list-item v-for="website in this.websitesbySearch" :key="website._id.$oid">
              <v-btn
                text
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                class="mx-auto"
                height="120"
                @click="ScrapeWeb"
              >
                <img
                  class="pl-2 pr-2"
                  :src="getImage(website.logo)"
                  :name="website.name"
                  width="150"
                />
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-spacer></v-spacer>

        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon color="white" class="mr-2" v-on="on">
              <v-icon>mdi mdi-bell</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="product in this.$store.state.ProductsTracked" :key="product._id">
              <img :src="product.product_image" style="width:50px" alt class="mr-2" />
              <v-list-item-title>{{ product.product_name }}</v-list-item-title>

              <v-btn
                class="ml-5"
                fab
                dark
                small
                color="red"
                @click="stopTracking(product._id, product.product_name)"
              >
                <v-icon dark>mdi mdi-close</v-icon>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-avatar size="48">
          <img class="img-fluid ml-auto" :src="`${this.$store.getters.userImage}`" />
        </v-avatar>

        <div class="nav-item dropdown mr-5">
          <v-btn
            class="nav-link dropdown-toggle mr-5"
            color="white"
            text
            id="navbarDropdown"
            role="button"
            data-target="account"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >{{ this.$store.getters.userName }}</v-btn>
          <input type="file" ref="file" style="display: none" @change="file" />
          <div class="dropdown-menu" id="account" aria-labelledby="navbarDropdown">
            <v-btn color="#164e87" text class="dropdown-item" @click="changepicture">
              Change Avatar
              <span class="mdi mdi-image"></span>
            </v-btn>
            <v-btn color="#164e87" class="dropdown-item" text @click="changepw">
              Change Password
              <span class="mdi mdi-key-variant"></span>
            </v-btn>
            <div class="dropdown-divider"></div>
            <v-btn color="#164e87" class="dropdown-item" text @click="logout" href="#">
              Sign Out
              <span class="mdi mdi-logout"></span>
            </v-btn>
          </div>
        </div>
        <span style="color:white">{{ this.country }}</span>
        <country-flag :country="country" size="normal" />
      </div>
    </nav>

    <nav class="navbar navbar-expand-lg" style="background-color:white">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target=".cats"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span style="color:#164e87">All Categories</span>
      </button>

      <ul class="collapse navbar-collapse cats ml-5">
        <li class="nav-item hidden-sm-and-down">
          <span style="color:#164e87">
            <b>All Categories</b>
          </span>
        </li>

        <li class="nav-item dropdown ml-5">
          <v-btn
            color="#164e87"
            text
            @mouseenter="onOver"
            @mouseleave="onLeave"
            class="nav-link dropdown-toggle"
            data-target="homeandapp"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >ECommerce</v-btn>
          <div
            class="dropdown-menu"
            id="homeandapp"
            ref="dropdown"
            aria-labelledby="navbarDropdown"
          >
            <div class="dropdown-item bg-transparent">
              <v-btn
                text
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img class="pl-2 pr-2" src="../logo/Amazon_logo.svg" name="amazon" width="200" />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent mt-1">
              <v-btn
                color="#164e87"
                text
                class="dropdown-item"
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img
                  class="pl-2 pr-2"
                  src="../logo/jumia-seeklogo.com.svg"
                  name="jumia"
                  width="200"
                />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent mt-1">
              <v-btn
                color="#164e87"
                text
                class="dropdown-item"
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img
                  class="pl-2 pr-2"
                  src="../logo/Souq_Logo_Primary_EN.svg"
                  name="souq"
                  width="200"
                />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent mt-1">
              <v-btn
                color="#164e87"
                text
                class="dropdown-item"
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img class="pl-2 pr-2" src="../logo/olx.png" name="olx" width="200" />
              </v-btn>
            </div>
          </div>
        </li>

        <li class="nav-item dropdown ml-5">
          <v-btn
            color="#164e87"
            text
            class="nav-link dropdown-toggle"
            data-target="clothing"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >clothing</v-btn>
          <div
            class="dropdown-menu pl-2 pr-2"
            style="width:600px"
            id="clothing"
            aria-labelledby="navbarDropdown"
          >
            <div class="dropdown-item bg-transparent pt-0">
              <v-btn
                text
                class="pl-0"
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img src="../logo/Zara_Logo.svg" width="200" name="zara" height="100px" />
              </v-btn>
              <v-btn
                text
                class="mb-5"
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img
                  class="ml-5 pl-2 pr-2"
                  src="../logo/Lacoste_logo.svg"
                  name="lacoste"
                  width="180"
                />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent mt-1">
              <v-btn
                text
                class="pl-0"
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="150px"
                @click="ScrapeWeb"
              >
                <img src="../logo/H&M-Logo.svg" name="hm" width="180" />
              </v-btn>
              <v-btn
                text
                class="mb-5 ml-5"
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img
                  class="ml-5 pl-0 pr-4"
                  src="../logo/Pull&Bear_logo.svg"
                  name="pullandbear"
                  width="200"
                />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent mt-1">
              <v-btn
                class="pl-0"
                text
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img class="pl-2 pr-2" src="../logo/Bershka_logo.svg" name="bershka" width="200" />
              </v-btn>
              <v-btn
                class="mb-5"
                text
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="180px"
                @click="ScrapeWeb"
              >
                <img
                  class="ml-5 pl-2 pr-2"
                  src="../logo/american-eagle-outfitters.svg"
                  name="ae"
                  width="180"
                />
              </v-btn>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown ml-5">
          <v-btn
            color="#164e87"
            text
            class="nav-link dropdown-toggle"
            data-target="homeandapp"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >sports</v-btn>
          <div class="dropdown-menu" id="homeandapp" aria-labelledby="navbarDropdown">
            <div class="dropdown-item bg-transparent">
              <v-btn
                text
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="150px"
                @click="ScrapeWeb"
              >
                <img
                  class="pl-2 pr-2"
                  style="mix-blend-mode: multiply;"
                  src="../logo/Adidas_Logo.svg"
                  width="200"
                  name="adidas"
                />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent mt-3">
              <v-btn
                text
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img class="pl-2 pr-2 pt-2" src="../logo/nike.png" name="nike" width="200" />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent mt-3">
              <v-btn
                text
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img class="pl-2 pr-2" src="../logo/puma.png" name="puma" width="200" />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent mt-3">
              <v-btn
                text
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img src="../logo/reebook.png" class="pl-2 pr-2" name="reebok" width="200" />
              </v-btn>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown ml-5">
          <v-btn
            color="#164e87"
            text
            class="nav-link dropdown-toggle"
            data-target="homeandapp"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >home appliances</v-btn>
          <div class="dropdown-menu" id="homeandapp" aria-labelledby="navbarDropdown">
            <div class="dropdown-item bg-transparent">
              <v-btn
                text
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img
                  class="pl-2 pr-2"
                  src="../logo/Elaraby-group-logo.png"
                  name="elarabygroup"
                  width="200"
                />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent">
              <v-btn
                text
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img class="pl-2 pr-2" src="../logo/b-tech.png" name="btech" width="200" />
              </v-btn>
            </div>

            <div class="dropdown-item bg-transparent">
              <v-btn
                text
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img src="../logo/fresh.png" name="fresh" width="200" />
              </v-btn>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown ml-5">
          <v-btn
            color="#164e87"
            text
            class="nav-link dropdown-toggle"
            data-target="homeandapp"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >health & beauty</v-btn>
          <div class="dropdown-menu" id="homeandapp" aria-labelledby="navbarDropdown">
            <div class="dropdown-item bg-transparent">
              <v-btn
                text
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img
                  class="pl-2 pr-2"
                  src="../logo/mazaya-png.png"
                  style="mix-blend-mode: multiply;"
                  width="200"
                  name="mazaya"
                />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent mt-1">
              <v-btn
                color="#164e87"
                text
                class="dropdown-item"
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img src="../logo/hude-beauty.png" name="hudabeauty" width="200" />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent mt-1">
              <v-btn
                color="#164e87"
                text
                class="dropdown-item"
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img class="pl-2 pr-2" src="../logo/sephora.png" name="sephora" width="200" />
              </v-btn>
            </div>

            <div class="dropdown-item bg-transparent mt-1">
              <v-btn
                color="#164e87"
                text
                class="dropdown-item"
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img src="../logo/Anastasia_Beverly_Hills_logo.png" name="anastasia" width="200" />
              </v-btn>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown ml-5">
          <v-btn
            color="#164e87"
            text
            class="nav-link dropdown-toggle"
            data-target="homeandapp"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >furniture</v-btn>
          <div class="dropdown-menu" id="homeandapp" aria-labelledby="navbarDropdown">
            <div class="dropdown-item bg-transparent mt-1">
              <v-btn
                color="#164e87"
                text
                class="dropdown-item"
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img src="../logo/Ikea_logo.svg" width="200" name="ikea" />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent mt-1">
              <v-btn
                text
                class="dropdown-item"
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img class="pl-2 pr-2" src="../logo/inout.png" name="inandoutfurniture" width="200" />
              </v-btn>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown ml-5">
          <v-btn
            color="#164e87"
            text
            class="nav-link dropdown-toggle"
            data-target="homeandapp"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >watches and jewelry</v-btn>
          <div class="dropdown-menu" id="homeandapp" aria-labelledby="navbarDropdown">
            <div class="dropdown-item bg-transparent">
              <v-btn
                text
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img
                  class="pl-2 pr-2"
                  src="../logo/gc.png"
                  style="mix-blend-mode: multiply;"
                  width="200"
                  name="gc"
                />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent">
              <v-btn
                text
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img
                  class="pl-2 pr-2"
                  src="../logo/D-Diamonds-Logo-JPEG.jpg"
                  style="mix-blend-mode: multiply;"
                  width="200"
                  name="ddiamonds"
                />
              </v-btn>
            </div>
            <!-- <div class="dropdown-item bg-transparent mt-1">
              <v-btn
                text
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img src="../logo/i-watch.png" width="200" name="i-watch" />
              </v-btn>
            </div>-->
            <div class="dropdown-item bg-transparent mt-1">
              <v-btn
                color="#164e87"
                text
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
                @click="ScrapeWeb"
              >
                <img class="pl-2 pr-2" src="../logo/azzam_logo_tung.png" name="azzam" width="200" />
              </v-btn>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown ml-5">
          <v-btn
            color="#164e87"
            text
            class="nav-link dropdown-toggle"
            data-target="homeandapp"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >currency</v-btn>
          <div class="dropdown-menu" id="homeandapp" aria-labelledby="navbarDropdown">
            <div class="dropdown-item bg-transparent">
              <v-btn
                text
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="200px"
                @click="ScrapeWeb"
              >
                <img src="../logo/currency.png" width="200" height="200px" name="currency" />
              </v-btn>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown ml-5">
          <v-btn
            color="#164e87"
            text
            class="nav-link dropdown-toggle"
            data-target="homeandapp"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >precious metals</v-btn>

          <div class="dropdown-menu" id="homeandapp" aria-labelledby="navbarDropdown">
            <div class="dropdown-item bg-transparent">
              <v-btn
                text
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                @click="ScrapeWeb"
                height="130"
              >
                <img src="../logo/gold.png" width="180" name="XAU" />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent">
              <v-btn
                text
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                @click="ScrapeWeb"
                height="130px"
              >
                <img src="../logo/silver.png" width="180" name="XAG" />
              </v-btn>
            </div>
          </div>
        </li>
      </ul>
    </nav>

    <div>
      <router-view :key="$route.fullPath"></router-view>
    </div>
    <div class="fixed-bottom">
      <v-card
        flat
        tile
        class="lighten-1 white--text text-center hidden-md-and-down"
        color="#164e87"
      >
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="white--text">
          This project aims specifically at allowing user to be notified when a
          current product on a specific website has a price reduction
          <br />thus
          allowing the users to purchase the product at the specific price he
          wants.
          <br />
        </v-card-text>
        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>Notify</strong>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
<script>
import _ from "lodash";
import websites from "../websites";
import api from "../api";
import getalltrackings from "../getalltrackings";
// import router from "../router.js"
export default {
  data() {
    return {
      country: "",
      website: null,
      websitebySearch: null,
      websitesbySearch: [],
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
    };
  },
  methods: {
    OpenFeature() {
      this.$fire({
        title:
          '<strong style="color:white">What features do we offer?</strong>',
        width: 900,
        background: "#164e87",
        html: `<div style="color:white;"class="ml-3" >
    <ul>
    <li class="mt-3 text-sm-left" >Tracking products has never been easier, with just a link of the product you can track its price.</li>
    <li class="mt-3 text-sm-left" >Abillity to track other items such as precious metals and currencies of all sort.</li>
    <li class="mt-3 text-sm-left" >Instant Email when price of chosen item drops.</li>
    <li class="mt-3 text-sm-left" >Abillity to cancel any order being tracked from the bell icon top right of your screen.</li>
    <li class="mt-3 text-sm-left">Want more features? Please let us know.</li>
    </ul>
    </div>
   `,
        showCancelButton: true,
        focusConfirm: false
      });
    },
    checkForNotifs() {
      api
        .Notifications(this.$store.getters.userEmail)
        .then(res => {
          if (res) {
            this.$store.state.Notifications = [];
            this.$store.state.Notifications = res.data;
          }
        })
        .catch(err => {
          this.$store.state.Notifications = err.response.data;
        });
    },
    getImage(logo) {
      return require("../logo/" + logo);
    },
    SearchforInput() {
      this.websitesbySearch = _.filter(websites, val =>
        _.includes(
          val.website_name?.toLowerCase(),
          this.websitebySearch?.toLowerCase()
        )
      );
    },
    stopTracking(pid, pname) {
      this.$confirm(`Are you sure you want to stop tracking ${pname}?`).then(
        () => {
          this.$loading(true);
          api
            .stopTrackingProduct(pid)
            .then(() => {
              this.$store.state.ProductsTracked = _.filter(
                this.$store.state.ProductsTracked,
                product => product._id != pid
              );

              this.$loading(false);
              this.$alert(
                `Successfully stopped tracking ${pname}`,
                "Success",
                "success"
              );
            })
            .catch(() => {});
        }
      );
    },
    ScrapeWeb(e) {
      if (e.target.tagName === "BUTTON") {
        this.website = e.target.querySelector("img");
      } else {
        this.website = e.target;
      }
      let info = {
        websitename: this.website.name,
        websitesrc: this.website.src
      };
      this.$store.commit("assignwebsite", info);
      if (this.website.name == "currency") {
        this.$router.push({ name: "currency" }).catch(error => {
          if (error.name != "NavigationDuplicated") {
            throw error;
          }
        });
      } else if (this.website.name == "XAU" || this.website.name == "XAG") {
        this.$router.push({ name: "metals" }).catch(error => {
          if (error.name != "NavigationDuplicated") {
            throw error;
          }
        });
      } else {
        this.$router.push({ name: "main" }).catch(error => {
          if (error.name != "NavigationDuplicated") {
            throw error;
          }
        });
      }
    },
    onOver() {
      this.$refs.dropdown.class = "dropdown-menu show";
    },
    onLeave() {
      this.$refs.dropdown.visible = false;
    },
    dimpic(e) {
      e.target.style.opacity = 0.5;
    },
    undimpic(e) {
      e.target.style.opacity = 1;
    },
    file(e) {
      let frm = new FormData();
      frm.append("profile_picture", e.target.files[0], e.target.files[0].name);
      frm.append("email", this.$store.getters.userEmail);
      this.$loading(true);
      api
        .changepicture(frm)
        .then(res => {
          this.$loading(false);
          this.$store.commit("assignpicture", res.data);
          this.$alert("Profile Picture has been changed", null, "success");
        })
        .catch(() => {});
    },
    logout() {
      this.$confirm("Are you sure you want to logout?").then(() => {
        api
          .deletetoken()
          .then(() => {
            this.$router.push("/");
          })
          .catch(() => {
            this.$router.push("/");
          });
        localStorage.removeItem("user-info");
      });
    },
    changepw() {
      this.$fire({
        title: "Enter the information below",
        html:
          '<input id="oldpw" type="password" class="swal2-input" placeholder="Old Password">' +
          '<input id="password" type="password" class="swal2-input" placeholder="New Password">' +
          '<input id="confirmpassword" type="password" class="swal2-input" placeholder="Confirm Password">',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: "Change",
        preConfirm: () => {
          return [
            document.getElementById("oldpw").value,
            document.getElementById("password").value,
            document.getElementById("confirmpassword").value
          ];
        }
      }).then(results => {
        const oldpw = results.value[0];
        const password = results.value[1];
        const confirmpassword = results.value[2];
        if (oldpw.length == 0)
          return this.$alert(
            "Please enter your old password",
            "Error",
            "error"
          );
        if (password != confirmpassword)
          return this.$alert("Passwords don't match", "Error", "error");
        if (password.length < 5)
          return this.$alert(
            "Password must be at least 5 characters",
            "Error",
            "error"
          );
        if (/^(?=.*?[A-Z])(?=.*?[a-z])/.test(password) == false)
          return this.$alert(
            "Password must have at least one upper case and one lower case letters.",
            "Error",
            "error"
          );
        this.$loading(true);
        let user = {
          oldpw: oldpw,
          email: this.$store.getters.userEmail,
          password: password
        };
        api
          .userChangesPw(user)
          .then(res => {
            this.$loading(false);
            this.$alert(
              `${res.data}, Log in to continue`,
              "Success",
              "success"
            );
            api.deletetoken().then(() => {
              localStorage.removeItem("user-info");
              this.$router.push("/");
            });
          })
          .catch(err => {
            this.$loading(false);
            this.$alert(err.response.data, "Error", "error");
          });
      });
    },
    changepicture() {
      this.$refs.file.click();
    },
    morefeatures() {
      this.$router.push({ name: "morefeatures" });
    },
    reportabug() {
      this.$fire({
        title: "Report A Bug",
        html: `
           <textarea id="txtarea"  rows="4" cols="50">
            </textarea>`,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: "Send",
        preConfirm: () => {
          return [document.getElementById("txtarea").value];
        }
      }).then(results => {
        const txtarea = results.value[0];
        if (txtarea.length == 0)
          return this.$alert("Kindlly Enter Your Message", "Error", "error");
        this.$loading(true);
        let obj={
         z : txtarea,
         x :this.$store.getters.userName,
         y:this.$store.getters.userEmail
        }
        api
          .reportabug(obj)
          .then(() => {            
            this.$loading(false);
          });
      });
    }
  },
  created() {
    this.$store.state.ProductsTracked = [];
    api
      .getlocation()
      .then(res => {
        this.country = res.data.countryCode;
      })
      .catch(err => {
        console.log(err);
      });
    getalltrackings(this.$store.getters.userEmail);
  }
};
</script>
<style scoped>
ul {
  list-style-type: none;
}
</style>
