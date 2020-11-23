import axios from "axios";

export default {
  // Gets books from the Google API
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title" + q } });
  },

  // Gets all saved books from database
  getSavedBooks: function() {
    return axios.get("/api/books/");
  },

  // Delete saved books by given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },

  // Saves book to the database 
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};

