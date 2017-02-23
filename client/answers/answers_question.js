Template.answersQuestion.helpers({

    elements: function() {
        return Elements.find({questionId: this._id});
    },
    noElements: function() {
    	if (Elements.findOne({questionId: this._id})) {
    		return false;
    	}
    	else {
    		return true;
    	}
    }

});
