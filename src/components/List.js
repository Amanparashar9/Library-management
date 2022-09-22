import React, { useState, useEffect } from 'react';
export default function List(){
// use all form functions
  const [bookName, setBookName] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookISBN, setBookISBN] = useState('');
  const [bookDescription, setBookDescription] = useState('');
  const [bookYear, setBookYear] = useState('');
  const [read, setRead] = useState('No');
  const [booksArr, setBooksArr] = useState([]);
  const [readUpdate, setReadUpdate] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    if (bookName && bookAuthor) {
      const newBook = {
        bookName,
        bookAuthor,
        bookISBN,
        bookYear,
        bookDescription,
        read,
      };
      localStorage.setItem('books', JSON.stringify([...booksArr, newBook]));
      setBooksArr([...booksArr, newBook]);
    }
  };
// remove book
  const removeBook = (index) => {
    if (booksArr) {
      const newArray = booksArr.filter((book, bookIndex) => {
        return bookIndex !== index;
      });

      localStorage.setItem('books', JSON.stringify(newArray));
      setBooksArr(newArray);
    }
  };
//save on local
  const saveLocal = () => {
    localStorage.setItem('books', JSON.stringify(booksArr));
  };

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) setBooksArr(JSON.parse(storedBooks));
  }, []);

  return (
    //book form
    <div >
      <div className='container1'>
       
      <form className="bookForm" onSubmit={(e) => submitHandler(e)}>
        <label htmlFor="bookName"> Book Title</label>
        <input
          id="bookName"
          name="bookName"
          type="text"
          placeholder="Book Title"
          maxLength="40"
          onChange={(e) => setBookName(e.target.value)}
          required
        ></input>
        <label htmlFor="bookAuthor">Author</label>
        <input
          id="bookAuthor"
          name="bookAuthor"
          type="text"
          placeholder="Book Author"
          maxLength="30"
          onChange={(e) => setBookAuthor(e.target.value)}
          required
        ></input>
         <label htmlFor="bookISBN">Book ISBN</label>
        <input
          id="bookISBN"
          name="bookISBN"
          type="number"
          placeholder="Book ISBN Number"
          maxLength="40"
          onChange={(e) => setBookISBN(e.target.value)}
          required
        ></input>
         <label htmlFor="bookYear">Book Year</label>
        <input
          id="bookYear"
          name="bookYear"
          type="number"
          placeholder="Book Year"
          maxLength="10"
          onChange={(e) => setBookYear(e.target.value)}
          required
        ></input>
         <label htmlFor="bookDescription">Book Description</label>
        <input
          id="bookDescription"
          name="booDescription"
          type="text"
          placeholder="Write book description here "
          maxLength="1000"
          onChange={(e) => setBookDescription(e.target.value)}
          required
        ></input>
        <label>Read</label>
        <select
          id="read"
          name="read"
          value={read}
          onChange={(e) => setRead(e.target.value)}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <input id="submit" type="submit" value="ADD NEW BOOK"></input>
      </form>
     </div>
      <table>
        <tbody>
          <tr>
            <th>Book Name</th>
            <th>Book Author</th>
            <th>Book ISBN</th>
            <th>Book Description</th>
            <th>Finished (Yes/No)</th>
            <th colSpan="2">Settings</th>
          </tr>
          {booksArr
            ? booksArr.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.bookName}</td>
                    <td>{item.bookAuthor}</td>
                    <td>{item.bookISBN}</td>
                    <td>{item.bookDescription}</td>
                    <td>{item.read}</td>
                    <td id="settings">
                      <button
                        onClick={() => {
                          item.read === 'Yes'
                            ? (item.read = 'No')
                            : (item.read = 'Yes');
                          saveLocal();
                          setReadUpdate(!readUpdate);
                        }}
                      >
                        {item.read === 'Yes' ? 'Still reading' : 'Finished'}
                      </button>

                      <button onClick={() => removeBook(index)}>Remove</button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
            };   
            