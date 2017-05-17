json.extract! employee, :id, :name, :email, :manager
json.jobs employee.jobs do |job|
  json.partial! 'jobs/job', job: job
end
