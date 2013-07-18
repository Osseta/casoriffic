doLogin(function setUserPass(authDetails) {
  debugMsg(logLevels.info, "setUserPass called in cas_login.js");

  debugMsg(logLevels.info, "user name = " + authDetails.username);
  debugMsg(logLevels.info, "password  = " + authDetails.password);


  if (authDetails.username) {Ext.get('username').dom.value = authDetails.username;}
  if (authDetails.password) {Ext.get('password').dom.value = authDetails.password;}

  var loginErrors = Ext.select('.auth-error');
  if (loginErrors.elements.length === 0) {
    debugMsg(logLevels.info, "no login errors detected");
    if (!Ext.isEmpty(authDetails.password)) {
        if (authDetails.doSubmit === 'yes') {
          debugMsg(logLevels.info, "doing form submit");
          // work around bug in Chrome where older versions have form.submit as a pointer 
          // to the submit button rather than a function
          if (Ext.isFunction(document.forms.item("login-form").submit)) {
             document.forms.item("login-form").submit();
          } else {
            document.forms.item("login-form").submit.click();
          }
       }
    } else {
      debugMsg(logLevels.info, "No password set");
    }
  } else {
    debugMsg(logLevels.info, "Login errors occurred");
  }
  return true;
});
