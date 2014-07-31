(function () {

  var dmTest = async_test("DOM manipulation inline tests");
  var attachPoint = document.getElementById('attachHere');
  var inlineScript = document.createElement('script');
  var scriptText = document.createTextNode('test(function() {assert_false(true, "Unsafe inline script ran - createTextNode.")});');

  inlineScript.appendChild(scriptText);
  attachPoint.appendChild(inlineScript);

  document.getElementById('emptyScript').innerHTML = 'dmTest.step(function() {assert_unreached("Unsafe inline script ran - innerHTML.")});';
  document.getElementById('emptyDiv').outerHTML = '<script id=outerHTMLScript>dmTest.step(function() {assert_unreached("Unsafe inline script ran - outerHTML.")});</script>';

  document.write('<script>dmTest.step(function() {assert_unreached("Unsafe inline script ran - document.write")});</script>');
  document.writeln('<script>tmTest.step(function() {assert_unreached("Unsafe inline script ran - document.writeln")});</script>');

  dmTest.done();
})();