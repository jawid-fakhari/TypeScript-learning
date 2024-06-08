import React from 'react'

//come settare il type dei props in react component, che è stato importato in App.tsx
export default function User(props:{
    name: string,
    age: number, 
    hasChild: boolean, 
    minus: (a:number, b:number) => number // ricevere function come props da App.tsx
}) {
  return (
    <div>
        <h3>Name: {props.name}</h3>
        <h3>Age: {props.age}</h3>
        <h3>Has child: {`${props.hasChild}`}</h3>
        <h3>Minus: {props.minus(10, 3)}</h3>
    </div>
  )
}
