Template.surveyAnswersListing.helpers({

    answers: function() {
        var answers = Answers.find({surveyId: this._id}).fetch().length;
        var questions = Questions.find({surveyId: this._id}).fetch().length;
        if (questions != 0) {
        	return answers/questions;
        }
        else {
        	return 0;
        }
        
    }

});
