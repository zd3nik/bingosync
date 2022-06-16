// board types, set in opts.boardtype
var BOARDTYPE_ROWCOL   = 0;
var BOARDTYPE_BLACKOUT = 1;
var BOARDTYPE_RANDOM   = 2;
// any bigger than this breaks the randomization
var OOTRANDO_MAX_SEED_SIZE = 2147483646;

// "heavily inspired" by https://github.com/kbuzsaki/bingosync/blob/a80228453b3b6ca57f06fe3e59b9f3eba3528652/bingosync-app/generators/ocarina_of_time_item_randomizer_generator.js

// first, there is a list, separated by "|" of types, then the goal name
// 2 goals with the same type cannot appear in the same line

// https://gist.github.com/blixt/f17b47c62508be59987b
// --------------------------------------------------
function Random(seed) {
	seed = Math.floor(seed);
	this._seed = seed % 2147483647;
	if (this._seed <= 0) this._seed += 2147483647;
}
Random.prototype.next = function () {
    // RNG from SS but not broken. It's also in TP: https://github.com/zeldaret/tp/blob/9799fadfe84344fa3ea78835365570d832a476c7/include/JSystem/JMath/random.h#L12
	return this._seed = (this._seed * 1664525 + 1013904223) % 0x1_0000_0000;
};
// --------------------------------------------------

bingoGenerator = function(bingoList, opts) {
	var final_bingo_list = []; // array of 25 goals

	var board = [];
	var seed_val = opts.seed;
	// if (seed_val > OOTRANDO_MAX_SEED_SIZE) {
	// 	seed_val = OOTRANDO_MAX_SEED_SIZE;
	// }

    var board_type = opts.boardtype || BOARDTYPE_ROWCOL;

	// split lines into objects w a group array
	var goals = [];
	for (var i=0; i<bingoList.length; i++) {
		var line = bingoList[i];
		var split = line.split('|');
		var groups = [];
		for (var j=0; j<split.length-1; j++) {
			groups.push(split[j]);
		}
		var goal_object = {
			goal: split[split.length-1],
			groups: groups
		};
		goals.push(goal_object);
	}

	var rng = new Random(seed_val);
	var final_list_index = 0;
	for (var row=1; row<=5; row++){
		board.push([]);
		for (var col=1; col<=5; col++){
			// no conflict initially
			var conflict;
			var goal;
			do {
				conflict = false;
				// get goal from the goals list
				var goal_index = rng.next() % goals.length;
				goal = goals[goal_index];
				// if blackout, no two goals may share a group
				if (board_type == BOARDTYPE_BLACKOUT) {
					for (var i=0; i<goal.groups.length; i++) {
						// loop checking the groups of the potential goal
						for (var j=0; j<board.length; j++) {
							// loop checking board rows
							for (var k=0; k<board[j].length; k++) {
								// loop checking board columns
								const square = board[j][k];
								if (square.groups.indexOf(goal.groups[i]) !== -1) {
									conflict = goal.groups[i]; // conflict found !!
									break;
								}
							}
							if (conflict) break;
						}
						if (conflict) break;
					}
				// rows / cols / tlbr / bltr
				} else if (board_type == BOARDTYPE_ROWCOL) {
					for (var i=0; i<goal.groups.length; i++) {
						// loop checking the groups of the potential goal
						for (var j=1; j<row && !conflict; j++) {
							// current row
							var square = board[j-1][col-1];
							if (square.groups.indexOf(goal.groups[i]) !== -1) {
								conflict = square; // conflict found !!
							}
						}
						for (var j=1; j<col && !conflict; j++) {
							// current col
							var square = board[row-1][j-1];
							if (square.groups.indexOf(goal.groups[i]) !== -1) {
								conflict = board[row-1][j-1]; // conflict found !!
							}
						}
						for (var j=1; j<row && row==col && !conflict; j++) {
							// tlbr
							var square = board[j-1][j-1];
							if (square.groups.indexOf(goal.groups[i]) !== -1) {
								conflict = square;
							}
						}
						for (var j=1; j<row && 6-row==col && !conflict; j++) {
							// bltr
							var square = board[j-1][j-1];
							if (square.groups.indexOf(goal.groups[i]) !== -1) {
								conflict = square;
							}
						}
						if (conflict) { break; }
					}
				} else {
					// random
				}
			} while (conflict);
			// executes once a goal that matches the current filters is found
			var goal_text = goals[goal_index].goal;
			board[row-1].push(goal);
			goals.splice(goal_index, 1);
			final_bingo_list[final_list_index] = {"name": goal_text};
			final_list_index++;
		}
	}

	// return goal list
	return final_bingo_list;
}

module.exports = bingoGenerator;
