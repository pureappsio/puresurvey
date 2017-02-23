Template.surveyQuestionAnswers.helpers({

    answers: function() {
        return Answers.find({questionId: this._id});
    }

});
