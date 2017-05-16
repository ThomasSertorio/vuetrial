class Employee < ApplicationRecord
  validates :email, presence: {message: "Merci de remplir votre mail"}
end
