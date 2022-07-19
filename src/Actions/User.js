import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL
const token = localStorage.getItem('token');

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });

    const { data } = await axios.post(
      `${backendUrl}/api/v1/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "LoginSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });

    const postBody = {
      token
    }
    const { data } = await axios.post(`${backendUrl}/api/v1/me`, postBody);

    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFailure",
      payload: error.response.data.message,
    });
  }
};

export const getFollowingPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: "postOfFollowingRequest",
    });

    const postBody = {
      token
    }
    const { data } = await axios.post(`${backendUrl}/api/v1/posts`, postBody);
    dispatch({
      type: "postOfFollowingSuccess",
      payload: data.posts,
    });
  } catch (error) {
    dispatch({
      type: "postOfFollowingFailure",
      payload: error.response.data.message,
    });
  }
};

export const getMyPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: "myPostsRequest",
    });

    // const config = {
    //   headers: { Authorization: `Bearer ${userToken}` }
    // };
    const postBody = {
      token
    };
    const { data } = await axios.post(`${backendUrl}/api/v1/my/posts`, postBody);
    dispatch({
      type: "myPostsSuccess",
      payload: data.posts,
    });
  } catch (error) {
    dispatch({
      type: "myPostsFailure",
      payload: error.response.data.message,
    });
  }
};

export const getAllUsers =
  (name = "") =>
    async (dispatch) => {
      try {
        dispatch({
          type: "allUsersRequest",
        });

        const postBody = {
          token
        }
        const { data } = await axios.post(`${backendUrl}/api/v1/users?name=${name}`, postBody);
        dispatch({
          type: "allUsersSuccess",
          payload: data.users,
        });
      } catch (error) {
        dispatch({
          type: "allUsersFailure",
          payload: error.response.data.message,
        });
      }
    };

export const getAllFriends =
  (name = "") =>
    async (dispatch) => {
      try {
        dispatch({
          type: "allFriendsRequest",
        });
        const postBody = {
          token
        }
        const { data } = await axios.post(`${backendUrl}/api/v1/friends?name=${name}`, postBody);
        dispatch({
          type: "allFriendsSuccess",
          payload: data.friends,
        });
      } catch (error) {
        dispatch({
          type: "allFriendsFailure",
          payload: error.response.data.message,
        });
      }
    };

export const getAllFriendsOfOthers =
  (name = "") =>
    async (dispatch) => {
      try {
        dispatch({
          type: "allFriendsOfOthers",
        });
        const postBody = {
          token
        }
        const { data } = await axios.post(`${backendUrl}/api/v1/friends/others?name=${name}`, postBody);
        dispatch({
          type: "allFriendsOfOthersSuccess",
          payload: data.allFriendsOfOthers,
        });
      } catch (error) {
        dispatch({
          type: "allFriendsOfOthersFailure",
          payload: error.response.data.message,
        });
      }
    };

export const getAllMutualFriends =
  (name = "") =>
    async (dispatch) => {
      try {
        dispatch({
          type: "allMutualFriendsRequest",
        });

        const postBody = {
          token
        }
        const { data } = await axios.post(`${backendUrl}/api/v1/mutualFriends?name=${name}`, postBody);
        dispatch({
          type: "allMutualFriendsSuccess",
          payload: data.mutualFriends,
        });
      } catch (error) {
        dispatch({
          type: "allMutualFriendsFailure",
          payload: error.response.data.message,
        });
      }
    };

export const getAllRequests =
  (name = "") =>
    async (dispatch) => {
      try {
        dispatch({
          type: "allRequests",
        });
        const postBody = {
          token
        }
        const { data } = await axios.post(`${backendUrl}/api/v1/requests`, postBody);
        dispatch({
          type: "allRequestsSuccess",
          payload: data.requests,
        });
      } catch (error) {
        dispatch({
          type: "allRequestsFailure",
          payload: error.response.data.message,
        });
      }
    };

export const acceptFriendRequest =
  (id) =>
    async (dispatch) => {
      try {
        dispatch({
          type: "acceptFriendRequest",
        });
        const postBody = {
          token
        }
        const { data } = await axios.post(`${backendUrl}/api/v1/request/accept/${id}`, postBody);
        dispatch({
          type: "acceptFriendRequestSuccess",
          payload: data.requests,
        });
      } catch (error) {
        dispatch({
          type: "acceptFriendRequestFailure",
          payload: error.response.data.message,
        });
      }
    };

export const declineFriendRequest =
  (id) =>
    async (dispatch) => {
      try {
        dispatch({
          type: "declineFriendRequest",
        });
        const postBody = {
          token
        }
        const { data } = await axios.post(`${backendUrl}/api/v1/request/decline/${id}`, postBody);
        dispatch({
          type: "declineFriendRequestSuccess",
          payload: data.message,
        });
      } catch (error) {
        dispatch({
          type: "declineFriendRequestFailure",
          payload: error.response.data.message,
        });
      }
    };

export const getAllSuggestions =
  (name = "") =>
    async (dispatch) => {
      try {
        dispatch({
          type: "allSuggestions",
        });
        const postBody = {
          token
        }
        const { data } = await axios.post(`${backendUrl}/api/v1/suggestions`, postBody);
        dispatch({
          type: "allSuggestionsSuccess",
          payload: data.suggestions,
        });
      } catch (error) {
        dispatch({
          type: "allSuggestionsFailure",
          payload: error.response.data.message,
        });
      }
    };

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LogoutUserRequest",
    });

    const postBody = {
      token
    }
    await axios.post(`${backendUrl}/api/v1/logout`, postBody);

    dispatch({
      type: "LogoutUserSuccess",
    });
  } catch (error) {
    dispatch({
      type: "LogoutUserFailure",
      payload: error.response.data.message,
    });
  }
};

export const registerUser =
  (name, email, password, avatar) => async (dispatch) => {
    try {
      dispatch({
        type: "RegisterRequest",
      });

      const { data } = await axios.post(
        `${backendUrl}/api/v1/register`,
        { name, email, password, avatar },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "RegisterSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "RegisterFailure",
        payload: error.response.data.message,
      });
    }
  };

export const updateProfile = (name, email, avatar) => async (dispatch) => {
  try {
    dispatch({
      type: "updateProfileRequest",
    });

    const { data } = await axios.put(
      `${backendUrl}/api/v1/update/profile`,
      { name, email, avatar, token },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "updateProfileSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "updateProfileFailure",
      payload: error.response.data.message,
    });
  }
};

export const updatePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({
        type: "updatePasswordRequest",
      });

      const { data } = await axios.put(
        `${backendUrl}/api/v1/update/password`,
        { oldPassword, newPassword, token },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "updatePasswordSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "updatePasswordFailure",
        payload: error.response.data.message,
      });
    }
  };

export const deleteMyProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: "deleteProfileRequest",
    });

    const { data } = await axios.delete(`${backendUrl}/api/v1/delete/me`);

    dispatch({
      type: "deleteProfileSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteProfileFailure",
      payload: error.response.data.message,
    });
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({
      type: "forgotPasswordRequest",
    });

    const { data } = await axios.post(
      "/api/v1/forgot/password",
      {
        email,
        token
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "forgotPasswordSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "forgotPasswordFailure",
      payload: error.response.data.message,
    });
  }
};

export const resetPassword = (token, password) => async (dispatch) => {
  try {
    dispatch({
      type: "resetPasswordRequest",
    });

    const { data } = await axios.put(
      `${backendUrl}/api/v1/password/reset/${token}`,
      {
        password,
        token
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "resetPasswordSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "resetPasswordFailure",
      payload: error.response.data.message,
    });
  }
};

export const getUserPosts = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "userPostsRequest",
    });

    const postBody = {
      token
    }
    const { data } = await axios.post(`${backendUrl}/api/v1/userposts/${id}`, postBody);
    dispatch({
      type: "userPostsSuccess",
      payload: data.posts,
    });
  } catch (error) {
    dispatch({
      type: "userPostsFailure",
      payload: error.response.data.message,
    });
  }
};

export const getUserProfile = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "userProfileRequest",
    });

    const postBody = {
      token
    }
    const { data } = await axios.post(`${backendUrl}/api/v1/user/${id}`, postBody);
    dispatch({
      type: "userProfileSuccess",
      payload: data.user,
    });
    dispatch({
      type: "userIsFriend",
      payload: data.isFriend,
    });
    dispatch({
      type: "userIsRequested",
      payload: data.isRequested,
    });
  } catch (error) {
    dispatch({
      type: "userProfileFailure",
      payload: error.response.data.message,
    });
  }
};

export const friendRequestHandler = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "friendRequestHandler",
    });

    const postBody = {
      token
    }
    const { data } = await axios.post(`${backendUrl}/api/v1/request/${id}`, postBody);
    dispatch({
      type: "friendRequestHandlerSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "friendRequestHandlerFailure",
      payload: error.response.data.message,
    });
  }
};


export const followAndUnfollowUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "followUserRequest",
    });

    const postBody = {
      token
    }
    const { data } = await axios.post(`${backendUrl}/api/v1/follow/${id}`, postBody);
    dispatch({
      type: "followUserSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "followUserFailure",
      payload: error.response.data.message,
    });
  }
};
