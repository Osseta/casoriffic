doLogin(function setUserPass(authDetails) {
  debugMsg(logLevels.info, "setUserPass called in jira_login.js");

  //  The login is actually loaded in an iFrame hence the URL used in
  //  the manifest.
  //
  //  Since this will be called for all gadgets loaded in iframes then
  //  check for the existence of the login form.

  var login_input = Ext.get('login-form-username');
  if (login_input) {

    if (authDetails.username) {
      login_input.dom.value = authDetails.username;
    }

    if (authDetails.password) {
      Ext.get('login-form-password').dom.value = authDetails.password;
    }

    Ext.get('login-form-remember-me').set({ checked: true });

    // Ability to submit form not implemented
  }
  return true;
});
