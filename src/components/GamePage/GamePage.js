import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { callAPI } from "../../utils/CallApi";
import "./GamePage.css";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Circle } from "rc-progress";

const GamePage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = () => {
    callAPI(`data/steamdb.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };

  useEffect(() => {
    getProduct();
  });

  if (!product?.name) return <h1 className="loading">LOADING GAME...</h1>;

  return (
    product && (
      <div className="game_summary">
        <div className="game_left">
          <div className="game_name">{product.name}</div>
          <div className="game_price">${product.full_price}</div>
          <div className="game_desc">{product.description}</div>
          <div className="video">
            <p>TRAILER</p>
            <h6>(Double click for fullscreen)</h6>
            <ReactPlayer url={product.store_promo_url} />
          </div>
        </div>

        <div className="game_right">
          <div className="game_image">
            <img src={product.image} alt="gameImage" />
          </div>
          <h2>GAME REVIEWS: </h2>
          <div className="review">
            <Circle
              percent={product.gfq_rating * 20}
              strokeColor="#650aa6"
              strokeWidth={15}
              trailWidth={15}
              trailColor="#2c0448"
              gapDegree={30}
              gapPosition="top"
              className="rating"
            />

            <Circle
              percent={product.meta_score}
              strokeColor="#650aa6"
              strokeWidth={15}
              trailWidth={15}
              trailColor="#2c0448"
              gapDegree={30}
              gapPosition="top"
              className="rating"
            />
            <Circle
              percent={product.igdb_score}
              strokeColor="#650aa6"
              strokeWidth={15}
              trailWidth={15}
              trailColor="#2c0448"
              gapDegree={30}
              gapPosition="top"
              className="rating"
            />
          </div>
          <div className="review_2">
            <h6>GFQ : {product.gfq_rating}/5</h6>
            <h6>META : {product.meta_score}%</h6>
            <h6>IGDB: {product.igdb_score}%</h6>
          </div>
          <h2>INFO: </h2>
          <div className="information">
            <p>
              <strong>Release Date: </strong> {product.published_store}
            </p>
            <p>
              <strong>Developers: </strong> {product.developers}
            </p>
            <p>
              <strong>Platforms: </strong> {product.platforms}
            </p>
            <p>
              <strong>Languages: </strong> {product.languages}
            </p>
            <p>
              <strong>Genres: </strong> {product.genres}
            </p>
            <p>
              <strong>Categories: </strong> {product.categories}
            </p>
          </div>
          <Link to={product.store_url} target="_blanc" className="link">
            <button className="store_btn"> Visit To Play</button>
          </Link>
        </div>
      </div>
    )
  );
};

export default GamePage;
