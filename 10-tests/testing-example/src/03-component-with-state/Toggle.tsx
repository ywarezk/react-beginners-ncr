import { FC, useState } from "react";


export const Toggle: FC = () => {
	const [isMessageVisible, setIsMessageVisible] = useState(true);
	
	return (
		<div>
			{
				isMessageVisible && (
					<h1 data-testid="message">
						Toggle Message
					</h1>
				)
			}
			<button data-testid="toggleButton" onClick={() => setIsMessageVisible(!isMessageVisible)}>
				Toggle text message
			</button>
		</div>
	)
}