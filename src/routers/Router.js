import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndexView } from "../views/IndexView";
import { BooksViews } from "../views/books/BooksViews";
import {BookFormView} from "../views/books/BookFormView";
import {ClientView} from "../views/clients/ClientView";
import {ClientFormView} from "../views/clients/ClientFormView";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexView />} />
        <Route path="/books" element={<BooksViews />} />
        <Route path="/books/:id" element={<BookFormView />} />
        <Route path="/books/create" element={<BookFormView />} />
        <Route path="/clients" element={<ClientView/>} />
        <Route path="/clients/create" element={<ClientFormView/>}/>
        <Route path="/clients/:id" element={<ClientFormView/>}/>
      </Routes>
    </BrowserRouter>
  );
};