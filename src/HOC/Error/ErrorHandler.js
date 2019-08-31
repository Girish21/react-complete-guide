import React from "react";

import axios from "../../AxiosOrders";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../AuxHOC/AuxHOC";

const errorHandler = WrapperComponent => {
  return class extends React.Component {
    state = {
      error: null
    };
    componentDidMount() {
      this.reqInterseptor = axios.interceptors.request.use(
        req => {
          this.setState({ error: null });
          return req;
        },
        error => {
          this.setState({
            error: error
          });
          return Promise.reject(error);
        }
      );
      this.resInterseptor = axios.interceptors.response.use(
        res => res,
        error => {
          console.log(error.response.data);
          this.setState({
            error: error.response.data.error
          });
          return Promise.reject(error);
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterseptor);
      axios.interceptors.response.eject(this.resInterseptor);
    }

    closeModal = () => {
      this.setState({ error: null });
      this.props.history.push("/");
    };
    render() {
      return (
        <Aux>
          <Modal show={this.state.error} click={this.closeModal}>
            {this.state.error ? this.state.error : null}
          </Modal>
          <WrapperComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default errorHandler;
