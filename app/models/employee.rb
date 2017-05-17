class Employee < ApplicationRecord
  validates :email, presence: {message: "Merci de remplir votre mail"}
  has_many  :jobs
end
