Template.surveyListing.events({

    'click .delete': function() {
    	Meteor.call('removeSurvey', this._id);
    }

});
