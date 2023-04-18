import React, {useEffect, useState} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import AdminMetrics from './components/admin_metrics';
import Recenthist from './components/recenthistory';
import TopContainer from './components/topcontainer';

function dashbrd_mobile() {
  return (
    <div className="container">
        <TopContainer />
        <center>
          <AdminMetrics />
          <Recenthist />
        </center>
    </div>
  )
}

export default dashbrd_mobile