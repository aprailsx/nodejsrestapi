var express = require('express');
var router 	= express.Router();
var Book	=require('../models/Book');

router.get('/:id?',function(req,res,next){

	if(req.params.id){

	    Book.getBookById(req.params.id,function(err,rows){

	        if(err){
	            res.json(err);
	        }else{
	            res.json(rows);
	        }
	    });
	} else {

	 Book.getAllBooks(function(err,rows){

	        if(err){
	            res.json(err);
	        }else{
	            res.json(rows);
	        }
	 
	    });
	}
});


router.post('/',function(req,res,next){

    Book.addBook(req.body,function(err,count){

    	if (err) {
    		res.json(err);
    	} else {
    		res.json(req.body);//or return count for 1 & 0
    	}
        
    });
});
 

router.post('/:id',function(req,res,next){
	Book.deleteAll(req.body,function(err,count){
		
		if (err) {
			res.json(err);
		} else {
			res.json(count);
		}

	});
});

router.delete('/:id',function(req,res,next){

    Book.deleteBook(req.params.id,function(err,count){

    	if (err) {
    		res.json(err);
    	} else {
    		res.json(count);
    	}

    });
});
router.put('/:id',function(req,res,next){

    Book.updateBook(req.params.id,req.body,function(err,rows){

    	if (err) {
    		res.json(err);
    	} else {
    		res.json(rows);
    	}

    });
});

module.exports=router;