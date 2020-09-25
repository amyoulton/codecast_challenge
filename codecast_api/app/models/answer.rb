class Answer < ApplicationRecord
  belongs_to :question
  has_many :comments, dependent: :destroy
end
