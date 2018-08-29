var db=require('../dbconnection');

var Book={

	getAllBooks:function(callback){

		return db.query("Select * from books",callback);

	},

	getBookById:function(id,callback){

	    return db.query("select * from books where book_id=?",[id],callback);
	},

	addBook:function(Book,callback){
		console.log("inside service");
		console.log(Book.book_id);
		
		return db.query("Insert into books (book_title, book_author, book_status) values(?,?,?)",
			[Book.book_title, Book.book_author, Book.book_status],callback);
	},

	deleteBook:function(id,callback){
	    return db.query("delete from books where book_id=?",[id],callback);
	},

	updateBook:function(id,Book,callback){
	    return  db.query("update books set book_title=?,book_author=?,book_status=? where book_id=?",
	    	[Book.book_title,Book.book_author,Book.book_status,id],callback);
	}

	// deleteAll:function(id,callback){

		// var delarr=[];
		// for(i=0;i<item.length;i++){

		// 	delarr[i]=item[i].book_id;
		// }
		// return db.query("delete from books where book_id in (?)",[id],callback);
	// }
};

module.exports=Book;