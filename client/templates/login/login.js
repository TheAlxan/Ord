Template.login.events({
	'submit form':function(event){
		event.preventDefault();
		name = event.target.name.value;
		Session.set('user',name);
		FlowRouter.redirect('/home');
	}
});