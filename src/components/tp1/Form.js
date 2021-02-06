import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class Form extends Component{
    constructor(){
        super();
        this.state={
            num1:'',
            num2:'',
            res:''
        }
    }
    


resetForm = () => {
   this.setState({
       ...this.state,
       num1:'',
       num2:'',
       res:''
   })
}
    
    hamdlenum1 = (event) =>{
        this.setState({
            num1:event.target.value
        })
    }
    hamdlenum2 = (event) =>{
        this.setState({
            num2:event.target.value
        })
        
    }
  
    icm = (event) =>{
       event.preventDefault();
       const res = (this.state.num1)/(Math.pow(this.state.num2,2));       
        if (res < 18.5)
            return this.setState({
                message: <div class="border text-center">le resultat est:{res} <br />
                                    <p class="text-danger">insuffisance pondérale</p> 
                                     </div>})

       else if (res > 18.5 && res < 24.9)
           return this.setState({
               message: <div class="border text-center">le resultat est:{res} <br />
        <p class="text-success">poids normal</p> 
         </div>})

       else if (res > 25 && res < 29.9)
           return this.setState({
               message: <div class="border text-center">le resultat est:{res} <br />
       <p class="text-success">surpoids</p> 
        </div>})
       else if (res > 30)
           return this.setState({
               message: <div class="border text-center">le resultat est:{res} <br />
         <p class="text-danger">obésité</p> 
          </div>})
        
        
    }
  
 render(){
  
    

        return(
            <div class="card text-center h-100 m-5">
  <h5 class="card-header">
    Calcul d'IMC
  </h5>
              <div class="card-body">
                <form onSubmit={this.icm} >
                    <div class="form-group">
                        <div><label for="formGroupExampleInput">Poids (en Kg)</label></div>
                        <input type="text" value={this.state.num1} onChange={this.hamdlenum1}class="w-100" placeholder="Entrer le poid"/>
                    </div>
                    <div class="form-group">
                        <div><label>Taille (en m)</label></div>
                        <input type="text"  value={this.state.num2} onChange={this.hamdlenum2} class="w-100" placeholder="Entrer la taille" />
                    </div>
                    <div>
                    <button type="reset"class="btn btn-secondary m-3" name="Annuler" onClick={this.resetForm}>Réinitialiser </button>
                    <button type="submit"class="btn btn-primary">Calculer</button>
                    
                    </div>

                </form>
                <div>
                {this.state.message}
                </div>
                </div>
            </div>

           


        );

 }


}

export default Form;