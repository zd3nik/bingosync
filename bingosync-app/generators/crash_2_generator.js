bingoGenerator = require("./generators/generator_bases/simple_generator.js");
var bingoList = [{"name": "1 gem from 4 warp rooms"}, 
                 {"name": "3 coloured gems"}, 
                 {"name": "Cold Hard Crash box gem"}, 
                 {"name": "Hang Eight box gem"}, 
                 {"name": "Timed gems in Hang Eight & Plant Food"}, 
                 {"name": "Get the red gem legit & ELP Pack Attack"}, 
                 {"name": "Complete bonus rounds in Hang Eight, Air Crash & Plant Food"},
                 {"name": "ELP Snow Go, Snow Biz & Cold Hard Crash"}, 
                 {"name": "ELP Turtle Woods, The Pits, Night Fight, Totally Fly"}, 
                 {"name": "Defeat 3 bosses"}, {"name": "3 death route gems"}, 
                 {"name": "Green gem & 1 Ruination gem"},
                 {"name": "activate 3 WR6 portals"}, 
                 {"name": "Blue gem & ELP Cold Hard Crash"},
                 {"name": "ELP Piston it Away & Spaced Out"}, 
                 {"name": "Gem path route gem in Spaced Out"},
                 {"name": "ELP Crash Dash, Crash Crush & Un-bearable"},
                 {"name": "Snow Biz gem"}, 
                 {"name": "ELP Bear it, Bear Down & Totally Bear"}, 
                 {"name": "ELP The Eel Deal, Hangin' Out & Sewer Or Later"}, 
                 {"name": "Yellow gem & Hangin' Out gem"}, 
                 {"name": "Both gems from Sewer Or Later"}, 
                 {"name": "Both gems from Bee-Having & defeat 1 boss"},
                 {"name": "ELP Pack Attack & Rock It"},
                 {"name": "10 gems"}, 
                 {"name": "2 gems that require coloured gem paths"}, 
                 {"name": "Both gems in Diggin' It"}, 
                 {"name": "Both gems from Turtle Woods "}, 
                 {"name": "3 combined gems from Ruination & Night Fight"}, 
                 {"name": "Box gems from Snow Go & Bee-Having"}, 
                 {"name": "ELP Totally Bear & Totally Fly"},
                 {"name": "Both Air Crash gems"}, 
                 {"name": "2 gems from ‘bear’ levels"}, 
                 {"name": "Red gem & Plant Food box gem"}, 
                 {"name": "Complete bonus rounds in Sewer Or Later, Diggin’ It & Night Fight"}, 
                 {"name": "30 Lives"}, 
                 {"name": "Box gems from Crash Dash & Ruination"},
                 {"name": "Un-Bearable gem & Air Crash death route gem"},
                 {"name": "Purple gem & Crash Crush gem"}, 
                 {"name": "All 'snow' level gems"}, 
                 {"name": "4 gems from  'It' levels"}, 
                 {"name": "ELP Bear It, Diggin' It, Piston It Away & Rock It"}, 
                 {"name": "2 gems from ‘hang’ levels"},
                 {"name": "4 gems from 'crash' levels"}, 
                 {"name": "Complete bonus rounds in Crash Dash, Crash Crush, Air Crash & Cold Hard Crash"}, 
                 {"name": "All 'the' level gems"}, 
                 {"name": "1 'totally' level gem"},
                 {"name": "Gems from Totally Bear & Rock It"}, 
                 {"name": "Cold Hard Crash death route gem & defeat Tiny"}, 
                 {"name": "7 gems"},
                 {"name": "13 gems"},
                 {"name": "ELP one level from 5 WRs"}, 
                 {"name": "50 lives"}, 
                 {"name": "Rock It' gem & defeat N.Gin"}, 
                 {"name": "Air Crash box gem"}, 
                 {"name": "Defeat Komodo Bros & complete Snow Biz bonus round"},
                 {"name": "Complete Snow Go, The Eel Deal & Spaced Out bonus rounds"},
                 {"name": "Hit a grey ! box in 5 levels"}, 
                 {"name": "Hit a green ! box in 7 levels"}, 
                 {"name": "Both Piston It Away gems"}, 
                 {"name": "Box gems from The Eel Deal & Bear Down"},
                 {"name": "The Pits gem & Diggin’ It death route gem"},
                 {"name": "5 gems from single gem levels"}, 
                 {"name": "ELP with 0 boxes broken in 3 levels"},
                 {"name": "5 WR1 gems"}, 
                 {"name": "4 WR2 gems"}, 
                 {"name": "4 WR3 gems"},
                 {"name": "4 WR4 gems"},
                 {"name": "3 WR5 gems"},
                 {"name": "Box gems from Road to Ruin & Bear It"}, 
                 {"name": "Both gems from Road to Ruin"}, 
                 {"name": "3 Combined gems from Road to Ruin & Bee-Having"},
                 {"name": "ELP Road To Ruin & Ruination"},
                 {"name": "Stand on 4 different instances of coloured gem path platforms"}, 
                 {"name": "ELP all WR1 levels"},
                 {"name": "Complete bonus rounds in The Pits, Un-bearable & Piston It Away"},
                 {"name": "Complete 1 bonus round in 5 WRs"}, 
                 {"name": "Box gems from Pack Attack & Sewer Or Later"}, 
                 {"name": "Complete bonus rounds in Turtle Woods, Ruination & Hangin’ Out"},
                 {"name": "Box gems from Spaced Out & Turtle Woods"},
                 {"name": "Piston It Away death route gem & all ! grey boxes in Snow Go"}, 
                 {"name": "Night Fight box gem"}, 
                 {"name": "Crash Dash & Bear Down gems"},
                 {"name": "Un-Bearable gem & defeat Ripper Roo"},
                 {"name": "Totally Bear gem"}, 
                 {"name": "Totally Fly gem"},
                 {"name": "Pack Attack gem & activate 2 WR6 portals"}, 
                 {"name": "Get eaten, stung, frozen, burnt & shrunk"},
                 {"name": "Stand on 5 death route platforms"},
                 {"name": "3 Combined gems from Crash Crush, Spaced Out & Totally Fly"},
                 {"name": "ELP Crash Dash, Totally Bear & 1 Sewer Or Later gem"}, 
                 {"name": "16 gems"},
                 {"name": "2 gems from ‘out’ levels"},
                 {"name": "Box gems from Crash Crush & Plant Food"},
                 {"name": "Complete bonus rounds in Road to Ruin, Bee-Having & Totally Fly"},
                 {"name": "Get burnt in 5 different levels"}, 
                 {"name": "Night Fight death route gem & defeat Cortex"}, 
                 {"name": "Hit 10 grey ! boxes"},
                 {"name":"Use a speedy arrow in all levels which have them"}];
