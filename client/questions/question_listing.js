Template.questionListing.events({

    'click .delete': function() {
        Meteor.call('deleteQuestion', this._id);
    },
    'click .add-element': function() {

    	var element = {
    		surveyId: this.surveyId,
    		questionId: this._id,
    		userId: Meteor.user()._id,
    		title: $('#element-title-' + this._id).val()
    	}

    	Meteor.call('addElement', element);
    }

});

Template.questionListing.helpers({

    hasElements: function() {
        if (this.type == 'choices' || this.type == 'checkboxes') {
        	return true;
        }
    },
    elements: function() {
        return Elements.find({questionId: this._id});
    }

});
