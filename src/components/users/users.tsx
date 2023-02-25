import avatar from "../../img/avatar.png"
import message from "../../img/message.png"
import dots from "../../img/dots.png"

function Users(
  { filterUsers, users, currentUsers }:
    { filterUsers: string, users: object[], currentUsers: object[] }) {

  function filterUsersFun(value: string, users: object[]) {
    if (value === "All") return users;
    if (value === 'Active') return users.filter((item: any) => item.status === 'active')
    if (value === 'Offline') return users.filter((item: any) => item.status === 'inactive')
    if (value === 'Archived') return [];
    else return users;
  }

  return (
    <>
      <div className='main_users_headers'>
        <div className='main_users_title'>
          <h4 className='main_general_title'>Users</h4>

          <span className='main_users_count'>{filterUsersFun(filterUsers, users).length}</span>
        </div>
        <div className='main_users_btn'>
          <div tabIndex={1} >
            <p className='main_users_btn_list'>
              <span className='main_users_btn_list_span'></span>
            </p>
          </div>
          <div className='main_users_btn_active' tabIndex={1}>
            <p className='main_users_btn_colaps border_color_active_col'>
              <span className='main_users_btn_colaps_vertical '></span>
              <span className='main_users_btn_colaps_gorizont'></span>
            </p>
          </div>
        </div>
      </div>
      <div className='users_wrapper'>
        {filterUsersFun(filterUsers, users).map((item: any, ind: number) =>
          <div
            className={ind < 3 ? 'cart_users_wrapper cart_users_width' : 'cart_users_wrapper'}
            key={item.id}>
            <div className='cart_users_wrapper_top'>
              {item.status === 'active' && <span> <img src={avatar} alt="img" /></span>}
              {item.status !== 'active' && <img src={avatar} alt="img" />}
              <div>
                <button><img src={message} alt="message" /></button>
                <button
                  onClick={(e) => e.currentTarget.id = 'users_btn_email'}
                  onBlur={(e) => e.currentTarget.id = ''}
                  title="for open E-MAIL one click" >
                  <img src={dots} alt="dots" />
                </button>
                <p style={item.email.length > 35 ? { fontSize: '10px' } : {}}>{item.email}</p>
              </div>
            </div>
            <h5 className='cart_users_wrapper_h5'>{item.name}</h5>
            <p className='cart_users_wrapper_p'>{item.gender}</p>
          </div>)}
      </div>
    </>
  );
}

export default Users;