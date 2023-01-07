import React from 'react';

const accordion_items = [
  { id: 'one', show: true, title: 'How does this work?', desc: "We refine our service for each individual customer. After you choose a plan, our team will reach out to you to set up some simple content logitics. Then you will be matched with an account representative that will act as your point of contact with Shout Hero. " },
  { id: 'two', title: 'Do I have to shoot my own content?', desc: "Yes. However Shout Hero makes it as simple and easy as possible to quickly record content, and upload it to our editors. Saving you time, while delivering your business quality content." },
  { id: 'three', title: 'Explain edits and scripted content ideas.', desc: "Our service is dedicated to making it as simple and as easy as possible for business owners to create content, while still having time to focus on what matters. Our scripted content is a series of clips given to you via your account representative. After recording, you may upload the clips to be edited by our team. " },
  { id: 'four', title: 'What makes Shout Hero better than the rest?', desc: "Our team of editors are educated in marketing, technology, human psychology that give them a distinct advantage in editing and caption footage in ways that keep consumers watching, helping it go viral. " },

]

const FaqArea = () => {
  return (
    <>
      <div className="sd-accordio-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="tp-title-md">Frequently Asked Questions</h2>
              <div className='md-padding'></div>
              <div className="tp-custom-accordio faq-accordio-border">
                <div className="accordion" id="accordionExample">

                  {accordion_items.map((item, i) => {
                    const { id, show, title, desc } = item;
                    return <div key={id} className='accordion-items'>
                      <h2 className="accordion-header" id={`heading-${id}`}>
                        <button className={`accordion-buttons ${show ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${id}`}
                          aria-expanded={show ? 'true' : 'false'} aria-controls={`collapse-${id}`}>
                          {title}
                        </button>
                      </h2>
                      <div id={`collapse-${id}`} className={`accordion-collapse collapse ${show ? 'show' : ''}`} aria-labelledby={`heading-${id}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          {desc}
                        </div>
                      </div>
                    </div>
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqArea;