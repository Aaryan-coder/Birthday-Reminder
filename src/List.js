import React from 'react';

const List = (props) => {
  const {people} = props
  return (
    <>
      {people.map((person)=>{
        const {name,age,image} = person
        return(
          <div key = {person.id} className = "person">
            <img src = {image} alt = {name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              </div>
            </div>
        )
      })}
    </>
  );
};

export default List;
