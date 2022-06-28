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

  const[userId] = useState(user.id);
  const [address, setAddress] = useState(singleTest.address);
  const [city, setCity] = useState(singleTest.city);
  const [state, setState] = useState(singleTest.state);
  const [country, setCountry] = useState(singleTest.country);
  const [name, setName] = useState(singleTest.name);
  const [details, setDetails] = useState(singleTest.details);
  const [pay, setPay] = useState(singleTest.pay);

  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateCountry = (e) => setCountry(e.target.value);
  const updateName = (e) => setName(e.target.value);
  const updateDetails= (e) => setDetails(e.target.value);
  const updatePay = (e) => setPay(e.target.value);

  // useEffect(() => {
  //   dispatch(getTest(id))
  // },[dispatch, id])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedTest = {
      id,
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
    dispatch(updateTestThunk(updatedTest, id));
    history.push("/tests");
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


    return (
      <form className='test-form' onSubmit={handleSubmit}>
        <h1>Edit a Test</h1>
        <input type="text" placeholder="Address" value={address} onChange={updateAddress}required/>
        <input type="text" placeholder="City" value={city} onChange={updateCity}required/>
        <input type="text" placeholder="State" value={state} onChange={updateState}required/>
        <input type="text" placeholder="Country"value={country} onChange={updateCountry}required/>
        <input type="text" placeholder="Name" value={name} onChange={updateName} required/>
        <input type="text" placeholder="Details" value={details} onChange={updateDetails} required/>
        <input type="number" placeholder="Pay" value={pay} onChange={updatePay}required/>
        <button type="submit">Submit Test</button>
        <button type="button" onClick={handleClickCancel}>Cancel</button>
        <button type="button" onClick={handleClickDelete}>Delete</button>
      </form>
  );
}
  export default TestEditPage;
