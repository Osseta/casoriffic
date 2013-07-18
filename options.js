
// Saves options to localStorage.
function save_options() {
  debugMsg(logLevels.info, "save_options() called in options.html");

  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var submit = localStorage['casoriffic-submit'];
  var submit = 'no'

  debugMsg(logLevels.info, "user name = " + user);
  debugMsg(logLevels.info, "password  = " + pass);
  debugMsg(logLevels.info, "submit    = " + submit);

  if (document.getElementById("dosubmit").checked) {
    submit = 'yes';
  }

  localStorage["casoriffic-user"]     = user;
  localStorage["casoriffic-password"] = pass;
  localStorage["casoriffic-submit"]   = submit;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = '<div class="alert alert-success">Options Saved.</div>';
  setTimeout(function() {
    status.innerHTML = "";
  }, 2000);

  return false;
}

// Restores value from localStorage.
function restore_options() {
  debugMsg(logLevels.info, "restore_options() called in options.html");

  var user = localStorage['casoriffic-user'];
  var pass = localStorage['casoriffic-password'];
  var submit = localStorage['casoriffic-submit'];

  debugMsg(logLevels.info, "user name = " + user);
  debugMsg(logLevels.info, "password  = " + pass);
  debugMsg(logLevels.info, "submit    = " + submit);

  if (user) {
    document.getElementById("username").value = user;
  }

  if (pass) {
    document.getElementById("password").value = pass;
  }

  if (submit) {
    document.getElementById("dosubmit").checked = (submit === 'yes');
  }
}

Ext.onReady(function(){
  restore_options();
  var theForm = Ext.get('options-form');
  theForm.on('submit', save_options, theForm, {preventDefault: true});
});
