import api from "../src/api";
import store from './vuex'
async function getalltrackings() {
  return new Promise((resolve) => {
    api.getProductTracks(store.getters.userEmail).then((res) => {
        
        if(res.data.length>0){
            store.state.ProductsTracked = res.data;

        }

      api.getCurrencyTracks(store.getters.userEmail).then((res) => {
        let results = res.data;
    
        if(results.length>0){
        for (let obj of results) {
          obj.product_name = `${obj.from_currency}-->${obj.to_currency}`;
          obj.product_image = require("./logo/" + "currency.png");
        }
        
            store.state.ProductsTracked.push(...results)
        }
        api.getMetalTracks(store.getters.userEmail).then((res) => {
          let metals = res.data;
          if (res.data.length > 0) {
            for (let obj of metals) {
              obj.product_name = `${obj.metal_type} Track 1 ${obj.weight} in ${obj.currency}`;
              if ((obj.metal_type == "Gold")) {
                obj.product_image = require("./logo/" + "gold.png");
              } else {
                obj.product_image = require("./logo/" + "silver.png");
              }
            }
            store.state.ProductsTracked.push(...metals);
          }
          resolve();
        });
        
      });
    }).catch((err)=>console.error(err));
  });
}

export default getalltrackings;
