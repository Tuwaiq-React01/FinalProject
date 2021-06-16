import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import Header from './partials/Header'
import Footer from './partials/Footer'
import Routes from './partials/Routes'


function App() {
  return (
    <>
    <Router>
        <Header />
        <div class="container">
            <main role="main" class="pb-3">
                <Routes />
            </main>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
