import React from 'react';

const Step1 = () => {
    return (
        <div>
        <main className="pa4 black-80">
            <form className="measure left">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="first-name">First Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="first-name" id="first-name" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="middle-name">Middle Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="middle-name" id="middle-name" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="last-name">Last Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="last-name" id="last-name" />
                    </div>

                    <div>
                        <label className="db fw6 lh-copy f6" htmlFor="gender">Gender</label>
                        <input type="radio" name="gender" value="male" checked /> Male<br />
                        <input type="radio" name="gender" value="female" /> Female<br />
                    </div>
                    <div>
                        <label className="db fw6 lh-copy f6" htmlFor="DOB">DOB</label>
                        <input type="date" name="bday" max="2015-12-31" min="1940-01-02" /> <br />
                        <label className="db fw6 lh-copy f6" htmlFor="TOB">TOB</label>
                        <input type="time" name="usr_time" />
                    </div>
                    <div> 
                        <label className="db fw6 lh-copy f6" htmlFor="Height">Height</label>
                        <input type="number" id="myNumber"  max="8" /> feet
                        <input type="number" id="myNumber"  max="12" /> inches <br />
                    </div>
                    <div> 
                        <label className="db fw6 lh-copy f6" htmlFor="Weight">Weight</label>
                        <input type="number" id="myNumber"  max="200" /> kgs                        
                    </div>
                    <div> 
                        <label className="db fw6 lh-copy f6" htmlFor="Religion">Religion</label>
                        <input type="text" id="Religion" />         
                        <label className="db fw6 lh-copy f6" htmlFor="Caste">Caste</label>
                        <input type="text" id="Caste" />                       
                        <label className="db fw6 lh-copy f6" htmlFor="subCaste">Sub Caste</label>
                        <input type="text" id="subCaste" />        
                        <label className="db fw6 lh-copy f6" htmlFor="Gotra">Gotra</label>
                        <input type="text" id="Gotra" />        
                    </div>
                    <div>
                        <label className="db fw6 lh-copy f6" htmlFor="Location">Location</label>
                        <input type="text" id="location" /> 
                        <label className="db fw6 lh-copy f6" htmlFor="homeTown">home town</label>
                        <input type="text" id="homeTown" /> 
                        <label className="db fw6 lh-copy f6" htmlFor="Education">Education</label>
                        <input type="text" id="Education" /> 
                        <label className="db fw6 lh-copy f6" htmlFor="Occupation">Occupation</label>
                        <input type="text" id="occupation" /> 
                    </div>
                </fieldset>
            </form>
        </main>
        </div>

    );

}

export default Step1;