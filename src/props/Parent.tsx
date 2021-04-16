import {ChildAsFc} from './Child';


const Parent = () => {
    return <ChildAsFc color="red" onClick={()=>{console.log("hello")}}>
         Test
        </ChildAsFc>
};

export default Parent;