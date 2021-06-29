import React from 'react';   
   
function Page(props) {
    const pages = props.propsPages;
    var textes = { 
      texte1: { texte:pages.TEXT1, photo: pages.PHOTOS1}, 
      texte2: {  texte:pages.TEXT2, photo: pages.PHOTOS2}, 
      texte3: { texte:pages.TEXT3, photo: pages.PHOTOS3} 
  }
  ;
    return (
      <section className="left-40 top-0 text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto flex items-center justify-center h-full">
        <div className="flex flex-wrap items-center justify-center h-full w-full mb-20 flex-col items-center text-center">
          <h1 className="md:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{pages.TITLE}</h1>
          {
            
            Object.keys(textes).map((key, index)=>{
              if(textes[key].texte){
              return(
                <div key={index} className="flex flex-col shadow-md md:shadow-none rounded-lg md:rounded-none my-5 overflow-hidden md:mb-0 md:mx-auto md:flex md:items-center md:justify-center md:relative md:w-full md:float-left md:max-w-lg">
                  <div className="md:float-right md:relative md:pl-10 max-w-xl">
                    <img src={textes[key].photo} placeholder="photo article"/>
                  </div>
                  <div className="md:left-0 md:max-w-xs md:h-1/2 md:overflow-hidden md:absolute md:p-2 md:bg-white md:shadow-lg md:border-l-4 border-black">
                    <p className="md:text-grey-darkest md:leading-tight md:overflow-ellipsis">{textes[key].texte}</p>
                  </div>
                </div>
              )
              }
              else{
                console.log("no");
              }
            })
          }
        </div>
      </div>
    </section>
    );
};

export default Page;