var jshint = require('../node_modules/jshint/lib/hint.js');

var files = [
  './'
];
var ignore = [
  'node_modules',
  'utils',
  'test'
];

jshint.hint(files, config(), undefined, ignore);

function config() {
  return {
    // Settings
    "passfail"      : false,  // Stop on first error.
    "maxerr"        : 100,    // Maximum error before stopping.


    // Predefined globals whom JSHint will ignore.
    "browser"       : false,   // Standard browser globals e.g. `window`, `document`.

    "node"          : true,
    "rhino"         : false,
    "couch"         : false,
    "wsh"           : false,   // Windows Scripting Host.

    "jquery"        : false,
    "prototypejs"   : false,
    "mootools"      : false,
    "dojo"          : false,

    "predef"        : [  // Custom globals.
        //"exampleVar",
        //"anotherCoolGlobal",
        //"iLoveDouglas"
    ],


    // Development.
    "debug"         : false,  // Allow debugger statements e.g. browser breakpoints.
    "devel"         : true,   // Allow developments statements e.g. `console.log();`.


    // ECMAScript 5.
    "es5"           : true,   // Allow ECMAScript 5 syntax.
    "strict"        : false,  // Require `use strict` pragma  in every file.
    "globalstrict"  : false,  // Allow global "use strict" (also enables 'strict').


    // The Good Parts.
    "asi"           : false,  // Tolerate Automatic Semicolon Insertion (no semicolons).
    "laxbreak"      : false,  // Tolerate unsafe line breaks e.g. `return [\n] x` without semicolons.
    "bitwise"       : true,   // Prohibit bitwise operators (&, |, ^, etc.).
    "boss"          : false,  // Tolerate assignments inside if, for & while. Usually conditions & loops are for comparison, not assignments.
    "curly"         : true,   // Require {} for every new block or scope.
    "eqeqeq"        : true,   // Require triple equals i.e. `===`.
    "eqnull"        : false,  // Tolerate use of `== null`.
    "evil"          : false,  // Tolerate use of `eval`.
    "expr"          : false,  // Tolerate `ExpressionStatement` as Programs.
    "forin"         : true,   // Require `for in` loops without `hasOwnPrototype`.
    "immed"         : true,   // Require immediate invocations to be wrapped in parens e.g. `( function(){}() );`
    "latedef"       : true,   // Prohipit variable use before definition.
    "loopfunc"      : false,  // Allow functions to be defined within loops.
    "noarg"         : true,   // Prohibit use of `arguments.caller` and `arguments.callee`.
    "regexp"        : true,   // Prohibit `.` and `[^...]` in regular expressions.
    "regexdash"     : false,  // Tolerate unescaped last dash i.e. `[-...]`.
    "scripturl"     : false,  // Tolerate script-targeted URLs.
    "shadow"        : false,  // Allows re-define variables later in code e.g. `var x=1; x=2;`.
    "supernew"      : false,  // Tolerate `new function () { ... };` and `new Object;`.
    "undef"         : true,   // Require all non-global variables be declared before they are used.
    "laxcomma"      : true,   // Tolerate comma on new line


    // Personal styling preferences.
    "newcap"        : true,   // Require capitalization of all constructor functions e.g. `new F()`.
    "noempty"       : true,   // Prohibit use of empty blocks.
    "nonew"         : true,   // Prohibit use of constructors for side-effects.
    "nomen"         : false,  // Prohibit use of initial or trailing underbars in names.
    "onevar"        : true,   // Allow only one `var` statement per function.
    "plusplus"      : true,   // Prohibit use of `++` & `--`.
    "sub"           : false,  // Tolerate all forms of subscript notation besides dot notation e.g. `dict['key']` instead of `dict.key`.
    "trailing"      : true,   // Prohibit trailing whitespaces.
    "white"         : true,   // Check against strict whitespace and indentation rules.
    "indent"        : 2       // Specify indentation spacing
  };
}