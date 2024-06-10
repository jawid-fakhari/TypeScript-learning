import React from 'react'

// per esempio abbiamo due tipi di data e nel secondo vogliamo aggiungere il primo tipo di data
type TData1= {
    nome: string;
    age: number;
}
// usando il segno & aggiungiamo al TData2 i TData1
type TData2 = TData1 &{
    children: [];
}

// lo stesso possiamo fare con interface usando extend method
interface IData3 {
    nome: string;
    age: number;
}
// usando il segno & aggiungiamo al TData2 i TData1
interface IData4 extends IData3 {
    children: [];
}

function ExtendAndIntegration() {
  return (
    <div>ExtendAndIntegration</div>
  )
}

export default ExtendAndIntegration