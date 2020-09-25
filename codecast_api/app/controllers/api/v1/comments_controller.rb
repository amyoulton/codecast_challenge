class Api::V1::CommentsController < Api::ApplicationController
    before_action :find_question, only: [:create, :update, :destroy]
    before_action :find_answer, only: [:create, :update, :destroy]
    before_action :find_comment, only: [:destroy, :update]

    def create
        comment = Comment.new comment_params
        comment.answer = @answer
        if comment.save
            render json: { id: comment.id, answer_id: comment.answer_id, body: comment.body }
        else
            render(
                json: { errors: comment.errors },
                status: 422
            )
        end
    end

    def update
        @comment.update comment_params
        render json: { id: @comment.id }
    end

    def destroy
        @comment.destroy 
        render(json: { status: 200 }, status: 200)
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :created_at, :udpated_at)
    end

    def find_question
        @question ||= Question.find params[:question_id]
    end

    def find_answer
        @answer ||= Answer.find params[:answer_id]
    end

    def find_comment
        @comment ||= Comment.find params[:id]
    end
end

