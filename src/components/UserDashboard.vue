<template>
  <div class="container-fluid pl-0 pr-0" style="background-color:#F0F0F0;height:100%">
    <nav class="navbar navbar-expand-lg" style="background-color: #DCDCDC;">
      <a class="navbar-brand" href="#">
        <img class="img-fluid" src="../logo/logo1.png" alt="Notify" style="height:50px;" />
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
            <v-btn color="#164e87" text class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </v-btn>
          </li>
          <li class="nav-item">
            <v-btn color="#164e87" text class="nav-link" href="#">Features</v-btn>
          </li>
        </ul>
        <img
          class="img-fluid rounded-pill ml-auto"
          width="40"
          :src="`${this.$store.getters.userImage}`"
        />
        <div class="nav-item dropdown mr-5">
          <v-btn
            class="nav-link dropdown-toggle mr-5"
            color="#164e87"
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
      </div>
    </nav>
    <nav>
      <v-toolbar dense elevation="5" color="lightwhite">
        <v-toolbar-title style="color:#164e87">All Categories</v-toolbar-title>
        <span class="nav-item dropdown ml-5">
          <v-btn
            color="#164e87"
            text
            @mouseenter="onOver" @mouseleave="onLeave"
            class="nav-link dropdown-toggle"
            data-target="homeandapp"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >ECommerce</v-btn>
          <div class="dropdown-menu"  id="homeandapp" ref="dropdown" aria-labelledby="navbarDropdown">
            <div class="dropdown-item bg-transparent">
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px">
                <img class="pl-2 pr-2" src="../logo/Amazon_logo.svg" width="200" />
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
              >
                <img class="pl-2 pr-2" src="../logo/jumia-seeklogo.com.svg" width="200" />
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
              >
                <img class="pl-2 pr-2" src="../logo/Souq_Logo_Primary_EN.svg" width="200" />
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
              >
                <img class="pl-2 pr-2" src="../logo/olx.png" width="200" />
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
              >
                <img src="../logo/Zara_Logo.svg" width="200" height="100px" />
              </v-btn>
              <v-btn
                text
                class="mb-5"
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
              >
                <img class="ml-5 pl-2 pr-2" src="../logo/Lacoste_logo.svg" width="180" />
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
              >
                <img src="../logo/H&M-Logo.svg" width="180" />
              </v-btn>
              <v-btn
                text
                class="mb-5 ml-5"
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="100px"
              >
                <img class="ml-5 pl-0 pr-4" src="../logo/Pull&Bear_logo.svg" width="200" />
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
              >
                <img class="pl-2 pr-2" src="../logo/Bershka_logo.svg" width="200" />
              </v-btn>
              <v-btn
                class="mb-5"
                text
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                height="180px"
              >
                <img class="ml-5 pl-2 pr-2" src="../logo/american-eagle-outfitters.svg" width="180" />
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
              >
                <img class="pl-2 pr-2" src="../logo/Tommy_hilfig_vectorlogo.svg" width="200" />
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
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="150px">
                <img
                  class="pl-2 pr-2"
                  style="mix-blend-mode: multiply;"
                  src="../logo/Adidas_Logo.svg"
                  width="200"
                />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent mt-3">
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px">
                <img class="pl-2 pr-2 pt-2" src="../logo/nike.png" width="200" />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent mt-3">
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px">
                <img class="pl-2 pr-2" src="../logo/puma.png" width="200" />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent mt-3">
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px">
                <img src="../logo/reebook.png" class="pl-2 pr-2" width="200" />
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
          <div class="dropdown-menu" id="homeandapp" aria-labelledby="navbarDropdown">
            <div class="dropdown-item bg-transparent">
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px">
                <img class="pl-2 pr-2" src="../logo/Elaraby-group-logo.png" width="200" />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent">
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px">
                <img class="pl-2 pr-2" src="../logo/b-tech.png" width="200" />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent">
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px">
                <img class="pl-2 pr-2" src="../logo/Logo_Zanussi.png" width="200" />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent">
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px">
                <img src="../logo/fresh.png" width="200" />
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
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px">
                <img
                  class="pl-2 pr-2"
                  src="../logo/mazaya-png.png"
                  style="mix-blend-mode: multiply;"
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
              >
                <img src="../logo/hude-beauty.png" width="200" />
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
              >
                <img class="pl-2 pr-2" src="../logo/sephora.png" width="200" />
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
              >
                <img class="pl-2 pr-2" src="../logo/vichy.png" width="200" />
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
              >
                <img src="../logo/Anastasia_Beverly_Hills_logo.png" width="200" />
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
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px">
                <img
                  class="pl-2 pr-2"
                  src="../logo/homecenter.png"
                  style="mix-blend-mode: multiply;"
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
              >
                <img src="../logo/Ikea_logo.svg" width="200" />
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
              >
                <img class="pl-2 pr-2" src="../logo/inout.png" width="200" />
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
              >
                <img class="pl-2 pr-2" src="../logo/zarahome.svg" width="200" />
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
              >
                <img class="pl-2 pr-2" src="../logo/ashley.png" width="200" />
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
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px">
                <img
                  class="pl-2 pr-2"
                  src="../logo/gc.png"
                  style="mix-blend-mode: multiply;"
                  width="200"
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
              >
                <img
                  class="ml-5"
                  style="mix-blend-mode: multiply;"
                  src="../logo/D-Diamonds-Logo-JPEG.jpg"
                  width="180"
                />
              </v-btn>
            </div>
            <div class="dropdown-item bg-transparent mt-1">
              <v-btn text @mouseenter="dimpic" @mouseleave="undimpic" ripple large height="100px">
                <img src="../logo/i-watch.png" width="200" />
              </v-btn>
              <v-btn
                text
                @mouseenter="dimpic"
                @mouseleave="undimpic"
                ripple
                large
                class="ml-3"
                height="100px"
              >
                <img
                  class="ml-5 pl-1 pr-1"
                  style="mix-blend-mode: multiply;"
                  src="../logo/tco.png"
                  width="180"
                />
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
              >
                <img class="pl-2 pr-2" src="../logo/azzam_logo_tung.png" width="200" />
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
      </v-toolbar>
    </nav>
  </div>
</template>
<script>
import api from "../api";
export default {
  methods: {
    onOver(){
    this.$refs.dropdown.class = 'dropdown-menu show';
    },
    onLeave(){
    this.$refs.dropdown.visible = false;
    },
    dimpic(e){
      e.target.style.opacity = 0.5;
    },
    undimpic(e){
      e.target.style.opacity = 1;
    },
    file(e){
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
        api.deletetoken();
        this.$router.push("/");
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
  }
};
</script>
<style scoped>
</style>