class QuestionIndexSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :body,
    :created_at,
    :updated_at
  )

  has_many :answers

  class AnswerSerializer < ActiveModel::Serializer
    attributes(
      :id,
      :body,
      :question_id,
      :created_at,
      :updated_at,
      :comments
    )
  
    belongs_to :question, key: :questions
    has_many :comments

    class CommentSerializer < ActiveModel::Serializer
      attributes(
        :id,
        :body,
        :created_at,
        :updated_at
      )
    
      belongs_to :answer, key: :answers
    end
  end
end
