Vue.component('new-employee', {
  template: '#new-employee',
  props: {
    employee: Object,
    errors: Object
  },
  methods: {
    hireEmployee: function () {
      this.$emit('hire-employee', this.employee)
    },
  }
});
