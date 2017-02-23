Template.surveyAnswers.helpers({

    questions: function() {
        return Questions.find({surveyId: this._id});
    }

});
