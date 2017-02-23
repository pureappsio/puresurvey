Template.survey.helpers({

    questions: function() {
        return Questions.find({ surveyId: this._id });
    },
    langEN: function() {
        if (this.language) {
            if (this.language == 'fr') {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }

});

Template.survey.events({

    'click #submit': function() {

        // Collect all answers
        var questions = Questions.find({ surveyId: this._id }).fetch();

        // Answer
        var answer = {
            date: new Date(),
            surveyId: this._id
        }

        // Subscriber?
        if (Session.get('subscriberId')) {
            answer.subscriberId = Session.get('subscriberId');
        }

        for (i in questions) {

            answer.questionId = questions[i]._id;

            if (questions[i].type == 'long') {
                answer.value = $('#answer-' + questions[i]._id).summernote('code');
            }

            if (questions[i].type == 'short') {
                answer.value = $('#answer-' + questions[i]._id).val();
            }

            if (questions[i].type == 'choices') {
                selectedValue = $('input[name=answer-' + questions[i]._id + ']:checked').val();
                answer.value = Elements.findOne(selectedValue).title;
                answer.elementId = selectedValue;
            }

            Meteor.call('recordAnswer', answer);

        }

        // Notify & go
        notificationData = {
            surveyId: this._id
        }

        if (this.language) {
            language = this.language;
        } else {
            language = 'en';
        }

        Meteor.call('sendNotification', notificationData, function(err, data) {

                if (language == 'fr') {
                    Router.go("/merci");
                } else {
                    Router.go("/thank-you");
                }

        });

    }

});
