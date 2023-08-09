import {Text, Heading, Box } from "@chakra-ui/react";
import { isRouteErrorResponse,useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
const ErrorPage = ()=>{
    const error = useRouteError();

    return(
<>
<NavBar/>
<Box padding={5}>
<Heading>Oops</Heading>
<Text>{isRouteErrorResponse(error)
?'this page does not exist'
:'an unspected error occured'}
</Text>
</Box>
</>
    )
}
export default ErrorPage;