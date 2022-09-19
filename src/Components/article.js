import React from "react";
import { connect } from "react-redux";

function applyFilter(searchTerm) {
  return function (row) {
    return row.title.toLowerCase().includes(searchTerm.toLowerCase());
  };
}

function Article({ articleProps, onSearchFn, searchTerm }) {
  let searchedArticles = articleProps.filter(applyFilter(searchTerm));
  return (
    <>
      <h3>List of Articles</h3>
      Search: <input type="text" onChange={(e) => onSearchFn(e.target.value)} />
      <br /> <br />
      {searchedArticles.map((article) => (
        <li key={article.id}>
          <a href={article.url}>{article.title}</a>
        </li>
      ))}
    </>
  );
}

const mapStateToProps = (state) => ({
  articleProps: state.articleState.articles,
  searchTerm: state.searchState.searchTerm,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchFn: (searchTerm) =>
    dispatch({ type: "SEARCH_SET", payload: searchTerm }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
