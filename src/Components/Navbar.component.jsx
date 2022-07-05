import React, {Fragment} from 'react'
import { Outlet, Link } from 'react-router-dom';

function Navbar() {
  return (
    <Fragment>
        Navbar
      <Outlet/>
    </Fragment>
  )
}

export default Navbar
