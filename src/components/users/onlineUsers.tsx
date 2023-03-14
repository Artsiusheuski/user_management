import { useRef } from "react";
import OnlineUsersScrollComponent from "./onlineUsersScrollcomponent";
import avatar from "../../img/avatar.png";

function OnlineUsers({ onlineUsers }: { onlineUsers: object[] }) {
  const scroll: any = useRef<HTMLUListElement>(null);
  return (
    <>
      <div className='main_onlineUsers_title'>
        <h4 className='main_general_title'>Online Users</h4>
        <OnlineUsersScrollComponent scroll={scroll} />
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
