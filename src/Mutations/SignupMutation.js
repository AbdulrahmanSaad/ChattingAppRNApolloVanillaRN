import gql from 'graphql-tag';

const SignupMutation = gql`
    mutation Login(
        $email: String!
        $password: String!
        ){
            createUser(createUserInput: {
            email: $email,
            password: $password
        }){
            _Id
        }
    }
`

export default LoginMutation;