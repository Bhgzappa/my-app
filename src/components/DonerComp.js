function DonerComp() {
    return(
        <div>
            <div className="sign-in">
                <input type="text" placeholder="Enter username"/>
                <input type="password" placeholder="Enter password"/>
                <button className="small">Sign In</button>
            </div>
            <div className="sign-up">
                <input type="name" placeholder="Enter name"/>
                <input type="name" placeholder="Enter username"/>
                <input type="email" placeholder="Enter email address"/>
                <input type="password" placeholder="Enter password"/>
                <input type="password" placeholder="Confirm password"/>
                <input type="text" placeholder="Enter contact"/>
                <button className="big">Sign Up</button>
            </div>
            </div>
    )
}
export default DonerComp;