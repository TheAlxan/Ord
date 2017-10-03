FlowRouter.route('/', {
  name: 'base',
  action() {
    if(Session.get('user'))
      BlazeLayout.render('layout', {header:'header',content:'home',footer:'footer'});
    else
      FlowRouter.redirect('/login');
  }
});

FlowRouter.route('/home', {
  name: 'home',
  action() {
    if(Session.get('user')){
      BlazeLayout.render('layout', {header:'header',content:'home',footer:'footer'});
    }
    else{
      FlowRouter.redirect('/login');
    }
  }
});

FlowRouter.route('/login', {
  name: 'login',
  action() {
    if(!Session.get('user')){
      BlazeLayout.render('layout', {header:'header',content:'login',footer:'footer'});
    }
    else{
      FlowRouter.redirect('/home');
    }
  }
});

FlowRouter.route('/logout', {
  name: 'logout',
  action() {
    delete Session.keys['user'];
    BlazeLayout.render('layout', {header:'header',content:'login',footer:'footer'});
    FlowRouter.redirect('/login');
  }
});

FlowRouter.route('/deljob/:id', {
  name: 'deljob',
  action: function(params, queryParams) {
    if(Session.get('user') != 'admin') return;
        Meteor.call('removeJob',params['id']);
        FlowRouter.redirect('/home');
    }
});

FlowRouter.route('/signjob', {
  name: 'deljob',
  action: function(params, queryParams) {
    Meteor.call('signJob',queryParams['user'] ,queryParams['job']);
     FlowRouter.redirect('/home');
    }
});