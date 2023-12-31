import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { BiCategoryAlt, BiTime, BiBookAlt } from "react-icons/bi";
import { Link, Form } from "react-router-dom";
import { useHomeContext } from "../pages/Home";
import Wrapper from "../assets/wrappers/Book";
import BookInfo from "./BookInfo";

function Footer(_id) {
  const { user } = useHomeContext();
  const { role } = user;
  if (role === "user") {
    return (
      <footer className='actions'>
        <Link to={"/home/cart"} className='btn cart-btn'>
          Add to cart
        </Link>
      </footer>
    );
  } else {
    return (
      <footer className='actions'>
        <Link to={`/home/edit-book/${_id}`} className='btn edit-btn'>
          Edit
        </Link>
        <Form method='post' action={`./delete-book/${_id}`}>
          <button type='submit' className='btn delete-btn'>
            Delete
          </button>
        </Form>
      </footer>
    );
  }
}

const Book = ({
  _id,
  title,
  author,
  genre,
  publishingYear,
  bookType,
  description,
}) => {
  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{title.charAt(0)}</div>
        <div className='info'>
          <h5>{title}</h5>
          <p>{author}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <BookInfo icon={<BiCategoryAlt />} text={genre} />
          <BookInfo icon={<BiTime />} text={publishingYear} />
          <BookInfo icon={<BiBookAlt />} text={bookType} />
        </div>
        <div className='description'>
          <p>
            {description}
          </p>
        </div>
        <Footer />
      </div>
    </Wrapper>
  );
};
export default Book;
