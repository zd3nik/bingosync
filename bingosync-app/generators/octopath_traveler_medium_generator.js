// This is using a modified SynerGen. Mostly it tries harder to not break typings and has finite loops for retrying at picking goals. There is also some "testlog" code that I've commented out, can be ignored.
//The Goal List is further down after the generator for those who are looking for them.

// Create Math.seedrandom function and maybe some other stuff idk can't be bothered to understand this obfuscated crap
(function(j, i, g, m, k, n, o) {
    function q(b) {
        var e, f, a = this,
            c = b.length,
            d = 0,
            h = a.i = a.j = a.m = 0;
        a.S = [];
        a.c = [];
        for (c || (b = [c++]); d < g;) a.S[d] = d++;
        for (d = 0; d < g; d++) e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e;
        a.g = function(b) {
            var c = a.S,
                d = a.i + 1 & g - 1,
                e = c[d],
                f = a.j + e & g - 1,
                h = c[f];
            c[d] = h;
            c[f] = e;
            for (var i = c[e + h & g - 1]; --b;) d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1];
            a.i = d;
            a.j = f;
            return i
        };
        a.g(g)
    }

    function p(b, e, f, a, c) {
        f = [];
        c = typeof b;
        if (e && c == "object")
            for (a in b)
                if (a.indexOf("S") < 5) try {
                    f.push(p(b[a], e - 1))
                } catch (d) {}
                return f.length ? f : b + (c != "string" ? "\0" : "")
    }

    function l(b, e, f, a) {
        b += "";
        for (a = f = 0; a < b.length; a++) {
            var c = e,
                d = a & g - 1,
                h = (f ^= e[a & g - 1] * 19) + b.charCodeAt(a);
            c[d] = h & g - 1
        }
        b = "";
        for (a in e) b += String.fromCharCode(e[a]);
        return b
    }
    i.seedrandom = function(b, e) {
        var f = [],
            a;
        b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f);
        a = new q(f);
        l(a.S, j);
        i.random = function() {
            for (var c = a.g(m), d = o, b = 0; c < k;) c = (c + b) * g, d *= g, b = a.g(1);
            for (; c >= n;) c /= 2, d /= 2, b >>>= 1;
            return (c + b) / d
        };
        return b
    };
    o = i.pow(g, m);
    k = i.pow(2, k);
    n = k * 2;
    l(i.random(), j)
})([], Math, 256, 6, 52);

//synerGen: a bingo generator based on SRLv5 and Hollow Knight's generators.
bingoGenerator = function(bingoList, opts) {

    //Create a magic square that the board will be based on
    function magicSquare() {
        var A = B = C = D = E = f = g = h = i = j = 0;
        //this whole thing generates one of the 144 "unique" 5x5 magic squares
        //for more info visit https://www.grogono.com/magic/5x5pan144.php
        var table1 = [];
        table1[0] = [0, 5, 10, 15, 20];
        table1[1] = [0, 5, 10, 20, 15];
        table1[2] = [0, 5, 15, 10, 20];
        table1[3] = [0, 5, 15, 20, 10];
        table1[4] = [0, 5, 20, 10, 15];
        table1[5] = [0, 5, 20, 15, 10];

        var table2 = [];
        table2[0] = [0, 1, 2, 3, 4];
        table2[1] = [0, 1, 2, 4, 3];
        table2[2] = [0, 1, 3, 2, 4];
        table2[3] = [0, 1, 3, 4, 2];
        table2[4] = [0, 1, 4, 2, 3];
        table2[5] = [0, 1, 4, 3, 2];
        table2[6] = [0, 2, 1, 3, 4];
        table2[7] = [0, 2, 1, 4, 3];
        table2[8] = [0, 2, 3, 1, 4];
        table2[9] = [0, 2, 3, 4, 1];
        table2[10] = [0, 2, 4, 1, 3];
        table2[11] = [0, 2, 4, 3, 1];
        table2[12] = [0, 3, 1, 2, 4];
        table2[13] = [0, 3, 1, 4, 2];
        table2[14] = [0, 3, 2, 1, 4];
        table2[15] = [0, 3, 2, 4, 1];
        table2[16] = [0, 3, 4, 1, 2];
        table2[17] = [0, 3, 4, 2, 1];
        table2[18] = [0, 4, 1, 2, 3];
        table2[19] = [0, 4, 1, 3, 2];
        table2[20] = [0, 4, 2, 1, 3];
        table2[21] = [0, 4, 2, 3, 1];
        table2[22] = [0, 4, 3, 1, 2];
        table2[23] = [0, 4, 3, 2, 1];

        var randTable1 = table1[Math.floor(6 * Math.random())];
        var randTable2 = table2[Math.floor(24 * Math.random())];
        A = randTable1[0];
        B = randTable1[1];
        C = randTable1[2];
        D = randTable1[3];
        E = randTable1[4];
        f = randTable2[0];
        g = randTable2[1];
        h = randTable2[2];
        i = randTable2[3];
        j = randTable2[4];

        var template = [];
        template[0] = [(A+f+1), (B+i+1), (C+g+1), (D+j+1), (E+h+1)];
        template[1] = [(D+g+1), (E+j+1), (A+h+1), (B+f+1), (C+i+1)];
        template[2] = [(B+h+1), (C+f+1), (D+i+1), (E+g+1), (A+j+1)];
        template[3] = [(E+i+1), (A+g+1), (B+j+1), (C+h+1), (D+f+1)];
        template[4] = [(C+j+1), (D+h+1), (E+f+1), (A+i+1), (B+g+1)];

        //here starts the translocations, rotations, and reflections that increase the possible magic squares to 28800
        var ro = Math.floor(4 * Math.random());
        var rf = Math.floor(2 * Math.random());
        var tH = Math.floor(5 * Math.random());
        var tV = Math.floor(5 * Math.random());

        template = translocate(template, tH, 0);
        template = translocate(template, tV, 1);
        template = rotate(template, ro);
        if (rf == 1)
            template.reverse();

        function inverse(t) { //inverts the table
            var s = [];
            for (var j = 0; j < t.length; j++)
                s.push([]);
            for (var j = 0; j < t.length; j++) {
                for (var k = 0; k < t.length; k++)
                    s[j][k] = t[k][j];
            }
        }

        function rotate(t, i) { //rotates ccw i times
            for (var j = 1; j <= i; j++) {
                inverse(t);
                t.reverse();
            }
            return t;
        }

        function translocate(t, i, dir) {
            if (dir == 1) { //shifts down i times
                for (j = 1; j <= i; j++) {
                    var s = t.shift();
                    t.push(s);
                }
            } else {
                for (j = 1; j <= i; j++) { //shifts left i times
                    for (k = 0; k <= 4; k++) {
                        var s = t[k].shift();
                        t[k].push(s);
                    }
                }
            }
            return t;
        }

        return template;
    }

    //Reduces fluff in bingoList object if there's a method to set defaults
    function preprocessBingoList(bingoList) {
        for (const key of Object.keys(bingoList)) {
            bingoList[key].name = key;

            if (!bingoList[key].hasOwnProperty("Desc"))
                bingoList[key].Desc = "#!#" + key + "#!#";

            if (!bingoList[key].hasOwnProperty("Diff"))
                bingoList[key].Diff = 0;

            if (!bingoList[key].hasOwnProperty("Types"))
                bingoList[key].Types = [];

            if (!bingoList[key].hasOwnProperty("Excludes"))
                bingoList[key].Excludes = [];

            if (!bingoList[key].hasOwnProperty("Synergy"))
                bingoList[key].Synergy = [];

            if (!bingoList[key].hasOwnProperty("Score"))
                bingoList[key].Score = 0;
        }
    }

    //Make sure everything exists that should, pull out maxScore and bingoTypes from bingoList
    var bingoTypes = bingoList.bingoTypes;
    delete bingoList.bingoTypes;
    var maxScore = bingoList.maxScore;
    delete bingoList.maxScore;
    preprocessBingoList(bingoList);

    //Separate goals into currently choosable / unchoosable (all goals are choosable at the start)
    var choosable = [];
    var unchoosable = [];
    for (const key of Object.keys(bingoList))
        choosable.push(key);

    //Create counts for all types
    var types = { };
    for (const key of Object.keys(bingoTypes)) {
        if (!bingoTypes[key].hasOwnProperty("Max"))
            bingoTypes[key].Max = 5;
        types[key] = bingoTypes[key].Max;
    }

    //Seed the random
    seed = Math.seedrandom(opts.seed || Math.ceil(999999 * Math.random()));
    //console.log(seed);

    var testlog = "";
    var test_diff = [];

    //create a 1-dimensional array from the 2-dimensional matrix magicSquare[][]
    var square = magicSquare();
    var bingoBoard = square[0].concat(square[1], square[2], square[3], square[4]);

    var unchosenDiffs = bingoBoard.slice();
    var chosenGoals = [];
    for (var i = 1; i <= 25; i++)
        chosenGoals.push("");
        test_diff.push(0);

    var reroll = 0;
    var super_roll = 0;

    for (var i = 1; i <= 25; i++) {

        //this is necessary on the edge case that all the exclusions and difficulties wind up eliminating every goal
        if (choosable.length == 0 || reroll > 5) {
            if (reroll > 5) {
              super_roll++;
            }
            reroll = 0;
            var newChoosableDiffs = [];
            //add all goals with difficulty one more or less than any of the remaining difficulties back into choosable[]
            for (var j of unchosenDiffs) {
                var plusOne = j + 1;
                var minusOne = j - 1;
                if (!newChoosableDiffs.includes(plusOne) && plusOne <= 25)
                    newChoosableDiffs.push(plusOne);
                if (!newChoosableDiffs.includes(minusOne) && minusOne >= 1)
                    newChoosableDiffs.push(minusOne);
            }
            //testlog += "Spread Used | ";
            for (var k = 0; k < unchoosable.length; k++) {
                if (newChoosableDiffs.includes(bingoList[unchoosable[k]].Diff)) {
                  var check_types = true;
                  for (var l = 0; l < bingoList[unchoosable[k]].Types.length; l++) {
                      if (types[bingoList[unchoosable[k]].Types[l]] <= 0) {
                          check_types = false;
                          break;
                      }
                  }
                  if (check_types) {
                      choosable = choosable.concat(unchoosable.splice(k, 1));
                      k--;
                  }
                }
            }
            //if choosable[] is still empty, just move everything from unchoosable[] back
            if (choosable.length == 0 || super_roll > 1) {
              testlog += "Full Spread | ";
              for (var k = 0; k < unchoosable.length; k++) {
                  var check_types = true;
                  for (var l = 0; l < bingoList[unchoosable[k]].Types.length; l++) {
                      if (types[bingoList[unchoosable[k]].Types[l]] <= 0) {
                          check_types = false;
                          break;
                      }
                  }
                  if (check_types) {
                      choosable = choosable.concat(unchoosable.splice(k, 1));
                      k--;
                  }
              }
              //if choosable[] is still empty, just move everything from unchoosable[] back
              if (choosable.length == 0 || super_roll > 2) {
                  while (unchoosable.length > 0)
                      choosable = choosable.concat(unchoosable.splice(0, 1));
                  testlog += "Generation Broke (i = "+i+")| ";
                  for (var y in types) {
                      //if (y in ["test"])
                      testlog += y +":" + types[y] + " ~ ";
                  }
              }
            }
        }

        //finally, choosing goals can begin
        //Get a random goal, add to chosen
        var index = Math.floor(Math.random() * choosable.length);
        var goal = bingoList[choosable[index]];
        var diff = goal.Diff;
        var diffIndex = 0;
        if (goal.Diff == 0) {
            diffIndex = chosenGoals.indexOf("");
        } else {
            diffIndex = bingoBoard.indexOf(diff);
            //deal with the edge case of the difficulty not matching
            if (chosenGoals[diffIndex] != "") {
                if (diff < 25) {diffIndex = bingoBoard.indexOf(diff - 1);}
                if (chosenGoals[diffIndex] != "") {
                    if (diff > 1) {diffIndex = bingoBoard.indexOf(diff + 1);}

                    //these while loops go through the remaining difficulties, first those less than the true diff, then those greater.
                    if (chosenGoals[diffIndex] != "") {
                        var rel_diff = diff - 2;
                        while (rel_diff >= 1 && chosenGoals[diffIndex] != "") {
                            diffIndex = bingoBoard.indexOf(rel_diff);
                            rel_diff--;
                        }
                        if (chosenGoals[diffIndex] != "") {
                            if (reroll <= 5) {
                                testlog += "Rerolling ("+reroll+") ";
                                reroll++;
                                goal = null;
                            } else {
                                rel_diff = diff + 2;
                                while (rel_diff <= 25 && chosenGoals[diffIndex] != "") {
                                    diffIndex = bingoBoard.indexOf(rel_diff);
                                    rel_diff++;
                                }
                            }
                        }
                    }
                    //this remaining safety case should not occur anymore anyways
                    if (chosenGoals[diffIndex] != "") {
                        diffIndex = chosenGoals.indexOf("");
                    }
                }
            }
        }
        if (goal === null) {
          i--;
          continue;
        } else {
          reroll = 0;
          super_roll = 0;
        }
        chosenGoals[diffIndex] = { "name": goal.Desc };
        test_diff[diffIndex] = goal.Diff;
        //testlog += "(Adding "+choosable[index]+": "+diff+")";
        //remove the chosen goal and any duplicates of it completely
        for (var j = 0; j < choosable.length; j++) {
            if (choosable[j] == goal.name) {
                choosable.splice(j, 1);
                j--;
            }
        }
        //remove the goal's difficulty from unchosenDiffs[]
        var unchosenDiffIndex = unchosenDiffs.indexOf(goal.Diff);
        if (goal.Diff == 0) {
            unchosenDiffIndex = unchosenDiffs.indexOf(bingoBoard[diffIndex]);
        }
        if (unchosenDiffIndex != -1) {
            unchosenDiffs.splice(unchosenDiffIndex, 1);
        }

        //increment type counters if relevant, also remove other goals of the same type if relevant
        for (var j = 0; j < goal.Types.length; j++) {
            types[goal.Types[j]]--;
            if (types[goal.Types[j]] <= 0) {
              //testlog += goal.Types[j] + " maxed, removing: "
                for (var k = 0; k < choosable.length; k++) {
                    for (var l = 0; l < bingoList[choosable[k]].Types.length; l++) {
                        if (bingoList[choosable[k]].Types[l] === goal.Types[j]) {
                            //testlog += choosable[k] + ", "
                            unchoosable = unchoosable.concat(choosable.splice(k, 1));
                            k--;
                            break;
                        }
                    }
                }
                //testlog += " | "
            }
        }

        //decrement score
        maxScore = maxScore - goal.Score;
        //remove all goals of the same difficulty from choosable[], also remove excluded goals and goals with too high score if relevant
        for (var j = 0; j < choosable.length; j++) {
            if (bingoList[choosable[j]].Diff == goal.Diff && goal.Diff != 0) {
                unchoosable = unchoosable.concat(choosable.splice(j, 1));
                j--;
                continue;
            }
            if (bingoList[choosable[j]].Score > maxScore) {
                unchoosable = unchoosable.concat(choosable.splice(j, 1));
                j--;
            }
            for (var k = 0; k < goal.Excludes.length; k++) {
                if (choosable[j] == goal.Excludes[k]) {
                    unchoosable = unchoosable.concat(choosable.splice(j, 1));
                    j--;
                }
            }
        }

        //duplicate all goals sharing synergies with the chosen goal in choosable[] to make them more likely to be chosen
        for (var j = 0; j < goal.Synergy.length; j++) {
            var temp = [];
            for (var k = 0; k < choosable.length; k++) {
                if (goal.Synergy[j] == choosable[k]) //check if the goal itself is a synergy
                    temp.push(choosable[k]);
                for (var l = 0; l < bingoList[choosable[k]].Synergy.length; l++) { //check if it shares a synergy group that isn't an existing goal
                    if (goal.Synergy[j] == bingoList[choosable[k]].Synergy[l]
                        && !choosable.includes(bingoList[choosable[k]].Synergy[l])
                        && !unchoosable.includes(bingoList[choosable[k]].Synergy[l]))
                            temp.push(choosable[k]);
                }
            }
            choosable = choosable.concat(temp);
        }
    }

    /*
    let sum = 0;
    for (var i = 0; i < 25; i++) {
      testlog += test_diff[i];
      sum += test_diff[i];
      if ((i+1)%5 == 0) {
        testlog += ",";
        //testlog += ","+sum+"|";
        sum = 0;
      } else {
        testlog += ",";
      }
    }*/
    /*
    for (var i = 0; i < 5; i++) {
      testlog += (test_diff[i+0]+test_diff[i+5]+test_diff[i+10]+test_diff[i+15]+test_diff[i+20]);
      testlog += ",";
    }
    testlog += "\\" + (test_diff[0]+test_diff[6]+test_diff[12]+test_diff[18]+test_diff[24]);
    testlog += ",/" + (test_diff[4]+test_diff[8]+test_diff[12]+test_diff[16]+test_diff[20]);
    */
    /*
    if (testlog != "" && true) {
        chosenGoals[24] = {"name": chosenGoals[24].name + " (" + testlog + ")"};
    }
    */
    return chosenGoals;
}

//List made by Doid
//This is the Medium game length Variant
//The list has been generated with the help of this Google Sheet:
//https://docs.google.com/spreadsheets/d/1csndIf-XziHWjSTF8f_ZrFrwRYPLBQK_lxpZu3Y4l2Y/edit?usp=sharing

//Edit: after some substantial playtesting, the goals have been rebalanced and modified considerably from their original spreadsheet difficulty values.

var bingoList = {

"bingoTypes": {
        "items": {"Max": 6},
        "item_set": {"Max": 3},
        "broad_item_set": {"Max": 3},
        "item_count": {"Max": 3},
        "weapon": {"Max": 3},
        "armor": {"Max": 2},
        "accessory": {"Max": 2},
        "soulstone": {"Max": 1},
        "nut": {"Max": 1},
        "gold_item": {"Max": 1},
        "forbidden": {"Max": 1},
        "elem_reduce": {"Max": 1},
        "status_stone": {"Max": 1},
        "stat_accessory": {"Max": 1},
        "bottle": {"Max": 1},
        "info_counts": {"Max": 1},
        "stats": {"Max": 3},
        "hp": {"Max": 1},
        "sp": {"Max": 1},
        "phys_atk": {"Max": 1},
        "elem_atk": {"Max": 1},
        "phys_def": {"Max": 1},
        "elem_def": {"Max": 1},
        "crit": {"Max": 1},
        "evasion": {"Max": 1},
        "speed": {"Max": 1},
        "accuracy": {"Max": 1},
        "side_stories": {"Max": 5},
        "broad_ss_set": {"Max": 3},
        "ss_set": {"Max": 3},
        "ss_chain": {"Max": 2},
        "ss_II": {"Max": 2},
        "ss_III": {"Max": 1},
        "ss_frostlands": {"Max": 2},
        "ss_flatlands": {"Max": 2},
        "ss_coastlands": {"Max": 2},
        "ss_highlands": {"Max": 2},
        "ss_sunlands": {"Max": 2},
        "ss_riverlands": {"Max": 2},
        "ss_cliftlands": {"Max": 2},
        "ss_woodlands": {"Max": 2},
        "ss_specific": {"Max": 3},
        "ss_boss": {"Max": 4},
        "specific_character": {"Max": 10},
        "exploration": {"Max": 6},
        "chest": {"Max": 2},
        "chest_set": {"Max": 1},
        "chest_counts": {"Max": 2},
        "combat": {"Max": 5},
        "subjob": {"Max": 2},
        "boss": {"Max": 8},
        "advanced_boss": {"Max": 1},
        "combat_counts": {"Max": 3},
        "beast_lore": {"Max": 3},
        "extended_combat": {"Max": 5},
        "combat_set": {"Max": 4},
        "combat_challenge": {"Max": 2},
        "progression": {"Max": 12},
        "specific_chapter": {"Max": 4},
        "ch_1": {"Max": 8},
        "ch_2": {"Max": 6},
        "ch_3": {"Max": 4},
        "ch_4": {"Max": 2},
        "chapter": {"Max": 9},
        "#_t_pouches": {"Max": 1},
        "#_u_gold_items": {"Max": 1},
        "#_u_iron": {"Max": 1},
        "#_u_silver": {"Max": 1},
        "#_u_dragon": {"Max": 1},
        "#_u_arcane": {"Max": 1},
        "#_u_magus": {"Max": 1},
        "#_u_soul": {"Max": 1},
        "#_u_rune": {"Max": 1},
        "#_u_adamantine": {"Max": 1},
        "#_u_elem_wpn": {"Max": 1},
        "#_u_phys_staves": {"Max": 1},
        "#_u_evasion": {"Max": 1},
        "#_u_critical": {"Max": 1},
        "#_u_speed": {"Max": 1},
        "#_u_accuracy": {"Max": 1},
        "#_u_boss_drop": {"Max": 1},
        "#_t_s_sstones": {"Max": 1},
        "#_t_m_sstones": {"Max": 1},
        "#_t_l_sstones": {"Max": 1},
        "#_t_s_nuts": {"Max": 1},
        "#_t_m_nuts": {"Max": 1},
        "#_t_l_nuts": {"Max": 1},
        "#_t_nuts": {"Max": 1},
        "#_u_sstones": {"Max": 1},
        "#_t_olives": {"Max": 1},
        "#_u_swords": {"Max": 1},
        "#_u_spears": {"Max": 1},
        "#_u_daggers": {"Max": 1},
        "#_u_axes": {"Max": 1},
        "#_u_bows": {"Max": 1},
        "#_u_staves": {"Max": 1},
        "#_u_forbidden": {"Max": 1},
        "#_u_weapons": {"Max": 1},
        "#_u_headgears": {"Max": 1},
        "#_u_body_armors": {"Max": 1},
        "#_u_shields": {"Max": 1},
        "#_u_armors": {"Max": 1},
        "#_u_elem_reduce": {"Max": 1},
        "#_t_strong_amulets": {"Max": 1},
        "#_u_stones": {"Max": 1},
        "#_t_elem_amulets": {"Max": 1},
        "#_t_stones": {"Max": 1},
        "#_u_earrings": {"Max": 1},
        "#_u_rings": {"Max": 1},
        "#_u_bracelets": {"Max": 1},
        "#_u_necklaces": {"Max": 1},
        "#_alluring": {"Max": 1},
        "#_u_accessories": {"Max": 1},
        "#_t_bottles": {"Max": 1},
        "#_bottle_sets": {"Max": 1},
        "#_u_town_boosts": {"Max": 1},
        "#_t_town_boosts": {"Max": 1},
        "#_t_items": {"Max": 1},
        "#_hp": {"Max": 1},
        "#_sp": {"Max": 1},
        "#_phys_atk": {"Max": 1},
        "#_elem_atk": {"Max": 1},
        "#_phys_def": {"Max": 1},
        "#_elem_def": {"Max": 1},
        "#_accuracy": {"Max": 1},
        "#_speed": {"Max": 1},
        "#_critical": {"Max": 1},
        "#_evasion": {"Max": 1},
        "#_side_stories": {"Max": 1},
        "#_ss_region_sets": {"Max": 1},
        "#_ss_II_sets": {"Max": 1},
        "#_ss_III_sets": {"Max": 1},
        "#_ss_frostlands": {"Max": 1},
        "#_ss_flatlands": {"Max": 1},
        "#_ss_coastlands": {"Max": 1},
        "#_ss_highlands": {"Max": 1},
        "#_ss_sunlands": {"Max": 1},
        "#_ss_riverlands": {"Max": 1},
        "#_ss_cliftlands": {"Max": 1},
        "#_ss_woodlands": {"Max": 1},
        "#_ss_bosses": {"Max": 1},
        "#_t_brown_chests": {"Max": 1},
        "#_t_red_chests": {"Max": 1},
        "#_t_purple_chests": {"Max": 1},
        "#_t_chests": {"Max": 1},
        "#_optional_bosses": {"Max": 1},
        "#_advanced_bosses": {"Max": 1},
        "#_weakness_sets": {"Max": 1},
        "#_u_concoct": {"Max": 1},
        "#_u_str_bl": {"Max": 1},
        "#_npc_summons": {"Max": 1},
        "#_bl_summons": {"Max": 1},
        "#_u_bl": {"Max": 1},
        "#_u_lizards_bl": {"Max": 1},
        "#_u_frogs_bl": {"Max": 1},
        "#_u_birds_bl": {"Max": 1},
        "#_u_rats_bl": {"Max": 1},
        "#_u_magic_bl": {"Max": 1},
        "str_#_bl": {"Max": 1},
        "str_#_NPC": {"Max": 1},
        "#_bg_yolo": {"Max": 1},
        "#_ch_1": {"Max": 1},
        "#_ch_2": {"Max": 1},
        "#_ch_3": {"Max": 1},
        "#_ch_4": {"Max": 1},
        "#_u_elem_boost": {"Max": 1},
        "#_u_bt_equip": {"Max": 1},
        "#_ss_post_game": {"Max": 1}
},

"1_ch_3": {
        "Desc": "Complete a Chapter 3",
        "Diff": 1,
        "Types": ["chapter","progression","#_ch_3","ch_3"],
        "Excludes": ["1_ch_2"]
},

"3_u_boss_drop": {
        "Desc": "3 Unique Boss Equipment Drops",
        "Diff": 1,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"3500_hp": {
        "Desc": "3500+ HP",
        "Diff": 1,
        "Types": ["hp","stats","#_hp"]
},

"650_phys_atk": {
        "Desc": "650+ Physical Attack",
        "Diff": 1,
        "Types": ["phys_atk","stats","#_phys_atk"]
},

"2_ss_region_sets": {
        "Desc": "2 Side Stories in Each Region",
        "Diff": 1,
        "Types": ["broad_ss_set","side_stories","#_ss_region_sets"]
},

"2_ss_III_sets": {
        "Desc": "2 (III) Side Stories",
        "Diff": 1,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","1_ss_III_sets"]
},

"6_ss_frostlands": {
        "Desc": "6 Side Stories in Frostlands (No Kit)",
        "Diff": 1,
        "Types": ["ss_set","ss_frostlands","side_stories","#_ss_frostlands"]
},

"6_ss_flatlands": {
        "Desc": "6 Side Stories in Flatlands (No Kit)",
        "Diff": 1,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"6_ss_coastlands": {
        "Desc": "6 Side Stories in Coastlands (No Kit)",
        "Diff": 1,
        "Types": ["ss_set","ss_coastlands","side_stories","#_ss_coastlands"]
},

"str_6_bl": {
        "Desc": "Capture a Strength 6+ Monster",
        "Diff": 1,
        "Types": ["extended_combat","specific_character","beast_lore","combat_set","combat","str_#_bl"]
},

"ch_2_slow": {
        "Desc": "Chapter 2 Boss without Vets",
        "Diff": 1,
        "Types": ["combat_challenge","boss","progression","combat","ch_2"]
},

"ch_2_no_boost": {
        "Desc": "Chapter 2 Boss without Boosting",
        "Diff": 1,
        "Types": ["combat_challenge","boss","progression","combat","ch_2"]
},

"25_t_pouches": {
        "Desc": "25 Total Money Pouches",
        "Diff": 2,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_pouches"]
},

"4_u_dragon": {
        "Desc": "4 Unique Dragon Equipments",
        "Diff": 2,
        "Types": ["item_set","armor","weapon","crit","items","#_u_dragon"]
},

"15_u_accuracy": {
        "Desc": "15 Unique Accuracy Equipments",
        "Diff": 2,
        "Types": ["broad_item_set","armor","weapon","accuracy","items","#_u_accuracy"]
},

"15_t_m_nuts": {
        "Desc": "15 Nut (M)'s",
        "Diff": 2,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_m_nuts"]
},

"30_u_weapons": {
        "Desc": "30 Unique Weapons",
        "Diff": 2,
        "Types": ["broad_item_set","weapon","items","#_u_weapons"]
},

"6_u_stones": {
        "Desc": "6 Unique Status Stones",
        "Diff": 2,
        "Types": ["item_set","accessory","status_stone","accessory","items","#_u_stones"]
},

"20_u_accessories": {
        "Desc": "20 Unique Accessories",
        "Diff": 2,
        "Types": ["broad_item_set","accessory","stat_accessory","elem_reduce","items","#_u_accessories"]
},

"3_bottle_sets": {
        "Desc": "3 Complete Sets of Status Bottles",
        "Diff": 2,
        "Types": ["item_set","item_count","bottle","items","#_bottle_sets"]
},

"4_ss_II_sets": {
        "Desc": "4 (II) Side Stories",
        "Diff": 2,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets"]
},

"9_u_lizards_bl": {
        "Desc": "Capture 9 Unique Lizardmen / Lizardking",
        "Diff": 2,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_lizards_bl"]
},

"9_u_frogs_bl": {
        "Desc": "Capture 9 Unique Froggen / Frogking",
        "Diff": 2,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_frogs_bl"]
},

"9_u_birds_bl": {
        "Desc": "Capture 9 Unique Birdian / Birdking",
        "Diff": 2,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_birds_bl"]
},

"9_u_rats_bl": {
        "Desc": "Capture 9 Unique Ratkin / Ratking",
        "Diff": 2,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_rats_bl"]
},

"15_u_critical": {
        "Desc": "15 Unique Critical Equipments",
        "Diff": 3,
        "Types": ["broad_item_set","armor","weapon","crit","items","#_u_critical"]
},

"7_ss_frostlands": {
        "Desc": "7 Side Stories in Frostlands (No Kit)",
        "Diff": 3,
        "Types": ["ss_set","ss_frostlands","side_stories","#_ss_frostlands"]
},

"6_ss_highlands": {
        "Desc": "6 Side Stories in Highlands (No Kit)",
        "Diff": 3,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"6_ss_woodlands": {
        "Desc": "6 Side Stories in Woodlands (No Kit)",
        "Diff": 3,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"15_u_elem_wpn": {
        "Desc": "15 Unique Elemental Non-Staff Weapons",
        "Diff": 4,
        "Types": ["broad_item_set","weapon","elem_atk","items","#_u_elem_wpn"]
},

"20_t_s_nuts": {
        "Desc": "20 Nut (S)'s",
        "Diff": 4,
        "Types": ["item_count","nut","item_set","items","#_t_s_nuts"]
},

"30_t_nuts": {
        "Desc": "30 Total Nuts",
        "Diff": 4,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_nuts"]
},

"18_u_sstones": {
        "Desc": "18 Unique Soulstones",
        "Diff": 4,
        "Types": ["broad_item_set","soulstone","items","#_u_sstones"]
},

"15_u_axes": {
        "Desc": "15 Unique Axes",
        "Diff": 4,
        "Types": ["broad_item_set","weapon","items","#_u_axes"]
},

"9_u_elem_reduce": {
        "Desc": "9 Unique Elemental Reduction Equipments",
        "Diff": 4,
        "Types": ["item_set","armor","accessory","elem_reduce","items","#_u_elem_reduce"]
},

"580_evasion": {
        "Desc": "580+ Evasion",
        "Diff": 4,
        "Types": ["evasion","stats","#_evasion"]
},

"ss_boss_3": {
        "Desc": "SS: Scourge of the Seas",
        "Diff": 4,
        "Types": ["ss_specific","ss_coastlands","ss_boss","boss","side_stories"]
},

"5_optional_bosses": {
        "Desc": "Defeat 5 Unique Optional Bosses",
        "Diff": 4,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"20_u_gold_items": {
        "Desc": "20 Unique Gold Items",
        "Diff": 5,
        "Types": ["broad_item_set","gold_item","items","#_u_gold_items"]
},

"5_u_phys_staves": {
        "Desc": "5 Unique Physical Staves",
        "Diff": 5,
        "Types": ["item_set","weapon","phys_atk","items","#_u_phys_staves"]
},

"15_u_spears": {
        "Desc": "15 Unique Spears",
        "Diff": 5,
        "Types": ["broad_item_set","weapon","items","#_u_spears"]
},

"4_u_necklaces": {
        "Desc": "4 Unique Necklaces",
        "Diff": 5,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_necklaces"]
},

"300_sp": {
        "Desc": "300+ SP",
        "Diff": 5,
        "Types": ["sp","stats","#_sp"]
},

"600_phys_def": {
        "Desc": "600+ Physical Defense",
        "Diff": 5,
        "Types": ["phys_def","stats","#_phys_def"]
},

"450_critical": {
        "Desc": "450+ Critical",
        "Diff": 5,
        "Types": ["crit","stats","#_critical"]
},

"7_ss_flatlands": {
        "Desc": "7 Side Stories in Flatlands (No Kit)",
        "Diff": 5,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"7_ss_coastlands": {
        "Desc": "7 Side Stories in Coastlands (No Kit)",
        "Diff": 5,
        "Types": ["ss_set","ss_coastlands","side_stories","#_ss_coastlands"]
},

"6_ss_sunlands": {
        "Desc": "6 Side Stories in Sunlands (No Kit)",
        "Diff": 5,
        "Types": ["ss_set","ss_sunlands","side_stories","#_ss_sunlands"]
},

"30_t_pouches": {
        "Desc": "30 Total Money Pouches",
        "Diff": 6,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_pouches"]
},

"10_t_l_nuts": {
        "Desc": "10 Nut (L)'s",
        "Diff": 6,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_l_nuts"]
},

"15_u_daggers": {
        "Desc": "15 Unique Daggers",
        "Diff": 6,
        "Types": ["broad_item_set","weapon","items","#_u_daggers"]
},

"13_u_shields": {
        "Desc": "13 Unique Shields",
        "Diff": 6,
        "Types": ["broad_item_set","armor","items","#_u_shields"]
},

"35_u_armors": {
        "Desc": "35 Unique Armors",
        "Diff": 6,
        "Types": ["broad_item_set","armor","items","#_u_armors"]
},

"500_speed": {
        "Desc": "500+ Speed",
        "Diff": 6,
        "Types": ["speed","stats","#_speed"]
},

"20_side_stories": {
        "Desc": "20 Side Stories",
        "Diff": 6,
        "Types": ["broad_ss_set","side_stories","#_side_stories"]
},

"7_ss_highlands": {
        "Desc": "7 Side Stories in Highlands (No Kit)",
        "Diff": 6,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"ss_boss_4": {
        "Desc": "SS: Shadow over the Sands",
        "Diff": 6,
        "Types": ["ss_specific","ss_sunlands","ss_boss","boss","side_stories"]
},

"630_evasion": {
        "Desc": "630+ Evasion",
        "Diff": 7,
        "Types": ["evasion","stats","#_evasion"]
},

"6_ss_riverlands": {
        "Desc": "6 Side Stories in Riverlands (No Kit)",
        "Diff": 7,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"24_u_concoct": {
        "Desc": "24 Unique Concoctions Used",
        "Diff": 7,
        "Types": ["combat_counts","items","specific_character","combat","#_u_concoct"]
},

"6_u_str_bl": {
        "Desc": "6 Different Strength Monsters in Beast Lore",
        "Diff": 7,
        "Types": ["combat_counts","specific_character","beast_lore","extended_combat","combat_set","combat","#_u_str_bl"]
},

"str_8_NPC": {
        "Desc": "Defeat a Strength 8 NPC",
        "Diff": 7,
        "Types": ["combat_set","combat","str_#_NPC"]
},

"4_ch_2": {
        "Desc": "Complete 4 Chapter 2's",
        "Diff": 7,
        "Types": ["chapter","progression","#_ch_2","ch_2"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2"]
},

"20_u_speed": {
        "Desc": "20 Unique Speed Equipments",
        "Diff": 8,
        "Types": ["broad_item_set","armor","weapon","speed","items","#_u_speed"]
},

"30_t_m_sstones": {
        "Desc": "30 Soulstone (M)'s",
        "Diff": 8,
        "Types": ["item_count","soulstone","item_set","items","#_t_m_sstones"]
},

"15_u_bows": {
        "Desc": "15 Unique Bows",
        "Diff": 8,
        "Types": ["broad_item_set","weapon","items","#_u_bows"]
},

"6_u_bracelets": {
        "Desc": "6 Unique Bracelets",
        "Diff": 8,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_bracelets"]
},

"350_accuracy": {
        "Desc": "350+ Accuracy",
        "Diff": 8,
        "Types": ["accuracy","stats","#_accuracy"]
},

"7_ss_cliftlands": {
        "Desc": "7 Side Stories in Cliftlands (No Kit)",
        "Diff": 8,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"7_ss_woodlands": {
        "Desc": "7 Side Stories in Woodlands (No Kit)",
        "Diff": 8,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"10_u_magic_bl": {
        "Desc": "Capture 10 Unique Elemental Themed Enemies",
        "Diff": 8,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_magic_bl"]
},

"2_ch_3": {
        "Desc": "Complete 2 Chapter 3's",
        "Diff": 10,
        "Types": ["chapter","progression","#_ch_3","ch_3"],
        "Excludes": ["1_ch_2","2_ch_2","1_ch_3"]
},

"3_u_rune": {
        "Desc": "3 Unique Rune Weapons",
        "Diff": 9,
        "Types": ["item_set","weapon","elem_atk","items","progression","#_u_rune"]
},

"7_ss_sunlands": {
        "Desc": "7 Side Stories in Sunlands (No Kit)",
        "Diff": 9,
        "Types": ["ss_set","ss_sunlands","side_stories","#_ss_sunlands"]
},

"5_u_dragon": {
        "Desc": "5 Unique Dragon Equipments",
        "Diff": 9,
        "Types": ["item_set","armor","weapon","crit","items","#_u_dragon"]
},

"30_t_town_boosts": {
        "Desc": "30 Town Boost Infos",
        "Diff": 9,
        "Types": ["item_set","item_count","info_counts","items","#_t_town_boosts"]
},

"750_elem_atk": {
        "Desc": "750+ Elemental Attack",
        "Diff": 9,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"700_elem_def": {
        "Desc": "700+ Elemental Defense",
        "Diff": 9,
        "Types": ["elem_def","stats","#_elem_def"]
},

"3_ss_III_sets": {
        "Desc": "3 (III) Side Stories",
        "Diff": 9,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","1_ss_III_sets","2_ss_III_sets"]
},

"8_ss_flatlands": {
        "Desc": "8 Side Stories in Flatlands (No Kit)",
        "Diff": 9,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"7_ss_riverlands": {
        "Desc": "7 Side Stories in Riverlands (No Kit)",
        "Diff": 9,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"chapter_4_chests": {
        "Desc": "Open All Chests in a Chapter 4 Dungeon",
        "Diff": 9,
        "Types": ["chest","chest_set","exploration"]
},

"15_u_staves": {
        "Desc": "15 Unique Staves",
        "Diff": 10,
        "Types": ["broad_item_set","weapon","items","#_u_staves"]
},

"15_t_elem_amulets": {
        "Desc": "15 Elemental Reduction Amulets/Charms",
        "Diff": 10,
        "Types": ["item_set","item_count","elem_reduce","accessory","items","side_stories","#_t_elem_amulets"]
},

"5_u_necklaces": {
        "Desc": "5 Unique Necklaces",
        "Diff": 10,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_necklaces"]
},

"6_optional_bosses": {
        "Desc": "Defeat 6 Unique Optional Bosses",
        "Diff": 10,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"str_9_NPC": {
        "Desc": "Defeat a Strength 9 NPC",
        "Diff": 10,
        "Types": ["combat_set","combat","str_#_NPC"]
},

"5_ch_2": {
        "Desc": "Complete 5 Chapter 2's",
        "Diff": 10,
        "Types": ["chapter","progression","#_ch_2","ch_2"],
        "Excludes": ["5_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2"]
},

"6_u_phys_staves": {
        "Desc": "6 Unique Physical Staves",
        "Diff": 11,
        "Types": ["item_set","weapon","phys_atk","items","#_u_phys_staves"]
},

"20_t_l_sstones": {
        "Desc": "20 Soulstone (L)'s",
        "Diff": 11,
        "Types": ["item_count","soulstone","item_set","items","#_t_l_sstones"]
},

"13_t_l_nuts": {
        "Desc": "13 Nut (L)'s",
        "Diff": 11,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_l_nuts"]
},

"4_u_forbidden": {
        "Desc": "4 Unique Forbbiden Equipments",
        "Diff": 11,
        "Types": ["item_set","weapon","forbidden","items","#_u_forbidden"]
},

"9_t_strong_amulets": {
        "Desc": "9 Strong Elemental Reduction Amulets",
        "Diff": 11,
        "Types": ["item_set","item_count","accessory","elem_reduce","items","progression","#_t_strong_amulets"]
},

"15_t_stones": {
        "Desc": "15 Status Stones",
        "Diff": 11,
        "Types": ["item_set","item_count","status_stone","accessory","items","#_t_stones"]
},

"7_u_bracelets": {
        "Desc": "7 Unique Bracelets",
        "Diff": 11,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_bracelets"]
},

"20_t_bottles": {
        "Desc": "20 Status Bottles",
        "Diff": 11,
        "Types": ["item_set","item_count","bottle","items","#_t_bottles"]
},

"8_ss_cliftlands": {
        "Desc": "8 Side Stories in Cliftlands (No Kit)",
        "Diff": 11,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"str_7_bl": {
        "Desc": "Capture a Strength 7+ Monster",
        "Diff": 11,
        "Types": ["extended_combat","specific_character","beast_lore","combat_set","combat","str_#_bl"]
},

"ch_3_duo": {
        "Desc": "Chapter 3 Boss with 2 only Travelers",
        "Diff": 11,
        "Types": ["combat_challenge","boss","progression","combat","ch_3"]
},

"1_ch_4": {
        "Desc": "Complete a Chapter 4",
        "Diff": 11,
        "Types": ["chapter","progression","#_ch_4","ch_4"],
        "Excludes": ["1_ch_2","1_ch_3"]
},

"20_u_evasion": {
        "Desc": "20 Unique Evasion Equipments",
        "Diff": 12,
        "Types": ["broad_item_set","armor","weapon","evasion","items","#_u_evasion"]
},

"40_t_s_sstones": {
        "Desc": "40 Soulstone (S)'s",
        "Diff": 12,
        "Types": ["item_count","soulstone","item_set","items","#_t_s_sstones"]
},

"15_u_swords": {
        "Desc": "15 Unique Swords",
        "Diff": 12,
        "Types": ["broad_item_set","weapon","items","#_u_swords"]
},

"8_u_stones": {
        "Desc": "8 Unique Status Stones",
        "Diff": 12,
        "Types": ["item_set","accessory","status_stone","accessory","items","#_u_stones"]
},

"700_phys_atk": {
        "Desc": "700+ Physical Attack",
        "Diff": 12,
        "Types": ["phys_atk","stats","#_phys_atk"]
},

"675_phys_def": {
        "Desc": "675+ Physical Defense",
        "Diff": 12,
        "Types": ["phys_def","stats","#_phys_def"]
},

"500_critical": {
        "Desc": "500+ Critical",
        "Diff": 12,
        "Types": ["crit","stats","#_critical"]
},

"5_ss_II_sets": {
        "Desc": "5 (II) Side Stories",
        "Diff": 12,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets"]
},

"8_ss_frostlands": {
        "Desc": "8 Side Stories in Frostlands (No Kit)",
        "Diff": 12,
        "Types": ["ss_set","ss_frostlands","side_stories","#_ss_frostlands"]
},

"8_ss_highlands": {
        "Desc": "8 Side Stories in Highlands (No Kit)",
        "Diff": 12,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"8_ss_woodlands": {
        "Desc": "8 Side Stories in Woodlands (No Kit)",
        "Diff": 12,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"40_t_nuts": {
        "Desc": "40 Total Nuts",
        "Diff": 13,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_nuts"]
},

"9_t_olives": {
        "Desc": "9 Olive (L)'s",
        "Diff": 13,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_olives"]
},

"550_speed": {
        "Desc": "550+ Speed",
        "Diff": 13,
        "Types": ["speed","stats","#_speed"]
},

"8_ss_riverlands": {
        "Desc": "8 Side Stories in Riverlands (No Kit)",
        "Diff": 13,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"20_u_elem_wpn": {
        "Desc": "20 Unique Elemental Non-Staff Weapons",
        "Diff": 14,
        "Types": ["broad_item_set","weapon","elem_atk","items","#_u_elem_wpn"]
},

"20_u_accuracy": {
        "Desc": "20 Unique Accuracy Equipments",
        "Diff": 14,
        "Types": ["broad_item_set","armor","weapon","accuracy","items","#_u_accuracy"]
},

"4_u_boss_drop": {
        "Desc": "4 Unique Boss Equipment Drops",
        "Diff": 14,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"4500_hp": {
        "Desc": "4500+ HP",
        "Diff": 14,
        "Types": ["hp","stats","#_hp"]
},

"350_sp": {
        "Desc": "350+ SP",
        "Diff": 14,
        "Types": ["sp","stats","#_sp"]
},

"str_10_NPC": {
        "Desc": "Defeat a Strength 10 NPC",
        "Diff": 14,
        "Types": ["combat_set","combat","str_#_NPC"]
},

"1_ss_post_game": {
        "Desc": "1 Post Game Side Story",
        "Diff": 14,
        "Types": ["side_stories","broad_ss_set","progression","#_ss_post_game"]
},

"35_t_pouches": {
        "Desc": "35 Total Money Pouches",
        "Diff": 15,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_pouches"]
},

"20_t_m_nuts": {
        "Desc": "20 Nut (M)'s",
        "Diff": 15,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_m_nuts"]
},

"24_u_headgears": {
        "Desc": "24 Unique Headgears",
        "Diff": 15,
        "Types": ["broad_item_set","armor","items","#_u_headgears"]
},

"680_evasion": {
        "Desc": "680+ Evasion",
        "Diff": 15,
        "Types": ["evasion","stats","#_evasion"]
},

"7_optional_bosses": {
        "Desc": "Defeat 7 Unique Optional Bosses",
        "Diff": 15,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"12_u_lizards_bl": {
        "Desc": "Capture 12 Unique Lizardmen / Lizardking",
        "Diff": 15,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_lizards_bl"]
},

"12_u_frogs_bl": {
        "Desc": "Capture 12 Unique Froggen / Frogking",
        "Diff": 15,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_frogs_bl"]
},

"12_u_birds_bl": {
        "Desc": "Capture 12 Unique Birdian / Birdking",
        "Diff": 15,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_birds_bl"]
},

"12_u_rats_bl": {
        "Desc": "Capture 12 Unique Ratkin / Ratking",
        "Diff": 15,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_rats_bl"]
},

"24_u_body_armors": {
        "Desc": "24 Unique Body Armors",
        "Diff": 16,
        "Types": ["broad_item_set","armor","items","#_u_body_armors"]
},

"30_u_accessories": {
        "Desc": "30 Unique Accessories",
        "Diff": 16,
        "Types": ["broad_item_set","accessory","stat_accessory","elem_reduce","items","side_stories","#_u_accessories"]
},

"400_accuracy": {
        "Desc": "400+ Accuracy",
        "Diff": 16,
        "Types": ["accuracy","stats","#_accuracy"]
},

"3_ss_region_sets": {
        "Desc": "3 Side Stories in Each Region",
        "Diff": 16,
        "Types": ["broad_ss_set","side_stories","#_ss_region_sets"]
},

"8_ss_coastlands": {
        "Desc": "8 Side Stories in Coastlands (No Kit)",
        "Diff": 16,
        "Types": ["ss_set","ss_coastlands","side_stories","#_ss_coastlands"]
},

"32_u_concoct": {
        "Desc": "32 Unique Concoctions Used",
        "Diff": 16,
        "Types": ["combat_counts","items","specific_character","combat","#_u_concoct"]
},

"40_t_pouches": {
        "Desc": "40 Total Money Pouches",
        "Diff": 17,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_pouches"]
},

"25_u_gold_items": {
        "Desc": "25 Unique Gold Items",
        "Diff": 17,
        "Types": ["broad_item_set","gold_item","items","#_u_gold_items"]
},

"20_u_critical": {
        "Desc": "20 Unique Critical Equipments",
        "Diff": 17,
        "Types": ["broad_item_set","armor","weapon","crit","items","#_u_critical"]
},

"25_t_s_nuts": {
        "Desc": "25 Nut (S)'s",
        "Diff": 17,
        "Types": ["item_count","nut","item_set","items","#_t_s_nuts"]
},

"40_u_weapons": {
        "Desc": "40 Unique Weapons",
        "Diff": 17,
        "Types": ["broad_item_set","weapon","items","#_u_weapons"]
},

"4_bottle_sets": {
        "Desc": "4 Complete Sets of Status Bottles",
        "Diff": 17,
        "Types": ["item_set","item_count","bottle","items","#_bottle_sets"]
},

"800_elem_atk": {
        "Desc": "800+ Elemental Attack",
        "Diff": 17,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"550_critical": {
        "Desc": "550+ Critical",
        "Diff": 17,
        "Types": ["crit","stats","#_critical"]
},

"6_ss_II_sets": {
        "Desc": "6 (II) Side Stories",
        "Diff": 17,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets"]
},

"40_t_town_boosts": {
        "Desc": "40 Town Boost Infos",
        "Diff": 18,
        "Types": ["item_set","item_count","info_counts","items","#_t_town_boosts"]
},

"800_elem_def": {
        "Desc": "800+ Elemental Defense",
        "Diff": 18,
        "Types": ["elem_def","stats","#_elem_def"]
},

"9_ss_highlands": {
        "Desc": "9 Side Stories in Highlands (No Kit)",
        "Diff": 18,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"8_ss_sunlands": {
        "Desc": "8 Side Stories in Sunlands (No Kit)",
        "Diff": 18,
        "Types": ["ss_set","ss_sunlands","side_stories","#_ss_sunlands"]
},

"9_ss_riverlands": {
        "Desc": "9 Side Stories in Riverlands (No Kit)",
        "Diff": 18,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"2_ss_bosses": {
        "Desc": "Defeat 2 Side Story Bosses",
        "Diff": 18,
        "Types": ["ss_set","ss_boss","boss","side_stories","#_ss_bosses"]
},

"6_ch_2": {
        "Desc": "Complete 6 Chapter 2's",
        "Diff": 16,
        "Types": ["chapter","progression","#_ch_2","ch_2"],
        "Excludes": ["5_ch_1","6_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2"]
},

"5_u_forbidden": {
        "Desc": "5 Unique Forbbiden Equipments",
        "Diff": 18,
        "Types": ["item_set","weapon","forbidden","items","#_u_forbidden"]
},

"6_u_necklaces": {
        "Desc": "6 Unique Necklaces",
        "Diff": 18,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_necklaces"]
},

"9_ss_frostlands": {
        "Desc": "9 Side Stories in Frostlands (No Kit)",
        "Diff": 18,
        "Types": ["ss_set","ss_frostlands","side_stories","ss_boss","#_ss_frostlands"]
},

"12_u_elem_reduce": {
        "Desc": "12 Unique Elemental Reduction Equipments",
        "Diff": 18,
        "Types": ["item_set","armor","accessory","elem_reduce","items","progression","#_u_elem_reduce"]
},

"750_phys_def": {
        "Desc": "750+ Physical Defense",
        "Diff": 18,
        "Types": ["phys_def","stats","#_phys_def"]
},

"9_ss_flatlands": {
        "Desc": "9 Side Stories in Flatlands (No Kit)",
        "Diff": 18,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"8_optional_bosses": {
        "Desc": "Defeat 8 Unique Optional Bosses",
        "Diff": 18,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"40_t_m_sstones": {
        "Desc": "40 Soulstone (M)'s",
        "Diff": 19,
        "Types": ["item_count","soulstone","item_set","items","progression","#_t_m_sstones"]
},

"45_u_armors": {
        "Desc": "45 Unique Armors",
        "Diff": 19,
        "Types": ["broad_item_set","armor","items","#_u_armors"]
},

"4_ss_III_sets": {
        "Desc": "4 (III) Side Stories",
        "Diff": 19,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","1_ss_III_sets","2_ss_III_sets","3_ss_III_sets"]
},

"9_ss_cliftlands": {
        "Desc": "9 Side Stories in Cliftlands (No Kit)",
        "Diff": 19,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"3_ch_3": {
        "Desc": "Complete 3 Chapter 3's",
        "Diff": 19,
        "Types": ["chapter","progression","#_ch_3","ch_3"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2","1_ch_3","2_ch_3"]
},

"6_u_dragon": {
        "Desc": "6 Unique Dragon Equipments",
        "Diff": 19,
        "Types": ["item_set","armor","weapon","crit","items","#_u_dragon"]
},

"25_u_speed": {
        "Desc": "25 Unique Speed Equipments",
        "Diff": 19,
        "Types": ["broad_item_set","armor","weapon","speed","items","#_u_speed"]
},

"5_u_boss_drop": {
        "Desc": "5 Unique Boss Equipment Drops",
        "Diff": 19,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"30_side_stories": {
        "Desc": "30 Side Stories",
        "Diff": 19,
        "Types": ["broad_ss_set","side_stories","ss_II","#_side_stories"]
},

"9_ss_woodlands": {
        "Desc": "9 Side Stories in Woodlands (No Kit)",
        "Diff": 19,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"7_ch_2": {
        "Desc": "Complete 7 Chapter 2's",
        "Diff": 19,
        "Types": ["chapter","progression","#_ch_2","ch_2"],
        "Excludes": ["5_ch_1","6_ch_1","7_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","6_ch_2"]
},

"16_u_shields": {
        "Desc": "16 Unique Shields",
        "Diff": 20,
        "Types": ["broad_item_set","armor","items","progression","#_u_shields"]
},

"400_sp": {
        "Desc": "400+ SP",
        "Diff": 20,
        "Types": ["sp","stats","#_sp"]
},

"str_8_bl": {
        "Desc": "Capture a Strength 8+ Monster",
        "Diff": 20,
        "Types": ["extended_combat","specific_character","beast_lore","combat_set","combat","str_#_bl"]
},

"7_u_phys_staves": {
        "Desc": "7 Unique Physical Staves",
        "Diff": 21,
        "Types": ["item_set","weapon","phys_atk","items","#_u_phys_staves"]
},

"4_alluring": {
        "Desc": "4 Alluring Ribbons",
        "Diff": 21,
        "Types": ["item_set","accessory","side_stories","items","progression","#_alluring"]
},

"750_phys_atk": {
        "Desc": "750+ Physical Attack",
        "Diff": 21,
        "Types": ["phys_atk","stats","#_phys_atk"]
},

"730_evasion": {
        "Desc": "730+ Evasion",
        "Diff": 21,
        "Types": ["evasion","stats","#_evasion"]
},

"14_u_magic_bl": {
        "Desc": "Capture 14 Unique Elemental Themed Enemies",
        "Diff": 21,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_magic_bl"]
},

"ch_3_slow": {
        "Desc": "Chapter 3 Boss without Vets",
        "Diff": 21,
        "Types": ["combat_challenge","boss","progression","combat","ch_3"]
},

"4_u_rune": {
        "Desc": "4 Unique Rune Weapons",
        "Diff": 22,
        "Types": ["item_set","weapon","elem_atk","items","progression","#_u_rune"]
},

"900_elem_def": {
        "Desc": "900+ Elemental Defense",
        "Diff": 22,
        "Types": ["elem_def","stats","#_elem_def"]
},

"600_critical": {
        "Desc": "600+ Critical",
        "Diff": 22,
        "Types": ["crit","stats","#_critical"]
},

"15_u_lizards_bl": {
        "Desc": "Capture 15 Unique Lizardmen / Lizardking",
        "Diff": 22,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_lizards_bl"]
},

"15_u_frogs_bl": {
        "Desc": "Capture 15 Unique Froggen / Frogking",
        "Diff": 22,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_frogs_bl"]
},

"15_u_birds_bl": {
        "Desc": "Capture 15 Unique Birdian / Birdking",
        "Diff": 22,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_birds_bl"]
},

"15_u_rats_bl": {
        "Desc": "Capture 15 Unique Ratkin / Ratking",
        "Diff": 22,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_rats_bl"]
},

"ch_3_no_boost": {
        "Desc": "Chapter 3 Boss without Boosting",
        "Diff": 22,
        "Types": ["combat_challenge","boss","progression","combat","ch_3"]
},

"20_u_spears": {
        "Desc": "20 Unique Spears",
        "Diff": 22,
        "Types": ["broad_item_set","weapon","items","#_u_spears"]
},

"9_optional_bosses": {
        "Desc": "Defeat 9 Unique Optional Bosses",
        "Diff": 22,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"dreisang": {
        "Desc": "Defeat Dreisang",
        "Diff": 22,
        "Types": ["boss","subjob","advanced_boss","exploration"],
        "Excludes": ["1_advanced_bosses"]
},

"1_advanced_bosses": {
        "Desc": "Defeat 1 Advanced Job Boss",
        "Diff": 22,
        "Types": ["boss","subjob","advanced_boss","exploration","#_advanced_bosses"]
},

"8_ch_2": {
        "Desc": "Complete 8 Chapter 2's",
        "Diff": 22,
        "Types": ["chapter","progression","#_ch_2","ch_2"],
        "Excludes": ["5_ch_1","6_ch_1","7_ch_1","8_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","6_ch_2","7_ch_2"]
},

"20_t_elem_amulets": {
        "Desc": "20 Elemental Reduction Amulets/Charms",
        "Diff": 23,
        "Types": ["item_set","item_count","elem_reduce","accessory","items","progression","side_stories","#_t_elem_amulets"]
},

"850_elem_atk": {
        "Desc": "850+ Elemental Attack",
        "Diff": 23,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"4_ss_region_sets": {
        "Desc": "4 Side Stories in Each Region",
        "Diff": 23,
        "Types": ["broad_ss_set","side_stories","#_ss_region_sets"]
},

"7_ss_II_sets": {
        "Desc": "7 (II) Side Stories",
        "Diff": 23,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets","6_ss_II_sets"]
},

"9_ss_coastlands": {
        "Desc": "9 Side Stories in Coastlands (No Kit)",
        "Diff": 23,
        "Types": ["ss_set","ss_coastlands","side_stories","ss_boss","#_ss_coastlands"]
},

"10_ss_riverlands": {
        "Desc": "10 Side Stories in Riverlands (No Kit)",
        "Diff": 23,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"30_t_l_sstones": {
        "Desc": "30 Soulstone (L)'s",
        "Diff": 23,
        "Types": ["item_count","soulstone","item_set","items","#_t_l_sstones"]
},

"12_t_olives": {
        "Desc": "12 Olive (L)'s",
        "Diff": 23,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_olives"]
},

"20_t_stones": {
        "Desc": "20 Status Stones",
        "Diff": 23,
        "Types": ["item_set","item_count","status_stone","accessory","items","progression","#_t_stones"]
},

"20_u_swords": {
        "Desc": "20 Unique Swords",
        "Diff": 24,
        "Types": ["broad_item_set","weapon","items","#_u_swords"]
},

"20_u_axes": {
        "Desc": "20 Unique Axes",
        "Diff": 24,
        "Types": ["broad_item_set","weapon","items","#_u_axes"]
},

"10_ss_cliftlands": {
        "Desc": "10 Side Stories in Cliftlands (No Kit)",
        "Diff": 24,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"4_ch_3": {
        "Desc": "Complete 4 Chapter 3's",
        "Diff": 25,
        "Types": ["chapter","progression","#_ch_3","ch_3"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2","4_ch_2","1_ch_3","2_ch_3","3_ch_3"]
},

"450_accuracy": {
        "Desc": "450+ Accuracy",
        "Diff": 24,
        "Types": ["accuracy","stats","#_accuracy"]
},

"600_speed": {
        "Desc": "600+ Speed",
        "Diff": 24,
        "Types": ["speed","stats","#_speed"]
},

"25_u_accuracy": {
        "Desc": "25 Unique Accuracy Equipments",
        "Diff": 25,
        "Types": ["broad_item_set","armor","weapon","accuracy","items","#_u_accuracy"]
},

"6_u_boss_drop": {
        "Desc": "6 Unique Boss Equipment Drops",
        "Diff": 25,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"16_t_l_nuts": {
        "Desc": "16 Nut (L)'s",
        "Diff": 25,
        "Types": ["item_count","nut","item_set","items","progression","side_stories","#_t_l_nuts"]
},

"20_u_bows": {
        "Desc": "20 Unique Bows",
        "Diff": 25,
        "Types": ["broad_item_set","weapon","items","#_u_bows"]
},

"7_u_necklaces": {
        "Desc": "7 Unique Necklaces",
        "Diff": 25,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_necklaces"]
},

"5_ss_III_sets": {
        "Desc": "5 (III) Side Stories",
        "Diff": 25,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets","1_ss_III_sets","2_ss_III_sets","3_ss_III_sets","4_ss_III_sets"]
},

"9_ss_sunlands": {
        "Desc": "9 Side Stories in Sunlands (No Kit)",
        "Diff": 25,
        "Types": ["ss_set","ss_sunlands","side_stories","ss_boss","#_ss_sunlands"]
},

"825_phys_def": {
        "Desc": "825+ Physical Defense",
        "Diff": 25,
        "Types": ["phys_def","stats","#_phys_def"]
},

"40_side_stories": {
        "Desc": "40 Side Stories",
        "Diff": 25,
        "Types": ["broad_ss_set","side_stories","ss_II","#_side_stories"]
},

"8_ss_II_sets": {
        "Desc": "8 (II) Side Stories",
        "Diff": 25,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets","6_ss_II_sets","7_ss_II_sets"]
},

"3_ss_bosses": {
        "Desc": "Defeat 3 Side Story Bosses",
        "Diff": 25,
        "Types": ["ss_set","ss_boss","boss","side_stories","#_ss_bosses"]
},

"steorra": {
        "Desc": "Defeat Steorra",
        "Diff": 25,
        "Types": ["boss","subjob","advanced_boss","exploration"],
        "Excludes": ["1_advanced_bosses"]
},

"balogar": {
        "Desc": "Defeat Balogar",
        "Diff": 25,
        "Types": ["boss","subjob","advanced_boss","exploration"],
        "Excludes": ["1_advanced_bosses"]
},













"2_3_region_chapters": {
        "Desc": "Complete at least 2 chapters in each of 3 different regions",
        "Diff": 5,
        "Types": ["chapter","progression","#_ch_1","ch_1","#_ch_2","ch_2"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2"]
},

"2_4_region_chapters": {
        "Desc": "Complete at least 2 chapters in each of 4 different regions",
        "Diff": 10,
        "Types": ["chapter","progression","#_ch_1","ch_1","#_ch_2","ch_2"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2","4_ch_2"]
},

"2_5_region_chapters": {
        "Desc": "Complete at least 2 chapters in each of 5 different regions",
        "Diff": 15,
        "Types": ["chapter","progression","#_ch_1","ch_1","#_ch_2","ch_2"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2"]
},

"2_6_region_chapters": {
        "Desc": "Complete at least 2 chapters in each of 6 different regions",
        "Diff": 18,
        "Types": ["chapter","progression","#_ch_1","ch_1","#_ch_2","ch_2"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","6_ch_2"]
},

"2_7_region_chapters": {
        "Desc": "Complete at least 2 chapters in each of 7 different regions",
        "Diff": 20,
        "Types": ["chapter","progression","#_ch_1","ch_1","#_ch_2","ch_2"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","6_ch_2","7_ch_2"]
},

"3_2_region_chapters": {
        "Desc": "Complete at least 3 chapters in each of 2 different regions",
        "Diff": 11,
        "Types": ["chapter","progression","#_ch_1","ch_1","#_ch_2","ch_2","ch_3"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2","1_ch_3","2_ch_3"]
},

"3_3_region_chapters": {
        "Desc": "Complete at least 3 chapters in each of 3 different regions",
        "Diff": 22,
        "Types": ["chapter","progression","#_ch_1","ch_1","#_ch_2","ch_2","ch_3"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2","1_ch_3","2_ch_3","4_ch_3"]
},

"4_1_region_chapters": {
        "Desc": "Complete all chapters in a region",
        "Diff": 18,
        "Types": ["chapter","progression","#_ch_1","ch_1","#_ch_2","ch_2","ch_3","ch_4"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2","1_ch_3","2_ch_3","1_ch_4"]
},


/*
"7_rogues": {
        "Desc": "Complete 7 Rogue chapters",
        "Diff": 4,
        "Types": ["chapter","progression","#_ch_1","ch_1","#_ch_2","ch_2","half_game"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2","1_ch_3"]
},

"7_rogues": {
        "Desc": "Complete 8 Rogue chapters",
        "Diff": 8,
        "Types": ["chapter","progression","#_ch_1","ch_1","#_ch_2","ch_2","half_game"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2","1_ch_3"]
},
*/



"ophilia_ch_3": {
        "Desc": "Complete Ophilia Chapter 3",
        "Diff": 2,
        "Types": ["chapter","progression","ch_3","specific_chapter","specific_character"],
        "Excludes": ["1_ch_3","alfyn_ch_3"]
},

"cyrus_ch_3": {
        "Desc": "Complete Cyrus Chapter 3",
        "Diff": 3,
        "Types": ["chapter","progression","ch_3","specific_chapter","specific_character"],
        "Excludes": ["1_ch_3"]
},

"tressa_ch_3": {
        "Desc": "Complete Tressa Chapter 3",
        "Diff": 1,
        "Types": ["chapter","progression","ch_3","specific_chapter","specific_character"],
        "Excludes": ["1_ch_2"]
},

"olberic_ch_3": {
        "Desc": "Complete Olberic Chapter 3",
        "Diff": 6,
        "Types": ["chapter","progression","ch_3","specific_chapter","specific_character"],
        "Excludes": ["1_ch_3"]
},

"primrose_ch_3": {
        "Desc": "Complete Primrose Chapter 3",
        "Diff": 3,
        "Types": ["chapter","progression","ch_3","specific_chapter","specific_character"],
        "Excludes": ["1_ch_3"]
},

"alfyn_ch_3": {
        "Desc": "Complete Alfyn Chapter 3",
        "Diff": 3,
        "Types": ["chapter","progression","ch_3","specific_chapter","specific_character"],
        "Excludes": ["1_ch_3","ophilia_ch_3"]
},

"therion_ch_3": {
        "Desc": "Complete Therion Chapter 3",
        "Diff": 4,
        "Types": ["chapter","progression","ch_3","specific_chapter","specific_character"],
        "Excludes": ["1_ch_3"]
},

"haanit_ch_3": {
        "Desc": "Complete H'aanit Chapter 3",
        "Diff": 5,
        "Types": ["chapter","progression","ch_3","specific_chapter","specific_character"],
        "Excludes": ["1_ch_3"]
},



};
