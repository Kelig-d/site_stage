import React from 'react';

export default function Supression(props) {
    const [showModal, setShowModal] = React.useState(false);
    const title = props.title;
    const id = props.id;
    return (
      <>
        <button
          className="ransition duration-500 ease-in-out transform hover:scale-110 bg-red-600 hover:bg-red-700 text-white float-right px-3 py-1 rounded-md"
          type="button"
          onClick={() => setShowModal(true)}
        >
         supprimer
        </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Supprimer la page {title}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      Etes-vous sûr de vouloir supprimer la page {title} ? Ce changement sera irréversible.
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-grey-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Annuler
                    </button>
                    <a href={"../back_end/supprimer_pages.php?id="+id+"&title="+title}><button type="button"
                      className="transition duration-500 ease-in-out transform hover:scale-110 bg-red-600 hover:bg-red-700 text-white float-right px-3 py-1 rounded-md"
                    >
                      Supprimer
                    </button></a>

                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
  )
}