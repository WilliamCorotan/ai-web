'use client';

import { SyntheticEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputLabel from '@/components/InputLabel';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function ImageUploader()
{
    const { handleSubmit } = useForm();
    const [source, setSource] = useState<File|null>(null);

    const onUploadImage = (event : SyntheticEvent) => {
        const target = event.target as HTMLInputElement;
        const file = target.files?.[0];
        if (file) {
            setSource(file);
        }
    }
    
    const test = () => { 
        console.log('this is source >>', source)
    }

    return (
        <form action="" className="h-full w-full">
            <div className='image-container h-full w-full'>                
                <div className="text-sm text-gray-600 h-full grid place-items-center w-full">
                    {source ? <Image alt="bird" src={URL.createObjectURL(source)} width={300} height={300}/> : null }
                    <InputLabel
                        forInput="image"
                        className="relative cursor-pointer rounded-xl h-3/5 w-full px-16 py-21 grid place-items-center border-2 border-zinc-400 border-dashed bg-white font-medium text-secondary focus-within:outline-none focus-within:ring-2 focus-within:ring-secondary focus-within:ring-offset-2 hover:text-primary transition-all"
                    >
                        <div>
                        <CloudArrowUpIcon />
                        <span>
                            Upload a
                            file
                        </span>
                        <input
                            required
                            id="image"
                            name="image"
                            type="file"
                            className="sr-only"
                            onChange={onUploadImage}
                        />
                        </div>
                    </InputLabel>
                </div>
                {/* <p className="text-xs text-gray-500">
                    PNG, JPG
                </p> */}
            </div>
        </form>
    ); 
}