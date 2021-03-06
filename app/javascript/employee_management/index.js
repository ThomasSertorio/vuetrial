import Vue from 'vue/dist/vue.esm'
import EmployeeRow from './components/employee_row'
import NewEmployee from './components/new_employee'

// Employee Management Instance
new Vue({
  el: '#employees',
  data: {
    employees: [],
    new_employee: {
      name: '',
      email: '',
      manager: 'false'
    },
    errors: {}
  },
  mounted: function() {
    var that;
    that = this;
    console.log("vue loaded")
    $.ajax({
      url: Routes.employees_path("json"),
      success: function(res){
        that.employees = res.employees;
      }
    });
  },
  methods: {
    hireEmployee: function(){
      var that = this;
      $.ajax({
        method: 'POST',
        data: {
          employee: that.new_employee,
        },
        url: Routes.employees_path("json"),
        success: function(res){
          that.errors = {};
          that.employees.push(res);
          var new_employee = {
            name: '',
            email: '',
            manager: 'false'
          };
          that.new_employee = new_employee;
        },
        error: function(res) {
          that.errors = res.responseJSON.errors;
        }
      })
    },
    fireEmployee: function (employee) {
      var that = this;
      $.ajax({
        method: 'DELETE',
        url: Routes.employee_path(employee.id, "json"),
        success: function(res) {
          that.removeEmployee(employee);
        }
      })
    },
    removeEmployee: function(employee) {
      var index = this.employees.indexOf(employee);
      this.employees.splice(index, 1);
    }
  }
})
