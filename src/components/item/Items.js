import React, { Component } from "react";
import "./Items.css";

export default class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount =
    (() => {
      this.getComments();
    },
    []);
  getComments = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ products: [...result] });
      });
  };
  render() {
    return (
      <>
        <div className="App">
          <div className="container">
              <div className="row">
                {this.state.products.map((data) => (
                  <div className="col-md-4 animated fadeIn" key={data.id}>
                    <div className="card">
                      <div className="card-body">
                        <div className="picture">
                          <img
                            src={data.image}
                            className="card-img-top"
                            alt=""
                          />
                        </div>
                        <h5 className="card-title">{data.title}</h5>
                        <h6>{data.description}</h6>
                        <p className="card-text">
                          {data.rating.rate}
                          <br />
                          <span>{data.rating.count}</span>
                        </p>
                        <p className="card-text">
                          {data.category}
                          <br />
                          <span>{data.price}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        {/* <div className="clearfix">
        <div className="row">
    <div className="col-sm-4" >  
        <div className="card" style={{width : "18rem"}}>
            <img className="card-img-top" src="..." alt="image"/>
                <div className="card-body">
                    {this.state.products.map((product)=>{
                        <div key={product.id}>
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">{product.category}</p>
                    <p className="card-text">{product.price}</p>
                    <p className="card-text">{product.rating.rate}</p>
                    <p className="card-text">{product.rating.count}</p>
                    </div>
  })};
                </div>
            </div>
        </div>
        </div>
        </div> */}
      </>
    );
  }
}
