import { useEffect, useState } from "react";

function OnlineUsersScrollComponent({ scroll }: { scroll: any }) {
  const [clientScroll, setClientScroll] = useState(0);
  const [widthScroll, setWidthScroll] = useState(0);
  const [spanScroll, setSpanScroll] = useState(0);
  const [spanIndicator, setSpanIndicator] = useState(0);

  const resizeHandler = () => {
    setClientScroll(scroll.current.clientWidth);
    setWidthScroll(scroll.current.scrollWidth);
    const summRings = (widthScroll - clientScroll) / (clientScroll - 124);

    setSpanScroll(Math.ceil(summRings));
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  });

  function printSpan(): number[] {
    let arr = [];
    for (let i = 0; i <= spanScroll; i++) {
      arr.push(i);
    }
    return arr;
  }

  function scrollArrows(event: any): void {
    let ind: number = 0;
    if (event.target.innerText === "<") {
      scroll.current.scrollBy({ left: -(clientScroll - 124) });
      spanIndicator > 0 && (ind = spanIndicator - 1);
      setSpanIndicator(ind);
    }
    if (event.target.innerText === ">" && spanIndicator < spanScroll) {
      scroll.current.scrollBy({ left: clientScroll - 124 });
      ind = spanIndicator + 1;
      setSpanIndicator(ind);
    }
    if (
      event.target.className === "online_users_plus" &&
      spanIndicator < spanScroll
    ) {
      scroll.current.scrollBy({ left: clientScroll - 124 });
      ind = spanIndicator + 1;
      setSpanIndicator(ind);
    }
    console.log(ind, spanScroll, spanIndicator);
  }

  return (
    <div className='main_onlineusers_scroll_block'>
      <div className='main_onlineusers_rings'>
        {spanScroll > 0 &&
          printSpan().map((span) => (
            <span
              id={span === spanIndicator ? "rings_active" : ""}
              key={span}
            ></span>
          ))}
      </div>
      {spanScroll > 0 && (
        <div className='main_onlineUsers_arrows'>
          <span onClick={(event) => scrollArrows(event)}>{"<"}</span>
          <span onClick={(event) => scrollArrows(event)}>{">"}</span>
          <p
            onClick={(event) => scrollArrows(event)}
            className='online_users_plus'
          ></p>
        </div>
      )}
    </div>
  );
}

export default OnlineUsersScrollComponent;
