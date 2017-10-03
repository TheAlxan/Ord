Template.admin.events({
	'click #jobsubmit':function(event){
		event.preventDefault();
		name = $('#jobname').val();
		$('#jobname').val('');
		Meteor.call('addJob',name);
	}

});

Template.admin.helpers({
	'jobs':function(){
		return Jobs.find();
	}
});