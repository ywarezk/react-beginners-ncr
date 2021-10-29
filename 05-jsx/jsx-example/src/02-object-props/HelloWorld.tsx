
// <h1 class="hello" style="background-color: red;">
export function HelloWorld() {
	// h1 dom element
	return (
		<h1 className="hello" style={ {backgroundColor: 'red'} }>
			hello world
		</h1>
	)
}

// <label for="myEmail">
// we usually don't place properties of reserved words
// htmlFor
export function MyForm() {
	return (
		<form>
			<label htmlFor="myEmail">
				Enter your email
			</label>
			<input type="email" id="myEmail" />
		</form>
	)
}