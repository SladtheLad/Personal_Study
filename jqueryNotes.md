# jQuery Notes

* document.getElementById('contents'); //returns a HTML DOM Object

* var contents = $('#contents');  //returns a jQuery Object
In jQuery, to get the same result as document.getElementById, you can access the jQuery Object and get the first element in the object (Remember JavaScript objects act similar to associative arrays).

* var contents = $('#contents')[0]; //returns a HTML DOM Object