import React, { ComponentProps } from 'react'

// component props type

// possiamo creare manualmente i type di un component props cosi:
// type Button={
//     type?: string;
//     value?: string;
//     onClick?: () => void;
// }

// Oppure possiamo farlo fare da react perchè lui sa tutti type di props, basta solo dirlo quale tag vogliamo usare nel esempio sotto dicamo che il tag <> che vogliamo è button 
// type Button = ComponentProps<"button">;

// Possiamo anche in questo modo passare un props speciale oltre a quelli del react stesso
type Button = ComponentProps<"button"> & {
    buttonTitle?: string;
}

function Button({type , onChange, onClick, buttonTitle}: Button) { //qui {type, tutti type ci sono} puoi trovare tutti type dei props.
  return (
    <div>
        <button type={type}></button>
    </div>
  )
}

export default Button