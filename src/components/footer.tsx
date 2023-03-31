import clr from "../img/clr.png";
import users from "../img/users.png";
import bar from "../img/bar.png";
import avatar from "../img/avatar.png";
import menu from "../img/menu.png";
import folder from "../img/folder.png";
import arrowdown from "../img/arrowdown.png";

function Footer() {
  const image: string[] = [menu, folder, clr, users, avatar];

  return (
    <footer className='wrapper_footer'>
      <div>
        <span>
          {" "}
          <img src={arrowdown} alt='arrow' />
        </span>
        <p>Lead more</p>
      </div>
      <ul>
        {image.map((img: string, ind: number) => (
          <li
            key={ind}
            onClick={(e) => (e.currentTarget.id = "active_btn")}
            onBlur={(e: any) => (e.currentTarget.id = "")}
            tabIndex={1}
          >
            <img
              className={img === avatar ? "wrapper_footer_avatar" : ""}
              src={img}
              alt='menu'
            />
            <span></span>
            <img src={bar} alt='bar' />
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
