import group1 from "../../Images/Group-1.webp";
import group2 from "../../Images/Group-2.webp";
import group3 from "../../Images/Group-3.webp";
import group4 from "../../Images/Group-4.webp";
import Mockups from "../../Images/Mockups.webp";
import WhiteLogo from "../../Images/WhiteLogo.webp";

function Experience({
  expTitle,
  ExpPara,
  point1,
  pointPara1,
  point2,
  pointPara2,
  point3,
  pointPara3,
  point4,
  pointPara4,
  altTags = {}, // Dynamic alt tags as an object
}) {
  return (
    <>
      <section className="Experience pt-5 position-relative d-none d-md-block">
        <div className="container">
          <div className="Experienceg_title text-center">
            <h2 className="fw-bold mb-4">{expTitle}</h2>
            <p className="mb-0">{ExpPara}</p>
          </div>

          <div className="experience_row row py-5">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="d-flex flex-column justify-content-xl-between align-items-center h-100">
                <div className="position-relative">
                  <div className="experience_img pb-3 pb-lg-0 pb-md-0 py-2">
                    <img
                      src={group1}
                      alt={altTags.group1 || ""}
                      className="img-fluid"
                    />
                  </div>
                  <div className="experience_content text-center w-75 position-absolute top-50 start-50 translate-middle">
                    <h6>{point1}</h6>
                    <p className="mb-0">{pointPara1}</p>
                  </div>
                </div>

                <div className="position-relative">
                  <div className="experience_img pb-3 pb-lg-0 pb-md-0 py-2">
                    <img
                      src={group2}
                      alt={altTags.group2 || ""}
                      className="img-fluid"
                    />
                  </div>
                  <div className="experience_content text-center w-75 position-absolute top-50 start-50 translate-middle">
                    <h6>{point2}</h6>
                    <p className="mb-0">{pointPara2}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="center_logo_img col-lg-4 d-flex align-items-center justify-content-center d-none d-lg-block">
              <img
                src={Mockups}
                alt={altTags.mockups || ""}
                className="img-fluid h-100 w-100"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="d-flex flex-column justify-content-xl-between h-100">
                <div className="position-relative">
                  <div className="experience_img pb-3 pb-lg-0 pb-md-0 py-2 order-1">
                    <img
                      src={group3}
                      alt={altTags.group3 || ""}
                      className="img-fluid"
                    />
                  </div>
                  <div className="experience_content text-center w-75 position-absolute top-50 start-50 translate-middle pt-2">
                    <h6>{point3}</h6>
                    <p className="mb-0">{pointPara3}</p>
                  </div>
                </div>
                <div className="position-relative">
                  <div className="experience_img pb-3 pb-lg-0 pb-md-0 py-2">
                    <img
                      src={group4}
                      alt={altTags.group4 || ""}
                      className="img-fluid"
                    />
                  </div>
                  <div className="experience_content text-center w-75 position-absolute top-50 start-50 translate-middle">
                    <h6>{point4}</h6>
                    <p className="mb-0">{pointPara4}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="experienceBg">
          <img
            src={WhiteLogo}
            alt={altTags.whiteLogo || ""}
            className="w-100 h-100"
          />
        </div>
      </section>
    </>
  );
}

export default Experience;
