// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The possible log levels.
var logLevels = {
    "none": 0,
    "error": 1,
    "info": 2
};

// Defines the current log level. Values other than "none" are for debugging
// only and should at no point be checked in.
var currentLogLevel = logLevels.none;

function debugMsg(loglevel, text) {
  if (loglevel <= currentLogLevel) {
    console.log("Casoriffic extension: " + text);
  }
}

function doLogin(callback) {
  debugMsg(logLevels.info, "Running feed login_helper.js doLogin() function");
  chrome.extension.sendRequest('logindetails', function(response) {
    callback(response);
  });
  debugMsg(logLevels.info, "Request for login details sent");
}