import foferror from '../Assets/error404.jpg';
import { Center } from "../components/Formatting/StyledComponents";

export const Error = () => {
    return (
        <>
            <Center>
                <div><img src={foferror} alt="This page does not exist" height={750}/></div>
            </Center>
        </>
    );
}