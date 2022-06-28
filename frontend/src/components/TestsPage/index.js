import { getTestsThunk } from "../../store/tests";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function TestsPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);
  const testsObject = useSelector((state) => state.tests);
  const testsArray = Object.values(testsObject);

  useEffect(() => {
    dispatch(getTestsThunk());
  }, [dispatch]);

  if (sessionUser) {
    return (
      <>
        {testsObject &&
          testsArray.map((test) => {
            const handleClick = (e) => {
              e.preventDefault();
              history.push(`/test/${test.id}`);
            };

            return (
              <ul key={test.id}>
                <li>{test.name}</li>
                <li>{test.details}</li>
                <button type="button" onClick={handleClick}>
                  Edit
                </button>
              </ul>
            );
          })}
      </>
    );

  } else {

    return (
      <>
        {testsObject &&
          testsArray.map((test) => {
            const handleClick = (e) => {
              e.preventDefault();
              history.push(`/login`);
            };

            return (
              <ul key={test.id}>
                <li>{test.name}</li>
                <li>{test.details}</li>
                <button type="button" onClick={handleClick}>
                  Login to Edit.
                </button>
              </ul>
            );
          })}
      </>
    );
  }
}
export default TestsPage;
