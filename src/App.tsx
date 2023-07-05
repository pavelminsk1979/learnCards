
/*import {Button} from "@/components/ui/button";*/

import {Button} from "./components/ui/button";

export function App() {
    return <div style={{display:'flex', gap:'1rem', padding:'1rem'}}>
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

        <Button  disabled={true}>
            Hello
        </Button>

        <Button disabled={true} variant={'secondary'}>
            Hello
        </Button>

        <Button disabled={true} variant={'tertiary'}>
            Hello
        </Button>

        <Button disabled={true} variant={'link'}>
            Hello
        </Button>

    </div>
}
