class AnswerSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :body,
    :question_id,
    :created_at,
    :updated_at,
    :comments
  )

  # belongs_to :question, key: :questions
  has_many :comments
end
