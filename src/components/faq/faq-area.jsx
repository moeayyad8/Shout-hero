import React from 'react';

const accordion_items = [
  { id: 'one', show: true, title: 'How does this work?', desc: "Ours reps simplify the content process, by lightly scripting, editing, and advising capture of content for business owners. Therefore giving business owners a real chance to gain success on platforms like (but not limited to) Tiktok, Youtube Shorts and Reels. Shout Hero account managers use these platforms for an average of 6 hours per day, to allow them to learn platform nuances, trends, and editing styles that will garner success otherwise unrealistic for busy business owners." },
  { id: 'two', title: 'Do I have to shoot my own content?', desc: "Yes. However Shout Hero makes it as simple and easy as possible to quickly record content, and upload it to our editors. Saving you time, while delivering your business quality content." },
  { id: 'three', title: 'Explain edits and scripted content ideas.', desc:"Our scripted content is a series of easy to follow directions, speaking lines, camera angles, and other specific nuances decided upon by our proven account reps. After recording, you may upload the clips to be edited by our team. " },
  { id: 'four', title: 'What makes Shout Hero better than the rest?', desc: "Our team of editors are educated in marketing, technology, and human psychology that give them a distinct advantage in editing and captioning footage in ways that keep consumers watching, giving it its best chance at virality. Shout Hero also curates content for the local level, which is a major upside at platforms like Tiktok who use geotargeting as one of the main parts of its algorithm. " },

]

const FaqArea = () => {
  return (
    <>
      <div className="sd-accordio-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="tp-title-md">FAQ</h2>
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