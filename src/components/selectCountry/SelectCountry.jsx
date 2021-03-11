import React from "react";
import {useParams} from 'react-router-dom'

function SelectCountry() {
  const pr = useParams()
  return (
    <div>
      Hello from {pr.name}
    </div>
  )
}

export default SelectCountry;