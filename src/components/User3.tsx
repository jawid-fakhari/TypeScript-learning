import React from 'react'

// esempio in interface IUser, interfaces in typescript, qunado vogliamo usare on object possiamo usare interface
interface IUser {
    //qui possiamo dichiarare il type come string o any perché nello state abbiamo gia dichiarato string
    value: string;
    //il type di setState è diverso, dobbiamo prenderlo direttamente dall'react facendo hover sul setState e cosi react ci da il type che possiamo copiare e incollare
    onChange: React.Dispatch<React.SetStateAction<string>>;
}

// esempio in type TUser

type TUser = {
    //qui possiamo dichiarare il type come string o any perché nello state abbiamo gia dichiarato string
    value: string;
    //il type di setState è diverso, dobbiamo prenderlo direttamente dall'react facendo hover sul setState e cosi react ci da il type che possiamo copiare e incollare
    onChange: React.Dispatch<React.SetStateAction<string>>;
}
function User3({value, onChange}: TUser) {
  return (
    <div>
        <h1>{value}</h1>
    </div>
  )
}

export default User3
