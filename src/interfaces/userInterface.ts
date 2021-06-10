export interface UserSignUp {
    firstName : String,
    lastName : String,
    email : String,
    phoneNumber : String,
    gender : String,
    profileImage : String,
    bioData : String,
    password : String,
    confirmPassword : String
}

export interface UserLogin {
    userId: String,
    password: String
}