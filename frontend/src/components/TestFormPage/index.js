import { createTestThunk } from '../../store/tests'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './TestFormPage.css';

function TestFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user)

  const[userId] = useState(user.id);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [pay, setPay] = useState(0);

  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateCountry = (e) => setCountry(e.target.value);
  const updateName = (e) => setName(e.target.value);
  const updateDetails= (e) => setDetails(e.target.value);
  const updatePay = (e) => setPay(e.target.value);


  const handleSubmit = async (e) => {
    const createdTest = {
      userId,
      address,
      city,
      state,
      country,
      name,
      details,
      pay
    };
    e.preventDefault();
    dispatch(createTestThunk(createdTest));
    history.push("/tests");
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push("/tests");
  };


    return (
      <form className='test-form' onSubmit={handleSubmit}>
        <h1>Create a Test</h1>
        <input type="text" placeholder="Address" value={address} onChange={updateAddress}required/>
        <input type="text" placeholder="City" value={city} onChange={updateCity}required/>
        <input type="text" placeholder="State" value={state} onChange={updateState}required/>
        <input type="text" placeholder="Country"value={country} onChange={updateCountry}required/>
        <input type="text" placeholder="Name" value={name} onChange={updateName} required/>
        <input type="text" placeholder="Details" value={details} onChange={updateDetails} required/>
        <input type="number" placeholder="Pay" value={pay} onChange={updatePay}required/>
        <button type="submit">Submit Test</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
  );
}
  export default TestFormPage;
