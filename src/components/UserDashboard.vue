<template>
  <div class="container-fluid pl-0 pr-0" style="background-color:#F0F0F0;height:100%;">
    <nav class="navbar navbar-expand-sm" style="background-color: #164e87;">
      <a class="navbar-brand" href="#">
        <img class="img-fluid" src="../logo/white_notify.png" alt="Notify" style="height:50px;" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse mr-5">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <v-btn color="white" text class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </v-btn>
          </li>
          <li class="nav-item">
            <v-btn color="white" text class="nav-link" href="#">Features</v-btn>
          </li>
        </ul>
        <v-spacer></v-spacer>
       
    <v-avatar size="48">
            <img
          class="img-fluid ml-auto"
          :src="`${this.$store.getters.userImage}`"
        />
        
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
          >{{this.$store.getters.userName}}</v-btn>
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
         <country-flag :country='country' size='normal' />
      </div>
    </nav>

      <nav class="navbar navbar-expand-lg" style="background-color:white" >
        <v-toolbar-title  style="color:#164e87;">All Categories</v-toolbar-title>
        <span class="nav-item dropdown ml-5">
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
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px" @click="ScrapeWeb">
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
                <img class="pl-2 pr-2" src="../logo/jumia-seeklogo.com.svg" name="jumia" width="200" />
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
                <img class="pl-2 pr-2" src="../logo/Souq_Logo_Primary_EN.svg"  name="souq" width="200" />
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
        </span>
        <span class="nav-item dropdown ml-5">
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
                <img class="ml-5 pl-2 pr-2" src="../logo/Lacoste_logo.svg" name="lacoste" width="180" />
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
                <img src="../logo/H&M-Logo.svg" name="h&m" width="180" />
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
                <img class="ml-5 pl-0 pr-4" src="../logo/Pull&Bear_logo.svg"  name="p&b" width="200" />
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
                <img class="ml-5 pl-2 pr-2" src="../logo/american-eagle-outfitters.svg" name="ae" width="180" />
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
                height="100px"
                @click="ScrapeWeb"
              >
                <img class="pl-2 pr-2" src="../logo/Tommy_hilfig_vectorlogo.svg" name="tommy" width="200" />
              </v-btn>
            </div>
          </div>
        </span>
        <span class="nav-item dropdown ml-5">
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
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" name="adidas" ripple large height="150px" @click="ScrapeWeb">
                <img
                  class="pl-2 pr-2"
                  style="mix-blend-mode: multiply;"
                  src="../logo/Adidas_Logo.svg"
                  width="200"
                />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent mt-3">
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px" @click="ScrapeWeb">
                <img class="pl-2 pr-2 pt-2" src="../logo/nike.png" name="nike" width="200" />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent mt-3">
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px" @click="ScrapeWeb">
                <img class="pl-2 pr-2" src="../logo/puma.png" name="puma" width="200" />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent mt-3">
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px" @click="ScrapeWeb">
                <img src="../logo/reebook.png" class="pl-2 pr-2" name="reebook" width="200" />
              </v-btn>
            </div>
          </div>
        </span>
        <span class="nav-item dropdown ml-5">
          <v-btn
            color="#164e87"
            text
            class="nav-link dropdown-toggle"
            data-target="homeandapp"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >home appliances</v-btn>
          <div class="dropdown-menu " id="homeandapp" aria-labelledby="navbarDropdown">
            <div class="dropdown-item bg-transparent">
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px" @click="ScrapeWeb">
                <img class="pl-2 pr-2" src="../logo/Elaraby-group-logo.png" name="elaraby" width="200" />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent">
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px" @click="ScrapeWeb">
                <img class="pl-2 pr-2" src="../logo/b-tech.png" name="btech" width="200" />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent">
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px" @click="ScrapeWeb">
                <img class="pl-2 pr-2" src="../logo/Logo_Zanussi.png" name="zanussi" width="200" />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent">
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic"  ripple large height="100px" @click="ScrapeWeb">
                <img src="../logo/fresh.png" name="fresh" width="200" />
              </v-btn>
            </div>
          </div>
        </span>
        <span class="nav-item dropdown ml-5">
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
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px" @click="ScrapeWeb">
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
                <img src="../logo/hude-beauty.png" name="hudebeauty" width="200" />
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
                <img class="pl-2 pr-2" src="../logo/sephora.png"  name="sephora" width="200" />
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
                <img class="pl-2 pr-2" src="../logo/vichy.png" name="vichy" width="200" />
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
        </span>
        <span class="nav-item dropdown ml-5">
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
            <div class="dropdown-item bg-transparent">
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px" @click="ScrapeWeb">
                <img
                  class="pl-2 pr-2"
                  src="../logo/homecenter.png"
                  style="mix-blend-mode: multiply;"
                  width="200"
                 name="homecenter"
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
                <img src="../logo/Ikea_logo.svg" width="200"  name="ikea"/>
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
                <img class="pl-2 pr-2" src="../logo/inout.png" name="inout" width="200" />
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
                <img class="pl-2 pr-2" src="../logo/zarahome.svg" name="zarahome" width="200" />
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
                <img class="pl-2 pr-2" src="../logo/ashley.png" name="ashley" width="200" />
              </v-btn>
            </div>
          </div>
        </span>
        <span class="nav-item dropdown ml-5">
          <v-btn
            color="#164e87"
            text
            class="nav-link dropdown-toggle"
            data-target="homeandapp"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >watches and jewelry</v-btn>
          <div
            class="dropdown-menu"
            style="width:600px"
            id="homeandapp"
            aria-labelledby="navbarDropdown"
          >
            <div class="dropdown-item bg-transparent">
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px" @click="ScrapeWeb">
                <img
                  class="pl-2 pr-2"
                  src="../logo/gc.png"
                  style="mix-blend-mode: multiply;"
                  width="200"
                  name="gc"
                />
              </v-btn>
              <v-btn
                text
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                class="ml-3"
                height="100px"
                @click="ScrapeWeb"
              >
               <img
                  class="ml-5 pl-2 pr-3"
                  style="mix-blend-mode: multiply;"
                  src="../logo/tco.png"
                  width="180"
                  name="tco"
                />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent mt-1">
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px" @click="ScrapeWeb">
                <img src="../logo/i-watch.png" width="200" name="iwatch" />
              </v-btn>
          
            </div>
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
        </span>
        <span class="nav-item dropdown ml-5">
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
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="200px">
                <img src="../logo/currency.png" width="200" height="200px" />
              </v-btn>
            </div>
          </div>
        </span>
        <span class="nav-item dropdown ml-5">
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
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="130px">
                <img src="../logo/diamond.png" width="180" />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent">
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="130">
                <img src="../logo/gold.png" width="180" />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent">
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="130px">
                <img src="../logo/silver.png" width="180" />
              </v-btn>
            </div>
          </div>
        </span>
      </nav>
    
    <div>
   <router-view :key="$route.fullPath"></router-view>
    
    </div>
 
     <div 
    
    class="fixed-bottom"
    dark
    padless
  >
    <v-card

      flat
      tile
      class="lighten-1 white--text text-center hidden-md-and-down"
      color="#164e87"
      
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Notify</strong>
      </v-card-text>
    </v-card>
  </div>
  </div>
</template>
<script>
import api from "../api";
export default {
  data(){
    return{
      country:'',
      website:null,
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }
  },
  methods: {
    ScrapeWeb(e){
if(e.target.tagName==='BUTTON')
{
 this.website=e.target.querySelector('img')
}
else{
this.website=e.target;

}
let info={
  websitename:this.website.name,
  websitesrc:this.website.src
}
this.$store.commit('assignwebsite',info);

this.$router.push({name:'main'})
.catch(error => {
  if (error.name != "NavigationDuplicated") {
    throw error;
  }
});

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
        api.deletetoken().then(()=>{
            this.$router.push("/");
        }).catch(()=>{ this.$router.push("/");})
      
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
            api.deletetoken();
            this.$router.push("/");
          })
          .catch(err => {
            this.$loading(false);
            this.$alert(err.response.data, "Error", "error");
          });
      });
    },
    changepicture() {
      this.$refs.file.click();
    }
  },
   created() {
    api.getlocation().then((res)=>{
      this.country=res.data.countryCode;
    }).catch((err)=>{console.log(err)});
    
  }
};
</script>
<style scoped>
</style>