import React from 'react';   
   
function Page(props) {
    const pages = props.propsPages;
    let textes = [pages.TEXT1,pages.TEXT2,pages.TEXT3];
    return (
      <section className="blog text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="md:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{pages.TITLE}</h1>
          {
            
            textes.map((textes, index)=>{
              if(textes){
              return(
                <div key={index} className="shadow-md md:shadow-none rounded-lg md:rounded-none my-5 overflow-hidden md:mb-0 md:mx-auto md:flex md:items-center md:justify-center md:relative md:w-full md:float-left md:max-w-4xl">
                  <div className="md:float-right md:relative md:px-3">
                    <div className="md:bg-black">
                      <div className="md:opacity-75">
                    <img src={pages.PHOTOS1} />
                    </div>
                    </div>
                  </div>
                  <div className="md:left-0 md:max-w-xs md:h-1/2 md:overflow-hidden md:absolute md:p-2 md:bg-white md:shadow-lg md:border-l-4 border-black">
                    <p className="md:text-grey-darkest md:leading-tight md:overflow-ellipsis">{textes}</p>
                  </div>
                </div>
              )
              }
            })
          }
        </div>
      </div>
    </section>
    );
};

export default Page;