import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import { loadJoke, resetJoke } from "../../store/modules/jokes/actions";
import "./Jokes.scss";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessages/ErrorMessage";

class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.onJokeLoad = this.onJokeLoad.bind(this);
  }

  componentDidMount() {
    this.onJokeLoad();
  }

  componentWillUnmount() {
    this.props.resetJoke();
  }

  render() {
    const { joke, loadingJoke, setErrorJoke } = this.props;
    const category = getCategoryFromProp(this.props.match);
    return (
      <div className="jokes">
        <div className="title">
          <h2>
            <span>Category: </span>
            <span className="category_name">{category}</span>
          </h2>
        </div>
        {joke.length > 0 ? this.displayJoke() : null}
        {loadingJoke ? <Loader /> : null}
        {setErrorJoke !== null ? <ErrorMessage message={setErrorJoke} /> : null}
        {joke.length > 0 ? this.displayButtons() : null}
      </div>
    );
  }

  displayJoke() {
    return (
      <ul className="joke">
        {this.props.joke.map(joke => {
          const { icon_url, id, value } = joke;
          return (
            <li className="joke__item" key={id} data-test="joke">
              <div className="category-content">
                <img
                  src={icon_url}
                  alt="icon url"
                  className="category-content__icon"
                />
                <span className="category-content__description">{value}</span>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  displayButtons() {
    return (
      <div className="buttons">
        <Button color="primary" onClick={this.onJokeLoad}>
            Next
        </Button>
        <Button color="primary">
          <Link to="/" className="back_button">
            Back
          </Link>
        </Button>
      </div>
    );
  }

  onJokeLoad() {
    const { category } = getCategoryFromProp(this.props.match);
    this.props.loadJoke(category);
  }

  isSameJoke(nextProps) {
    const noErrors = nextProps.errorJokes === null;
    const notLoading = nextProps.loadingJoke === false;
    const sameJokes = nextProps.joke.length === this.props.joke.length;
    return noErrors && notLoading && sameJokes;
  }
}

const getCategoryFromProp = match =>
  match === undefined ? "" : match.params.category;

const mapStateToProps = ({ joke, loadingJoke, setErrorJoke }) => ({
  joke,
  loadingJoke,
  setErrorJoke
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadJoke: () => dispatch(loadJoke(getCategoryFromProp(ownProps.match))),
  resetJoke: () => dispatch(resetJoke())
});

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);
