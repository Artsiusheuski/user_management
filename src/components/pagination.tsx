function Pagination({
  totalUsers,
  usersForPage,
  paginate,
}: {
  totalUsers: number;
  usersForPage: number;
  paginate: (arg0: number) => void;
}) {
  let pageNumbers: any[] = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersForPage); i++) {
    pageNumbers.push(i);
  }
  // for example pagination
  // if (pageNumbers.length > 7) {
  //   pageNumbers = [1, 2, 3, '...', 8, 9, 10]
  // }

  return (
    <>
      <section className='wrapper_pagination'>
        <div className='wrapper_pagination_container'>
          <span className='pagination_arrow_left pagination_arrow'>{"<"}</span>
          <ul className='wrapper_pagination_block'>
            {pageNumbers.map((number: number) => (
              <li
                tabIndex={1}
                onClick={() => paginate(number)}
                style={
                  pageNumbers.length === 1
                    ? { borderRadius: "12px" }
                    : { borderRadius: "" }
                }
                className='users_pagination_list'
                key={number}
              >
                {number}
              </li>
            ))}
          </ul>
          <span className='pagination_arrow_rigth pagination_arrow'>{">"}</span>
        </div>
        <div>
          <select
            onClick={(e: any) => paginate(e.target.value)}
            className='users_pagination_select'
            name='page'
          >
            {pageNumbers.map((number: number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
        </div>
      </section>
    </>
  );
}

export default Pagination;
