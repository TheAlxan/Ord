Template.registerHelper('isLogged',function(){
	if(Session.get('user'))
		return true;
	else return false;
});

Template.registerHelper('username',function(){
	return Session.get('user');
});

Template.registerHelper('isAdmin',function(){
	if(Session.get('user') == "admin")
		return true;
	else return false;
});

Meteor.subscribe('jobs');
Meteor.subscribe('jobUser');