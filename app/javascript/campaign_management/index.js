import Vue from 'vue/dist/vue.esm'
import CampaignGoals from './components/campaign_goals'
// Campaign Management Instance
new Vue({
  el: '#campaign_management',
  data: {
    campaign: {
      id: 14,
      reach: 250
    }
  },
  mounted: function() {
    var that;
    that = this;
    console.log("Vue Management Loaded")
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
