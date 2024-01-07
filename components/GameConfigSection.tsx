import React, { useState } from 'react';

interface GameConfigProps { 
  numOfTeams: number;
  numOfTiers: number;
  onChangeNumTeams: (e:any) => void;
  onChangeNumTiers: (e: any) => void;
 }

export default function GameConfigSection(props: GameConfigProps) {
  const { numOfTeams, numOfTiers, onChangeNumTeams, onChangeNumTiers } = props;

  return (
    <div>
      <h2>How is the session going to be like?</h2>
      <p> How many teams? how many different tiers of skill do you want to use to divide the teams by. </p>

      <form>
        <div className="sm:w-full md:w-2/3">
          <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
        Number of teams:
          </label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-32 py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name" type="text" value={numOfTeams} onChange={e => onChangeNumTeams(e.target.value)}/>
        </div>
        <div className="sm:w-full md:w-2/3">
          <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
        Number of tiers/ skill levels:
          </label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-32 py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name" type="text"value={numOfTiers} onChange={e => onChangeNumTiers(e.target.value)}/>
        </div>
      </form>
    </div>

  );
}

