import Link from 'next/link';
import React from 'react';
import BlogSidebar from '../blog/blog-sidebar';
import Cta from '../common/cta/cta';
import BlogDetailsForm from '../forms/blog-details-form';
import TestimonialArea from '../homes/home-4/testimonial-area';

const post_comments = [
  {
    date:'3/05/2022, 3:53:39 PM',
    img:'/assets/img/testimonial/testi-4.2.png',
    name:'Kristin Watson',
    desc:"Patient Comments are a collection of comments submitted by viewers in <br /> response to a question posed by a MedicineNet doctor."
  },
  {
    children:true,
    date:'5/09/2022, 3:59:39 PM',
    img:'/assets/img/testimonial/testi-4.5.png',
    name:'Farhan Firoz',
    desc:"Include anecdotal examples of your experience, or things you took notice of that <br /> you feel others would find useful."
  },
  {
    date:'8/10/2022, 5:59:39 PM',
    img:'/assets/img/testimonial/testi-4.1.png',
    name:'Salim rana',
    desc:"Include anecdotal examples of your experience, or things you took notice of that <br /> you feel others would find useful."
  },
]

const BlogDetailsArea = ({ blog }) => {
  const { img, author, date, comment, title,short_desc, real_blogp1, real_blogp2, real_blogp3, real_blogp4,real_blogp5,real_blogp6, ending } = blog || {};
  return (
    <>


      <div className="postbox__area pb-120">
       
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-12">
              <div className="postbox__wrapper">
                <article className="postbox__item format-image transition-3">
                  <div className="postbox__content">
                  <h1 className='tp-title-md-left'>Shout Hero Blog</h1>
           
                    <p><img className="w-100" src={img} alt="" /></p>
                    <h3 className='tp-subtitle'>Small Business Resources </h3>
           
                    <div className="postbox__meta">
                      <span><a href="#"><i className="fal fa-user-circle"></i>{author}</a></span>
                      <span><a href="#"><i className="fal fa-clock"></i>{date}</a></span>
                   

                    </div>
                   
                    <h2 className="postbox__title">
                      {title}
                    </h2>
                    <div className="postbox__text">
                      <p>{short_desc}</p>
                      <p> {real_blogp1}
                      </p>
                      <p>{real_blogp2}</p>

                      <p>{real_blogp3}</p>
                      <p>{real_blogp4}</p>
                      <p>{real_blogp5}</p>
                      <p>{real_blogp6}</p>
                      <p>{ending}</p>
                    </div>

                    <div className="postbox__thumb2">
                      <div className="row gx-50">
                        <div className="col-xl-6">
                     
                        </div>
                        <div className="col-xl-6">
                     
                        </div>
                      </div>
                    </div>
                    <div className="postbox__social-wrapper">
                      <div className="row">
                        <div className="col-xl-6 col-lg-12">
                          <div className="postbox__tag tagcloud">
                            <span>Tag</span>
                            <Link href="/blog-details">
                              <a>Business</a>
                            </Link>
                            <Link href="/blog-details">
                              <a>Design</a>
                            </Link>
                          
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                          <div className="postbox__social text-xl-end text-start">
                            <span>Share</span>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                              <i className="fab fa-linkedin tp-linkedin"></i>
                            </a>
                            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
                              <i className="fab fa-pinterest tp-pinterest"></i>
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                              <i className="fab fa-facebook tp-facebook" ></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                              <i className="fab fa-twitter tp-twitter"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <div className="postbox__comment mb-65">
                 
                  <ul>
         
                   
                  </ul>
                </div>
            
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
            
            </div>
            <Cta/>
            <div className='top-padding'></div>
            <TestimonialArea/>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsArea;