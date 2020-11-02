/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listSpaces = /* GraphQL */ `
  query ListSpaces(
    $filter: ModelSpaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
            status
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getSpace = /* GraphQL */ `
  query GetSpace($id: ID!) {
    getSpace(id: $id) {
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
          status
          likes {
            nextToken
          }
          tags {
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
export const spaceByUserId = /* GraphQL */ `
  query SpaceByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelSpaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    spaceByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
            status
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getFollower = /* GraphQL */ `
  query GetFollower($id: ID!) {
    getFollower(id: $id) {
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
            status
          }
          nextToken
        }
      }
    }
  }
`;
export const listFollowers = /* GraphQL */ `
  query ListFollowers(
    $filter: ModelFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          following {
            nextToken
          }
          follower {
            nextToken
          }
          likes {
            nextToken
          }
          posts {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const followingByUserId = /* GraphQL */ `
  query FollowingByUserId(
    $userId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    followingByUserId(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          following {
            nextToken
          }
          follower {
            nextToken
          }
          likes {
            nextToken
          }
          posts {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const followerByUserId = /* GraphQL */ `
  query FollowerByUserId(
    $followingId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    followerByUserId(
      followingId: $followingId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          following {
            nextToken
          }
          follower {
            nextToken
          }
          likes {
            nextToken
          }
          posts {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
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
        tags {
          items {
            id
            createdAt
            updatedAt
            tag
            postId
            username
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
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          status
          likes {
            nextToken
          }
          tags {
            nextToken
          }
          postImages {
            nextToken
          }
          comments {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const likeByPostId = /* GraphQL */ `
  query LikeByPostId(
    $postId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likeByPostId(
      postId: $postId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          status
          likes {
            nextToken
          }
          tags {
            nextToken
          }
          postImages {
            nextToken
          }
          comments {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const likeByUserId = /* GraphQL */ `
  query LikeByUserId(
    $userId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likeByUserId(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          status
          likes {
            nextToken
          }
          tags {
            nextToken
          }
          postImages {
            nextToken
          }
          comments {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        username
        userId
        userSpaceId
        title
        content
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
        tags {
          items {
            id
            createdAt
            updatedAt
            tag
            postId
            username
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
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      createdAt
      updatedAt
      username
      userId
      userSpaceId
      title
      content
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
            status
          }
        }
        nextToken
      }
      tags {
        items {
          id
          createdAt
          updatedAt
          tag
          postId
          post {
            id
            createdAt
            updatedAt
            username
            userId
            userSpaceId
            title
            content
            status
          }
          username
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
export const postsByStatus = /* GraphQL */ `
  query PostsByStatus(
    $status: PostStatus
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByStatus(
      status: $status
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        username
        userId
        userSpaceId
        title
        content
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
        tags {
          items {
            id
            createdAt
            updatedAt
            tag
            postId
            username
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
      nextToken
    }
  }
`;
export const postsByUserId = /* GraphQL */ `
  query PostsByUserId(
    $userId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByUserId(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        username
        userId
        userSpaceId
        title
        content
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
        tags {
          items {
            id
            createdAt
            updatedAt
            tag
            postId
            username
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
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      createdAt
      updatedAt
      tag
      postId
      post {
        id
        createdAt
        updatedAt
        username
        userId
        userSpaceId
        title
        content
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
        tags {
          items {
            id
            createdAt
            updatedAt
            tag
            postId
            username
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
      username
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        tag
        postId
        post {
          id
          createdAt
          updatedAt
          username
          userId
          userSpaceId
          title
          content
          status
          likes {
            nextToken
          }
          tags {
            nextToken
          }
          postImages {
            nextToken
          }
          comments {
            nextToken
          }
        }
        username
      }
      nextToken
    }
  }
`;
export const tagsByPostId = /* GraphQL */ `
  query TagsByPostId(
    $postId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tagsByPostId(
      postId: $postId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        tag
        postId
        post {
          id
          createdAt
          updatedAt
          username
          userId
          userSpaceId
          title
          content
          status
          likes {
            nextToken
          }
          tags {
            nextToken
          }
          postImages {
            nextToken
          }
          comments {
            nextToken
          }
        }
        username
      }
      nextToken
    }
  }
`;
export const getPostImage = /* GraphQL */ `
  query GetPostImage($id: ID!) {
    getPostImage(id: $id) {
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
export const listPostImages = /* GraphQL */ `
  query ListPostImages(
    $filter: ModelPostImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const postImagesByPostId = /* GraphQL */ `
  query PostImagesByPostId(
    $postId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postImagesByPostId(
      postId: $postId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`;
export const commentsByPostId = /* GraphQL */ `
  query CommentsByPostId(
    $postId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByPostId(
      postId: $postId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
`;
