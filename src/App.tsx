/*import {Button} from "@/components/ui/button";*/

import {Button} from "./components/ui/button";
import {Logout} from "./assets/icons/log-out.tsx";
import {Input} from "./components/ui/input/input.tsx";

export function App() {
    return <div>
        <div style={{display: 'flex', gap: '1rem', padding: '1rem'}}>
            <Button >
                Hello
            </Button>

            <Button variant={'secondary'}>
                Hello
            </Button>

            <Button variant={'tertiary'}>
                Hello
            </Button>

            <Button variant={'link'}>
                Hello
            </Button>

            <Button>
                <Logout width="23" height="23"/> Hello
            </Button>
        </div >
        <div style={{ padding: '1rem'}}>
            <div>
                <Input
                       placeholder={'Input'}
                       label={'Input'}
                       type='email'/>
            </div>
            <div>
                <Input
                       placeholder={'Input'}
                    label={'Input'}
                       type='password'/>
            </div>
            <div>
                <Input
                    placeholder={'Input search'}
                    type='text'/>
            </div>



        </div>
    </div>
}
