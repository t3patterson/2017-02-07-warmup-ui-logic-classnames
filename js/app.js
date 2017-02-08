//-------------------------------------
// PART 1 : write a function called `createClassNames`
//        the function should accept an object with
//       keys that represent a possible css-class 
//       and values that are booleans.
//       
//       depending on the value of the boolean, 
//       the function should return a string of class names 
//  
//      var btnStyles = {
//         'btn': true,
//         'btn_active' : true,
//         'btn_large' : true,
//         'btn_special' : false
//      }
//
//      createClassNames(btnStyles)
//      ==> 'btn btn_large btn_active'
// 
//-------------------------------------


// INPUT : Object
function createClassNames(styleClassesObj){
	var classNameStr = ''
		
	for(var propName in styleClassesObj  ){
		var boolValueForClassNameProperty = styleClassesObj[propName]
		if (boolValueForClassNameProperty === true){
			classNameStr += " " + propName
		}
	}
	return classNameStr
	//OUTPUT : string (space separated)
}





// UI Test for Part 1  (don't touch)
//----------------------------
var segmentDemo = document.querySelector('#example-1a')
var segment2Demo = document.querySelector('#example-1b')

var elementClassObj = {
	'segment': true,
	'segment_highlighted' : true,
	'segment_disabled' : true,
	'segment_inverted' : false
}

var theClassNames = createClassNames(elementClassObj) 
//=>'segment segment_highlighted segment_disabled '

segmentDemo.className  =  theClassNames
segment2Demo.className =  theClassNames
//----------------------------


//-------------------------------------
// PART 2 : Iterate over the values from `userList`
//         from dataset.js and create U.I. card components
//         for each of the elements in the array
//  
//        use the `createClassNames` function to       
//        create and pass it an object of class name values
//        for each of the users based on the user's info.
//		    
//        Look at index.html to see the markup.
//        
//        You will append the card-components to the innerHTML
//        of the element with an id of 'user-profiles'
//        
//-------------------------------------

var userProfilesContainerEl = document.querySelector('#user-profiles')
var bigHtmlStr = ''

forEach(userList, function(userObj, index, theArray){
	console.log(userObj)
	var classRulesObj = {
		card: true,
		'card_is-important': userObj.importantUser,
		'card_is-felon': userObj.felonious
	}
	var classNamesForCard = createClassNames(classRulesObj)

	var cardHtml =  '<div class="' + classNamesForCard +'">'
	    cardHtml += 	 '<img src="'+ userObj.imgUrl+'" alt="...">'
	    cardHtml += 	 '<h5>' + userObj.name +  '</h5>'
		 cardHtml += '</div>'

	bigHtmlStr += cardHtml
})

userProfilesContainerEl.innerHTML = bigHtmlStr 
