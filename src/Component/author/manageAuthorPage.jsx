var React= require('react');
var AuthorForm= require('./AuthorForm.jsx');
var AuthorApi = require('../../api/authorApi')
var Router=require('react-router')
var ManageAuhtorPage=React.createClass({
    mixins:[
        Router.Navigation
    ],
    getInitialState:function(){
        return{
             author:{id:'',firstName:'',lastName:''},
            errors:{}

        };

    },
    authorFromIsValid:function(){
      var formIsvalid= true;
        this.state.errors={};
        if(this.state.author.firstName.length<3){
            this.state.errors.firstName='First name must be at lease 3 character'
        }
        this.setState({errors:this.state.errors})
    },
    setAuthorState:function(event){
      var field=event.target.name;
        var value=event.target.value;
        this.state.author[field]=value;
        return this.setAuthorState({author:this.state.author})
    },
    saveAuthor:function(event){
      event.preventDefault();
        if(!this.authorFromIsValid()){
            return;
        }
        AuthorApi.saveAuthor(this.state.author);
        this.transitionTo('authors')
    },
    render:function(){
        return(
            /* <h1>Manage Auhtor</h1> */
            <AuthorForm  author={this.state.author}
                         onSave={this.saveAuthor}
                         onChage={this.setAuthorState} />
        );
    }
});

module.exports=ManageAuhtorPage