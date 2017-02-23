Template.answersElement.helpers({

    stats: function() {
    	var totalQuestionAnswers = Answers.find({questionId: this.questionId}).fetch().length;
    	var totalElementAnswers = Answers.find({elementId: this._id}).fetch().length;
        return (totalElementAnswers/totalQuestionAnswers * 100).toFixed(2);
    }

});
