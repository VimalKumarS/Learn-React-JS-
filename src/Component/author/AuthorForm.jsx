var React= require('react');
var Input= require('../common/textInput.jsx')
var AuhtorForm=React.createClass({
    render:function(){
        return(
           <form>
               <h1>Manage Auhtor</h1>
               <Input name="firstName"
                label="First Name"
                      value={this.props.author.firstName}
                      onChange={this.props.onChange}
               />
               <Input name="lastName"
                      label="Last Name"
                      value={this.props.author.lastName}
                      onChange={this.props.onChange}
               />
               <br/>
                <input type="submit" value="save"
                       onClick={this.props.onSave}
                       className="btn btn-default"/>
           </form>

        );
    }
});

module.exports=AuhtorForm


/*
*
 return(
 <form>
 <h1>Manage Auhtor</h1>
 <label htmlFor="firstName">First Name</label>
 <input type="text" name="firstName"
 className="form-control"
 placeholder="First Name"
 onChange={this.props.onChange}
 ref="firstName" value={this.props.author.firstName}/>
 <br/>
 <label htmlFor="lastName">First Name</label>
 <input type="text" name="lirstName"
 className="form-control"
 placeholder="Last Name"
 onChange={this.props.onChange}
 ref="lastName" value={this.props.author.firstName}/>
 <br/>
 <input type="submit" value="save" className="btn btn-default"/>
 </form>

 );
* */