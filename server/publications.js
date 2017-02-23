Meteor.publish("userSurveys", function () {
	return Surveys.find({});
});

Meteor.publish("userQuestions", function () {
	return Questions.find({});
});

Meteor.publish("userElements", function () {
	return Elements.find({});
});

Meteor.publish("userAnswers", function () {
	return Answers.find({});
});

Meteor.publish("allUsers", function () {
	return Meteor.users.find({});
});

Meteor.publish("userIntegrations", function() {
    return Integrations.find({});
});