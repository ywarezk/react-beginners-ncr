/**
 * Describes how a user in our app looks like
 */
 
export interface User {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	token: string;
}