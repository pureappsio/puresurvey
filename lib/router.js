Router.configure({
    layoutTemplate: 'layout'
});

// Routes
Router.route('/surveys', { name: 'surveys' });
Router.route('/thank-you', { name: 'thankYou' });
Router.route('/merci', { name: 'thankYouFR' });

Router.route('/answers', { name: 'answers' });

// Survey answers route
Router.route('/answers/:id', {
    name: 'surveyAnswers',
    data: function() {

        // Get survey
        var survey = Surveys.findOne(this.params.id);

        return survey;

    }
});

Router.route('/answers/:id/all', {
    name: 'allAnswers',
    data: function() {

        // Get survey
        var survey = Surveys.findOne(this.params.id);

        return survey;

    }
});

Router.route('/answers/:id/:questionId', {
    name: 'surveyQuestionAnswers',
    data: function() {

        // Get question
        var question = Questions.findOne(this.params.questionId);

        return question;

    }
});

// Survey edit route
Router.route('/surveys/:id/edit', {
    name: 'surveyEdit',

    data: function() {

        // Get survey
        var survey = Surveys.findOne(this.params.id);

        return survey;

    }
});

// Survey route
Router.route('/surveys/:id', {
    name: 'survey',
    waitOn: function() {
        return [Meteor.subscribe('userQuestions'),
            Meteor.subscribe('userElements'),
            Meteor.subscribe('userSurveys')
        ];
    },
    data: function() {

        if (this.params.query.subscriber) {
            Session.set('subscriberId', this.params.query.subscriber);
        }

        // Get survey
        var survey = Surveys.findOne(this.params.id);

        if (this.ready()) {
            return survey;
        } else {
            this.render('loading');
        }
    }
});

Router.route('/admin', { name: 'admin' });
Router.route('/login', { name: 'login' });

Router.route('/', { name: 'home', data: function() { this.render('surveys') } });
