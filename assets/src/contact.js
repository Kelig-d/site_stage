import React from 'react';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
require('dotenv').config();

class Contact extends React.Component{
    constructor(){
        super();
        this.state={
            nom:'',
            telephone:'',
            mail:'',
            societe:'',
            postal:'',
            sujet:'',
            type:'',
            message:'',
            mailSent:false,
            error:null,
            captcha:false,
        }
    }

    handleFormSubmit = e => {
        console.log(this.state);
        e.preventDefault();
        axios({
          method: 'post',
          url: './back_end/contact.php',
          headers: { 'content-type': 'application/json' },
          data: this.state
        })
          .then(result => {
              console.log("sucess"),
            this.setState({
              mailSent: result.data.sent
            })
          })
          .catch(error => this.setState({ error: error.message }));
      };

    render(){
        return (
            <section className="left-40 top-0 text-gray-700 body-font">
            <div className="container px-5 py-24 mx-auto flex items-center justify-center h-full">
              <div className="flex flex-wrap items-center justify-center h-full w-full mb-20 flex-col items-center text-center">
                <form className="w-full max-w-lg">

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Nom et prénom*
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required name="nom" type="text" value={this.state.nom} onChange={e => this.setState({ nom: e.target.value })}/>
                        </div>
                        <div className="w-full md:w-1/2 mt-5 md:mt-0 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Numéro de téléphone*
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required name="telephone" type="text" value={this.state.telephone} onChange={e => this.setState({ telephone: e.target.value })}/>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Courriel*
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required name="mail" type="mail" value={this.state.mail} onChange={e => this.setState({ mail: e.target.value })}/>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Société*
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required name="societe" type="text" value={this.state.societe} onChange={e => this.setState({ societe: e.target.value })}/>
                        </div>
                        <div className="w-full md:w-1/2 mt-5 md:mt-0 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Code postal*
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required name="code_postal" type="text" value={this.state.postal} onChange={e => this.setState({ postal: e.target.value })}/>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Sujet*
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required name="sujet" type="text" value={this.state.sujet} onChange={e => this.setState({ sujet: e.target.value })}/>
                        </div>
                        <div className="w-full md:w-1/2 mt-5 md:mt-0 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                type de prestation*
                            </label>
                            <select className="block w-full bg-gray-200 text-grey-darker border border-grey-200 rounded h-10 px-4 md:w-full " required name="type" value={this.state.type} onChange={e => this.setState({ type: e.target.value })}>
                                <option value="web">Site web</option>
                                <option value="video">Prestation vidéo</option>
                                <option value="photo">Prestation photo</option>
                            </select>
                        </div>
                        <div className="w-full px-3 mt-5">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Message*
                            </label>
                            <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" name="message" placeholder="Veuillez écrire votre message ici" value={this.state.message} required onChange={e => this.setState({ message: e.target.value })}/>
                        </div>
                        <p className="text-gray-600 text-xs italic">les champs avec * sont obligatoires</p>
                    </div>
                    <div className="md:flex float-right md:items-center">
                        <div className="md:w-1/3">
                            <button className="shadow bg-black transition duration-500 ease-in-out transform hover:bg-green-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" onClick={e => this.handleFormSubmit(e)}>
                                Envoyer
                            </button>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">

                        </div>
                    </div>
                    <div>
                    <ReCAPTCHA sitekey={process.env.ReCAPTCHA_KEY} onChange={e => this.setState({ captcha: e.target.value })}/>
                    </div>
                </form>
                </div>
      </div>
    </section>

        );
    }
};

export default Contact;