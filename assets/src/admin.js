import React from 'react';
import ReactDOM from 'react-dom';
import Suppression from './suppression.js';

class Gestion_pages extends React.Component{
    constructor(props){
        super(props);

        this.state = {
          show: false,
        };
    }

    isClicked = () => {
        this.setState({
          show: true,
        });
      }

      render(){
    const pages = JSON.parse(this.props.propsPages);
    console.log(pages);
    
    return (
        <div>
        <div className=" flex flex-wrap items-center justify-center h-full">
        {
            pages.map((pages, index)=>{
                return(
                    <div key={pages.ID} className="flex flex-col md:w-2/5 p-3 space-y-5 rounded-xl border border-black bg-white shadow-md my-3 mx-5">
                        <section className="text-sm font-thin text-orange-400">
                            <img className="object-contain md:object-scale-down " src={pages.PHOTOS} />
                        </section>
                        <section className="text-3xl font-bold">
                            {pages.TITLE}
                        </section>
                        <section className="font-normal text-md text-gray-700">
                            {pages.TEXT}
                        </section>
                        <section className="font-normal text-md">
                        <a href={"modifier_pages.php?id="+pages.ID} ><button className="bg-yellow-600 text-white float-left px-3 py-1 rounded-md">Modifier</button></a>
                            <Suppression id={pages.ID} title={pages.TITLE}/>
                            
                        </section>
                    </div>
                );
            })
        }
        </div>
        <div className="flex flex-wrap items-center justify-center h-full my-5">
        <a href="ajouter_pages.php"><button className="bg-green-500 text-white px-5 py-3 rounded-md">Ajouter une page</button></a>
        </div>
        </div>
        
    );
      }
};

const domContainer = document.getElementById("liste_pages");

const pages = domContainer.innerHTML;

ReactDOM.render(<Gestion_pages propsPages={pages}/>,domContainer);
