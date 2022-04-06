import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/BookDetailComponent.css";
import "../css/styles.css";
// import moment from "moment";

export default function BookDetailComponent({ isbn }) {
  const [book, setBook] = useState({}); //state สำหรับ เก็บข้อมูลจาก API
  // API สำหรับค้นหาข้อมูลผู้ใช้ จาก isbn
  const url = `${process.env.REACT_APP_SEARCH_BOOKS}/${isbn}`;
  useEffect(() => {
    axios.get(url).then((respond) => {
      console.log(respond);
      setBook(respond.data);
    });
  }, []);

  return (
    <div className="navMargin">
      <div className="container">
        <center>
          <h1>{book.title}</h1>
        </center>
        {/* <div className="grid"> */}
        <div className="row">
          <div className="col" id="colImg">
            <img className="book_img" key={book.isbn} src={book.thumbnailUrl} />
          </div>
          <div className="col" id="info">
            <b className="book_topic">isbn : </b>
            <span className="book_detail">{book.isbn}</span>
            <br />
            <b className="book_topic">pageCount : </b>
            <span className="book_detail">{book.pageCount} pages</span>
            <br />
            <b className="book_topic">status : </b>
            <span className="book_detail">{book.status}</span>
            <br />
            <b className="book_topic">authors : </b>
            <span className="book_detail">{book.authors}</span>
            <br />
            <b className="book_topic">categories : </b>
            <span className="book_detail">{book.categories}</span>
            <br />
            <b className="book_topic">description : </b>
            <span className="book_detail">{book.longDescription}</span>
            <br />
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
