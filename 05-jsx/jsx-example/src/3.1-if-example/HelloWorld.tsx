
/*
const hello1 = function() {
	
}
*/

/*
const hello = (if (true) {
	return 'something'
} else {
	return 'something else'
})
*/

// 1. {} - expression
// 2. expression equal what attribute between tags suppose to get

export function HelloWorld() {
	const rand = Math.random(); // 0-1
	
	const message = rand > 0.5 ? 'something' : 'something else'
	
	return (
		<h1>
			{
				/*
				// this is not an expression - this is a statment - this is wrong
				if(rand > 0.5) {
					'something'
				} else {
					'something else'
				}
				*/
			}
			
			{
				rand > 0.5 ? 'something' : 'something else'
			}
			
			{
				function(){
					// return new Map();
					
					if (rand > 0.5) {
						return 'something'
					} else {
						return 'something else'
					}
				}()
			}
			
			{
				rand > 0.5 ? 'something' : null
			}
			
			{
				rand > 0.5 && 'something'
			}
			
			{
				rand > 0.5 ? null : 'something'
			}
			
			{
				rand > 0.5 || 'something'
			}
		</h1>
	)
}