import React from 'react';
import NameListItem from './NameListItem';
function NameList() {

    const NameList =
       [{ id:1,
           gender: "male",
        name: {
        title: "mr",
        first: "brad",
        last: "gibson"
      },
        picture: {
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
        
      },
      phone: "011-962-7516",
    location: {
        street: "9278 new road",
        city: "kilcoole",
        state: "waterford",
    },},{ id:2,gender: "male",
    name: {
    title: "mr",
    first: "brad",
    last: "gibson"
  },
    picture: {
    medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
    
  },
  phone: "011-962-7516",
location: {
    street: "9278 new road",
    city: "kilcoole",
    state: "waterford",
},},
{ id:3,gender: "male",
    name: {
    title: "mr",
    first: "brad",
    last: "gibson"
  },
    picture: {
    medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
    
  },
  phone: "011-962-7516",
location: {
    street: "9278 new road",
    city: "kilcoole",
    state: "waterford",
},},
{ id:4,gender: "male",
    name: {
    title: "mr",
    first: "brad",
    last: "gibson"
  },
    picture: {
    medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
    
  },
  phone: "011-962-7516",
location: {
    street: "9278 new road",
    city: "kilcoole",
    state: "waterford",
},}
];

const nameListComponent =()=>{
    return NameList.map((aname)=>{
        return(
            <NameListItem 
            key={aname.id}
            gender={aname.gender}
            name={aname.name.first + ' ' + aname.name.last}
            avatar={aname.avatar}
            phoneno={aname.phone}
            location={aname.location.city}
            />
        );
    })
}


    return(
        <div>
        {nameListComponent()}
        </div>
    );
    
}

export default NameList;