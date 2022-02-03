import React from 'react';

export default function Content() {
  return (
    <>
    <div className="content-box u-center-text u-margin-top-medium">
      <h2 className="heading-primary">
        About the Project
      </h2>
      <div className="paragraph-box">
        <span className='paragraph'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero illo rerum, doloribus impedit voluptas porro nam deserunt assumenda laboriosam exercitationem corrupti magnam qui provident error delectus ratione accusamus perferendis?
        </span>
      </div>
      
    </div>

    {/*  after content  box */}

    <div className='row '>
      <div className='col-1-of-2 u-center-text u-margin-top-medium'>
        <div className="cardbox">
        <i className="iconstyle icon-basic-world"></i>
          <p className="paragraph u-margin-bottom-medium u-margin-top-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.am umque fuga quisquam odio. Optio hic soluta praesentium. Beatae dolores architecto repellendus quam, rerum nam odit?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias, aspernatur voluptatum, nostrum id doloribus voluptate quia porro facere, quod officia ipsa! Sint, repellendus aut? Impedit voluptatem ex recusandae incidunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eligendi voluptatum voluptas iusto porro doloribus, tempora minus quam cupiditate laboriosam atque culpa itaque libero et magnam ullam odio minima aut.
          </p>
        </div>
      </div>

      <div className='col-1-of-2 u-center-text u-margin-top-medium'>
        <div className="cardbox">
        <i className="iconstyle icon-basic-spread-text-bookmark"></i>
            <p className="paragraph u-margin-bottom-medium u-margin-top-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.am umque fuga quisquam odio. Optio hic soluta praesentium. Beatae dolores architecto repellendus quam, rerum nam odit?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit impedit quia facere deserunt hic exercitationem sunt laudantium quos, esse ab, reiciendis nostrum molestiae corporis tenetur quibusdam dicta qui quas. Provident.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi, esse porro sequi consequuntur cupiditate, ad suscipit similique rerum sit nesciunt tenetur ut. Totam ipsam excepturi, eaque facilis veritatis recusandae.
            </p>
        </div>
      </div>
    </div>
    </>
  );
}
