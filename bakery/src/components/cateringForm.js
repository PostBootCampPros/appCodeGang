import React, {useState} from 'react';

//Bakery form component for users to submit their information for future contact.
const Form=(()=>{

    //Initiaize object with useState hook containing all info that will be returned from form submission.
    const [formData,setFormData]=useState({
        name: '',
        email: '',
        phoneNumber: '',
        date: '',
        time: '',
        guests: '',
        message: '',
        company: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        // delivery: '',
        website: ''
    });

    //Event handler to set the formData key to the target value entered in the form.
    const handleChange=(event)=>{
        setFormData({...formData,[event.target.name]: event.target.value})
    };

    //Eventually submit the form data to back end database.
    const handleClick=(event)=>{
        event.preventDefault()
        //Add post request to add user info to the bakery's potential customers.
    };

    console.log(formData);
    return(
        <div>
            <h1>HOW CAN WE SERVE YOU?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <form>
                <label for='name'>Name: </label>
                <input 
                    type='text'
                    id='name'
                    name='name'
                    placeholder='John Doe'
                    value={formData.name}
                    onChange={handleChange}
                    required/><br/>
                <label for='email'>Email: </label>
                <input 
                    type='email'
                    id='email'
                    name='email'
                    placeholder='abc123@gmail.com'
                    value={formData.email}
                    onChange={handleChange}
                    required/><br/>
                <label for='phoneNumber'>Phone Number: </label>
                <input 
                    type='tel'
                    id='phoneNumber'
                    name='phoneNumber'
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    placeholder='123-456-7890'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required/><br/>
                <label for='date'>Event Date: </label>
                <input 
                    type='date'
                    id='date'
                    name='date'
                    value={formData.date}
                    onChange={handleChange}
                    required/><br/>
                <label for='time'>Select a time: </label>
                <input 
                    type='time' 
                    id='time' 
                    name='time'
                    value={formData.time}
                    onChange={handleChange}
                    required/>
                    <br/>
                <label for='guestAmount'>Number of Guests: </label>
                <input 
                    type='number'
                    id='guestAmount'
                    name='guests'
                    min=''
                    max=''
                    value={formData.guests}
                    onChange={handleChange}
                    required/><br/>
                <label for='message'>Message: </label><br/>
                <textarea
                    rows='5'
                    id='message'
                    name='message'
                    placeholder='How may we assist you with your event?'
                    value={formData.message}
                    onChange={handleChange}
                    spellCheck='false'
                    required></textarea><br/>
                <label for='company'>Company Name: </label>
                <input 
                    type='text'
                    id='company'
                    name='company'
                    placeholder='If Applicable'
                    value={formData.company}
                    onChange={handleChange}/><br/>
                <label for='address'>Address: </label>
                <textarea
                    rows='1'
                    id='address'
                    name='address'
                    value={formData.address}
                    onChange={handleChange}
                    spellCheck='false'
                    required></textarea><br/>
                <label for='city'>City: </label>
                <input
                    type='text'
                    id='city'
                    name='city'
                    value={formData.city}
                    onChange={handleChange}/><br/>
                <label for='state'>State: </label>
                <select 
                    id='state'
                    name='state'
                    value={formData.state}
                    onChange={handleChange}>
                    <option value="">Select a state</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="District of Columbia">District of Columbia</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Kansas">Kansas</option>
                    <option value="Kentucky">Kentucky</option>
                    <option value="Louisiana">Louisiana</option>
                    <option value="Maine">Maine</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Michigan" selected="">Michigan</option>
                    <option value="Minnesota">Minnesota</option>
                    <option value="Mississippi">Mississippi</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Montana">Montana</option>
                    <option value="Nebraska">Nebraska</option>
                    <option value="Nevada">Nevada</option>
                    <option value="New Hampshire">New Hampshire</option>
                    <option value="New Jersey">New Jersey</option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="New York">New York</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="North Dakota">North Dakota</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Oklahoma">Oklahoma</option>
                    <option value="Oregon">Oregon</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Rhode Island">Rhode Island</option>
                    <option value="South Carolina">South Carolina</option>
                    <option value="South Dakota">South Dakota</option>
                    <option value="Tennessee">Tennessee</option>
                    <option value="Texas">Texas</option>
                    <option value="Utah">Utah</option>
                    <option value="Vermont">Vermont</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Washington">Washington</option>
                    <option value="West Virginia">West Virginia</option>
                    <option value="Wisconsin">Wisconsin</option>
                    <option value="Wyoming">Wyoming</option>
                </select><br/>
                <label for='zip'>Zip Code: </label>
                <input
                    type='text'
                    id='zip'
                    name='zip'
                    value={formData.zip}
                    onChange={handleChange}/><br/>
                {/*In case they want a delvery option in the form*/}
                {/* <label>Delivery </label>
                    <input
                        type='radio'
                        id='yes'
                        name='delivery'
                        value='Yes'
                        onChange={handleChange}/>
                    <label for="yes">Yes</label>
                    <input
                        type='radio'
                        id='no'
                        name='delivery'
                        value='No'
                        onChange={handleChange}/>
                    <label for="no">No</label><br/>  */}
                <label for='website'>Website: </label>
                <input
                    type='url'
                    id='website'
                    name='website'
                    value={formData.website}
                    onChange={handleChange}/><br/>
                <button onClick={handleClick}>Submit</button>
            </form>
        </div>
    );
});


export default Form;