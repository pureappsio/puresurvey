Template.allAnswers.helpers({

    answers: function() {
        return Answers.find({ surveyId: this._id });
    }

});
