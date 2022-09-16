import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface TokenPayload {
    accessToken : string | null;
    refreshToken : string | null;
    signature? : any
} 

export interface UserPayload  {
    id : string;
    fullname: string;
    email: string;
    bio: string ;
    city: string ;
    country: string ;
    gender: string;
    profilePhoto: string;
    phoneNumber : string ;
    token : TokenPayload;
}

export interface UserState extends UserPayload {
    onBoardingComplete: boolean;
    isAuthenticated: boolean;
}

const initialState : UserState = {
    id : '',
    fullname: '',
    email: '',
    bio: '',
    city: '',
    country: '',
    gender: '',
    profilePhoto: '',
    phoneNumber : '',
    isAuthenticated: false,
    onBoardingComplete: false,
    token : {
        accessToken : '',
        refreshToken : '',
        signature : ''
    }
}

const removeLocalState  = async() => {
    try {
        await AsyncStorage.removeItem("state");
        return;
    }catch(err){
        console.log(err);
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        endOnBoarding: (state) => {
            state.onBoardingComplete = true;
        },
        signInUser : (state, action: {payload : UserPayload}) => {
            state.id = action.payload.id
            state.fullname = action.payload.fullname;
            state.email = action.payload.email;
            state.bio = action.payload.bio;
            state.city = action.payload.city;
            state.country = action.payload.country;
            state.gender = action.payload.gender;
            state.phoneNumber = action.payload.phoneNumber;
            state.profilePhoto = action.payload.profilePhoto;
            state.isAuthenticated = true;
            state.token.accessToken = action.payload.token.accessToken;
            state.token.refreshToken = action.payload.token.refreshToken;
        },
        updateUserData : (state, action: {payload : UserPayload}) => {
            state.fullname = action.payload.fullname;
            state.email = action.payload.email;
            state.bio = action.payload.bio;
            state.city = action.payload.city;
            state.country = action.payload.country;
            state.gender = action.payload.gender;
            state.phoneNumber = action.payload.phoneNumber;
            state.profilePhoto = action.payload.profilePhoto;
        },
        signOutUser : (state) => {
            state.id = '';
            state.fullname = '';
            state.email = '';
            state.bio = '';
            state.city = '';
            state.country = '';
            state.profilePhoto = '';
            state.isAuthenticated = false;
            state.token.accessToken = '';
            state.token.refreshToken = '';
            state.token.signature = ''
            removeLocalState();
        },
        setAuthToken: (state, action) => {
            state.token.accessToken = action.payload;
        }
    }
});

export const { endOnBoarding, updateUserData, signInUser, signOutUser, setAuthToken } = userSlice.actions;
export const authState = (state: RootState) => state.user.isAuthenticated;
export default userSlice.reducer;