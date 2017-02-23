Meteor.methods({

    sendNotification(data) {

        if (Integrations.findOne({ type: 'puremetrics' })) {

            // Get integration
            var integration = Integrations.findOne({ type: 'puremetrics' });

            // Build message
            var survey = Surveys.findOne(data.surveyId);
            message = "New answer for survey " + survey.name;

            // Send notification
            parameters = {
                type: 'survey',
                message: message
            };

            console.log('Sending notification: ');
            console.log(parameters);

            HTTP.post('https://' + integration.url + '/api/notifications?key=' + integration.key, { params: parameters });

        }

    },

    removeSurvey: function(surveyId) {

        Surveys.remove(surveyId);

    },
    editSurvey: function(title, subtitle, language, surveyId) {

        Surveys.update(surveyId, {$set: {language: language, title: title, subtitle: subtitle}});

    },
    createSurvey: function(survey) {

        console.log(survey);
        Surveys.insert(survey);

    },
    addQuestion: function(question) {

        // Find order
        var order = Questions.find({ surveyId: question.surveyId }).fetch().length + 1;
        question.order = order;

        console.log(question);
        Questions.insert(question);

    },
    deleteQuestion: function(questionId) {
        Questions.remove(questionId);
    },
    addElement: function(element) {

        // Find order
        var order = Elements.find({ questionId: element.questionId }).fetch().length + 1;
        element.order = order;

        console.log(element);
        Elements.insert(element);

    },
    recordAnswer(answer) {

        console.log(answer);
        Answers.insert(answer);

    },
    generateApiKey: function() {

        // Check if key exist
        if (!Meteor.user().apiKey) {

            // Generate key
            var key = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 16; i++) {
                key += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            console.log(key);

            // Update user
            Meteor.users.update(Meteor.user()._id, { $set: { apiKey: key } });
        }

    },
    addIntegration: function(data) {

        // Check if it doesn't exist
        if (Integrations.findOne({ url: data.url })) {

            // Update
            Integrations.update({ url: data.url }, data);

            // Return ID
            return Integrations.findOne({ url: data.url })._id;

        } else {

            // Insert
            var integrationId = Integrations.insert(data);
            return integrationId;

        }

    },
    removeIntegration: function(data) {

        // Insert
        Integrations.remove(data);

    },
    getIntegrations: function() {

        return Integrations.find({}).fetch();

    }

});
