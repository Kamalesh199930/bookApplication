import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if (data) {
          const { description, title, covers, subject_places, subject_times, subjects } = data;
          const newBook = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(',') : "No subject places found",
            subject_times: subject_times ? subject_times.join(',') : "No subject times found",
            subjects: subjects ? subjects.join(',') : "No subjects found"
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  if (loading) return <Loading />;

  return (
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src={book?.cover_img} alt="cover img" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.title}</span>
            </div>
            <div className='book-details-item description'>
              <span>{book?.description}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Subject Places: </span>
              <span className='text-italic'>{book?.subject_places}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Subject Times: </span>
              <span className='text-italic'>{book?.subject_times}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Subjects: </span>
              <span>{book?.subjects}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Rating: </span>
              <RatingBox rating={rating} onChange={handleRatingChange} />
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Comments: </span>
              <CommentBox
                comment={comment}
                onChange={handleCommentChange}
                onSubmit={handleCommentSubmit}
              />
              <div>
                {comments.map((comment, index) => (
                  <div key={index}>{comment}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const RatingBox = ({ rating, onChange }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((star, index) => (
        <span
          key={index}
          style={{ cursor: 'pointer' }}
          onClick={() => onChange(star)}
        >
          {star <= rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

const CommentBox = ({ comment, onChange, onSubmit }) => {
  return (
    <div className='btn-clr'>
      <textarea
        placeholder="Write your comment here..."
        value={comment}
        onChange={onChange}
      />
      <br />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default BookDetails;
