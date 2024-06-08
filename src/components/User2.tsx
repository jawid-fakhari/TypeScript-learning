import React from 'react'


// pulizia del codice
type USER={
    name: string,
    age: number, 
    hasChild: boolean, 
    minus: (a:number, b:number) => number // ricevere function come props da App.tsx
}

//un altro modo per esportare un componente con React.FC
export const User:React.FC<USER> = ({name, age, hasChild, minus}) => {
  return (
    <div>
        <h3>Nome: {name}</h3>
        <h3>Age: {age}</h3>
        <h3>Has child: {`${hasChild}`}</h3>
        <h3>Minus: {minus(10, 3)}</h3>
    </div>
  )
}
