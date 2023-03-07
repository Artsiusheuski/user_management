import { useEffect, useRef, useState } from "react";
import avatar from "../../img/avatar.png";

function OnlineUsers({ onlineUsers }: { onlineUsers: object[] }) {
  const scroll: any = useRef<HTMLUListElement>(null);
  const [clientScroll, setClientScroll] = useState(0);
  const [widthScroll, setWidthScroll] = useState(0);
  const [spanScroll, setSpanScroll] = useState(0);

  const resizeHandler = () => {
    setClientScroll(scroll.current.clientWidth);
    setWidthScroll(scroll.current.scrollWidth);
    const h = (widthScroll - clientScroll) / 150;

    setSpanScroll(Math.ceil(h));
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
    for (let i = 0; i < spanScroll; i++) {
      arr.push(i);
    }
    return arr;
  }

  return (
    <>
      <div className='main_onlineUsers_title'>
        <h4 className='main_general_title'>Online Users</h4>
        <div className='main_onlineusers_scroll_block'>
          <div className='main_onlineusers_rings'>
            {spanScroll > 1 &&
              printSpan().map((span) => <span key={span}></span>)}
          </div>
          <div className='main_onlineUsers_arrows'>
            <span onClick={() => scroll.current.scrollBy({ left: -150 })}>
              {"<"}
            </span>
            <span onClick={() => scroll.current.scrollBy({ left: 150 })}>
              {">"}
            </span>
            <p className='online_users_plus'></p>
          </div>
        </div>
      </div>
      <div ref={scroll} className='onlineUsers_wrapper'>
        <div className='cart_add_newchat'>
          <div>
            <span>+</span>
            <p>New chat</p>
          </div>
        </div>
        {onlineUsers.map((item: any) => (
          <div
            className='cart_users_wrapper cart_users_wrapper_online'
            key={item.id}
          >
            <span>
              <img src={avatar} alt='' />
            </span>
            <h5 className='cart_users_wrapper_h5'>{item.name}</h5>
            <p className='cart_users_wrapper_p'>{item.gender}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default OnlineUsers;
