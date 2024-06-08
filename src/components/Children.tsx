import React from 'react'

//come dichiarare il Type di un Children
type Children = {
    // se vuoi passare un children con il tag si usa JSX.Element
    // children: JSX.Element;
    // se vuoi passare qualsiasi data, tag / text / jsx si usa React.ReactNode
    children: React.ReactNode
}
export default function Children({children}: Children) {
  return (
    <div>
        Children
        {children}
    </div>
  )
}
