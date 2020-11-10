/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSpace = /* GraphQL */ `
  subscription OnCreateSpace($username: String) {
    onCreateSpace(username: $username) {
      id
      username
      userId
      defaultProfile
      profileKey
      profileSize
      backgroundKey
      backgroundSize
      userDetails
      language
      preference
      createdAt
      updatedAt
      following {
        items {
          id
          createdAt
          updatedAt
          username
          userId
          followingId
          followingSpaceId
          followingUserSpace {
            id
            username
            userId
            defaultProfile
            profileKey
            profileSize
            backgroundKey
            backgroundSize
            userDetails
            language
            preference
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      follower {
        items {
          id
          createdAt
          updatedAt
          username
          userId
          followingId
          followingSpaceId
          followingUserSpace {
            id
            username
            userId
            defaultProfile
            profileKey
            profileSize
            backgroundKey
            backgroundSize
            userDetails
            language
            preference
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          updatedAt
          postId
          username
          userId
          post {
            id
            createdAt
            updatedAt
            username
            userId
            userSpaceId
            title
            content
            hashtags
            status
          }
        }
        nextToken
      }
      posts {
        items {
          id
          createdAt
          updatedAt
          username
          userId
          userSpaceId
          title
          content
          hashtags
          status
          likes {
            nextToken
          }
          postImages {
            nextToken
          }
          comments {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateSpace = /* GraphQL */ `
  subscription OnUpdateSpace($username: String) {
    onUpdateSpace(username: $username) {
      id
      username
      userId
      defaultProfile
      profileKey
      profileSize
      backgroundKey
      backgroundSize
      userDetails
      language
      preference
      createdAt
      updatedAt
      following {
        items {
          id
          createdAt
          updatedAt
          username
          userId
          followingId
          followingSpaceId
          followingUserSpace {
            id
            username
            userId
            defaultProfile
            profileKey
            profileSize
            backgroundKey
            backgroundSize
            userDetails
            language
            preference
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      follower {
        items {
          id
          createdAt
          updatedAt
          username
          userId
          followingId
          followingSpaceId
          followingUserSpace {
            id
            username
            userId
            defaultProfile
            profileKey
            profileSize
            backgroundKey
            backgroundSize
            userDetails
            language
            preference
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          updatedAt
          postId
          username
          userId
          post {
            id
            createdAt
            updatedAt
            username
            userId
            userSpaceId
            title
            content
            hashtags
            status
          }
        }
        nextToken
      }
      posts {
        items {
          id
          createdAt
          updatedAt
          username
          userId
          userSpaceId
          title
          content
          hashtags
          status
          likes {
            nextToken
          }
          postImages {
            nextToken
          }
          comments {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteSpace = /* GraphQL */ `
  subscription OnDeleteSpace($username: String) {
    onDeleteSpace(username: $username) {
      id
      username
      userId
      defaultProfile
      profileKey
      profileSize
      backgroundKey
      backgroundSize
      userDetails
      language
      preference
      createdAt
      updatedAt
      following {
        items {
          id
          createdAt
          updatedAt
          username
          userId
          followingId
          followingSpaceId
          followingUserSpace {
            id
            username
            userId
            defaultProfile
            profileKey
            profileSize
            backgroundKey
            backgroundSize
            userDetails
            language
            preference
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      follower {
        items {
          id
          createdAt
          updatedAt
          username
          userId
          followingId
          followingSpaceId
          followingUserSpace {
            id
            username
            userId
            defaultProfile
            profileKey
            profileSize
            backgroundKey
            backgroundSize
            userDetails
            language
            preference
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          updatedAt
          postId
          username
          userId
          post {
            id
            createdAt
            updatedAt
            username
            userId
            userSpaceId
            title
            content
            hashtags
            status
          }
        }
        nextToken
      }
      posts {
        items {
          id
          createdAt
          updatedAt
          username
          userId
          userSpaceId
          title
          content
          hashtags
          status
          likes {
            nextToken
          }
          postImages {
            nextToken
          }
          comments {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateFollower = /* GraphQL */ `
  subscription OnCreateFollower($username: String) {
    onCreateFollower(username: $username) {
      id
      createdAt
      updatedAt
      username
      userId
      followingId
      followingSpaceId
      followingUserSpace {
        id
        username
        userId
        defaultProfile
        profileKey
        profileSize
        backgroundKey
        backgroundSize
        userDetails
        language
        preference
        createdAt
        updatedAt
        following {
          items {
            id
            createdAt
            updatedAt
            username
            userId
            followingId
            followingSpaceId
          }
          nextToken
        }
        follower {
          items {
            id
            createdAt
            updatedAt
            username
            userId
            followingId
            followingSpaceId
          }
          nextToken
        }
        likes {
          items {
            id
            createdAt
            updatedAt
            postId
            username
            userId
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            username
            userId
            userSpaceId
            title
            content
            hashtags
            status
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateFollower = /* GraphQL */ `
  subscription OnUpdateFollower($username: String) {
    onUpdateFollower(username: $username) {
      id
      createdAt
      updatedAt
      username
      userId
      followingId
      followingSpaceId
      followingUserSpace {
        id
        username
        userId
        defaultProfile
        profileKey
        profileSize
        backgroundKey
        backgroundSize
        userDetails
        language
        preference
        createdAt
        updatedAt
        following {
          items {
            id
            createdAt
            updatedAt
            username
            userId
            followingId
            followingSpaceId
          }
          nextToken
        }
        follower {
          items {
            id
            createdAt
            updatedAt
            username
            userId
            followingId
            followingSpaceId
          }
          nextToken
        }
        likes {
          items {
            id
            createdAt
            updatedAt
            postId
            username
            userId
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            username
            userId
            userSpaceId
            title
            content
            hashtags
            status
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteFollower = /* GraphQL */ `
  subscription OnDeleteFollower($username: String) {
    onDeleteFollower(username: $username) {
      id
      createdAt
      updatedAt
      username
      userId
      followingId
      followingSpaceId
      followingUserSpace {
        id
        username
        userId
        defaultProfile
        profileKey
        profileSize
        backgroundKey
        backgroundSize
        userDetails
        language
        preference
        createdAt
        updatedAt
        following {
          items {
            id
            createdAt
            updatedAt
            username
            userId
            followingId
            followingSpaceId
          }
          nextToken
        }
        follower {
          items {
            id
            createdAt
            updatedAt
            username
            userId
            followingId
            followingSpaceId
          }
          nextToken
        }
        likes {
          items {
            id
            createdAt
            updatedAt
            postId
            username
            userId
          }
          nextToken
        }
        posts {
          items {
            id
            createdAt
            updatedAt
            username
            userId
            userSpaceId
            title
            content
            hashtags
            status
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($username: String) {
    onCreateLike(username: $username) {
      id
      createdAt
      updatedAt
      postId
      username
      userId
      post {
        id
        createdAt
        updatedAt
        username
        userId
        userSpaceId
        title
        content
        hashtags
        status
        likes {
          items {
            id
            createdAt
            updatedAt
            postId
            username
            userId
          }
          nextToken
        }
        postImages {
          items {
            id
            createdAt
            updatedAt
            postId
            username
            userId
            desktopKey
            mobileKey
            thumbnailKey
            size
            metadata
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            postId
            username
            userId
            message
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($username: String) {
    onUpdateLike(username: $username) {
      id
      createdAt
      updatedAt
      postId
      username
      userId
      post {
        id
        createdAt
        updatedAt
        username
        userId
        userSpaceId
        title
        content
        hashtags
        status
        likes {
          items {
            id
            createdAt
            updatedAt
            postId
            username
            userId
          }
          nextToken
        }
        postImages {
          items {
            id
            createdAt
            updatedAt
            postId
            username
            userId
            desktopKey
            mobileKey
            thumbnailKey
            size
            metadata
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            postId
            username
            userId
            message
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($username: String) {
    onDeleteLike(username: $username) {
      id
      createdAt
      updatedAt
      postId
      username
      userId
      post {
        id
        createdAt
        updatedAt
        username
        userId
        userSpaceId
        title
        content
        hashtags
        status
        likes {
          items {
            id
            createdAt
            updatedAt
            postId
            username
            userId
          }
          nextToken
        }
        postImages {
          items {
            id
            createdAt
            updatedAt
            postId
            username
            userId
            desktopKey
            mobileKey
            thumbnailKey
            size
            metadata
          }
          nextToken
        }
        comments {
          items {
            id
            createdAt
            updatedAt
            postId
            username
            userId
            message
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($username: String) {
    onCreatePost(username: $username) {
      id
      createdAt
      updatedAt
      username
      userId
      userSpaceId
      title
      content
      hashtags
      status
      likes {
        items {
          id
          createdAt
          updatedAt
          postId
          username
          userId
          post {
            id
            createdAt
            updatedAt
            username
            userId
            userSpaceId
            title
            content
            hashtags
            status
          }
        }
        nextToken
      }
      postImages {
        items {
          id
          createdAt
          updatedAt
          postId
          username
          userId
          desktopKey
          mobileKey
          thumbnailKey
          size
          metadata
        }
        nextToken
      }
      comments {
        items {
          id
          createdAt
          updatedAt
          postId
          username
          userId
          message
        }
        nextToken
      }
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($username: String) {
    onUpdatePost(username: $username) {
      id
      createdAt
      updatedAt
      username
      userId
      userSpaceId
      title
      content
      hashtags
      status
      likes {
        items {
          id
          createdAt
          updatedAt
          postId
          username
          userId
          post {
            id
            createdAt
            updatedAt
            username
            userId
            userSpaceId
            title
            content
            hashtags
            status
          }
        }
        nextToken
      }
      postImages {
        items {
          id
          createdAt
          updatedAt
          postId
          username
          userId
          desktopKey
          mobileKey
          thumbnailKey
          size
          metadata
        }
        nextToken
      }
      comments {
        items {
          id
          createdAt
          updatedAt
          postId
          username
          userId
          message
        }
        nextToken
      }
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($username: String) {
    onDeletePost(username: $username) {
      id
      createdAt
      updatedAt
      username
      userId
      userSpaceId
      title
      content
      hashtags
      status
      likes {
        items {
          id
          createdAt
          updatedAt
          postId
          username
          userId
          post {
            id
            createdAt
            updatedAt
            username
            userId
            userSpaceId
            title
            content
            hashtags
            status
          }
        }
        nextToken
      }
      postImages {
        items {
          id
          createdAt
          updatedAt
          postId
          username
          userId
          desktopKey
          mobileKey
          thumbnailKey
          size
          metadata
        }
        nextToken
      }
      comments {
        items {
          id
          createdAt
          updatedAt
          postId
          username
          userId
          message
        }
        nextToken
      }
    }
  }
`;
export const onCreatePostImage = /* GraphQL */ `
  subscription OnCreatePostImage($username: String) {
    onCreatePostImage(username: $username) {
      id
      createdAt
      updatedAt
      postId
      username
      userId
      desktopKey
      mobileKey
      thumbnailKey
      size
      metadata
    }
  }
`;
export const onUpdatePostImage = /* GraphQL */ `
  subscription OnUpdatePostImage($username: String) {
    onUpdatePostImage(username: $username) {
      id
      createdAt
      updatedAt
      postId
      username
      userId
      desktopKey
      mobileKey
      thumbnailKey
      size
      metadata
    }
  }
`;
export const onDeletePostImage = /* GraphQL */ `
  subscription OnDeletePostImage($username: String) {
    onDeletePostImage(username: $username) {
      id
      createdAt
      updatedAt
      postId
      username
      userId
      desktopKey
      mobileKey
      thumbnailKey
      size
      metadata
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($username: String) {
    onCreateComment(username: $username) {
      id
      createdAt
      updatedAt
      postId
      username
      userId
      message
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($username: String) {
    onUpdateComment(username: $username) {
      id
      createdAt
      updatedAt
      postId
      username
      userId
      message
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($username: String) {
    onDeleteComment(username: $username) {
      id
      createdAt
      updatedAt
      postId
      username
      userId
      message
    }
  }
`;
