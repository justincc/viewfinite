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
