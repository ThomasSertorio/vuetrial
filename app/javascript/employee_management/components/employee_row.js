import Vue from 'vue/dist/vue.esm'
import JobDesc from './job_desc'
Vue.component('employee-row', {
  template: '#employee-row',
  props: {
    employee: Object
  },
  data: function(){
    return {
      editMode: false,
      errors: {}
    }
  },
  methods: {
    toggleManagerStatus: function(){
      this.employee.manager = !this.employee.manager;
      this.updateEmployee();
    },
    fireEmployee: function () {
      this.$emit('fire-employee', this.employee)
    },
    updateEmployee: function() {
      var that = this;
      $.ajax({
        method: 'PUT',
        data:{
          employee: that.employee
        },
        url: Routes.employee_path(that.employee.id, 'json'),
        success: function(res){
          that.errors = {};
          that.employee = res;
          that.editMode = false;
        },
        error: function(res) {
          that.errors = res.responseJSON.errors
        }
      })
    }
  }
});
