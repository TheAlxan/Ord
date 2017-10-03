Template.user.helpers({
	'allJobs':function(){
		return Jobs.find();
	},
	'myJobs':function(){
		username = Session.get('user');
		return JobUser.find({user:username});
	},
	'jobName':function(id){
		return Jobs.findOne({_id:id}).name;
	},
	'notSd':function(iid){
		un = Session.get('user');
		if(JobUser.findOne({user:un,job:iid})) return false;
		return true;
	}
});