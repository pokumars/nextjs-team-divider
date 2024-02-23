
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
    "black ⚫", "white ⚪", "blue 🔵", "red 🔴", "green 🟢", "yellow 🟡", "orange 🟠", "purple 🟣", "pink", "brown"
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
- DONE I want to shuffle the players for todays session into random teams
- DONE I want to copy paste the teams with their shirt colors so i can paste them into our whatsapp chat
- DONE I want to be able to modify a player's name and skill level
- When you change the tiers, make all the session players with skill level higher than the max skill tier to be equal to that max skill tier
- I dont want to have 2 players with the exact same name -for differentiation purpose

Nice to have
- I want to have the player pool saved for next time so i dont always have to add it
- I want to view what the relative strength of each team is (the sum of their skill levels)
- I want to be able to search from the big pool players to add to today's session instead of manually/by eye ball finding them to add to those who are coming to today's session
- I want to be able to manually modify the teams even after it has been auto-generated
- i want to select a bunch of players and bulk-modify their skill level + or -
- I want to decide what are the elements that get copied when I click the copy button - team name, shirt color, relative team strength


## Edge-case handling
Handle for scenarios when
- DONE user has players registered up to skill level 5 but then changes the app's max skill level to e.g. 3.
**SOLUTION**: put warning in player pool of this but also at the same time, for the session players dynamically cap their max skill leve to what the user's new limit
- user wants to add a player with the same name as another.
**SOLUTION**: disable the save/modify button
- DONE user wants to make n teams but there is n players or less meaning each player is their "own team".
 **SOLUTION**: disable generate teams button


Sorting players by skill level is crucial for creating balanced teams. Here are a few approaches you can consider:

1. **Heuristic-Based Approach**:
   - Assign point values to each player based on their skill level, gender, and age.
   - Sort players by their calculated point value.
   - Assign players to teams in order (e.g., team A gets the highest-ranked player, team B gets the second-highest, and so on).
   - You can also evaluate possible corrections (e.g., swapping players between teams) to fine-tune the balance¹.

2. **Bin Packing or Multi-Dimensional Knapsack Problem**:
   - Represent each player with attributes like skill, gender, and age.
   - Decide on the number of teams.
   - Calculate the desired total skill per team and the ideal gender ratio.
   - Use age variance (you can use statistical packages) to ensure age distribution.
   - Assign weights to these constraints and score each team.
   - Minimize the difference in scores between teams to create evenly matched teams¹.

3. **Quicksort or Merge Insertion Sort with Matches**:
   - Run a sorting algorithm (e.g., quicksort or mergesort) on the players.
   - Whenever the algorithm compares two elements, have the corresponding players play a match to decide the outcome.
   - This approach ensures that the sorting process aligns with actual match outcomes².

4. **Simulated Annealing (Approximate Solution)**:
   - Randomly pick teams.
   - Score the configuration based on skill, gender, and age.
   - Randomly swap players between teams and evaluate the new configuration.
   - Keep the better configuration and repeat the process.
   - Simulated annealing allows continual improvement by random permutation¹.

Remember that the best approach depends on factors like the number of teams, the size of the player pool, and whether you need an exact solution or an approximate one. Choose the method that suits your specific requirements and constraints! 🏀⚽

Source: Conversation with Bing, 20/02/2024
(1) Algorithm to create fair / evenly matched teams based on player rankings. https://stackoverflow.com/questions/1363341/algorithm-to-create-fair-evenly-matched-teams-based-on-player-rankings.
(2) Algorithm for least required matches to rank players in tournament. https://math.stackexchange.com/questions/3133155/algorithm-for-least-required-matches-to-rank-players-in-tournament.
(3) How to Organize an Open Play Pickleball Session | Pickleheads. https://www.pickleheads.com/guides/organize-pickleball-open-play.
(4) Player Skill, Character Skill, and Skill Progression Systems. https://www.gamedeveloper.com/design/player-skill-character-skill-and-skill-progression-systems.
(5) Keamk - Create random and balanced teams. https://www.keamk.com/.


What was I working on PlayersSection. delete -> modify dialog 
remake dialog
later (-> add dialog)

then when you find the commonality between the 2 you make them share that common component

why the team formulation doesnt get all the players








