var React= require("react");
var AuthorApi = require("../../api/authorApi")
var authorList= require("./authorList")
var AuthorStore= require('../../actions/authorStore.jsx')
var AuthorActions= require('../../actions/authorActions.jsx')
var Authors= React.createClass({
    getInitialState:function(){
        return{
                authors:[]
        }
    },
    /*componentWillMount:function(){
      this.setState({
          authors: AuthorApi.getAllAuthors()
      })
    },*/
    componentDidMount:function(){
        if(this.isMounted()){
            this.setState({
                authors: AuthorApi.getAllAuthors()
            })
        }
    },
    componentWillMount:function(){
     AuthorStore.addChangeListener(this._onchange)
    },
    componentWillUnmount:function(){
        AuthorStore.removeChangeListener(this._onchange)
    },

    _onchange:function(){
            this.setState({auhtors: AuthorStore.getAllAuhtors()})
    },

    render: function(){
        return (
          <div>
            <authorList authors={this.state.authors} />
          </div>
        );
    }
});