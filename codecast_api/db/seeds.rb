Comment.destroy_all()
Answer.destroy_all() 
Question.delete_all

NUM_QUESTION = 10
NUM_ANSWERS = 5
NUM_COMMENTS = 5

NUM_QUESTION.times do |x|
    created_at = Faker::Date.backward(days: 365)
    question = Question.create({
        title: Faker::TvShows::TheITCrowd.quote,
        body: Faker::TvShows::HowIMetYourMother.quote,
        created_at: created_at,
        updated_at: created_at
    })
    if question.valid?
      NUM_ANSWERS.times do
        a = Answer.create({
            body: Faker::TvShows::Buffy.quote, 
            question: question,
            created_at: created_at,
            updated_at: created_at
        })
        if a.valid?
          NUM_COMMENTS.times.each do
            Comment.create(
                body: Faker::TvShows::Buffy.quote, 
                answer: a,
                created_at: created_at,
                updated_at: created_at
            )
          end
        end
      end
    end
  end
  

question = Question.all
answer = Answer.all
comment = Comment.all

puts Cowsay.say("Generated #{question.count} questions", :ghostbusters)
puts Cowsay.say("Generated #{answer.count} answers", :kitty)
puts Cowsay.say("Generated #{comment.count} comments", :frogs)