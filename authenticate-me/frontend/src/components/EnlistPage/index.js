import { getAllEnlists, createEnlistThunk, deleteEnlistThunk } from "../../store/enlist";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function EnlistPage() {
const dispatch = useDispatch();
const history = useHistory();

const user = useSelector(state => state.session.user)
const userId = user.id
const enlistObject = useSelector((state) => state.enlists);
const enlistArray = Object.values(enlistObject);
const {id} = useParams();
const [startDate, setStartDate] = useState(null);
const updateStartDate = (e) => setStartDate(e.target.value)
const urlArray = window.location.href.split('/');
const num = Number(urlArray[urlArray.length - 1]);
const today = new Date().toLocaleDateString('sv').replaceAll('-', '');
let errorsObj = {};
const [errors, setErrors] = useState(errorsObj);

    useEffect(() => {
        dispatch(getAllEnlists(num))
      }, [dispatch]);


    const addEnlistment = (e) => {
      e.preventDefault();

      let error = false;
    errorsObj = {...errorsObj};
    if (startDate === null) {
      errorsObj.startDate = "Must enter a start date."
      error = true
    }
    if (startDate.replaceAll('-', '') < today) {
      errorsObj.startDate = "Can not start in the past."
      error = true
    }
    setErrors(errorsObj);

    if(!error) {
      const createdEnlist = {
        userId,
        testId: id,
        startDate
      }
      dispatch(createEnlistThunk(createdEnlist))
    }
  }

    const deleteEnlist = (e) => {
      e.preventDefault();
      const buttonData = Number(e.target.id);
      for (const list of enlistArray) {
        if(list.id === buttonData) {
          dispatch(deleteEnlistThunk(buttonData))
          history.push(`/enlist/${id}`);
        }
      }
    };

    return (
        <>
        <h1>Enlists</h1>
        {enlistArray.map((list) => {
          if(user.id === list.userId) {
            return (
              <>
              <p>User Number: {list.userId}</p>
              <p>Starting Date: {list.startDate}</p>
              <button type="button" id={list.id} onClick={deleteEnlist}>Dropout</button>
              </>
            )
          } else {
            return (
              <>
              <p>User Number: {list.userId}</p>
              <p>Starting Date: {list.startDate}</p>
              </>
            )
          }
          })}

        <input type="date" onChange={updateStartDate}></input>
        <ul>
        {Object.values(errors).map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <button type="submit" onClick={addEnlistment}>Enlist</button>
        </>
      );
    }

export default EnlistPage;
