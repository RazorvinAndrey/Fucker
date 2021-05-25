const SET_QUESTIONS = 'SET-QUESTIONS';
const SET_LANGUAGE = 'SET_LANGUAGE';
const SET_FUCK = 'SET_FUCK';

let initialState = {
    sex: true,
    question: [
        {id: 0, text: "пукалка", weight: 2},
    ],
    language: "Rus",
    answer: [
        {id: 1, ans: 3},
    ],
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTIONS: {
            return {
                ...state,
                answer: action.question,
            }
        }
        case SET_LANGUAGE: {
            return {
                language: action.language,
            }
        }
        case SET_FUCK: {
            return {
                sex: action.sex,
            }
        }
        default:
            return state;
    }
}

const setQuestion = (question) => ({type: SET_QUESTIONS, question})

export const getQuestion = (id, ans) => (dispatch) => {
    dispatch(setQuestion(ans));
}

export const change = (language)  => ({type: SET_LANGUAGE, language})
export const Fuck = (sex)  => ({type: SET_FUCK, sex})

export default appReducer;