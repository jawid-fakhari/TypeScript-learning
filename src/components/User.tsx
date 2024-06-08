import React from 'react'


// pulizia del codice
type USER={
    name: string,
    age: number, 
    hasChild: boolean, 
    minus: (a:number, b:number) => number // ricevere function come props da App.tsx
    //Come settare un Optional Type
    father?: string,
    //Come settare un Any Type
    mother: any,
}

//come settare il type dei props in react component, che è stato importato in App.tsx
export default function User({name, age, hasChild, minus, father, mother}: USER,) {
  return (
    <div>
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
        <h3>Has child: {`${hasChild}`}</h3>
        <h3>Minus: {minus(10, 3)}</h3>
        <h3>
            Father: {father ?? "-"}
        </h3>
        <h3>Mother: {mother}</h3>
    </div>
  )
}
