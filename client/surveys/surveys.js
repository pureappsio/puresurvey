Template.surveys.helpers({

    surveys: function() {
        return Surveys.find({});
    }

});

Template.surveys.events({

    'click #create-survey': function() {

    	Meteor.call('createSurvey', {
    		name: $('#survey-name').val(),
    		userId: Meteor.user()._id,
    		type: $('#survey-type :selected').val()
    	});

    }

});

// Template.surveys.onRendered(function() {

// });
