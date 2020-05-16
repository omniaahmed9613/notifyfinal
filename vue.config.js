module.exports = {
  "devServer": {
    "proxy": {
      "/account/*": {
        "target": "http://localhost:5000"
      },
      "/user_images": {
        "target": "http://localhost:5000"
      },
      "/check-token": {
        "target": "http://localhost:5000"
      },
      "/delete-token": {
        "target": "http://localhost:5000"
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}