/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

function login(firstName, lastName, password)
{
  $.xmlrpc({
    url: 'http://localhost:8002',
    methodName : 'login_to_simulator',
    params: [{ first: firstName, last: lastName, passwd: password, start: "last" }],
    success: function(r) { $('#results').html("<h2>Results</h2><p>" + r.toSource() + "</p>")},
    error: function(jqXHR, status, error) { alert("Error")}
  });
}
