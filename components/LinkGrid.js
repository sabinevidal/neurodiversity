import React, { useEffect } from "react";

import Typography from "components/Typography";
import Bounce from "components/Bounce";

function LinkGrid({ children }) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:-mx-4">
      {children}
    </ul>
  );
}

function Item({ href, title, description }) {

  useEffect(() => {
    const cards = document.querySelectorAll("div.card");
    cards.forEach(function (card) {
      const link = card.querySelector("a");
        if (link) {
          var url = link.getAttribute("href");
          card.addEventListener("click", function() {
            location.href = url;
            link.preventDefault;
          });
          card.classList.add("linkify");
        }
    });
  }, [])
  return (
    <Bounce amount="1.04">
      <li className="h-full">
        <div
          className={`
            card h-full flex flex-row items-start space-x-2 rounded-xl p-4 bg-white ring-primary transition 
            shadow
            hover:shadow-md 
            outline-none focus-visible:ring`}
        >
          <img src="/icons/arrow.svg" className="w-6 md:w-7" alt="" aria-hidden />
          <div>
            <Typography.CardHeading href={href} margin="1">{title}</Typography.CardHeading>
            <Typography.Body margin="0">{description}</Typography.Body>
          </div>
        </div>
      </li>
    </Bounce>
  );
}

LinkGrid.Item = Item;

export default LinkGrid;
