import { useState, useEffect } from "react"
import { api } from "../../services";

import {ProgressComponent, ContentProgress} from './styles'


export function ProgressBar({processing}){
    const [progressValue, setProgressValue] = useState(0);
    const [intervalBar, setIntervalBar] = useState();

    /*setIntervalBar(
        setInterval(function() {
            api.get('/progress')
                .then(response => {
                    setProgressValue(response.data.progress);
                })
        }, 300)
    )*/

    useEffect(() => {
        if(processing){
            
        }
    },[])


    return(
        <ContentProgress processing>
            <ProgressComponent bar animated value={progressValue}>{`${progressValue}%`}</ProgressComponent>
        </ContentProgress>
    )
}