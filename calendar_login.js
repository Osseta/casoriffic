doLogin(function setUserPass(authDetails) {
  debugMsg(logLevels.info, "setUserPass called in calendar_login.js");

  //console.log(authDetails)

  if (authDetails.username) {
    document.forms[0].username.value = authDetails.username;
    // Ext.get('c2').dom.value = authDetails.username;
  }
  if (authDetails.password) {
    document.forms[0].password.value = authDetails.password;
    //Ext.get('c3').dom.value = authDetails.password;
  }

  var loginErrors = Ext.select('.wrng');
  if (loginErrors.elements.length === 0) {
    debugMsg(logLevels.info, "no login errors detected");
    if (!Ext.isEmpty(authDetails.password)) {
        if (authDetails.doSubmit === 'yes') {
          debugMsg(logLevels.info, "doing form submit");
          // work around bug in Chrome where older versions have form.submit as a pointer
          // to the submit button rather than a function
          if (Ext.isFunction(document.forms[0].submit)) {
             document.forms[0].submit();
          } else {
            document.forms[0].submit.click();
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
