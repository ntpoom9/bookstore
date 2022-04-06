import React from "react";
import { useParams } from "react-router-dom";

import BookDetailComponent from "../components/BookDetailComponent";

export default function BookDetail() {
  const param = useParams();
  const isbn = param.isbn;

  return (
    <div>
      <BookDetailComponent isbn={isbn} />
    </div>
  );
}
