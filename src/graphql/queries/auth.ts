export const LOGIN_MUTATION = `
  mutation Login($loginInput: LoginDto!) {
    login(loginInput: $loginInput) {
      accessToken
      refreshToken
      user {
        id
        name
        email
        role
        imageUrl
        phoneNumber
        isActive
        createdAt
        updatedAt
        gender
        dateOfBirth
        ownedFactory {
          name
          factoryStatus
        }
      }
    }
  }
`;
