import React, { useState } from "react";
import NameListItem from "./NameListItem";
function NameList() {
  const [NameList, setNameList] = useState([
    {
      id: 1,
      gender: "male",
      name: {
        title: "mr",
        first: "brad",
        last: "gibson",
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
      },
      phone: "011-962-7516",
      location: {
        street: "9278 new road",
        city: "kilcoole",
        state: "waterford",
      },
    },
    {
      id: 2,
      gender: "female",
      name: {
        title: "mr",
        first: "brad change",
        last: "gibson",
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
      },
      phone: "011-962-7516",
      location: {
        street: "9278 new road",
        city: "kilcoole",
        state: "waterford",
      },
    },
  ]);

  const nameListComponent = () => {
    return NameList.map((aname) => {
      return (
        <NameListItem
          key={aname.id}
          gender={aname.gender}
          name={aname.name.first + " " + aname.name.last}
          avatar={aname.avatar}
          phoneno={aname.phone}
          location={aname.location.city}
        />
      );
    });
  };

  const addNewUser = () => {
    const newUser = {
        id: 5,
      gender: "male",
      name: {
        title: "mr",
        first: "brad",
        last: "gibson",
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
      },
      phone: "011-962-7516",
      location: {
        street: "9278 new road",
        city: "kilcoole",
        state: "waterford",
      }
    };

    // setNameList ((NameList)=>NameList.concat(newUser));
    setNameList ([...NameList,newUser]);
  };

  const [num, setNum] = useState(0);
  const clickButton = () => {
    console.log("clicked");
    setNum((num1) => num1 + 2);
  };

  return (
    <div>
        
      {nameListComponent()}
      <button onClick={clickButton}>Click me</button>
      <button onClick={addNewUser}>Add new user</button>
      {num}
    </div>
  );
}

export default NameList;
