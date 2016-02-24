var spawn   = require("child_process").spawn;
var wrapper = "./wrapper.sh";

exports.handler = function(event, context) {
  console.log("Starting process: " + wrapper);

  var child = spawn(wrapper);

  child.stdout.on("data", function(data) { console.log("stdout:\n" + data); });
  child.stderr.on("data", function(data) { console.log("stderr:\n" + data); });

  child.on("close", function(code) {
    if (code === 0) {
      context.succeed("Process completed: " + wrapper);
    } else {
      context.fail("Process \"" + wrapper + "\" exited with code: " + code);
    }
  });
}
