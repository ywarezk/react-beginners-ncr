/**
 * Javascript - "Single Threaded" - 95% single thread
 automatic multi threading
 
 Disadvantage
 Performance?
 
 Advantage
 - easy to develop
 

doSomething(() => {
	
})
 
--------o-|-->
--------X---->

--------o----o----o----o---------->
 
 */
 
// --------o-|-->
setTimeout(() => {
	console.log('timer');
}, 1000);

// --------o---o---o---o---o-->
setInterval(() => {
	console.log('interval')
}, 3000)

console.log('after timer');
 
// Promise
// uniform way for dealing with some async code 
// --------o-|-->
// --------X---->

const timerExample: Promise<string> = new Promise((resolveZozo, reject) => {
	// axios
	// fetch
	
	// your async code will run in this callback
	setTimeout(() => {
		resolveZozo('hello world');
		// resolveZozo([])
		// reject(new Error('something happened'))
		
		/*
		if (response.status === 200) {
			resolve(response)
		} else {
			reject()
		}
		*/
	}, 1000);
	
})


timerExample.then(
	(msg) => {
		console.log(msg);
	},
	(err) => {
		console.log('deal with error ' + err.message);
	}
)

timerExample.then(
	(msg) => {
		console.log(msg);
	},
	(err) => {
		console.log('deal with error ' + err.message);
	}
)

timerExample.then(
	(msg) => {
		console.log(msg);
	},
	(err) => {
		console.log('deal with error ' + err.message);
	}
)

/**
Easy way to deal with promises
@returns {Promise}
 */
async function dogName() {
	const timerResponse = await timerExample;
	// await promise2
	// await promise3
	return 'Pigletshvily ' + timerResponse;
}

const promiseWithName: Promise<string> = dogName();

promiseWithName.then((pigletshvily) => {
	console.log(pigletshvily);
})

/**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

 */