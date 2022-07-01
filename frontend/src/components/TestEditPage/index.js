import { useDispatch, useSelector } from 'react-redux';
import { useState} from 'react';
import { updateTestThunk, deleteTestId } from '../../store/tests';
import { useHistory, useParams } from 'react-router-dom';

function TestEditPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {id} = useParams();
  const user = useSelector(state => state.session.user)
  const test = useSelector(state => state.tests)
  const singleTest = test[id]

  let errorsObj = {url:'', address: '', city: '', state: '', country: '', name: '', details: ''};
  const [errors, setErrors] = useState(errorsObj);
  const[userId] = useState(user.id);
  const [url, setUrl] = useState(singleTest.url);
  const [address, setAddress] = useState(singleTest.address);
  const [city, setCity] = useState(singleTest.city);
  const [state, setState] = useState(singleTest.state);
  const [country, setCountry] = useState(singleTest.country);
  const [name, setName] = useState(singleTest.name);
  const [details, setDetails] = useState(singleTest.details);
  const [pay, setPay] = useState(singleTest.pay);

  const updateAddress = (e) => setAddress(e.target.value);
  const updateUrl = (e) => setUrl(e.target.value)
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
    const updatedTest = {
      id,
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
    e.preventDefault();
    dispatch(updateTestThunk(updatedTest, id));
    history.push("/tests");
  }
  };

  const handleClickCancel = (e) => {
    e.preventDefault();
    history.push("/tests");
  };

  const handleClickDelete = (e) => {
    e.preventDefault();
    dispatch(deleteTestId(test, id))
    history.push("/tests");
  };

  if(user.id !== singleTest.userId) {
    return (
      <div>
        <h1>Sorry you can't edit someone else's Test</h1>
      </div>
    )
  } else {

    return (
      <form className='test-form' onSubmit={handleSubmit}>
        <h1>Edit a Test</h1>
        <ul>
        {Object.values(errors).map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <input type="text" placeholder="Image Url" value={url} onChange={updateUrl} />
        <input type="text" placeholder="Address" value={address} onChange={updateAddress} />
        <input type="text" placeholder="City" value={city} onChange={updateCity} />
        <input type="text" placeholder="State" value={state} onChange={updateState} />
        <input type="text" placeholder="Country"value={country} onChange={updateCountry} />
        <input type="text" placeholder="Name" value={name} onChange={updateName}  />
        <input type="text" placeholder="Details" value={details} onChange={updateDetails}  />
        <input type="number" placeholder="Pay" value={pay} onChange={updatePay} />
        <div>
        <button type="submit">Submit Test</button>
        <button type="button" onClick={handleClickCancel}>Cancel</button>
        <button type="button" onClick={handleClickDelete}>Delete</button>
        </div>
      </form>
  );
  }
}
  export default TestEditPage;
