import { getTestsThunk } from '../../store/tests'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

function TestsPage() {
  const dispatch = useDispatch();

  const testsObject = useSelector(state => state.tests);
  const testsArray = Object.values(testsObject);

    useEffect(() => {
        dispatch(getTestsThunk())
      },[dispatch])

    return (
      <>
      {testsObject && testsArray.map(test => {
        return <ul key={test.id}>
            <li>{test.name}</li>
            <li>{test.details}</li>
            <NavLink to={`/test/${test.id}`}>Edit</NavLink>
          </ul>
        })}
      </>
    );
}
  export default TestsPage;
