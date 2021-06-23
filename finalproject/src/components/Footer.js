import React from 'react';


const Nav = () => {
    return (
        <footer class="page-footer" style={{bottom:"0",left:"0",width:"100%",backgroundColor:"#151515", height:"300px"}}>
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                  <img src="https://i.imgur.com/ScsUpbz.png" style={{height:"100px"}}></img>
                <h3 class="white-text">Marvel Comics Companion</h3>
                <p class="grey-text text-lighten-4">A React application made by Reema Alyousef</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h3 class="white-text">Need Help?</h3>
                <ul>
                  <li><a href="https://www.marvel.com/corporate/about" class="grey-text text-lighten-3">About Marvel</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.marvelhq.com">Marvel HQ</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.marvel.com/help">Help/FAQs</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container" style={{fontFamily:"Marvel"}}>
                © 2021 Marvel Comics Browser
            <a class="grey-text text-lighten-4 right" href="https://privacy.thewaltdisneycompany.com/en">Privacy Policy</a>
            </div>
          </div>
        </footer>

    )
}
export default Nav;