Template.surveyEdit.events({

    'click #add-question': function() {

        Meteor.call('addQuestion', {
            title: $('#question-title').val(),
            type: $('#question-type :selected').val(),
            surveyId: this._id,
            userId: Meteor.user()._id
        });

    },
    'click #edit-survey': function() {

        surveyData = {
            _id: this._id,
            name: this.name,
            userId: this.userId,
            title: $('#survey-title').val(),
            subtitle: $('#survey-subtitle').val(),
            language: $('#survey-language').val(),
            type: $('#survey-type :selected').val()
        }

        Meteor.call('editSurvey', surveyData);

    }

});

Template.surveyEdit.helpers({

    questions: function() {
        return Questions.find({ surveyId: this._id });
    }

});

Template.surveyEdit.onRendered(function() {

    if (this.data) {
        $('#survey-type').val(this.data.type);
    }

});
