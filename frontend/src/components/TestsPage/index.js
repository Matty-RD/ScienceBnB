import { getTestsThunk } from '../../store/tests'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function TestsPage() {
  const dispatch = useDispatch();

  const testsObject = useSelector(state => state.tests);
  const testsArray = Object.values(testsObject)

    useEffect(() => {
        dispatch(getTestsThunk())
      },[dispatch])

    return (
      <>
      {testsObject && testsArray.map(test => {
          return <ul key={test.id}>
            <li>{test.name}</li>
            <li>{test.details}</li>
          </ul>
        })}
      </>
    );
}
  export default TestsPage;
