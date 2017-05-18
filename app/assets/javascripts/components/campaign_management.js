// Components
const Selector = { template: '<div>Selector</div>' }
const Listing = { template: '<div>Listing</div>' }

// Router
const routes = [
  {path: "/selector", component: Selector},
  {path: "/selector", component: Listing}
]

const router = new VueRouter({ routes: routes })

var campaign_management = new Vue({
  el: '#campaign_management',
  router,
  data: {
    campaign: {
      id: 14,
      reach: 250
    }
  },
  mounted: function() {
    var that;
    that = this;
    console.log("vue loaded")
    // $.ajax({
    //   url: Routes.employees_path("json"),
    //   success: function(res){
    //     that.employees = res.employees;
    //   }
    // });
  },
  methods: {
  }
})

