// Employee authentication
export const setToLocalStorage = (email : any) => {
    
    localStorage.setItem('user', email)
};

// Get user loggedin data from local storage.
export const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem('user');
    return user;
}

// Remove user data from logout
export const deleteUser = () => {
    localStorage.removeItem('user');
};