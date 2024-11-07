import { Link } from "react-router-dom";

const FirstC = ({restaurantText}:any) => {
  return (
    <>
    <div className="exploring-planets">
      <div className="content">
        <div className="f-gs">
        <div className="header">
          <span className="page-number">{restaurantText?.showProject}</span>
          <span className="divider">——</span>
          <span className="total-pages">01</span>
        </div>
        <h1 className="title">{restaurantText?.restaurant}</h1>
        <p className="description">
          Let me introduce you to the marble planets with unique characteristics and features.
          The first planet has a red marble color, the second planet has a blue marble color,
          and the third planet has a yellow marble color.
        </p>


        </div>
        <Link to={"/project"}>
        <button className="cta">
  <span>{restaurantText?.moreBtn}</span>
  <svg width="15px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline className="z-s" points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
        </Link>
      </div>
      <div className="image">
        
      </div>
    </div>
   
    </>
  );
};

export default FirstC;
