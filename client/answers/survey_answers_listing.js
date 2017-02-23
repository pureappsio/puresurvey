Template.surveyAnswersListing.helpers({

    answers: function() {
        var answers = Answers.find({surveyId: this._id}).fetch().length;
        var questions = Questions.find({surveyId: this._id}).fetch().length;
        return answers/questions;
    }

});
