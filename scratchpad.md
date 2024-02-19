


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
    "black ⚫"," white ⚪", "blue 🔵", "red 🔴", "green 🟢", "yellow 🟡", "orange 🟠", "purple 🟣", "pink", "brown"
    - remove from players coming this week ❌
  - Player pool - Optional
    -  a list of those that are part of our group. they are the ones who may or may not be joining for this session. They can be added to players from which teams can then be made.
    - search from pool a player that you can add to the the players list
    - validation such that there cant be 2 players with same name and level
    - delete player completely 🗑️

validation for number of teams
- num of teams cant exceed num of players
- OPTIONAL- e.g. if there are supposed to be 5 teams of 2 but only 7 players then some kinda math that makes everyone into 2 teams with most/all being in more than 1 team. Perhaps by duplicating everyone so that they show up 2x in the array.
- when the teams have been formed and the user changes the number of teams/ the value changes to becoming invalid, clear the formed teams (but leave the player pool). Move all the players that have been placed in teams back into the session's pool.


NB: if you have only 1 player for some skill level, there is a high likelyhood that the randomness will not have any effect on them.


list with name and then skill level.
skill level will be shown under name in smaller text.
Text is based on some enum

USER Stories
AS a user
MVP
- DONE - I want to know how many players have been added
- I want to add players
- DONE - I want to have a bigger pool of player out of which I can select who is coming to join today's session
- I want to shuffle the players for todays session into random teams
- I want to copy paste the teams with their shirt colors so i can paste them into our whatsapp chat
- I want to be able to modify a player's name and skill level

Nice to have
- I want to have the player pool saved for next time so i dont always have to add it
- I want to view what the relative strength of each team is (the sum of their skill levels)
- I want to be able to search from the big pool players to add to today's session instead of manually/by eye ball finding them to add to those who are coming to today's session
- I want to be able to manually modify the teams even after it has been auto-generated
- i want to select a bunch of players and bulk-modify their skill level + or -
- I want to decide what are the elements that get copied when I click the copy button - team name, shirt color, relative team strength



What was I working on PlayersSection. delete -> modify dialog 
remake dialog
later (-> add dialog)

then when you find the commonality between the 2 you make them share that common component

why the team formulation doesnt get all the players