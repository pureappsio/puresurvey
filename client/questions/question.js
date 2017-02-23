Template.question.helpers({

    isType: function(type) {
        if (this.type == type) {
            return true;
        }
    },
    elements: function() {
    	return Elements.find({questionId: this._id});
    }

});

Template.question.onRendered(function() {

    if (this.data) {

        if (this.data.type == 'long') {
            $('#answer-' + this.data._id).summernote({
                height: 150,
                toolbar: []
            });
        }
    }

});
