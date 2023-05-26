import React, { Component } from 'react';
import './Loader.css';

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', () => {
      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('DOMContentLoaded', () => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { loading } = this.state;

    return (
      loading && (
        <div className="loader">
          <div className="loader-spinner"></div>
        </div>
      )
    );
  }
}