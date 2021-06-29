import React from 'react';   
   
function Accueil(props) {
    const pages = props.propsPages;
  ;
    return (
        <section className="left-40 top-0 text-gray-700 body-font">
            <div className="container px-5 py-24 mx-auto flex items-center justify-center h-full">
                <div className="flex flex-wrap items-center justify-center h-full w-full mb-20 flex-col items-center text-center">
                    <h1 className="md:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{pages.TITLE}</h1>

                    <div className="flex flex-col shadow-md md:shadow-none rounded-lg md:rounded-none my-5 overflow-hidden md:mb-0 md:mr-auto md:-ml-14 md:flex md:items-center md:justify-center md:relative md:w-full md:float-left md:max-w-6xl">
                        <div className="md:float-right md:relative md:pr-10 max-w-3xl">
                            <img className="rounded-md" src={pages.PHOTOS1} placeholder="photo article"/>
                        </div>
                        <div className="md:right-0 md:max-w-xs md:max-h-1/2 md:overflow-hidden md:absolute md:p-2 md:bg-white md:shadow-lg md:border-r-4 border-black md:rounded-sm">
                            <p className="md:text-grey-darkest md:leading-tight md:overflow-ellipsis">{pages.TEXT1}</p>
                        </div>
                    </div>

                    <div className="flex flex-col shadow-md md:shadow-none rounded-lg md:rounded-none my-5 overflow-hidden md:mb-0 md:ml-auto md:-mr-14 md:flex md:items-center md:justify-center md:relative md:w-full md:float-left md:max-w-6xl">
                        <div className="md:float-right md:relative md:pl-10 max-w-3xl">
                            <img className="rounded-md" src={pages.PHOTOS2} placeholder="photo article"/>
                        </div>
                        <div className="md:left-0 md:max-w-xs md:max-h-1/2 md:overflow-hidden md:absolute md:p-2 md:bg-white md:shadow-lg md:border-l-4 border-black md:rounded-sm">
                            <p className="md:text-grey-darkest md:leading-tight md:overflow-ellipsis">{pages.TEXT2}</p>
                        </div>
                    </div>

                    <div className="flex flex-col shadow-md md:shadow-none rounded-lg md:rounded-none my-5 overflow-hidden md:mb-0 md:mr-auto md:-ml-14 md:flex md:items-center md:justify-center md:relative md:w-full md:float-left md:max-w-6xl">
                        <div className="md:float-right md:relative md:pr-10 max-w-3xl">
                            <img className="rounded-md" src={pages.PHOTOS3} placeholder="photo article"/>
                        </div>
                        <div className="md:right-0 md:max-w-xs md:max-h-1/2 md:overflow-hidden md:absolute md:p-2 md:bg-white md:shadow-lg md:border-r-4 border-black md:rounded-sm">
                            <p className="md:text-grey-darkest md:leading-tight md:overflow-ellipsis">{pages.TEXT3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accueil;