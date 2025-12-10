import { FaEye, FaRegClock, FaRegComment } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function CardBlog({ singleBlogImg, time, blogTitle, blogPara, CommentNum, viwer, urlSingleBlog }) {
    return (
        <>
            <div className="card card_img_blog ">
                <div className="imageBlog overflow-hidden">
                    <Link to={urlSingleBlog}>
                        <img src={singleBlogImg} className="card-img-top" alt="..." loading="lazy" />
                    </Link>
                </div>
                <div className="card_body">
                    <div className="card-body ps-3">
                        <div className="date text-start">
                            <span>
                                <FaRegClock />
                                {time}
                            </span>
                        </div>
                        <div className="card_para_1 mt-2">
                            <p className="text-start">
                                <Link to="#">
                                    {blogTitle}
                                </Link>
                            </p>
                        </div>
                        <div className="card_para_2">
                            <p className="text-start">
                                {blogPara}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardBlog
