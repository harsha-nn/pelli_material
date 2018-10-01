import React from 'react';

const Profile=({name, email, id}) =>{

    return (
        <section class="dib pa3 ma3 mw5 bw1 grow bg-white br3 ba b--black-10" >
        <div class="tc">
          <img src={`https://robohash.org/${id}?size=100x100`}
           class="br-100 h4 w4 dib ba b--black-05 pa2" 
           title="Photo of a kitty staring at you" alt="profile" />
          <h1 class="f3 mb2">{name}</h1>
          <h2 class="f5 fw4 gray mt0">{email}</h2>
        </div>
      </section>
    );
}

export default Profile;



 {/* <div className=' dib br3 ma1 pa3 grow b--light-green bw1 shadow-5'> 
           <img src={`https://robohash.org/${id}?size=100x100`} alt='robo' />
           <p>{name} </p>
           <p>{email} </p>
        </div> */}