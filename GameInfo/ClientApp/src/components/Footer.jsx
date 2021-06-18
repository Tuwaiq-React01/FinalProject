import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="mt-5">
      <footer
        className="footer mt-auto py-3"
        style={{ backgroundColor: "#4b4455" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <span className="text-light">
                &copy; 2021 GameInfo | Follow us on our social Media!
              </span>
            </div>

            <div class="col-3">
              <a class="soc-med" href="#">
                <AiFillTwitterCircle size={30} className="mx-4" />
                <AiFillYoutube size={30} className="mx-4" />
                <AiFillInstagram size={30} className="mx-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
