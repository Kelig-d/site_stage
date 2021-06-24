import React from 'react';
import axios from 'axios';

class Contact extends React.Component{
    constructor(){
        super();
        this.state={
            nom:'',
            prenom:'',
            mail:'',
            message:'',
            mailSent:false,
            error:null,
        }
    }

    handleFormSubmit = e => {
        e.preventDefault();
        axios({
          method: 'post',
          url: './back_end/contact.php',
          headers: { 'content-type': 'application/json' },
          data: this.state
        })
          .then(result => {
              console.log("success");
            this.setState({
              mailSent: result.data.sent
            })
          })
          .catch(error => this.setState({ error: error.message }));
      };

    render(){
        return (
            <div className="flex justify-center items-center h-screen">
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Prénom*
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="prenom" type="text" value={this.state.prenom} onChange={e => this.setState({ prenom: e.target.value })}/>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Nom*
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="nom" type="text" value={this.state.nom} onChange={e => this.setState({ nom: e.target.value })}/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Courriel*
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" type="email" placeholder="exemple@gmail.com" value={this.state.mail} onChange={e => this.setState({ mail: e.target.value })}/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Message*
                            </label>
                            <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" name="message" placeholder="Veuillez écrire votre message ici" value={this.state.message} onChange={e => this.setState({ message: e.target.value })}/>
                        </div>
                        <p className="text-gray-600 text-xs italic">les champs avec * sont obligatoires</p>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                            <button className="shadow bg-black transition duration-500 ease-in-out transform hover:bg-green-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" onClick={e => this.handleFormSubmit(e)}>
                                Envoyer
                            </button>
                        </div>
                        <div className="md:w-2/3" />
                    </div>
                    <div>
                        {this.state.mailSent &&
                            <div>Thank you for contcting us.</div>
                        }
                    </div>
                </form>
            </div>

        );
    }
};

export default Contact;