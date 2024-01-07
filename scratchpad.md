portions of the page
  - game configuration
    - how many teams
    - how many levels of skill
  - Players (no players added; add player btn)use chip
    - add player makes modal that you can add name, skill level
    - Cannot have 2 same name && same level players
    - Hobbyist -> Bronze -> Silver -> Gold -> Diamond -> Platinum -> Final boss
  - Teams (No team created- create team btn &or add player btn)
    - form team btn
    - copy teams icon btn
    - team jersey colors based on the round android emoji 🔵🔴⚪⚫🟢🟡🟠🟣

validation for number of teams
- num of teams cant exceed num of players
- OPTIONAL- e.g. if there are supposed to be 5 teams of 2 but only 7 players then some kinda math that makes everyon into 2 teams with most/all being in more than 1 team. Perhaps by duplicating everyone so that they show up 2x in the array.


NB: if you have only 1 player for some skill leves, there is a high likelyhood that the randomness will not have any effect on them.


list with name and then skill level.
skill level will be shown under name in smaller text.
Text is based on some enum