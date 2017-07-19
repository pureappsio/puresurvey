Template.answer.events({

    'click .answer-delete': function() {

        Meteor.call('deleteAnswer', this._id);

    }

});
