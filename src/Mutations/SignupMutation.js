import gql from 'graphql-tag';

const SignupMutation = gql`
    mutation CreateUser(
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

export default SignupMutation;