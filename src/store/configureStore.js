import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import Parse from "parse"

// MAIN ACTIONS

export const handleGlutter = () => {
  return async dispatch => {
    const windowResize = () => {
      const glutter = window.innerWidth > 1400 ? (window.innerWidth - 1400) / 2 : 0;
      dispatch(setGlutter(glutter))
    }

    windowResize();
    window.addEventListener("resize", windowResize);
  }
}

export const getAllEventsFromGivenPlace = (place) => {
  return async dispatch => {
    const BookingEventInfo = Parse.Object.extend("BookingEventInfo");
    const query = new Parse.Query(BookingEventInfo);
    query.equalTo("place", place);
    const allEvents = await query.find();

    dispatch(setAllEvents(allEvents));
  }
}

export const getEventDetailedById = (id) => {
  return async (dispatch, getState) => {
    let event;

    if (getState().main.allEvents)
      event = getState().main.allEvents.find(item => item.id === id);
    else {
      const BookingEventInfo = Parse.Object.extend("BookingEventInfo");
      const query = new Parse.Query(BookingEventInfo);
      event = await query.get(id);
    }

    dispatch(setEvent(event));
  }
}

// STATE ACTIONS

const setGlutter = glutter => {
  return {
    type: "SET_GLUTTER",
    glutter: glutter
  }
}

export const setHistory = history => {
  return {
    type: "LOAD_HISTORY",
    history: history
  };
};

const setAllEvents = allEvents => {
  return {
    type: "SET_ALL_EVENTS",
    allEvents: allEvents
  }
}

const setEvent = event => {
  return {
    type: "SET_EVENT",
    event: event
  }
}

// REDUCERS
const initialState = {
  glutter: 0,
  history: null,
  allEvents: null,
  event: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GLUTTER":
      return {
        ...state,
        glutter: action.glutter
      }
    case "LOAD_HISTORY":
      return {
        ...state,
        history: action.history
      }
    case "SET_ALL_EVENTS":
      return {
        ...state,
        allEvents: action.allEvents
      }
    case "SET_EVENT":
      return {
        ...state,
        event: action.event
      }
    default:
      return state;
  }
}



// CONFIGURE
const rootReducer = combineReducers({
  main: reducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk, logger));
}

export default configureStore;