import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/BookDetailComponent.css";
import "../css/styles.css";
import { IoMdLocate, IoMdGlobe } from "react-icons/io";

export default function BookDetailComponent({ isbn }) {
  const [book, setBook] = useState(); //state สำหรับ เก็บข้อมูลจาก API
  // API สำหรับค้นหาข้อมูลผู้ใช้ จาก isbn
  const url = `${process.env.REACT_APP_SEARCH_BOOKS}/${isbn}`;
  useEffect(() => {
    axios.get(url).then((respond) => {
      console.log(respond);
      setBook(respond.data);
    });
  }, []);

  return (
    <>
      <p>{book.title}</p>
      {/* {book.map((d) => {
        return (
          <>
            <p>{d.title}</p>
          </>
        );
      })} */}
    </>
  );
}
