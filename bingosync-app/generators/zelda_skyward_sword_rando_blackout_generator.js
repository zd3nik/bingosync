_bingoGenerator = require("./generators/generator_bases/zelda_item_rando.js");
bingoList = require("./generators/goal_lists/zelda_ss_rando.js")

bingoGenerator = function(goals, opts) {
    opts.boardtype = 1; // blackout
    return _bingoGenerator(goals, opts);
};
