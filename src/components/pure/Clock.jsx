import { useEffect, useState } from "react";
import "../../styles/clock.scss";
const Clock = () => {
  const initialState = {
    date: new Date(),
    age: 0,
    name: "Martín",
    surname: "San José",
  };
  const [user, setUser] = useState(initialState);

  const setTime = () => {
    setUser((user) => {
      let age = user.age + 1;
      return {
        ...user,
        date: new Date(),
        age,
      };
    });
  };

  useEffect(() => {
    let timer = setInterval(() => {
      setTime();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="clock--container">
      <h2 className="clock--container__date">
        Hora Actual: {user.date.toLocaleTimeString()}{" "}
      </h2>
      <h3 className="clock--container__name">
        {user.name} {user.surname}
      </h3>
      <h3 className="clock--container__age">Age: {user.age}</h3>
    </div>
  );
};

export default Clock;
