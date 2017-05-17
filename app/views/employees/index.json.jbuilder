json.employees @employees do |employee|
  json.partial! 'employees/employee', employee: employee
end
json.new_employee do
  json.partial! 'employees/employee', employee: Employee.new
end
