import { ReactNode } from "react"

type InfoBoxProps = {
    mode: 'hint' | 'warning',
    children: ReactNode
}

const InfoBox = ({mode, children}: InfoBoxProps) => {

    if(mode ===  'hint'){
        return (
            <>
                <aside className="infobox infobox-hint">
                    <p>{children}</p>
                </aside>
            </>
        )
    }else{
        return (
            <>
                <aside className="infobox infobox-warning warning--low">
                    <h2>Warning</h2>
                    <p>{children}</p>
                </aside>
            </>
        )
    } 
    
}

export default InfoBox