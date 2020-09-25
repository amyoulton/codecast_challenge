class Api::V1::QuestionsController < Api::ApplicationController
    before_action :find_question, only: [:show, :edit, :update, :destroy]
   
    def index
        questions = Question.order(created_at: :desc)
        render json: questions, each_serializer: QuestionIndexSerializer
    end

    def show
        if @questions
            render(
                json: @questions,
                include: [{answers: [:question]}] 
            )
        else 
            render(json: { error: 'Question Not Found'})
        end
    end

    def create
        question = Question.new question_params
        if question.save
            render json: { id: question.id }
        else
            render(
                json: { errors: question.errors },
                status: 422
            )
        end
    end

    def update
        @questions.update question_params
        render json: { id: @questions.id }
    end

    def destroy
        @questions.destroy 
        render(json: { status: 200 }, status: 200)
    end

    private

    def question_params 
        params.require(:question).permit(:title, :body)
    end

    def find_question
        @questions ||= Question.find params[:id]
    end

end
