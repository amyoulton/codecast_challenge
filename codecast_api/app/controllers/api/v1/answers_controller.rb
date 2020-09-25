class Api::V1::AnswersController < Api::ApplicationController
    before_action :find_question, only: [:create, :show, :destroy, :update]
    before_action :find_answer, only: [:show, :update, :destroy]

    def create
        answer = Answer.new answer_params
        answer.question = @question
        if answer.save
            render json: { id: answer.id, question_id: answer.question_id, body: answer.body }
        else
            render(
                json: { errors: answer.errors },
                status: 422
            )
        end
    end

    def show
        if @answer
            render(
                json: @answer 
            )
        else 
            render(json: { error: 'Answer Not Found'})
        end
    end

    def update
        @answer.update answer_params
        render json: { id: @answer.id }
    end

    def destroy
        @answer.destroy 
        render(json: { status: 200 }, status: 200)
    end

    private

    def answer_params
        params.require(:answer).permit(:body, :created_at, :udpated_at)
    end

    def find_question
        @question ||= Question.find params[:question_id]
    end

    def find_answer
        @answer ||= Answer.find params[:id]
    end
end
