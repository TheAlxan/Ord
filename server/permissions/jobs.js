Jobs.allow({
  insert: function(userId, doc, fields, modifier){
   return true;
  },
  remove: function(userId, doc, fields, modifier){
    return true;
  }
});

JobUser.allow({
  insert: function(userId, doc, fields, modifier){
   return true;
  },
  remove: function(userId, doc, fields, modifier){
    return true;
  }
});