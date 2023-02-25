import search from '../img/iconSearch.png'
import { useUsers } from '../hooks/getUsers';
// import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../store/hooks';
import { searchUsers } from '../store/usersSlice';
import iconSearchPlus from "../img/iconSearchPlus.png"
import filter from "../img/filter.png";
import clr from "../img/clr.png";
import headerMenu from "../img/headerMenu.png";


function SearchBar() {
  const { users } = useUsers();
  const dispatch = useAppDispatch();

  function hundleSearchUsers(e: React.FormEvent<HTMLInputElement>) {
    const variaty = users.filter((item: any) => item.name.toLocaleLowerCase().includes(e.currentTarget.value));
    dispatch(searchUsers(variaty))
  }

  return (
    <section className='searchBar_wrapper'>
      {/*<p> For logo */}
      <p className='searchBar_wrapper_p'></p>
      <div className='searchBar_search'>
        <span><img src={search} alt='Search' /></span>
        <input className='koka'
          onBlur={() => dispatch(searchUsers(""))}
          onInput={(e: React.FormEvent<HTMLInputElement>) => hundleSearchUsers(e)}
          type="search" placeholder='Search..' />
        <div className='searchBar_search_rigth'>
          <span><img src={iconSearchPlus} alt="iconSearchPlus" /></span>
          <span>F</span>
        </div>
      </div>
      <div className='searchBar_filter'>
        <div className='searchBar_filter_div' >
          <button>
            <img src={filter} alt='filtter' />
            <span>Filters</span>
          </button>
        </div>
        <div>
          <button>
            <img src={clr} alt='calendario' />
          </button>
        </div>
        <p className='searchBar_mobile_menu'><img src={headerMenu} alt="headerMenu" /></p>
      </div>
    </section>
  );
}

export default SearchBar;
