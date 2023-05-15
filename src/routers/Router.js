import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndexView } from "../views/IndexView";
import { BooksViews } from "../views/books/BooksViews";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexView />} />
        <Route path="/books" element={<BooksViews />} />
      </Routes>
    </BrowserRouter>
  );
};