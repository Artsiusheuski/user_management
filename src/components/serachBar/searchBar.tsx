import search from "../../img/iconSearch.png";
import { useUsers } from "../../hooks/getUsers";
import { useAppDispatch } from "../../store/hooks";
import { searchUsers } from "../../store/usersSlice";
import iconSearchPlus from "../../img/iconSearchPlus.png";
import filter from "../../img/filter.png";
import clr from "../../img/clr.png";
import headerMenu from "../../img/headerMenu.png";
import MyCalendar from "./customCalendar";
import { useState } from "react";

function SearchBar() {
  const { users } = useUsers();
  const dispatch = useAppDispatch();
  const [calendarWrapper, setCalendarWrapper] = useState("none");

  function hundleSearchUsers(e: React.FormEvent<HTMLInputElement>) {
    const variaty = users.filter((item: any) =>
      item.name.includes(e.currentTarget.value)
    );
    dispatch(searchUsers(variaty));
  }

  function hundlerCalendar(event: React.MouseEvent<HTMLElement>): void {
    setCalendarWrapper("calendar_wrapper");
  }

  return (
    <section className='searchBar_wrapper'>
      <p className='searchBar_wrapper_p'></p>
      <div className='searchBar_search'>
        <span>
          <img src={search} alt='Search' />
        </span>
        <input
          className='koka'
          onBlur={() => dispatch(searchUsers(""))}
          onInput={(e: React.FormEvent<HTMLInputElement>) =>
            hundleSearchUsers(e)
          }
          type='search'
          placeholder='Search..'
        />
        <div className='searchBar_search_rigth'>
          <span>
            <img src={iconSearchPlus} alt='iconSearchPlus' />
          </span>
          <span>F</span>
        </div>
      </div>
      <div className='searchBar_filter'>
        <div className='searchBar_filter_div'>
          <button type='button'>
            <img src={filter} alt='filtter' />
            <span>Filters</span>
          </button>
        </div>
        <div
          onClick={(event: React.MouseEvent<HTMLElement>) =>
            hundlerCalendar(event)
          }
        >
          <button type='button'>
            <img src={clr} alt='calendario' />
          </button>
        </div>
        <div
          tabIndex={-1}
          id={calendarWrapper}
          onBlur={() => setCalendarWrapper("none")}
        >
          <MyCalendar />
        </div>
        <p className='searchBar_mobile_menu'>
          <img src={headerMenu} alt='headerMenu' />
        </p>
      </div>
    </section>
  );
}

export default SearchBar;
