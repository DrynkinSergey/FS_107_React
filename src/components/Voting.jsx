import { useState } from 'react';

const Voting = () => {
  const [votingData, setVotingData] = useState({
    windows: 0,
    macos: 0,
    linux: 0,
  });

  const handleChangeVotingData = variant => {
    console.log(variant);
    // if (variant === 'windows') {
    //   setVotingData(prev => {
    //     return {
    //       ...prev,
    //       windows: prev.windows + 1,
    //     };
    //   });
    // }

    // if (variant === 'macos') {
    //   setVotingData(prev => {
    //     return {
    //       ...prev,
    //       macos: prev.macos + 1,
    //     };
    //   });
    // }

    // if (variant === 'linux') {
    //   setVotingData(prev => {
    //     return {
    //       ...prev,
    //       linux: prev.linux + 1,
    //     };
    //   });
    // }

    setVotingData(prev => ({ ...prev, [variant]: prev[variant] + 1 }));
  };
  return (
    <div>
      <ul>
        <li>windows: {votingData.windows}</li>
        <li>macos: {votingData.macos}</li>
        <li>linux: {votingData.linux}</li>
      </ul>
      <div>
        <button onClick={() => handleChangeVotingData('windows')}>windows</button>
        <button onClick={() => handleChangeVotingData('macos')}>macos</button>
        <button onClick={() => handleChangeVotingData('linux')}>linux</button>
      </div>
    </div>
  );
};
export default Voting;
