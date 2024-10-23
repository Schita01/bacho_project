const RofsCard = ({ detail, result }:any) => {
  return (
    <div className="SliceCarouselLifecycl-card">
      <div className="SliceCarouselLifecycl-card-top">
        {/* Displaying the passed detail prop */}
        <p className="SliceCarouselLifecycl-p">
          {detail}
        </p>
      </div>
      <div className="SliceCarouselLifecycl-card-bottom">
        {/* Displaying the result prop */}
        <span className="SliceCarouselLifecycl-card-bottom-span">{result}</span>
      </div>
    </div>
  );
};

export default RofsCard;
