var React= require('react');
var Router= require('react-router')
var Link= Router.Link;

var AuthorList= React.createClass({
    propTypes:{
      authors:React.PropTypes.array.isRequired
    },

    deleteAuthor:function(id,event){
      event.preventDefault();
        AuthorActions.deleteAuthor(id);
        
    },

    render: function () {
        var createAuthorRow = function (author) {
            return (
                <tr key={author.id}>
                    <td><a href={"/#authors/"+author.id}>{author.id}</a></td>
                    <td><a href="#" onClick={this.deleteAuthor.bind(this,author.id) }/></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };
        return (
            <div>
                <h1>Author</h1>
                <table className="table">
                    <thead>
                    <th>ID</th>
                    <th>Name</th>

                    </thead>
                    <tbody>
                    {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports=AuthorList;