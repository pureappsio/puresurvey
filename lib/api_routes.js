Router.route("/api/surveys", { where: "server" }).get(function() {

    // Get data
    query = {}

    if (this.params.query.type) {
        query.type = this.params.query.type;
    }
    var surveys = Surveys.find(query).fetch();

    var key = this.params.query.key;

    // Send response
    this.response.setHeader('Content-Type', 'application/json');
    if (Meteor.call('validateApiKey', key)) {
        this.response.end(JSON.stringify({ surveys: surveys }));
    } else {
        this.response.end(JSON.stringify({ message: "API key invalid" }));
    }

});

Router.route('/api/status', { where: 'server' }).get(function() {

    this.response.setHeader('Content-Type', 'application/json');
    this.response.end(JSON.stringify({ message: 'System online' }));

});
