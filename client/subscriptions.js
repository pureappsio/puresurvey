// Tracker
Tracker.autorun(function() {
    Meteor.subscribe('userSurveys');
    Meteor.subscribe('userQuestions');
    Meteor.subscribe('userElements');
    Meteor.subscribe('userAnswers');
    
    Meteor.subscribe('allUsers');
    Meteor.subscribe('userIntegrations');
});
