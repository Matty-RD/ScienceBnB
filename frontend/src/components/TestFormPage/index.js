import { createTestThunk } from '../../store/tests'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './TestFormPage.css';

function TestFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user)

  let errorsObj = {url:'', address: '', city: '', state: '', country: '', name: '', details: ''};
  const [errors, setErrors] = useState(errorsObj);
  const[userId] = useState(user.id);
  const [url, setUrl] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [pay, setPay] = useState(0);

  const updateUrl = (e) => setUrl(e.target.value)
  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateCountry = (e) => setCountry(e.target.value);
  const updateName = (e) => setName(e.target.value);
  const updateDetails= (e) => setDetails(e.target.value);
  const updatePay = (e) => setPay(e.target.value);


  const handleSubmit = async (e) => {
    e.preventDefault();

    let error = false;
    errorsObj = {...errorsObj};
    if(url === '') {
      errorsObj.url= "Requires Image Url";
      error = true;
    }
    if (address === '') {
      errorsObj.address = "Please provide a valid address!";
      error = true;
    }
    if (city === '') {
      errorsObj.city = "Please provide a valid city";
      error = true;
    }
    if (state === '') {
      errorsObj.state = "Please provide a valid state";
      error = true;
    }
    if (country === '') {
      errorsObj.country = "Please provide a valid country";
      error = true;
    }
    if (name === '') {
      errorsObj.name = "Please provide a valid name";
      error = true;
    }
    if (details.length < 10) {
      errorsObj.details = "Please provide a valid description in the details.";
      error = true;
    }
    setErrors(errorsObj);

    if(!error) {
    const createdTest = {
      userId,
      url,
      address,
      city,
      state,
      country,
      name,
      details,
      pay
    };

    dispatch(createTestThunk(createdTest));
    history.push("/tests");
  }
};

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push("/tests");
  };


    return (
      <form className='test-form' onSubmit={handleSubmit}>
        <h1>Create a Test</h1>
        <ul>
        {Object.values(errors).map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <input type="text" placeholder="Image Url" value={url} onChange={updateUrl}/>
        <input type="text" placeholder="Address" value={address} onChange={updateAddress}/>
        <input type="text" placeholder="City" value={city} onChange={updateCity}/>
        <input type="text" placeholder="State" value={state} onChange={updateState}/>
        <input type="text" placeholder="Country"value={country} onChange={updateCountry}/>
        <input type="text" placeholder="Name" value={name} onChange={updateName} />
        <input type="text" placeholder="Detail Text" value={details} onChange={updateDetails} />
        <input type="number" placeholder="Pay" value={pay} onChange={updatePay}/>
        {errors.pay && <div>{errors.pay}</div>}
        <div>
        <button type="submit">Submit Test</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
        </div>
      </form>
  );
}
  export default TestFormPage;
