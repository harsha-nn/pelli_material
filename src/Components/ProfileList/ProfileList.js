import React from 'react';
import Profile from '../Profile/Profile';
// import { profiles } from './profiles';
// import { profiles  } from "../../Profiles";

const ProfileList = ({profiles}) => {
return (
    <div>
        {
            profiles.map((user, i ) => {
                return <Profile id={profiles[i].id} name={profiles[i].name} email={profiles[i].email} key={i} />
            })
        }
    </div>
);

}

export default ProfileList;