import React from 'react';
import { Container, FormButton, FormH1, FormInput, FormLabel, FormWrap, Icon, FormContent, Form, Text } from './SigninElements';

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">VisualizeAlgo</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forget Password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
            
        </>
    )
}

export default SignIn;
