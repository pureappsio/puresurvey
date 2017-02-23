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
        var title = $('#survey-title').val();
        var subtitle = $('#survey-subtitle').val();
        var language = $('#survey-language').val();

        Meteor.call('editSurvey', title, subtitle, language, this._id)

    }

});

Template.surveyEdit.helpers({

    questions: function() {
    	return Questions.find({surveyId: this._id});
    }

});