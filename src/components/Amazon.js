import React, { useEffect, useState } from "react";
import axios from "axios";
import list from "../data";
import "../styles/amazon.css";
import Cards from "./Cards";

const Amazon = ({ handleClick }) => {
  const [books, setBook] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/react-shopping/api/booklist.php")
      .then((res) => {
        //console.log(res.data);
        setBook(res.data.prods.books);
      });
  }, []);
  console.log(books);

  return (
    <section>
      {books.map((item) => (
        <Cards item={item} key={item.id} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;
