import Img404 from '../Images/404New.png'
import Meta_Component from './Meta_Component/Meta_Component'

function Page404() {
  return (
    <>

      <Meta_Component
        title="Page Not Found | Asvayuk Technologies"
        description="Oops! The page you're looking for doesn't exist. Go back to the homepage or explore other services at Asvayuk Technologies."
      />

      <main>

        <section className='py-5' style={{ background: '#ECFFFA' }}>
          <div className='container'>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div>
                  <h1 className='fw-bold'>Oooops!</h1>
                  <p className='fw-medium'>We can't seem to find a page you are looking for</p>
                  <div className="heroBtn">
                    <a className="d-flex align-items-center justify-content-between" href="/">
                      <div className="btnText px-3 py-3 text-light">
                        <span>Back To Home</span>
                      </div>
                      <div className="btn_icon px-4 py-2">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-align-center">
                <img src={Img404} alt="404Img" className='img-fluid' />
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default Page404
