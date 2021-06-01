import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
//import { BehaviorSubject } from "rxjs";
//import { User } from "./user.model";

interface AuthResponseData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

@Injectable({providedIn: 'root'})
export class AuthService {
    //user = new BehaviorSubject<User>(null as any);

    constructor(private http: HttpClient) {}

    /**
     * This method used to get the sign details
     * @param email 
     * @param password 
     * @returns 
     */
    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAf2yDOwG0D4qvViYANQCQ8-8vxT7y4VS4',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
    }

    /**
     * This method is used to verfiy username and password
     * @param email 
     * @param password 
     * @returns 
     */
    login(email: string, password: string) {
        return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAf2yDOwG0D4qvViYANQCQ8-8vxT7y4VS4',
        {
            email: email,
            password: password,
            returnSecureToken: true
        })
    }
}


