Template.registerHelper("truncate", function(number) {
    return number.toFixed(0);
});

Template.registerHelper("truncateTwo", function(number) {
    return number.toFixed(2);
});

Template.registerHelper("truncateString", function(string) {

    var maxLength = 30;
    if (string.length > (maxLength + 3)) {
        return string.substring(0, maxLength) + '...';
    } else {
        return string;
    }

});

Template.registerHelper("formatDate", function(date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
});

Template.registerHelper("formatDateShort", function(date) {
    return moment(date).format('MMMM Do YYYY');
});

Template.registerHelper("surveyType", function(type) {
    if (type == 'survey') {
        return 'GENERAL SURVEY';
    } else if (type == 'notbought') {
        return "DIDN'T BUY";
    } else if (type == 'feedback') {
        return "PRODUCT FEEDBACK";
    } else {
        return 'GENERAL SURVEY';
    }

});

Template.registerHelper("surveyLabel", function(type) {
    if (type == 'survey') {
        return 'primary';
    } else if (type == 'notbought') {
        return "warning";
    } else if (type == 'feedback') {
        return "info";
    } else {
        return 'primary';
    }

});

Template.registerHelper("langEN", function() {
    if (Session.get('language')) {
        if (Session.get('language') == 'en') {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
});

Template.registerHelper("isAdmin", function() {
    if (Meteor.user()) {
        if (Meteor.user().emails[0].address == 'marcolivier.schwartz@gmail.com') {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }

});
