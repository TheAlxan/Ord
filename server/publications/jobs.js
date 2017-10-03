Meteor.publish('jobs',function(){
	return Jobs.find();
});

Meteor.publish('jobUser',function(){
	return JobUser.find();
});