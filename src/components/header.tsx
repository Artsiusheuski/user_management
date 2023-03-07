import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { changeGlobslClass } from "../store/usersSlice";
import FormAddUser from "./form/addUsersForm";

function Header() {
  const dispatch = useAppDispatch();
  const [classDropdown, setDropdown] = useState("header_nav_list");
  const [nameDropdown, setNameDropdown] = useState("My details");
  const [spanDegry, setSpanDegry] = useState("dropdawn_list_top");
  const [openForm, setOpenForm] = useState("none");

  function hundlerUsers(e: any): void {
    e.target.tagName !== "UL" &&
      dispatch(changeGlobslClass(e.target.innerText));

    let ul: string = e.currentTarget;
    let childNodes: any[] = e.currentTarget.childNodes;

    childNodes.forEach((li: any) => {
      if (li === e.target) {
        li.className = "active";
        setNameDropdown(e.target.innerText);
      } else if (li !== e.target && e.target !== ul) li.className = "";
    });
    setDropdown("header_nav_list");
    setSpanDegry("dropdawn_list_top");
  }

  function openList() {
    classDropdown === "header_nav_list"
      ? setDropdown("header_nav_list visabilty")
      : setDropdown("header_nav_list");

    spanDegry === "dropdawn_list_top"
      ? setSpanDegry("dropdawn_list_down")
      : setSpanDegry("dropdawn_list_top");
  }

  return (
    <header className='header_wrapper'>
      <div className={openForm}>
        <button onClick={() => setOpenForm("none")} type='button'>
          X
        </button>
        <FormAddUser />
      </div>
      <div className='header_add_new_block'>
        <h1 className='header_title'>Users</h1>
        <div>
          <button onClick={() => setOpenForm("users_form")} type='button'>
            + Add new
          </button>
          <p>
            <span>...</span>
          </p>
        </div>
      </div>
      <div onClick={() => openList()} className='dropdawn_list'>
        <button type='button'>{nameDropdown}</button>
        <p>
          <span className={spanDegry}>{">"}</span>
        </p>
      </div>
      <ul onClick={(event) => hundlerUsers(event)} className={classDropdown}>
        <li className='active'>All</li>
        <li>Active</li>
        <li>Offline</li>
        <li>Archived</li>
      </ul>
    </header>
  );
}

export default Header;
