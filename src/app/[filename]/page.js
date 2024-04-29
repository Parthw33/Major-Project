'use client';

import axios from 'axios';
import React, {useEffect} from 'react';
import {useRouter} from 'next/router';
import { useState } from 'react';
import { clearTranscriptionItems } from '@/libs/awsTransciptionHelper';
import TranscriptionItem from '@/components/TranscriptionItem';
import TranscriptionEditor from '@/components/TranscriptionEditor';
import ResultVideo from '@/components/ResultVideo';

export default function FilePage({params}){
    const {filename} = params;
    const [isTranscribing, setIsTranscribing] = useState(false);
    const [isFetchingInfo , setIsFetchingInfo] = useState(false);
    const [awsTranscriptionItems, setAwsTranscriptionItems] = useState([]);

    useEffect(()=>{
        getTranscription();
    },[filename])

    function getTranscription(){

        setIsFetchingInfo(true);

        axios.get('/api/transcribe?filename='+filename).then(response => {
            setIsFetchingInfo(false);
            // console.log(response);
            const status = response.data?.status;
            const transcription = response.data?.transcription;
            if(status === 'IN_PROGRESS'){
                setIsTranscribing(true);
                setTimeout(getTranscription, 5000);
            }
            else{
                setIsTranscribing(false);
                const transcriptionItems = [];
                
                setAwsTranscriptionItems(clearTranscriptionItems(transcription?.results.items));
            }
        });
    }



    if(isTranscribing){
        return(
            <div>
                Transcribing {filename} .....
            </div>
        )
    }

    if(isFetchingInfo){
        return(
            <div>
                Fetching info for {filename} .....
            </div>
        )
    }

    return(
        <div>
            <div className='grid grid-cols-2 gap-16'>
            <div className=''>
                <h2 className='text-2xl text-center mb-4 text-white/80'>Transcription</h2>
                <TranscriptionEditor 
                    awsTranscriptionItems={awsTranscriptionItems}
                    setAwsTranscriptionItems={setAwsTranscriptionItems}
                />
{/* 
                {awsTranscriptionItems.length > 0 && awsTranscriptionItems.map((item, index) => (
                        <TranscriptionItem
                            item={item} 
                            handleStartTimeChange={()=> {}}
                            handleEndTimeChange={()=> {}}
                            handleContentChange={()=> {}}
                        />
                    ))} */}
            </div>
                <div>
                <h2 className='text-2xl text-center mb-4 text-white/80'>Result</h2>
                    <ResultVideo 
                        filename={filename} 
                        transcriptionItems={awsTranscriptionItems} />
                </div>
            </div>
        </div>
    );
}