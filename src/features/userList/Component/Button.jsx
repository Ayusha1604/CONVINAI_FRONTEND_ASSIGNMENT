import { useDispatch } from "react-redux";
import { changeInfo } from "../userCardSlice";

import "../../../App";

function Button(props) {
  const dispatch = useDispatch();

  const clickSet = (e) => {
    console.log(e.target);

    fetch(`https://reqres.in/api/users/${props.title + 1}`)
      .then((response) => response.json())
      .then((data) => {
        const userData = data.data;
        dispatch(
          changeInfo({
            name: `${userData.first_name} ${userData.last_name}`,
            img: userData.avatar,
            email: userData.email
          })
        );
      });
  };

  return (
    <>
      <button className="btn" onClick={clickSet}>
        User {props.title + 1}
      </button>
    </>
  );
}

export default Button;
