Template.answersElement.helpers({

    stats: function() {
        var totalQuestionAnswers = Answers.find({ questionId: this.questionId }).count();
        var totalElementAnswers = Answers.find({ elementId: this._id }).count();
        return (totalElementAnswers / totalQuestionAnswers * 100).toFixed(2);
    }

});
