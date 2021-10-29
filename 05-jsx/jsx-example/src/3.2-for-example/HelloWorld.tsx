/**

.tsx
somewhere in that file there is a jsx syntax

 */
 

export function List() {
	const myDogs: string[] = [
		'Pigletshvily',
		'Chaitovski',
		'sweetness',
		'fluffy belly'
	]
	
	return (
		<h1>
			{ myDogs }
		</h1>
	)
}

export function List2() {
	const myDogs: string[] = [
		'Pigletshvily',
		'Chaitovski',
		'sweetness',
		'fluffy belly'
	]

	return (
		<ul>
			{
				function(msg) {
					// [<li>Pigletshvily</li>, ...]
					const arrayOfLi = [];
					for(let i = 0; i<myDogs.length; i++) {
						arrayOfLi.push(
							<li>
								{myDogs[i]}
							</li>
						)
					}
					return arrayOfLi;
				}('hello')
			}
		</ul>
	)
}

export function List3() {
	const myDogs = [
		{id: 1, name: 'Pigletshvily'},
		{ id: 2, name: 'Chaitovski' },
		{ id: 3, name: 'sweetness' },
		{ id: 4, name: 'fluffy belly' },
	] // => [<li>...]
	
	return (
		<ul>
			{
				// []
				myDogs.map((dogName) => {
					return (
						<li key={dogName.id}>
							{dogName.name}
						</li>
					)
				})
			}
		</ul>
	)
}