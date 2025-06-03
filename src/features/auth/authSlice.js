<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit';

// Helper function to safely parse localStorage items
const getLocalStorageItem = (key) => {
    try {
        const item = localStorage.getItem(key);
        if (item === "undefined") {
            localStorage.removeItem(key); // Clean up invalid data
            return null;
        }
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error(`Error parsing localStorage item "${key}":`, error);
        localStorage.removeItem(key); // Remove corrupt data
        return null;
    }
};

const initialState = {
    user: getLocalStorageItem('user'),
    token: localStorage.getItem('token'),
    quizProgress: getLocalStorageItem('quizProgress') || {},
    chapterProgress: getLocalStorageItem('chapterProgress') || {},
    topicProgress: getLocalStorageItem('topicProgress') || {},
};
=======
// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    quizProgress: JSON.parse(localStorage.getItem('quizProgress')) || {},
    chapterProgress: JSON.parse(localStorage.getItem('chapterProgress')) || {},
    topicProgress: JSON.parse(localStorage.getItem('topicProgress')) || {}, 
};


>>>>>>> bd0be452845bf8b902d31662959c737593c02b55

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            localStorage.setItem('token', action.payload.token);
        },
        updateUser: (state, action) => {
            state.user = { ...state.user, ...action.payload };
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        updateQuizScore: (state, action) => {
            const { quizId, score } = action.payload;
            state.quizProgress = {
                ...state.quizProgress,
                [quizId]: score
            };
            localStorage.setItem('quizProgress', JSON.stringify(state.quizProgress));
        },
        updateChapterProgress: (state, action) => {
            const { chapterId, progress } = action.payload;
            state.chapterProgress = {
                ...state.chapterProgress,
                [chapterId]: progress
            };
            localStorage.setItem('chapterProgress', JSON.stringify(state.chapterProgress));
        },
        markTopicCompleted: (state, action) => {
            const { topicId } = action.payload;
            if (state.user) {
                state.topicProgress[topicId] = true;
                localStorage.setItem('topicProgress', JSON.stringify(state.topicProgress));
            }
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.quizProgress = {};
            state.chapterProgress = {};
<<<<<<< HEAD
            state.topicProgress = {};
=======
            state.topicProgress = {}; // Add this line
>>>>>>> bd0be452845bf8b902d31662959c737593c02b55
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            localStorage.removeItem('quizProgress');
            localStorage.removeItem('chapterProgress');
<<<<<<< HEAD
            localStorage.removeItem('topicProgress');
=======
            localStorage.removeItem('topicProgress'); // Add this line
>>>>>>> bd0be452845bf8b902d31662959c737593c02b55
        },
    },
});

export const {
    setCredentials,
    logout,
    updateUser,
    updateQuizScore,
    updateChapterProgress,
    markTopicCompleted,
} = authSlice.actions;

export default authSlice.reducer;