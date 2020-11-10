/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSpace = /* GraphQL */ `
  mutation CreateSpace(
    $input: CreateSpaceInput!
    $condition: ModelSpaceConditionInput
  ) {
    createSpace(input: $input, condition: $condition) {
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
export const updateSpace = /* GraphQL */ `
  mutation UpdateSpace(
    $input: UpdateSpaceInput!
    $condition: ModelSpaceConditionInput
  ) {
    updateSpace(input: $input, condition: $condition) {
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
export const deleteSpace = /* GraphQL */ `
  mutation DeleteSpace(
    $input: DeleteSpaceInput!
    $condition: ModelSpaceConditionInput
  ) {
    deleteSpace(input: $input, condition: $condition) {
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
export const createFollower = /* GraphQL */ `
  mutation CreateFollower(
    $input: CreateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    createFollower(input: $input, condition: $condition) {
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
export const updateFollower = /* GraphQL */ `
  mutation UpdateFollower(
    $input: UpdateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    updateFollower(input: $input, condition: $condition) {
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
export const deleteFollower = /* GraphQL */ `
  mutation DeleteFollower(
    $input: DeleteFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    deleteFollower(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createPostImage = /* GraphQL */ `
  mutation CreatePostImage(
    $input: CreatePostImageInput!
    $condition: ModelPostImageConditionInput
  ) {
    createPostImage(input: $input, condition: $condition) {
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
export const updatePostImage = /* GraphQL */ `
  mutation UpdatePostImage(
    $input: UpdatePostImageInput!
    $condition: ModelPostImageConditionInput
  ) {
    updatePostImage(input: $input, condition: $condition) {
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
export const deletePostImage = /* GraphQL */ `
  mutation DeletePostImage(
    $input: DeletePostImageInput!
    $condition: ModelPostImageConditionInput
  ) {
    deletePostImage(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
