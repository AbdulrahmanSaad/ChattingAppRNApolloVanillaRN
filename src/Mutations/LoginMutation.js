import gql from 'graphql-tag';

const LoginMutation = gql`
    mutation Login(
        $email: String!
        $password: String!
        ){
        login(auth: {
            email: $email,
            password: $password
        }){
            error
            token
        }
    }
`

export default LoginMutation;