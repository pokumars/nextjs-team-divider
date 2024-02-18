import { Player, Team, Teams } from '@/types/Player';
import { teamNames } from './constants';

type TieredPlayersObj = {
  [key: string]: Array<Player>;
}

export const formulateTeams = (players: Player[], numberOfTeams: number, numOfTiers: number): Teams => {
  // sort skill level - highest -> lowest
  const highToLowSortedPlayers = sortHighToLow(players);

  // group into tiers
  const tieredPlayerList = groupIntoTiers(highToLowSortedPlayers);

  // shuffle each tier
  for (let key in tieredPlayerList) {
    // console.log('BEFORE -> ', key, tieredPlayerList[key].map(p => p.name+ p.skillTier));
    const shuffledTieredPlayerList = shuffle(tieredPlayerList[key]); // tieredPlayerList[key]; //for debugging

    tieredPlayerList[key] = shuffledTieredPlayerList;
    // console.log('AFTER -> ', key, shuffledTieredPlayerList.map(p => p.name+ p.skillTier));
  }

  //so that each time you run the function, the generated team is different
  const playersSortedBySKillLevelAndShuffled = tieredPlayerObjectToPlayerArr(tieredPlayerList, numOfTiers); 

  // group players for the teams (i.e populate team with players)
  const playerGroups= placePlayersInNGroupings(numberOfTeams, playersSortedBySKillLevelAndShuffled);

  const teamObjs: Teams = playerGroups.map((pg, index) => {
    const teamStrength = pg.reduce((acc, cur) => acc + cur.skillTier, 0); 
    const t: Team = { teamName: teamNames[index], teamPlayers: pg, teamStrength };
    return t;
  });

  // return playerGroups.map((arr) => arr.map(p => p.name + p.skillTier));
  return teamObjs;
};


const placePlayersInNGroupings = (numberOfTeams: number, players: Array<Player>) : Player[][] => {
  // this is what will become the team
  const playerGroupings: Player[][] = [];
  let forward: boolean = true; // 0 1 2 or 2 1 0
  for (let index = 0; index < players.length; index++) {
    const currentModuloValue=index % numberOfTeams;
    const zigZagIndex = forward? currentModuloValue : Math.abs(currentModuloValue - (numberOfTeams - 1));
    // console.log(`${currentModuloValue} ${zigZagIndex}`);

    const curPlayer = players[index];
    /* e.g. if we have 10 players for 3 teams, 
    at index 0, place player in teams[0]
    at index 1, place player in teams[1]
    at index 2, place player in teams[2]
    at index 3, place player in teams[2]
    at index 3, place player in teams[1]
    at index 0, place player in teams[0]
    repeat 0 1 2 2 1 0 till players are finished.
    we reset the teams[index] using modulo 
     */
   
    if (!playerGroupings[currentModuloValue]) {
      playerGroupings.push([curPlayer]);
    } else{
      playerGroupings[currentModuloValue].push(curPlayer);
    }

    if(currentModuloValue === (numberOfTeams - 1)) {
      // switch the forward - backward thing after each cyle
      forward= !forward;
    }
  }
  
  console.log(playerGroupings.map(px => px.map(p => p.name+p.skillTier)));
  return playerGroupings;
};

// const giveTheTeamsNames = (): Teams => {

// };

const tieredPlayerObjectToPlayerArr = (p: TieredPlayersObj, numOfTiers: number): Player[] => {
  // we need num of tiers so we can iterate from 1 to numOftiers so that the
  // players remain in order of highest to lowest tier
  let playerList: Player[]= [];
  for (let index = 1; index < numOfTiers; index++) {
    const objectKey=`tier${index}`;
    const arrAtObjectKey= p[objectKey] === undefined? []: p[objectKey];

    playerList = playerList.concat(arrAtObjectKey);
  }
  return playerList;
};

const sortHighToLow = (players: Player[]): Player[] => {
  return players.sort((a,b) => {
    if (a.skillTier > b.skillTier) {
      return -1;
    } else if (a.skillTier < b.skillTier) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
};

const groupIntoTiers= (players: Player[]): TieredPlayersObj => {
  const tieredPlayerList: TieredPlayersObj = players.reduce((acc: TieredPlayersObj, curPlayer) => {
    // if that tier exists in the accumulator, add the current player else create that tier and add current player
    const objectKey=`tier${curPlayer.skillTier}`;
    if (!acc[objectKey]) {
      acc[objectKey] = [curPlayer];
    } else {
      acc[objectKey].push(curPlayer);
    }

    return acc;

  }, {});

  return tieredPlayerList;
};

const shuffle = (arr: any[]): any[] => {
  // Fisher-Yates shuffle algorithm
  var i = arr.length, rand, temp;
  while (--i > 0) {
    // put current aside in temp var
    temp = arr[i];
    // Do the swap
    // replace current index's element with the randomly selected one
    rand = Math.floor(Math.random() * (i+1));
    arr[i] = arr[rand];
    // put the temp into the position of the
    arr[rand] = temp;
  }
  return arr;
};

//formulateTeams(testPlayers, 2, 5);

// lets go with a method where you choose n number of captains and then they all select 1 player until there are no more players.
// It should also be that if we have the same 12 players ata a session, each time you ask it to make teams, the teams are slightly different

// split into pools of skill levels


// 	[["Artem", 1], ["Mohamed", 1]]
// 	[["Sadiq", 2], ["Kofi", 2], ["Kwame", 2]]
// 	[["Patrick", 3], ["Thiago", 3], ["Pasi", 3], ["Juha", 3], ["Henk", 3]]
// 	[["Oheneba", 4], ["William", 4]]

// take each array shuffle and put it back into an array.

// take that array 1 by one and split them 1 by 1 into the team arrays until you are done

