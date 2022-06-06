import React from 'react'

const CREATE_POST = "create a post";
const ADD_PHOTO = "add a photo";
const ADD_VIDEO = "add a video";

const windowStates = [CREATE_POST, ADD_PHOTO, ADD_VIDEO];

export const postCreationState = {
    popupState: false,
    windowState: windowStates[0],
};

export const PostCreationContext = React.createContext(
  postCreationState // default value
);