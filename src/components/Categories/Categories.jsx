import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import { loadCategories } from "../../store/modules/categories/actions";
import "./Categories.scss";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessages/ErrorMessage";

class Categories extends React.Component {
  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    const { categories, loadingCategories, setErrorCategories } = this.props;
    return (
      <div className="categories">
        <div className="title">
          <h2>Categories</h2>
        </div>
        {categories.length > 0 ? this.displayCategories() : null}
        {loadingCategories ? <Loader /> : null}
        {setErrorCategories !== null ? (
          <ErrorMessage message={setErrorCategories} />
        ) : null}
      </div>
    );
  }

  displayCategories() {
    return (
      <ol className="categories_list">
        {this.props.categories.map(category => {
          return (
            <li key={category}>
              <Button color="primary">
                <Link
                  className="categories_list_item"
                  to={`/jokes/${category}`}
                >
                  {category}
                </Link>
              </Button>
            </li>
          );
        })}
      </ol>
    );
  }
}

const mapStateToProps = ({
  categories,
  loadingCategories,
  setErrorCategories
}) => ({
  categories,
  loadingCategories,
  setErrorCategories
});

const mapDispatchToProps = dispatch => ({
  loadCategories: () => dispatch(loadCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
